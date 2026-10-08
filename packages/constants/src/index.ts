// ============================================================================
// ARC System Constants — Institutional Truth & Operating Parameters
// ============================================================================

export const APP_NAME = 'ARC';
export const APP_TAGLINE = 'The Operating System for Modern Colleges';

export const USER_ROLES = [
  'student',
  'faculty',
  'hod',
  'placement',
  'director',
  'admin',
  'recruiter',
  'super_admin',
] as const;

export const ROLE_LABELS: Record<string, string> = {
  student: 'Student OS',
  faculty: 'Faculty Console',
  hod: 'Department Head (HOD)',
  placement: 'Placement Office',
  director: 'Executive Directorate',
  admin: 'Institution Admin',
  recruiter: 'Recruiter Portal',
  super_admin: 'Platform Super Admin',
};

// ----------------------------------------------------------------------------
// Institutional Academic Thresholds
// ----------------------------------------------------------------------------

export const ATTENDANCE_POLICY = {
  MINIMUM_REQUIRED_PERCENTAGE: 75.0, // Standard collegiate minimum
  WARNING_THRESHOLD_PERCENTAGE: 80.0, // Early caution zone
  HONORS_THRESHOLD_PERCENTAGE: 85.0,  // Deans list / elite requirement
  CRITICAL_THRESHOLD_PERCENTAGE: 65.0, // Immediate debarment risk
} as const;

export const CGPA_THRESHOLDS = {
  FIRST_CLASS_DISTINCTION: 8.5,
  FIRST_CLASS: 7.0,
  SECOND_CLASS: 6.0,
  PASS_CRITERIA: 5.0,
} as const;

// ----------------------------------------------------------------------------
// Placement Constants & Pipelines
// ----------------------------------------------------------------------------

export const APPLICATION_STAGES = [
  'Eligible',
  'Applied',
  'Shortlisted',
  'Online Assessment',
  'Technical Round',
  'HR Round',
  'Selected',
  'Rejected',
] as const;

export const PLACEMENT_TIERS = [
  'Super Dream', // >= 20 LPA
  'Dream',       // 10 - 20 LPA
  'Tier 1',      // 6 - 10 LPA
  'Tier 2',      // < 6 LPA
] as const;

export const COMPANY_INDUSTRIES = [
  'Technology & Software',
  'Fintech & Banking',
  'E-Commerce & Retail',
  'Automotive & EV',
  'Consulting & Analytics',
  'Semiconductors & VLSI',
  'Healthcare & Biotech',
  'Edtech',
] as const;

// ----------------------------------------------------------------------------
// Talent Pulse Scoring Weights (Explainable Model, Rule 28 & 30)
// ----------------------------------------------------------------------------

export const TALENT_SCORE_WEIGHTS = {
  ACADEMICS: 0.20,      // CGPA, regularity, no backlogs
  CODING: 0.25,         // LeetCode/Codeforces rating + verified solved count
  DEVELOPMENT: 0.25,    // GitHub contributions + verified production projects
  EXPERIENCE: 0.15,     // Verified internships + fellowships
  COMMUNICATION: 0.08,  // Soft skills assessments + event leadership
  CERTIFICATIONS: 0.07, // AWS, Google Cloud, CKA, DeepLearning.AI
} as const;

// ----------------------------------------------------------------------------
// Error Codes (Section 78)
// ----------------------------------------------------------------------------

export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  RATE_LIMITED: 'RATE_LIMITED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  TENANT_MISMATCH: 'TENANT_MISMATCH',
  INELIGIBLE_APPLICATION: 'INELIGIBLE_APPLICATION',
} as const;

// ----------------------------------------------------------------------------
// Pagination Defaults
// ----------------------------------------------------------------------------

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;
