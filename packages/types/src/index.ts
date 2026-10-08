// ============================================================================
// ARC Domain Types — Multi-Tenant College Operating System
// Academics. Talent. Careers. One Connected Ecosystem.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. IDENTITY & ACCESS (RBAC & ABAC)
// ----------------------------------------------------------------------------

export type UserRole =
  | 'student'
  | 'faculty'
  | 'hod'
  | 'placement'
  | 'director'
  | 'admin'
  | 'recruiter'
  | 'super_admin';

export type UserStatus = 'ACTIVE' | 'INVITED' | 'SUSPENDED' | 'ARCHIVED';

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  status: UserStatus;
  primaryRole: UserRole;
  institutionId: string;
  campusId?: string;
  departmentId?: string;
  createdAt: string;
  updatedAt: string;
  roles: UserRoleAssignment[];
  profile?: UserProfile;
}

export interface UserProfile {
  id: string;
  userId: string;
  phone?: string;
  designation?: string;
  officeLocation?: string;
  bio?: string;
  linkedInUrl?: string;
  gitHubUrl?: string;
  portfolioUrl?: string;
}

export interface UserRoleAssignment {
  id: string;
  userId: string;
  role: UserRole;
  institutionId: string;
  campusId?: string;
  departmentId?: string;
  programId?: string;
  batchId?: string;
  grantedAt: string;
}

export interface Session {
  id: string;
  userId: string;
  institutionId: string;
  activeRole: UserRole;
  token: string;
  ipAddress: string;
  userAgent: string;
  expiresAt: string;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  actor: string;
  actorId: string;
  actorRole: string;
  action: string;
  resource: string;
  resourceId?: string;
  institutionId: string;
  timestamp: string;
  ipAddress: string;
  status: 'SUCCESS' | 'FLAGGED' | 'DENIED';
  metadata?: Record<string, unknown>;
  previousState?: Record<string, unknown>;
  newState?: Record<string, unknown>;
}

// ----------------------------------------------------------------------------
// 2. MULTI-TENANT INSTITUTION HIERARCHY
// ----------------------------------------------------------------------------

export interface Institution {
  id: string;
  name: string;
  code: string;
  slug: string;
  logoUrl?: string;
  domain: string;
  status: 'ACTIVE' | 'ONBOARDING' | 'MAINTENANCE';
  campuses: Campus[];
  departments: Department[];
  createdAt: string;
}

export interface Campus {
  id: string;
  institutionId: string;
  name: string;
  code: string;
  location: string;
  departments: Department[];
}

export interface Department {
  id: string;
  institutionId: string;
  campusId?: string;
  name: string;
  code: string; // e.g. "CSE", "IT", "ECE"
  hodName?: string;
  hodEmail?: string;
  facultyCount: number;
  studentCount: number;
  programs: Program[];
}

export interface Program {
  id: string;
  departmentId: string;
  institutionId: string;
  name: string; // e.g. "B.Tech Computer Science & Engineering"
  code: string;
  degreeType: 'BACHELOR' | 'MASTER' | 'DOCTORAL' | 'DIPLOMA';
  durationYears: number;
  totalSemesters: number;
  batches: Batch[];
}

export interface Batch {
  id: string;
  programId: string;
  institutionId: string;
  name: string; // e.g. "2023 — 2027"
  graduationYear: number;
  sections: Section[];
}

export interface Section {
  id: string;
  batchId: string;
  institutionId: string;
  name: string; // e.g. "Section A"
  studentCount: number;
}

// ----------------------------------------------------------------------------
// 3. STUDENT GRAPH & ACADEMIC ENTITIES
// ----------------------------------------------------------------------------

export type StudentStatus = 'Active' | 'At Risk' | 'Interning' | 'Placed' | 'Graduated';

export interface Student {
  id: string;
  userId?: string;
  institutionId?: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  arcId: string;
  rollNumber: string;
  department: string;
  departmentCode: string;
  batch: string;
  graduationYear?: number;
  currentSemester: number;
  section: string;
  cgpa: number;
  backlogs?: number;
  attendancePercentage: number;
  creditsEarned: number;
  creditsTotal: number;
  status: StudentStatus;
  careerReadinessScore: number;
  scores: {
    academics: number;
    coding: number;
    development: number;
    communication: number;
    leadership: number;
    career: number;
  };
  evidence: {
    codingProblems: number;
    codingRating: number;
    codingPlatform: string;
    githubRepos: number;
    githubContributions: number;
    projectsCount: number;
    internshipsCount: number;
    leadershipRoles: number;
    eventsOrganized: number;
  };
  skills: StudentSkill[];
  externalProfiles: {
    github: string;
    linkedin: string;
    leetcode: string;
    portfolio?: string;
  };
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
  applications: StudentApplication[];
  semesterGpa: SemesterResult[];
  attendanceBySubject: SubjectAttendance[];
}

export interface SemesterResult {
  semester: number;
  gpa: number;
  credits: number;
  backlogs: number;
  academicYear?: string;
}

export interface SubjectAttendance {
  subjectCode: string;
  subjectName: string;
  attended: number;
  total: number;
  percentage: number;
  faculty: string;
  status: 'Safe' | 'Warning' | 'Critical';
  classesCanMiss?: number;
}

export interface Course {
  id: string;
  institutionId: string;
  departmentId: string;
  code: string;
  name: string;
  credits: number;
  semester: number;
  type: 'CORE' | 'ELECTIVE' | 'LAB' | 'PROJECT';
  syllabusUrl?: string;
}

export interface AttendanceSession {
  id: string;
  institutionId: string;
  subjectCode: string;
  subjectName: string;
  departmentCode: string;
  section: string;
  date: string;
  sessionNumber: number;
  facultyId: string;
  facultyName: string;
  totalPresent: number;
  totalAbsent: number;
  records: AttendanceRecord[];
}

export interface AttendanceRecord {
  studentId: string;
  studentName: string;
  rollNumber: string;
  present: boolean;
  remarks?: string;
}

export interface Examination {
  id: string;
  institutionId: string;
  name: string;
  type: 'MID_TERM' | 'END_SEM' | 'INTERNAL_ASSESSMENT' | 'PRACTICAL';
  semester: number;
  academicYear: string;
  startDate: string;
  endDate: string;
}

export interface MarkRecord {
  id: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  subjectCode: string;
  examId: string;
  internalMarks: number;
  externalMarks: number;
  totalMarks: number;
  maxMarks: number;
  grade: string;
  passed: boolean;
}

export interface ResourceItem {
  id: string;
  institutionId?: string;
  title: string;
  category: 'Notes' | 'Assignments' | 'Previous Papers' | 'Lab Manuals' | 'Videos' | 'Books';
  subject: string;
  subjectCode: string;
  semester: number;
  facultyName: string;
  fileSize: string;
  uploadDate: string;
  downloadCount: number;
  downloadUrl?: string;
}

// ----------------------------------------------------------------------------
// 4. SKILLS, TALENT GRAPH & ARC PULSE
// ----------------------------------------------------------------------------

export type SkillProficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface StudentSkill {
  id?: string;
  category: string;
  name: string;
  level: SkillProficiency;
  verified: boolean;
  confidenceScore?: number; // 0-100 derived from evidence
  evidenceCount?: number;
  evidenceItems?: SkillEvidence[];
}

export interface SkillEvidence {
  id: string;
  type: 'PROJECT' | 'EXPERIENCE' | 'CERTIFICATION' | 'ASSESSMENT' | 'GITHUB' | 'FACULTY_VERIFICATION';
  referenceId: string;
  title: string;
  summary: string;
  url?: string;
  verifiedAt?: string;
  verifiedBy?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  stars?: number;
  verified?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: 'Internship' | 'Full-time' | 'Fellowship' | 'Apprenticeship';
  startDate: string;
  endDate: string;
  description: string;
  skillsUsed: string[];
  verified: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl: string;
  verified: boolean;
  badgeUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competitive Programming' | 'Research' | 'Leadership' | 'Sports';
  rankOrPosition: string;
  event: string;
  date: string;
  verified: boolean;
}

// ----------------------------------------------------------------------------
// 5. RESUME ENGINE
// ----------------------------------------------------------------------------

export interface Resume {
  id: string;
  studentId: string;
  title: string;
  template: 'TECHNICAL' | 'ACADEMIC' | 'EXECUTIVE' | 'MINIMAL';
  summary: string;
  isMaster: boolean;
  sectionsOrder: string[];
  sectionsVisibility: Record<string, boolean>;
  customSections?: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

// ----------------------------------------------------------------------------
// 6. PLACEMENT COMMAND CENTER & RECRUITER CRM
// ----------------------------------------------------------------------------

export interface Company {
  id: string;
  institutionId?: string;
  name: string;
  logo: string;
  industry: string;
  tier: 'Tier 1' | 'Tier 2' | 'Super Dream' | 'Dream';
  openPositions: number;
  totalApplications: number;
  shortlistedCount: number;
  selectedCount: number;
  averagePackageLPA: number;
  highestPackageLPA: number;
  location: string;
  website: string;
  activeDrives: number;
  pastHires: number;
  contactPerson: string;
  contactEmail: string;
}

export type ApplicationStage =
  | 'Eligible'
  | 'Applied'
  | 'Shortlisted'
  | 'Online Assessment'
  | 'Technical Round'
  | 'HR Round'
  | 'Selected'
  | 'Rejected';

export interface PlacementDrive {
  id: string;
  institutionId?: string;
  companyId: string;
  companyName: string;
  companyLogo: string;
  role: string;
  jobType: 'Internship' | 'Full-time' | 'Intern + PPO';
  packageLPA: number;
  stipendPerMonth?: number;
  eligibleDepartments: string[];
  minCgpa: number;
  maxBacklogs: number;
  minAttendance?: number;
  graduationYear?: number;
  requiredSkills?: string[];
  eligibleStudentsCount: number;
  appliedCount: number;
  shortlistedCount: number;
  interviewedCount: number;
  selectedCount: number;
  status: 'Upcoming' | 'Active' | 'Under Evaluation' | 'Completed';
  announcementDate: string;
  deadlineDate: string;
  rounds: {
    name: string;
    date: string;
    status: 'Completed' | 'In Progress' | 'Upcoming';
  }[];
  description: string;
  requirements: string[];
}

export interface EligibilityResult {
  isEligible: boolean;
  score: number; // 0-100 overall match
  criteriaResults: {
    criterion: string;
    required: string;
    studentValue: string;
    passed: boolean;
    reason?: string;
  }[];
  missingSkills: string[];
  matchedSkills: string[];
  unmetCriteriaCount: number;
}

export interface StudentApplication {
  id: string;
  studentId: string;
  studentName: string;
  studentArcId: string;
  studentDepartment: string;
  studentCgpa: number;
  driveId: string;
  companyName: string;
  companyLogo: string;
  role: string;
  packageLPA: number;
  appliedDate: string;
  currentStage: ApplicationStage;
  stageDate: string;
  timeline: {
    stage: ApplicationStage;
    date: string;
    completed: boolean;
    notes?: string;
  }[];
}

export interface InterviewSchedule {
  id: string;
  applicationId: string;
  driveId: string;
  studentId: string;
  studentName: string;
  roundName: string;
  scheduledTime: string;
  durationMinutes: number;
  interviewerName: string;
  meetingLink?: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
  scorecard?: InterviewScorecard;
}

export interface InterviewScorecard {
  technicalRating: number; // 1-5
  communicationRating: number; // 1-5
  problemSolvingRating: number; // 1-5
  cultureFitRating: number; // 1-5
  overallRecommendation: 'STRONG_HIRE' | 'HIRE' | 'LEAN_HIRE' | 'REJECT';
  feedbackNotes: string;
}

export interface OfferRecord {
  id: string;
  applicationId: string;
  studentId: string;
  studentName: string;
  companyName: string;
  role: string;
  packageLPA: number;
  issueDate: string;
  acceptanceDeadline: string;
  status: 'OFFERED' | 'ACCEPTED' | 'DECLINED' | 'WITHDRAWN';
}

// ----------------------------------------------------------------------------
// 7. NOTIFICATIONS & COMMUNICATION
// ----------------------------------------------------------------------------

export interface Notice {
  id: string;
  institutionId?: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  authorRole: string;
  category: 'Academic' | 'Placement' | 'Events' | 'Administration' | 'Urgent';
  date: string;
  hasAttachment: boolean;
  attachmentName?: string;
  pinned?: boolean;
}

export interface InAppNotification {
  id: string;
  userId: string;
  title: string;
  message: string;
  category: 'ACADEMIC' | 'PLACEMENT' | 'SYSTEM' | 'SECURITY';
  read: boolean;
  createdAt: string;
  linkUrl?: string;
}

// ----------------------------------------------------------------------------
// 8. STANDARD API CONTRACT ENVELOPES (RFC-7807 & Domain Standard)
// ----------------------------------------------------------------------------

export interface ApiResponse<T> {
  data: T;
  meta: ResponseMeta;
  error: null;
}

export interface ApiErrorResponse {
  data: null;
  meta: ResponseMeta;
  error: {
    code: string;
    message: string;
    details?: unknown;
    timestamp: string;
  };
}

export interface ResponseMeta {
  timestamp: string;
  requestId: string;
  pagination?: PaginationMeta;
  tenantId?: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ApiFilterParams {
  search?: string;
  department?: string;
  batch?: string;
  status?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
