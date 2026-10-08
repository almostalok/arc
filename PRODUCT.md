# ARC — Product Truth & Operational Specification

> **The Operating System for Modern Colleges**  
> *One student. One identity. One connected institutional graph.*

---

## 1. Product Purpose

ARC is the unified operating system for institutions of higher education. Unlike legacy campus Enterprise Resource Planning (ERP) systems, fragmented point solutions, and disconnected departmental spreadsheets, ARC establishes a **single source of truth** across academics, student competency, institutional governance, and career outcomes.

### The Core Problem ARC Solves
1. **Information Silos**: Academic records live in an outdated registrar database; placement drives happen in spreadsheets and WhatsApp groups; coding achievements sit unverified on GitHub/LeetCode; student attendance warnings arrive weeks after it is too late to intervene.
2. **Disconnected Student Identity**: A student is treated as an attendance roll number by faculty, a CGPA record by the examination cell, and an unverified resume by recruiters.
3. **Reactive Governance**: Deans and HODs only discover retention risks, low placement rates, and curriculum drift at the end of the semester.

### ARC's Core Thesis
Every student possesses an evolving **institutional identity graph**. When attendance, course credits, verified skills, open-source work, competitive coding ratings, and placement pipelines share a synchronized data model, every stakeholder gains actionable, realtime intelligence.

---

## 2. Target Users & Stakeholder Personas

| Role | Persona Goal | Primary Jobs To Be Done (JTBD) |
| :--- | :--- | :--- |
| **Student** | Academic success & career readiness | Track GPA & attendance threshold alerts; build verified digital identity; discover jobs & interview stages; access course materials. |
| **Faculty** | Instruction, grading & attendance | Log lecture attendance in under 30 seconds; track student continuous evaluation; identify at-risk learners early; share syllabus resources. |
| **Department Head (HOD)** | Departmental performance & curriculum health | Monitor section-wise attendance and GPA distribution; balance faculty workload; assess placement eligibility across batches. |
| **Placement Cell (TPO)** | Recruiter relations & drive management | Manage end-to-end recruitment pipelines (Applied → Assessment → Tech → HR → Offer); coordinate campus drives; analyze CTC trends. |
| **Director / Dean** | Strategic governance & institutional health | High-signal, executive KPI monitoring across all departments; audit compliance; inspect talent benchmarks against national standards. |
| **Recruiter** | Talent discovery & hiring | Search verified competence profiles (LeetCode ratings, GitHub commits, CGPA); filter candidates without resume fraud; track hiring funnels. |
| **Administrator** | Systems integrity & governance | RBAC permission audits, multi-tenant integration syncing (LMS, ERP, Biometric, Email), zero-trust audit ledger review. |

---

## 3. Institutional Context

ARC is engineered specifically for modern technical and multidisciplinary universities (with deep tailoring for Indian higher education institutions like IITs, NITs, and premier autonomous colleges).

- **Academic Cadence**: Semester-based credit systems (CBCS - Choice Based Credit System).
- **Regulatory Thresholds**: Mandatory 75% attendance policy enforced by statutory bodies (e.g., UGC / AICTE) requiring proactive threshold warnings.
- **Placement Cycle**: Structured campus placement seasons (Day 0, Day 1, Day 2+) with stringent tiering (Super Dream, Dream, Core, Mass recruiter).
- **Scale**: Designed to handle 5,000 to 40,000 active students per campus across multiple engineering, science, and management faculties.

---

## 4. Product Vocabulary

To maintain strict domain coherence, ARC uses consistent institutional terminology:

- **Identity Graph**: The immutable student record aggregating verified transcripts, external developer proofs, attendance, and career states.
- **ARC Student (Student OS)**: The student-facing personal workbench and verified credential passport.
- **ARC Pulse (Talent OS)**: The multi-dimensional institutional discovery engine answering *"Who is good at what?"* with evidence-backed competence ratings.
- **ARC Placement (Career OS)**: The recruitment command center managing employer profiles, job drives, round-by-round candidate pipelines, and compensation metrics.
- **ARC Intelligence**: The cross-system contextual AI assistant providing natural-language synthesis over verified institutional records.
- **Readiness Score (CRI)**: 0–100 algorithmic competence index synthesized across 6 axes: Academics, Coding, Development, Communication, Leadership, and Career.
- **Talent Radar**: 6-axis visual vector representation of student strengths.
- **Threshold Alert**: Warning triggered when attendance drops below regulatory margins (75% warning, 65% critical debarment).
- **Drive Matrix**: The live timeline and stage funnel of an active employer recruitment process.
- **Audit Ledger**: Append-only cryptographic trace of all administrative, grading, and placement status modifications.

---

## 5. Primary Workflows

### Workflow 1: The Unified Student Identity Journey
1. Student enters coursework and connects external handles (GitHub, LeetCode, LinkedIn).
2. Faculty logs class evaluations; examination cell syncs verified semester SGPA/CGPA.
3. System compiles 6-axis Talent Radar with verified proofs (e.g. 1842 LeetCode rating, 1480 GitHub commits).
4. Student views real-time Career Readiness recommendations to close skill gaps.

### Workflow 2: Campus Recruitment Pipeline Execution
1. Placement Officer posts a drive (e.g., *Google Software Engineer 2026* with eligibility criteria: CSE/IT, CGPA ≥ 7.5, 0 active backlogs).
2. System auto-shortlists eligible candidates with instant audit logging.
3. Students track stage transitions in their personal workbench (Applied → Shortlisted → Online Assessment → Technical Interview → HR Interview → Offer).
4. Placement Officer transitions students through the live Kanban or tabular candidate funnel with optimistic rollback and offer release.

### Workflow 3: Early Intervention for At-Risk Students
1. System tracks attendance drop in real-time across lecture sessions.
2. When a student falls below 75% in a core subject (e.g., DBMS), automated alerts surface on the Student Home and Faculty Dashboard.
3. HOD views departmental at-risk roster and assigns faculty mentorship.
4. Director tracks systemic attendance recovery rates across departments.

### Workflow 4: Executive Institutional Drill-Down
1. Director views campus-wide macro indicators: 84.2% placement rate, ₹14.8 LPA average CTC, 86.4% mean attendance.
2. Drills down: **Institution → Department (CSE) → Program (B.Tech) → Batch (2027) → Section (A) → Individual Student (Alok Kumar Singh)**.
3. Complete context and breadcrumbs are preserved throughout the inspection.

---

## 6. Business & Privacy Constraints

1. **Zero-Trust Access Scoping (RBAC & ABAC)**:
   - Students can only view their own academic and placement records.
   - Faculty access is scoped to assigned sections and course subjects.
   - Recruiters only view candidates who meet eligibility and have consented to placement participation.
   - Financial compensation details (CTC) and sensitive student disciplinary records are strictly restricted to Placement Officers and Executive Leadership.
2. **Institutional Tenant Isolation**:
   - Zero cross-institution leakage. Each institution operates within strict data boundaries.
3. **Data Integrity & Evidence Verification**:
   - Scores must never be arbitrary. Numerical scores must link directly to underlying evidence (e.g., number of solved problems, verified certifications, repository commits).
   - Once a student accepts an offer adhering to the institutional "One Student, One Job" policy, subsequent applications are automatically locked unless tier-upgrade exemptions apply.
