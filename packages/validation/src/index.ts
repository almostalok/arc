import { z } from 'zod';

// ============================================================================
// ARC Centralized Validation Schemas (Zod)
// Single Source of Validation Truth for Backend APIs & Frontend Forms
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Authentication & Identity
// ----------------------------------------------------------------------------

export const LoginSchema = z.object({
  email: z.string().email('Please enter a valid institutional email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  role: z
    .enum(['student', 'faculty', 'hod', 'placement', 'director', 'admin', 'recruiter'])
    .optional(),
  rememberMe: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export const RegisterUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid institutional email required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['student', 'faculty', 'hod', 'placement', 'director', 'admin', 'recruiter']),
  institutionId: z.string().min(1, 'Institution ID is required'),
  departmentCode: z.string().optional(),
  rollNumber: z.string().optional(),
});

export const MFASetupSchema = z.object({
  code: z.string().length(6, 'Verification code must be 6 digits'),
});

// ----------------------------------------------------------------------------
// 2. Student Profile & Evidence
// ----------------------------------------------------------------------------

export const StudentProfileUpdateSchema = z.object({
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format').optional(),
  bio: z.string().max(500, 'Bio cannot exceed 500 characters').optional(),
  github: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  linkedin: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  leetcode: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  portfolio: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

export const SkillCreateSchema = z.object({
  name: z.string().min(1, 'Skill name is required').max(50),
  category: z.string().min(1, 'Category is required'),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
});

export const ProjectCreateSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(100),
  description: z.string().min(10, 'Description must be at least 10 characters').max(1000),
  techStack: z.array(z.string()).min(1, 'At least one technology required'),
  githubUrl: z.string().url('Must be a valid GitHub URL').optional().or(z.literal('')),
  liveUrl: z.string().url('Must be a valid demo URL').optional().or(z.literal('')),
  featured: z.boolean().default(false),
  metrics: z.string().max(100).optional(),
});

export const ExperienceCreateSchema = z.object({
  role: z.string().min(2, 'Role is required'),
  company: z.string().min(2, 'Company name is required'),
  location: z.string().min(2, 'Location is required'),
  type: z.enum(['Internship', 'Full-time', 'Fellowship', 'Apprenticeship']),
  startDate: z.string().min(4, 'Start date is required'),
  endDate: z.string().min(4, 'End date is required'),
  description: z.string().min(10, 'Description is required'),
  skillsUsed: z.array(z.string()).default([]),
});

export const CertificationCreateSchema = z.object({
  title: z.string().min(3, 'Certification title required'),
  issuer: z.string().min(2, 'Issuing organization required'),
  issueDate: z.string().min(4, 'Issue date required'),
  credentialId: z.string().min(1, 'Credential ID required'),
  verificationUrl: z.string().url('Valid verification URL required'),
});

// ----------------------------------------------------------------------------
// 3. Attendance Recording (Faculty / Admin)
// ----------------------------------------------------------------------------

export const MarkAttendanceRecordSchema = z.object({
  studentId: z.string().min(1),
  rollNumber: z.string().min(1),
  present: z.boolean(),
  remarks: z.string().max(150).optional(),
});

export const AttendanceSessionSubmitSchema = z.object({
  subjectCode: z.string().min(1, 'Subject code is required'),
  subjectName: z.string().min(1, 'Subject name is required'),
  departmentCode: z.string().min(1, 'Department code is required'),
  section: z.string().min(1, 'Section is required'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD'),
  sessionNumber: z.number().int().min(1).max(10),
  records: z.array(MarkAttendanceRecordSchema).min(1, 'Must submit at least one student record'),
});

// ----------------------------------------------------------------------------
// 4. Academic Marks & Grading
// ----------------------------------------------------------------------------

export const MarkEntrySchema = z.object({
  studentId: z.string().min(1),
  subjectCode: z.string().min(1),
  internalMarks: z.number().min(0).max(50),
  externalMarks: z.number().min(0).max(100),
  examId: z.string().min(1),
});

// ----------------------------------------------------------------------------
// 5. Placement & Job Drive Management
// ----------------------------------------------------------------------------

export const CompanyCreateSchema = z.object({
  name: z.string().min(2, 'Company name is required'),
  industry: z.string().min(2, 'Industry is required'),
  tier: z.enum(['Tier 1', 'Tier 2', 'Super Dream', 'Dream']),
  location: z.string().min(2, 'Location is required'),
  website: z.string().url('Valid website required'),
  contactPerson: z.string().min(2, 'Contact person name required'),
  contactEmail: z.string().email('Valid contact email required'),
  averagePackageLPA: z.number().positive('Average package must be positive'),
  highestPackageLPA: z.number().positive('Highest package must be positive'),
});

export const JobDriveCreateSchema = z.object({
  companyId: z.string().min(1, 'Company is required'),
  role: z.string().min(2, 'Job title/role is required'),
  jobType: z.enum(['Internship', 'Full-time', 'Intern + PPO']),
  packageLPA: z.number().positive('Package must be greater than 0'),
  stipendPerMonth: z.number().nonnegative().optional(),
  eligibleDepartments: z.array(z.string()).min(1, 'Select at least one department'),
  minCgpa: z.number().min(0).max(10, 'CGPA must be between 0 and 10'),
  maxBacklogs: z.number().int().min(0),
  minAttendance: z.number().min(0).max(100).default(75),
  deadlineDate: z.string().min(4, 'Deadline date required'),
  description: z.string().min(20, 'Job description must be at least 20 characters'),
  requirements: z.array(z.string()).default([]),
  requiredSkills: z.array(z.string()).default([]),
});

export const ApplyJobSchema = z.object({
  driveId: z.string().min(1, 'Drive ID is required'),
  resumeId: z.string().optional(),
});

export const ApplicationStageUpdateSchema = z.object({
  stage: z.enum([
    'Applied',
    'Shortlisted',
    'Online Assessment',
    'Technical Round',
    'HR Round',
    'Selected',
    'Rejected',
  ]),
  notes: z.string().max(300).optional(),
});

export const InterviewScorecardSchema = z.object({
  technicalRating: z.number().int().min(1).max(5),
  communicationRating: z.number().int().min(1).max(5),
  problemSolvingRating: z.number().int().min(1).max(5),
  cultureFitRating: z.number().int().min(1).max(5),
  overallRecommendation: z.enum(['STRONG_HIRE', 'HIRE', 'LEAN_HIRE', 'REJECT']),
  feedbackNotes: z.string().min(10, 'Detailed feedback notes required'),
});

export const OfferCreateSchema = z.object({
  applicationId: z.string().min(1),
  packageLPA: z.number().positive(),
  issueDate: z.string(),
  acceptanceDeadline: z.string(),
});

// ----------------------------------------------------------------------------
// 6. Resume Engine
// ----------------------------------------------------------------------------

export const ResumeSaveSchema = z.object({
  title: z.string().min(1, 'Resume title required').max(60),
  template: z.enum(['TECHNICAL', 'ACADEMIC', 'EXECUTIVE', 'MINIMAL']),
  summary: z.string().max(800),
  sectionsOrder: z.array(z.string()),
  sectionsVisibility: z.record(z.string(), z.boolean()),
});
