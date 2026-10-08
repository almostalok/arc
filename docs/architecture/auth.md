# ARC Authentication & Security Architecture

---

## 1. Authentication Mechanics
- **Session Tokens**: Cryptographically signed tokens stored in secure, `HttpOnly`, `SameSite=Lax` cookies.
- **MFA / TOTP**: Standard RFC 6238 time-based one-time password verification for administrators and placement officers.
- **Rate Limiting**: Redis token-bucket rate limiter defending against brute-force login attacks.

---

## 2. Authorization (RBAC + ABAC)
Access control is implemented in `@arc/permissions`:
- **RBAC**: 8 distinct institutional roles (`student`, `faculty`, `hod`, `placement`, `director`, `admin`, `recruiter`, `super_admin`).
- **ABAC Policy Checks**:
  1. Multi-Tenant isolation: `user.institutionId === resource.institutionId`.
  2. Student self-ownership: A student can edit only their own resume, skills, and profile.
  3. Faculty course scoping: Faculty can mark attendance only for sections they are assigned to teach.
  4. HOD departmental scoping: Department heads can approve curriculum only within their department code.
