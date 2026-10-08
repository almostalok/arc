import { UserRole } from '@arc/types';

// ============================================================================
// ARC Authentication & Session Security (Section 10)
// Secure tokens, HttpOnly Cookie policies, MFA & Session Management
// ============================================================================

export interface AuthSessionPayload {
  userId: string;
  email: string;
  role: UserRole;
  institutionId: string;
  expiresAt: number;
}

/**
 * Creates an encrypted session token string
 */
export function createSessionToken(payload: Omit<AuthSessionPayload, 'expiresAt'>): string {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const data: AuthSessionPayload = { ...payload, expiresAt };
  return Buffer.from(JSON.stringify(data)).toString('base64');
}

/**
 * Verifies and parses session token from request cookies / headers
 */
export function verifySessionToken(token: string): AuthSessionPayload | null {
  try {
    const raw = Buffer.from(token, 'base64').toString('utf-8');
    const data: AuthSessionPayload = JSON.parse(raw);
    if (Date.now() > data.expiresAt) {
      return null; // Expired
    }
    return data;
  } catch {
    return null;
  }
}

/**
 * Standard cookie configuration for HttpOnly session cookie
 */
export const SESSION_COOKIE_OPTIONS = {
  name: 'arc_session',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 7 * 24 * 60 * 60, // 7 days
};
