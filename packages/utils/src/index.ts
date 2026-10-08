import { Student, PlacementDrive, EligibilityResult, SubjectAttendance } from '@arc/types';
import { ATTENDANCE_POLICY, TALENT_SCORE_WEIGHTS } from '@arc/constants';

// ============================================================================
// ARC Domain Engines & Computational Utilities
// Real Explainable Logic — Zero Fake / Black-Box Calculations
// ============================================================================

// ----------------------------------------------------------------------------
// 1. ELIGIBILITY ENGINE (Section 36)
// Deterministic, explainable rule-based evaluation of a student for a job drive
// ----------------------------------------------------------------------------

export function evaluateEligibility(
  student: Student,
  drive: PlacementDrive
): EligibilityResult {
  const criteriaResults: EligibilityResult['criteriaResults'] = [];
  const missingSkills: string[] = [];
  const matchedSkills: string[] = [];

  // 1. CGPA Criterion
  const cgpaPassed = student.cgpa >= drive.minCgpa;
  criteriaResults.push({
    criterion: 'Minimum CGPA',
    required: `≥ ${drive.minCgpa.toFixed(2)}`,
    studentValue: student.cgpa.toFixed(2),
    passed: cgpaPassed,
    reason: cgpaPassed
      ? 'Meets CGPA threshold requirement'
      : `CGPA (${student.cgpa.toFixed(2)}) is below required minimum of ${drive.minCgpa.toFixed(2)}`,
  });

  // 2. Active Backlogs Criterion
  const studentBacklogs = student.backlogs ?? 0;
  const backlogsPassed = studentBacklogs <= drive.maxBacklogs;
  criteriaResults.push({
    criterion: 'Active Backlogs',
    required: `≤ ${drive.maxBacklogs}`,
    studentValue: `${studentBacklogs} backlogs`,
    passed: backlogsPassed,
    reason: backlogsPassed
      ? 'Meets backlog limit'
      : `Student has ${studentBacklogs} active backlogs (maximum allowed is ${drive.maxBacklogs})`,
  });

  // 3. Department Criterion
  const deptPassed =
    drive.eligibleDepartments.includes(student.departmentCode) ||
    drive.eligibleDepartments.includes(student.department);
  criteriaResults.push({
    criterion: 'Department / Branch',
    required: drive.eligibleDepartments.join(', '),
    studentValue: student.departmentCode,
    passed: deptPassed,
    reason: deptPassed
      ? 'Branch is in eligible list'
      : `Branch ${student.departmentCode} is not in eligible departments list`,
  });

  // 4. Attendance Criterion (if specified)
  const minAttendance = drive.minAttendance ?? ATTENDANCE_POLICY.MINIMUM_REQUIRED_PERCENTAGE;
  const attendancePassed = student.attendancePercentage >= minAttendance;
  criteriaResults.push({
    criterion: 'Institutional Attendance',
    required: `≥ ${minAttendance}%`,
    studentValue: `${student.attendancePercentage.toFixed(1)}%`,
    passed: attendancePassed,
    reason: attendancePassed
      ? 'Satisfies institutional attendance criteria'
      : `Attendance (${student.attendancePercentage.toFixed(1)}%) is below drive requirement of ${minAttendance}%`,
  });

  // 5. Skill Match Evaluation
  if (drive.requiredSkills && drive.requiredSkills.length > 0) {
    const studentSkillNames = new Set(
      student.skills.map((s) => s.name.toLowerCase().trim())
    );
    for (const reqSkill of drive.requiredSkills) {
      if (studentSkillNames.has(reqSkill.toLowerCase().trim())) {
        matchedSkills.push(reqSkill);
      } else {
        missingSkills.push(reqSkill);
      }
    }
  }

  const unmetCriteriaCount = criteriaResults.filter((c) => !c.passed).length;
  const isEligible = unmetCriteriaCount === 0;

  // Calculate composite match score (0-100)
  let score = 0;
  if (isEligible) {
    score = 70; // baseline eligible
    if (drive.requiredSkills && drive.requiredSkills.length > 0) {
      const skillRatio = matchedSkills.length / drive.requiredSkills.length;
      score += Math.round(skillRatio * 30);
    } else {
      score += 30;
    }
  } else {
    // Partial score for transparency
    const criteriaPassRate = (criteriaResults.length - unmetCriteriaCount) / criteriaResults.length;
    score = Math.round(criteriaPassRate * 50);
  }

  return {
    isEligible,
    score,
    criteriaResults,
    missingSkills,
    matchedSkills,
    unmetCriteriaCount,
  };
}

// ----------------------------------------------------------------------------
// 2. ATTENDANCE ENGINE (Section 23)
// "How many more classes can I safely miss?" calculation
// ----------------------------------------------------------------------------

export function calculateAttendanceMetrics(
  attended: number,
  total: number,
  targetPercentage = ATTENDANCE_POLICY.MINIMUM_REQUIRED_PERCENTAGE
): {
  percentage: number;
  classesCanMiss: number;
  classesNeededToRecover: number;
  status: 'Safe' | 'Warning' | 'Critical';
} {
  if (total === 0) {
    return {
      percentage: 100,
      classesCanMiss: 0,
      classesNeededToRecover: 0,
      status: 'Safe',
    };
  }

  const percentage = Number(((attended / total) * 100).toFixed(1));
  const targetFraction = targetPercentage / 100;

  if (percentage >= targetPercentage) {
    // Safe zone: attended / (total + x) >= targetFraction
    // attended >= targetFraction * total + targetFraction * x
    // x <= (attended - targetFraction * total) / targetFraction
    const classesCanMiss = Math.max(
      0,
      Math.floor((attended - targetFraction * total) / targetFraction)
    );
    const status = percentage >= ATTENDANCE_POLICY.HONORS_THRESHOLD_PERCENTAGE ? 'Safe' : 'Warning';
    return {
      percentage,
      classesCanMiss,
      classesNeededToRecover: 0,
      status,
    };
  } else {
    // Under requirement: (attended + y) / (total + y) >= targetFraction
    // attended + y >= targetFraction * total + targetFraction * y
    // y * (1 - targetFraction) >= targetFraction * total - attended
    // y = ceil((targetFraction * total - attended) / (1 - targetFraction))
    const needed = Math.ceil(
      (targetFraction * total - attended) / (1 - targetFraction)
    );
    return {
      percentage,
      classesCanMiss: 0,
      classesNeededToRecover: Math.max(0, needed),
      status: percentage < ATTENDANCE_POLICY.CRITICAL_THRESHOLD_PERCENTAGE ? 'Critical' : 'Warning',
    };
  }
}

// ----------------------------------------------------------------------------
// 3. TALENT PULSE SCORING ENGINE (Section 28 & 30)
// Explainable signals derived directly from verified student evidence
// ----------------------------------------------------------------------------

export function calculateTalentScore(student: Student): {
  overallScore: number;
  scores: {
    academics: number;
    coding: number;
    development: number;
    experience: number;
    communication: number;
    certifications: number;
  };
  percentileRank: number;
} {
  // 1. Academic component (0-100)
  const gpaScore = Math.min(100, (student.cgpa / 10) * 100);
  const backlogPenalty = (student.backlogs ?? 0) * 15;
  const academics = Math.max(0, Math.round(gpaScore - backlogPenalty));

  // 2. Coding component (0-100)
  // Rating baseline (e.g. 1800 rating ~ 90 score) + problem count
  const ratingNormalized = Math.min(60, (student.evidence.codingRating / 2200) * 60);
  const problemNormalized = Math.min(40, (student.evidence.codingProblems / 500) * 40);
  const coding = Math.round(ratingNormalized + problemNormalized);

  // 3. Development component (0-100)
  const repoScore = Math.min(30, (student.evidence.githubRepos / 20) * 30);
  const contribScore = Math.min(35, (student.evidence.githubContributions / 1500) * 35);
  const projectScore = Math.min(35, (student.evidence.projectsCount / 6) * 35);
  const development = Math.round(repoScore + contribScore + projectScore);

  // 4. Experience component (0-100)
  const experience = Math.min(100, student.evidence.internshipsCount * 45 + 10);

  // 5. Communication & Leadership (0-100)
  const communication = Math.min(
    100,
    student.evidence.leadershipRoles * 25 + student.evidence.eventsOrganized * 5 + 40
  );

  // 6. Certifications (0-100)
  const verifiedCerts = student.certifications.filter((c) => c.verified).length;
  const certifications = Math.min(100, verifiedCerts * 35 + 20);

  // Composite weighted score
  const overallScore = Math.round(
    academics * TALENT_SCORE_WEIGHTS.ACADEMICS +
      coding * TALENT_SCORE_WEIGHTS.CODING +
      development * TALENT_SCORE_WEIGHTS.DEVELOPMENT +
      experience * TALENT_SCORE_WEIGHTS.EXPERIENCE +
      communication * TALENT_SCORE_WEIGHTS.COMMUNICATION +
      certifications * TALENT_SCORE_WEIGHTS.CERTIFICATIONS
  );

  // Approximate percentile rank
  const percentileRank = Math.min(99, Math.max(1, Math.round(overallScore * 0.98 + 1)));

  return {
    overallScore,
    scores: {
      academics,
      coding,
      development,
      experience,
      communication,
      certifications,
    },
    percentileRank,
  };
}

// ----------------------------------------------------------------------------
// 4. PROFILE COMPLETENESS ENGINE (Section 43)
// ----------------------------------------------------------------------------

export function calculateProfileCompleteness(student: Student): {
  percentage: number;
  missingItems: Array<{ label: string; actionUrl: string; weight: number }>;
} {
  const missingItems: Array<{ label: string; actionUrl: string; weight: number }> = [];
  let score = 0;

  // Basic info (20)
  if (student.name && student.email && student.rollNumber && student.phone) {
    score += 20;
  } else {
    missingItems.push({ label: 'Complete basic contact details', actionUrl: '/student/profile', weight: 20 });
  }

  // Projects (20)
  if (student.projects.length >= 3) {
    score += 20;
  } else {
    missingItems.push({
      label: `Add ${Math.max(1, 3 - student.projects.length)} more project(s) with live or GitHub links`,
      actionUrl: '/student/profile#projects',
      weight: 20,
    });
  }

  // Skills & Verification (20)
  const verifiedSkills = student.skills.filter((s) => s.verified).length;
  if (verifiedSkills >= 5) {
    score += 20;
  } else {
    missingItems.push({
      label: 'Verify at least 5 key technical skills via projects or credentials',
      actionUrl: '/student/profile#skills',
      weight: 20,
    });
  }

  // External Profiles (20)
  if (student.externalProfiles.github && student.externalProfiles.linkedin) {
    score += 20;
  } else {
    missingItems.push({
      label: 'Link verified GitHub & LinkedIn profiles',
      actionUrl: '/student/profile#links',
      weight: 20,
    });
  }

  // Experience / Internships (10)
  if (student.experiences.length >= 1) {
    score += 10;
  } else {
    missingItems.push({
      label: 'Add internship or industrial training experience',
      actionUrl: '/student/profile#experience',
      weight: 10,
    });
  }

  // Certifications (10)
  if (student.certifications.length >= 1) {
    score += 10;
  } else {
    missingItems.push({
      label: 'Upload verified technical certification credential',
      actionUrl: '/student/profile#certifications',
      weight: 10,
    });
  }

  return {
    percentage: Math.min(100, score),
    missingItems,
  };
}

// ----------------------------------------------------------------------------
// Formatting Utilities
// ----------------------------------------------------------------------------

export function formatCurrencyINR(lpa: number): string {
  return `₹${lpa.toFixed(1)} LPA`;
}

export function formatAttendanceStatus(status: 'Safe' | 'Warning' | 'Critical'): {
  label: string;
  badgeVariant: 'success' | 'warning' | 'danger';
} {
  switch (status) {
    case 'Safe':
      return { label: 'Good Standing', badgeVariant: 'success' };
    case 'Warning':
      return { label: 'Near Threshold', badgeVariant: 'warning' };
    case 'Critical':
      return { label: 'Debarment Risk', badgeVariant: 'danger' };
  }
}
