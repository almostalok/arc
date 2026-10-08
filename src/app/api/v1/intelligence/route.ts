import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents, mockDrives } from '@/data/mockData';
import { evaluateEligibility, calculateTalentScore } from '@arc/utils';

export async function POST(req: NextRequest) {
  try {
    const { query, studentId = 's-1042', driveId } = await req.json();

    const student = mockStudents.find((s) => s.id === studentId || s.arcId === studentId);
    if (!student) {
      return errorResponse('NOT_FOUND', `Student ${studentId} not found`, 404);
    }

    const talentMetrics = calculateTalentScore(student);

    // 1. If driveId is provided, generate explainable match / skill gap analysis
    if (driveId) {
      const drive = mockDrives.find((d) => d.id === driveId);
      if (drive) {
        const evalResult = evaluateEligibility(student, drive);
        return successResponse({
          type: 'OPPORTUNITY_MATCH',
          role: drive.role,
          company: drive.companyName,
          matchScore: evalResult.score,
          isEligible: evalResult.isEligible,
          matchedSkills: evalResult.matchedSkills,
          missingSkills: evalResult.missingSkills,
          explanation: evalResult.isEligible
            ? `Student satisfies all mandatory institutional requirements (CGPA: ${student.cgpa} ≥ ${drive.minCgpa}, Backlogs: ${student.backlogs ?? 0} ≤ ${drive.maxBacklogs}, Branch: ${student.departmentCode}). Matching skills: ${evalResult.matchedSkills.join(', ')}.`
            : `Student does not satisfy requirements: ${evalResult.criteriaResults.filter((c) => !c.passed).map((c) => c.reason).join('; ')}.`,
          recommendations: evalResult.missingSkills.map(
            (sk) => `Bridge gap in ${sk} via targeted coursework or open-source contribution.`
          ),
        });
      }
    }

    // 2. Natural language query reasoning over institutional data
    const normalizedQuery = (query || '').toLowerCase();
    let answer = '';
    const recommendations: string[] = [];

    if (normalizedQuery.includes('attendance')) {
      answer = `Your institutional attendance stands at ${student.attendancePercentage}%. All subjects are currently above the mandatory 75% regulatory threshold. Lowest is Database Systems at 82.5%.`;
      recommendations.push('You can miss up to 2 classes in DBMS without dropping below 75%.');
    } else if (normalizedQuery.includes('placement') || normalizedQuery.includes('job') || normalizedQuery.includes('drive')) {
      const eligibleDrives = mockDrives.filter((d) => evaluateEligibility(student, d).isEligible);
      answer = `You are eligible for ${eligibleDrives.length} out of ${mockDrives.length} active placement drives, including Google (SWE) and Razorpay (Platform Engineer).`;
      recommendations.push('Complete application for Google SWE before the deadline on 14 Oct.');
    } else if (normalizedQuery.includes('talent') || normalizedQuery.includes('pulse') || normalizedQuery.includes('rank')) {
      answer = `Your Talent Pulse Composite Score is ${talentMetrics.overallScore}/100 (ranked top ${100 - talentMetrics.percentileRank}% in Department of CSE). Strongest pillar: Coding (${talentMetrics.scores.coding}/100) and Development (${talentMetrics.scores.development}/100).`;
      recommendations.push('Earn one cloud credential (e.g. AWS SAA) to raise your Certifications pillar from 72 to 90.');
    } else {
      answer = `Institutional identity graph verified for ${student.name} (${student.arcId}). CGPA: ${student.cgpa}, Career Readiness: ${student.careerReadinessScore}%, Active Backlogs: 0.`;
      recommendations.push('Review open placement opportunities in Placement Command Center.');
      recommendations.push('Verify attendance record before mid-term examination freeze.');
    }

    return successResponse({
      type: 'INTELLIGENCE_INSIGHT',
      answer,
      evidence: [
        `Verified CGPA: ${student.cgpa}`,
        `Attendance: ${student.attendancePercentage}%`,
        `LeetCode: 1842 rating (${student.evidence.codingProblems} solved)`,
        `GitHub: 1480 contributions across ${student.evidence.githubRepos} repos`,
      ],
      recommendations,
    });
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Intelligence calculation failed', 500);
  }
}
