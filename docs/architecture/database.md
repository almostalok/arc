# ARC Database Architecture & Schema Specification

ARC utilizes **PostgreSQL 16** with a fully normalized 60+ entity schema defined in `prisma/schema.prisma`.

---

## 1. Domain Graph

```text
Institution (Tenant Root)
  ├── Campus
  ├── Department
  │     ├── Program
  │     │     └── Batch
  │     │           └── Section
  │     ├── Faculty
  │     │     └── CourseOffering
  │     │           ├── AttendanceSession -> AttendanceRecord
  │     │           └── Enrollment
  │     └── Student
  │           ├── StudentSkill -> SkillEvidence
  │           ├── ProjectMember -> Project
  │           ├── Experience
  │           ├── StudentCertification
  │           ├── Mark -> Examination
  │           ├── Resume
  │           └── Application -> Drive -> Company
  │                 ├── Interview -> Scorecard
  │                 └── Offer
  └── Company
        ├── Recruiter
        └── PlacementDrive
```

---

## 2. Multi-Tenancy Isolation
Every query enforces tenant isolation at the service level using `institutionId` and composite indexes:
- `@@index([institutionId, departmentId, currentSemester])`
- `@@index([institutionId, email])`
- `@@unique([institutionId, code])`
