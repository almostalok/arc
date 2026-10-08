import { UserRole } from '@arc/types';

// ============================================================================
// ARC Centralized Authorization Engine (RBAC + ABAC)
// Section 11: Granular access control based on Roles, Institutional Scope, and Resource Attributes
// ============================================================================

export type Permission =
  // Student domain
  | 'student:profile:read'
  | 'student:profile:write'
  | 'student:attendance:read'
  | 'student:academics:read'
  | 'student:application:create'
  | 'student:resume:write'
  // Faculty domain
  | 'faculty:classes:read'
  | 'faculty:attendance:record'
  | 'faculty:marks:write'
  | 'faculty:resources:upload'
  // HOD domain
  | 'hod:department:read'
  | 'hod:faculty:manage'
  | 'hod:academics:approve'
  | 'hod:reports:export'
  // Placement domain
  | 'placement:company:manage'
  | 'placement:job:manage'
  | 'placement:candidate:shortlist'
  | 'placement:interview:schedule'
  | 'placement:offer:release'
  | 'placement:analytics:read'
  // Recruiter domain
  | 'recruiter:jobs:read'
  | 'recruiter:candidates:read'
  | 'recruiter:interview:feedback'
  | 'recruiter:offer:manage'
  // Admin & Directorate domain
  | 'institution:overview:read'
  | 'institution:config:manage'
  | 'institution:users:manage'
  | 'institution:audit:read'
  | 'institution:bulk_import:execute';

// RBAC Baseline Role Matrix
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  student: [
    'student:profile:read',
    'student:profile:write',
    'student:attendance:read',
    'student:academics:read',
    'student:application:create',
    'student:resume:write',
  ],
  faculty: [
    'faculty:classes:read',
    'faculty:attendance:record',
    'faculty:marks:write',
    'faculty:resources:upload',
    'student:profile:read',
  ],
  hod: [
    'hod:department:read',
    'hod:faculty:manage',
    'hod:academics:approve',
    'hod:reports:export',
    'faculty:classes:read',
    'faculty:attendance:record',
    'faculty:marks:write',
    'student:profile:read',
  ],
  placement: [
    'placement:company:manage',
    'placement:job:manage',
    'placement:candidate:shortlist',
    'placement:interview:schedule',
    'placement:offer:release',
    'placement:analytics:read',
    'student:profile:read',
  ],
  recruiter: [
    'recruiter:jobs:read',
    'recruiter:candidates:read',
    'recruiter:interview:feedback',
    'recruiter:offer:manage',
  ],
  director: [
    'institution:overview:read',
    'hod:department:read',
    'placement:analytics:read',
    'institution:audit:read',
    'student:profile:read',
  ],
  admin: [
    'institution:overview:read',
    'institution:config:manage',
    'institution:users:manage',
    'institution:audit:read',
    'institution:bulk_import:execute',
    'hod:department:read',
    'placement:analytics:read',
    'faculty:classes:read',
    'student:profile:read',
  ],
  super_admin: [
    'institution:overview:read',
    'institution:config:manage',
    'institution:users:manage',
    'institution:audit:read',
    'institution:bulk_import:execute',
    'hod:department:read',
    'hod:faculty:manage',
    'hod:academics:approve',
    'hod:reports:export',
    'placement:company:manage',
    'placement:job:manage',
    'placement:candidate:shortlist',
    'placement:interview:schedule',
    'placement:offer:release',
    'placement:analytics:read',
    'faculty:classes:read',
    'faculty:attendance:record',
    'faculty:marks:write',
    'faculty:resources:upload',
    'student:profile:read',
    'student:profile:write',
    'student:attendance:read',
    'student:academics:read',
    'student:application:create',
    'student:resume:write',
    'recruiter:jobs:read',
    'recruiter:candidates:read',
    'recruiter:interview:feedback',
    'recruiter:offer:manage',
  ],
};

export interface ABACContext {
  userInstitutionId: string;
  resourceInstitutionId?: string;
  userDepartmentCode?: string;
  resourceDepartmentCode?: string;
  userId?: string;
  resourceOwnerId?: string;
}

/**
 * Checks if a user has permission to perform an action using RBAC + ABAC validation
 */
export function hasPermission(
  role: UserRole,
  permission: Permission,
  abac?: ABACContext
): boolean {
  // 1. RBAC check
  const allowedPermissions = ROLE_PERMISSIONS[role] || [];
  if (!allowedPermissions.includes(permission)) {
    return false;
  }

  // 2. ABAC Multi-tenancy check
  if (abac) {
    // Institution boundary check
    if (abac.resourceInstitutionId && abac.userInstitutionId !== abac.resourceInstitutionId) {
      return false; // Cross-tenant boundary violation
    }

    // Student self-ownership check for profile/resume edits
    if (
      role === 'student' &&
      (permission === 'student:profile:write' || permission === 'student:resume:write')
    ) {
      if (abac.resourceOwnerId && abac.userId && abac.resourceOwnerId !== abac.userId) {
        return false; // Cannot edit another student's profile
      }
    }

    // HOD departmental boundary check
    if (role === 'hod' && permission.startsWith('hod:')) {
      if (
        abac.resourceDepartmentCode &&
        abac.userDepartmentCode &&
        abac.resourceDepartmentCode !== abac.userDepartmentCode
      ) {
        return false; // Cannot manage another department
      }
    }
  }

  return true;
}
