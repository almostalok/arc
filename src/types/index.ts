export type UserRole = 'student' | 'faculty' | 'hod' | 'placement' | 'director' | 'admin';

export interface Student {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  arcId: string;
  rollNumber: string;
  department: string;
  departmentCode: string;
  batch: string;
  currentSemester: number;
  section: string;
  cgpa: number;
  backlogs?: number;
  attendancePercentage: number;
  creditsEarned: number;
  creditsTotal: number;
  institutionId?: string;
  graduationYear?: number;
  status: 'Active' | 'At Risk' | 'Interning' | 'Placed';
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
  skills: {
    category: string;
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    verified: boolean;
  }[];
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
  semesterGpa: {
    semester: number;
    gpa: number;
    credits: number;
    backlogs: number;
  }[];
  attendanceBySubject: {
    subjectCode: string;
    subjectName: string;
    attended: number;
    total: number;
    percentage: number;
    faculty: string;
    status: 'Safe' | 'Warning' | 'Critical';
  }[];
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

export interface Company {
  id: string;
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

export type ApplicationStage = 'Applied' | 'Shortlisted' | 'Online Assessment' | 'Technical Round' | 'HR Round' | 'Selected' | 'Rejected';

export interface PlacementDrive {
  id: string;
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

export interface Notice {
  id: string;
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

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Notes' | 'Assignments' | 'Previous Papers' | 'Lab Manuals' | 'Videos' | 'Books';
  subject: string;
  subjectCode: string;
  semester: number;
  facultyName: string;
  fileSize: string;
  uploadDate: string;
  downloadCount: number;
}

export interface AuditLog {
  id: string;
  actor: string;
  actorRole: string;
  action: string;
  target: string;
  timestamp: string;
  ipAddress: string;
  status: 'Success' | 'Flagged';
}

export interface IntegrationStatus {
  id: string;
  name: string;
  category: string;
  connected: boolean;
  lastSynced: string;
  statusText: string;
  icon: string;
}
