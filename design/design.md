# ARC
## Product Design System & Experience Specification

**Product:** ARC  
**Positioning:** The Operating System for Modern Colleges  
**Tagline:** Academics. Talent. Careers. One connected ecosystem.

**Document Type:** Master `design.md`  
**Status:** Product-level specification  
**Audience:** Product, Design, Frontend, Backend, QA, AI agents  
**Design Direction:** Vercel × Apple × Linear × Stripe  
**Primary Objective:** Build ARC as a serious, scalable, multi-tenant institutional platform — not a traditional ERP.

---

# 1. PRODUCT PHILOSOPHY

ARC is a connected operating system for colleges.

It brings together:

- Student identity
- Academics
- Attendance
- Timetable
- Faculty operations
- Resources
- Notices
- Events
- Certifications
- Projects
- Internships
- Skills
- External profiles
- Student talent intelligence
- Placement management
- Employer relationships
- Institutional analytics
- Communication
- AI-powered institutional intelligence

The fundamental product principle is:

> **One student. One identity. One connected institutional graph.**

A student should never exist as disconnected records across attendance, academics, placement and career systems.

ARC should understand that:

```text
Student
    ↓
Academic Record
    ↓
Skills
    ↓
Projects
    ↓
Experience
    ↓
Achievements
    ↓
Talent Profile
    ↓
Placement Eligibility
    ↓
Applications
    ↓
Interviews
    ↓
Offers
    ↓
Career Outcome
```

---

# 2. PRODUCT POSITIONING

Never describe ARC as:

> "A college ERP."

Instead:

> **ARC is the operating system for modern colleges.**

Secondary description:

> ARC connects academics, student development, institutional operations and career outcomes through one intelligent platform.

---

# 3. CORE PRODUCT ECOSYSTEM

ARC consists of four interconnected layers.

```text
                         ARC
              COLLEGE OPERATING SYSTEM
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
   ARC STUDENT       ARC PULSE       ARC PLACEMENT
   Student OS        Talent OS       Career OS
        │                │                │
        └────────────────┼────────────────┘
                         │
                         ▼
                 ARC INTELLIGENCE
                         │
                         ▼
                     ARC CORE
```

## ARC Student

Student-facing operating system.

## ARC Pulse

Institutional talent intelligence.

## ARC Placement

Complete placement lifecycle.

## ARC Intelligence

Cross-system analytics, recommendations and AI.

## ARC Core

Shared identity, permissions, workflows, communication, auditability and institutional data.

---

# 4. DESIGN PRINCIPLES

## 4.1 Calm over noisy

ARC contains enormous amounts of information.

The UI must never feel overwhelming.

Use:

- whitespace
- hierarchy
- progressive disclosure
- contextual actions
- concise labels
- intelligent defaults

---

## 4.2 Data density without visual noise

ARC is a data-heavy product.

Do not solve this by making everything tiny.

Instead:

- strong typography
- predictable alignment
- compact secondary metadata
- clear grouping
- expandable details
- filtering
- sorting
- saved views

---

## 4.3 Content before decoration

Every visual element must communicate something.

Avoid:

- decorative gradients
- meaningless illustrations
- giant empty hero sections inside applications
- excessive shadows
- unnecessary animations

---

## 4.4 One action, one obvious place

Users should never wonder:

> "Where do I do this?"

Actions must be contextual.

Example:

Student profile:

```text
Edit profile
Share profile
Download resume
View academic record
View placement history
```

Placement application:

```text
Update status
Schedule interview
Add note
Send communication
View student
```

---

# 5. VISUAL IDENTITY

ARC should feel:

- premium
- institutional
- trustworthy
- technical
- calm
- intelligent
- precise

Visual references:

- Vercel
- Apple
- Linear
- Stripe
- Notion
- Raycast

Do not copy any brand.

Extract the underlying principles:

**Vercel**
- minimal
- high contrast
- technical
- precise

**Apple**
- hierarchy
- whitespace
- simplicity
- premium interaction

**Linear**
- dense information
- excellent keyboard interaction
- command-driven workflows

**Stripe**
- complex information made understandable

---

# 6. COLOR SYSTEM

Use semantic tokens.

```css
--background
--foreground
--surface
--surface-subtle
--surface-hover
--border
--border-strong
--muted
--primary
--primary-hover
--success
--warning
--danger
--info
```

Default interface:

Light mode.

Support dark mode.

Do not create dozens of arbitrary colors.

---

# 7. TYPOGRAPHY

Primary:

**Geist Sans**

Fallback:

```text
Inter
system-ui
sans-serif
```

Typography hierarchy:

```text
Display
H1
H2
H3
Body
Body Small
Caption
Metadata
```

Avoid oversized typography inside operational dashboards.

Use large typography primarily for:

- landing pages
- major metrics
- page headers

---

# 8. SPACING SYSTEM

Use a consistent 4px base.

```text
4
8
12
16
20
24
32
40
48
64
80
96
```

Never invent arbitrary spacing values.

---

# 9. RADIUS

ARC should not look overly rounded.

Use:

```text
sm: 6px
md: 8px
lg: 12px
xl: 16px
```

Cards should generally use:

```text
8px – 12px
```

Pills are reserved for:

- statuses
- tags
- categories

---

# 10. BORDERS & SHADOWS

Prefer borders over shadows.

Default:

```text
1px solid var(--border)
```

Shadows only for:

- dialogs
- dropdowns
- popovers
- floating navigation
- elevated overlays

Avoid shadow-heavy cards.

---

# 11. ICONOGRAPHY

Use Lucide icons.

Rules:

- 16px for dense interfaces
- 18px default
- 20px for primary actions
- 24px for major navigation

Never use emojis as primary interface icons.

---

# 12. APPLICATION SHELL

All authenticated ARC products share one shell.

```text
┌─────────────────────────────────────────────────────────────┐
│ ARC      Search / ⌘K                   Help  Bell  Profile │
├───────────────┬─────────────────────────────────────────────┤
│               │                                             │
│ Overview      │                                             │
│               │                                             │
│ Students      │                  CONTENT                    │
│ Academics     │                                             │
│ Attendance    │                                             │
│ Resources     │                                             │
│               │                                             │
│ ARC Pulse     │                                             │
│ ARC Placement │                                             │
│               │                                             │
│ Analytics     │                                             │
│               │                                             │
│ Settings      │                                             │
└───────────────┴─────────────────────────────────────────────┘
```

Sidebar must support:

- collapsed state
- expanded state
- keyboard navigation
- active state
- section grouping
- role-based visibility

---

# 13. MULTI-TENANCY

ARC is fundamentally multi-tenant.

A tenant represents:

```text
Institution
```

Example:

```text
ITS Engineering College
```

Tenant isolation must exist at every data layer.

Conceptually:

```text
ARC
│
├── Institution A
│   ├── Departments
│   ├── Students
│   ├── Faculty
│   └── Placement
│
├── Institution B
│   ├── Departments
│   ├── Students
│   └── Placement
```

No tenant can access another tenant's data.

---

# 14. ORGANIZATION HIERARCHY

Support:

```text
Institution
 └── Campus
      └── School
           └── Department
                └── Program
                     └── Batch
                          └── Section
                               └── Student
```

This hierarchy powers:

- permissions
- analytics
- reporting
- filtering
- academic management
- placement eligibility

---

# 15. IDENTITY SYSTEM

Every person gets an ARC identity.

Entities:

```text
User
Student
Faculty
Staff
Administrator
Placement Officer
HOD
Director
Recruiter
```

A student receives:

```text
ARC ID
```

Example:

```text
ARC/ITS/23/CSE/1042
```

ARC ID must be unique within the institution.

---

# 16. AUTHENTICATION

Support:

- email/password
- institution SSO
- Google Workspace
- Microsoft Entra
- OTP where appropriate
- passkeys in future

Security:

- session management
- refresh tokens
- secure cookies
- MFA
- device sessions
- login history
- account recovery

---

# 17. AUTHORIZATION

Do not implement authorization using only hardcoded roles.

Use:

## RBAC

Role-Based Access Control.

AND:

## ABAC

Attribute-Based Access Control.

Example:

```text
Role:
FACULTY

Department:
CSE

Assigned subjects:
DBMS
OS
```

The faculty should only access students and academic records within their authorized scope.

---

# 18. CORE ROLES

Default roles:

```text
Student
Faculty
Mentor
HOD
Placement Officer
Placement Head
Director
Dean
Registrar
Admin
Super Admin
Recruiter
```

Support custom roles.

---

# 19. PERMISSION ENGINE

Permissions should follow:

```text
RESOURCE
ACTION
SCOPE
```

Example:

```text
students.read
students.update
attendance.read
attendance.write
marks.read
marks.write
placement.read
placement.manage
analytics.read
```

Scopes:

```text
self
section
subject
department
school
campus
institution
```

---

# 20. ARC STUDENT

ARC Student is the student's personal operating system.

Primary navigation:

```text
Overview
My Profile
Academics
Attendance
Timetable
Resources
Assignments
Exams
Notices
Events
Certificates
Projects
Experience
Skills
Career
Placements
Applications
Achievements
Settings
```

---

# 21. STUDENT DIGITAL ID

Profile should contain:

```text
Identity
Academic information
Contact information
Skills
Projects
Experience
Achievements
Certifications
External profiles
Career readiness
Placement history
```

Allow:

- edit
- verify
- share
- export
- generate resume
- generate public profile

---

# 22. VERIFIED INFORMATION

Distinguish between:

### Self-entered

```text
User provided
```

### Institution verified

```text
Verified by institution
```

### Integration verified

```text
Synced from GitHub
```

Example:

```text
CGPA
8.4
✓ Institution Verified
```

This distinction is critical for recruiter trust.

---

# 23. ACADEMIC ENGINE

Support:

- academic years
- semesters
- subjects
- credits
- faculty
- sections
- internal assessments
- external exams
- grades
- GPA
- CGPA
- backlogs
- academic progression

---

# 24. ATTENDANCE ENGINE

Support:

- subject attendance
- daily attendance
- lecture attendance
- biometric integration later
- faculty marking
- corrections
- approval workflow
- attendance policies
- alerts
- eligibility calculation

Example workflow:

```text
Faculty marks attendance
        ↓
Student sees attendance
        ↓
System calculates eligibility
        ↓
Warning triggered
        ↓
Student notified
```

---

# 25. TIMETABLE

Support:

- class schedules
- rooms
- faculty
- subjects
- sections
- substitutions
- cancellations
- holidays
- calendar integration

Students see:

```text
Today
Tomorrow
Week
Month
```

---

# 26. RESOURCE MANAGEMENT

Support:

- PDFs
- documents
- presentations
- videos
- links
- assignments
- previous papers
- notes
- lab manuals

Metadata:

```text
subject
semester
faculty
department
resource type
visibility
created date
```

---

# 27. ASSIGNMENTS

Faculty can:

- create assignment
- attach resources
- set deadline
- define grading
- view submissions
- grade submissions
- return feedback

Students can:

- submit
- resubmit
- view feedback
- track deadline

---

# 28. EXAM ENGINE

Support:

- exam schedules
- internal exams
- semester exams
- practical exams
- seating
- results
- grades
- revaluation
- result publication

---

# 29. CERTIFICATION ENGINE

Students can maintain:

```text
Certification
Issuer
Issue date
Expiry
Credential URL
Credential ID
Verification status
```

Institution-issued certificates should support digital verification.

---

# 30. EXPERIENCE ENGINE

Track:

- internships
- employment
- freelance work
- volunteering
- research
- campus roles

Each record:

```text
Organization
Role
Start date
End date
Description
Skills
Proof
Verification
```

---

# 31. PROJECT ENGINE

Students can maintain:

```text
Project
Description
Role
Team
Technology
Repository
Live URL
Images
Achievements
```

Allow projects to be linked to:

- courses
- hackathons
- internships
- skills

---

# 32. EXTERNAL PROFILE INTEGRATION

Support integration architecture for:

```text
GitHub
LinkedIn
LeetCode
Codeforces
CodeChef
Portfolio
Google Calendar
Microsoft Calendar
Email
```

Every integration should expose:

```text
Connected
Last synced
Sync now
Disconnect
Permissions
```

Never silently sync private information.

---

# 33. EMAIL INTELLIGENCE

Future-ready architecture for connecting:

```text
Gmail
Microsoft Outlook
```

ARC may detect:

- job applications
- interview invitations
- assessment links
- internship offers
- certificates
- event invitations

Example:

```text
Email detected

Microsoft
"Online Assessment Invitation"

ARC suggests:

Create placement application?

[Review]
```

Never automatically create important records without user confirmation.

---

# 34. ARC PULSE

ARC Pulse is the institutional talent intelligence layer.

Purpose:

> Understand the strengths, capabilities and development of the student population.

---

# 35. TALENT MODEL

Do not use one simplistic "student score."

Use multidimensional profiles.

Dimensions:

```text
Academic
Technical
Development
Coding
Communication
Leadership
Research
Sports
Design
Entrepreneurship
Career Readiness
```

---

# 36. EVIDENCE-BASED TALENT

Every score must have evidence.

Example:

```text
Coding — 94

Evidence:
420 LeetCode problems
1842 rating
8 coding competitions
3 hackathons
```

Never show:

```text
Coding = 94
```

without explaining why.

---

# 37. TALENT DISCOVERY

Support filters:

```text
Department
Program
Batch
Section
CGPA
Attendance
Skill
Coding
Experience
Certification
Project
Achievement
Competition
Leadership
Career readiness
```

Allow filter combinations.

Example:

```text
CSE
+
2027
+
CGPA > 8
+
React
+
GitHub > 10 repositories
+
Placement eligible
```

---

# 38. SAVED TALENT VIEWS

Users should be able to save filters.

Example:

```text
Top SDE Candidates
Women in Technology
Research Talent
Hackathon Candidates
Placement Ready
At-Risk Students
```

---

# 39. TALENT RANKINGS

Rankings should support:

- overall
- category
- department
- batch
- program

Never expose sensitive rankings unnecessarily.

Institutions should be able to configure whether rankings are:

- public
- faculty-only
- admin-only
- private

---

# 40. AT-RISK DETECTION

ARC Pulse should detect signals such as:

```text
Attendance decline
GPA decline
Incomplete profile
Low engagement
Missing assignments
Placement eligibility risk
```

Example:

> 37 students may be at risk of missing placement eligibility.

Provide evidence and recommended actions.

Do not label students negatively without context.

---

# 41. ARC PLACEMENT

ARC Placement is a complete placement management system.

Entities:

```text
Company
Recruiter
Job
Drive
Eligibility Criteria
Student
Application
Assessment
Interview
Offer
Joining
Outcome
```

---

# 42. COMPANY CRM

Placement officers should have a lightweight CRM.

Track:

- company
- recruiters
- communication
- hiring history
- job roles
- packages
- drives
- offers
- feedback

Timeline:

```text
Company contacted
↓
Meeting
↓
Job shared
↓
Drive scheduled
↓
Students shortlisted
↓
Interviews
↓
Offers
```

---

# 43. JOB DRIVE ENGINE

Placement officers can create:

```text
Company
Role
Location
CTC
Job description
Eligibility
Application deadline
Drive date
Rounds
Required skills
```

---

# 44. ELIGIBILITY ENGINE

Automatically determine eligible students.

Rules can include:

```text
CGPA >= 7.5
No active backlogs
Attendance >= 75%
Branch = CSE / IT
Graduation year = 2027
Required skills
```

Show:

```text
Eligible: 312
Not eligible: 510
```

For every ineligible student, explain why.

---

# 45. APPLICATION PIPELINE

Stages:

```text
Eligible
Applied
Shortlisted
Assessment
Technical Round
HR Round
Selected
Offer Accepted
Joined
Rejected
Withdrawn
```

Institutions should be able to customize stages.

---

# 46. INTERVIEW MANAGEMENT

Support:

- interviewer
- date
- time
- location
- meeting link
- round
- feedback
- score
- outcome

Calendar integration should be supported later.

---

# 47. OFFER MANAGEMENT

Track:

```text
Offer
Company
Role
CTC
Base
Bonus
Location
Joining date
Offer status
Acceptance status
```

Outcomes:

```text
Accepted
Rejected
Deferred
Joined
Did not join
```

---

# 48. PLACEMENT ANALYTICS

Metrics:

```text
Placement rate
Applications
Shortlists
Interviews
Offers
Acceptance rate
Average package
Median package
Highest package
Department placement
Company distribution
Role distribution
```

Allow comparison across:

```text
Year
Department
Program
Batch
Company
Role
```

---

# 49. RECRUITER PORTAL

ARC should eventually include a recruiter-facing experience.

Recruiters can:

- create hiring requests
- view eligible candidates
- shortlist
- schedule interviews
- provide feedback
- issue offers

Recruiters should only access students explicitly shared with them.

---

# 50. DIRECTOR COMMAND CENTER

The director should not see operational noise.

Director dashboard focuses on:

```text
Institution Health
Academic Performance
Student Success
Talent
Placements
Faculty
Engagement
Trends
Risks
```

The director should be able to drill:

```text
Institution
↓
School
↓
Department
↓
Program
↓
Batch
↓
Student
```

---

# 51. HOD EXPERIENCE

HOD sees department-level intelligence.

Sections:

```text
Overview
Students
Academics
Attendance
Faculty
Performance
Talent
Placements
Risks
Reports
```

---

# 52. FACULTY EXPERIENCE

Faculty sees only relevant operational information.

```text
My Classes
Students
Attendance
Assignments
Marks
Resources
Notices
Mentorship
```

---

# 53. MENTORSHIP

Support faculty mentors.

Mentor dashboard:

```text
Assigned Students
Academic Risk
Attendance
Career Readiness
Recent Issues
Mentor Notes
```

Private mentor notes must have explicit permissions.

---

# 54. COMMUNICATION ENGINE

ARC should have institutional communication.

Channels:

```text
Notice
Announcement
Email
Push
In-app notification
SMS integration later
```

Target audiences:

```text
Student
Section
Batch
Department
Program
Faculty
Placement eligible students
Custom segment
```

---

# 55. NOTIFICATION ENGINE

Events should generate notifications.

Examples:

```text
Assignment deadline
Attendance warning
Exam schedule
Placement shortlist
Interview schedule
Offer received
Notice published
Certificate approved
```

Support:

- in-app
- email
- push

Users can configure notification preferences.

---

# 56. EVENT MANAGEMENT

Support:

- workshops
- seminars
- hackathons
- clubs
- competitions
- campus events

Students can:

- discover
- register
- attend
- receive certificates

Participation should automatically update the student's profile where appropriate.

---

# 57. CLUBS & ORGANIZATIONS

Support:

```text
Club
Members
Leaders
Events
Achievements
Projects
Faculty coordinator
```

Student leadership can contribute to the student's verified profile.

---

# 58. ACHIEVEMENT ENGINE

Track:

- hackathons
- competitions
- sports
- academic awards
- publications
- leadership
- cultural achievements

Allow institutional verification.

---

# 59. CAREER READINESS ENGINE

Calculate a multidimensional readiness profile.

Dimensions:

```text
Academic
Technical
Projects
Experience
Communication
Resume
External Profile
Certifications
Interview readiness
```

Provide recommendations.

Example:

> Your technical profile is strong, but your experience evidence is weak.

---

# 60. RESUME ENGINE

ARC should eventually generate resumes from verified data.

Student selects:

```text
Template
Target role
Experience
Projects
Skills
Achievements
```

ARC generates a resume using verified student information.

Support:

- PDF
- DOCX
- shareable profile
- recruiter link

---

# 61. PUBLIC STUDENT PROFILE

Students can optionally create:

```text
arc.app/student/alok
```

Profile can expose:

- verified education
- skills
- projects
- achievements
- experience
- portfolio links

Students control visibility.

---

# 62. ANALYTICS ENGINE

Analytics must support:

- filtering
- date ranges
- comparisons
- drilldowns
- exports
- saved reports

Avoid dashboards that are just collections of charts.

Every chart should answer a question.

Bad:

> Student chart

Good:

> Placement rate by department

---

# 63. REPORT BUILDER

Admins should eventually be able to create custom reports.

Example:

```text
Report:
2027 Placement Readiness

Filters:
Batch = 2027
Department = CSE
CGPA > 7.5

Columns:
Student
CGPA
Attendance
Skills
Projects
Applications
Readiness
```

Export:

- CSV
- XLSX
- PDF

---

# 64. GLOBAL SEARCH

Everything should be searchable.

Entities:

```text
Students
Faculty
Courses
Subjects
Companies
Jobs
Applications
Notices
Resources
Events
Certificates
Projects
```

Use:

```text⌘ K
```

Support recent searches and keyboard navigation.

---

# 65. COMMAND PALETTE

ARC should have a command system.

Examples:

```text
⌘ K

Go to student
Create notice
Mark attendance
Create placement drive
Search company
View analytics
Open settings
```

Commands should respect permissions.

---

# 66. AUDIT LOG

Every sensitive action should be auditable.

Track:

```text
Who
What
When
Where
Before
After
```

Examples:

```text
Placement Officer changed application status
Director viewed placement analytics
Faculty modified attendance
Admin changed role permissions
```

---

# 67. DATA PRIVACY

Treat student data as highly sensitive institutional information.

Principles:

- least privilege
- explicit consent
- data minimization
- tenant isolation
- auditability
- encryption
- secure integrations
- configurable retention

Never expose personal information unnecessarily.

---

# 68. CONSENT CENTER

Students should be able to control:

```text
GitHub access
LinkedIn access
LeetCode access
Email access
Calendar access
Public profile
Recruiter visibility
```

Display:

```text
What ARC can access
Why ARC needs it
Last synced
Revoke access
```

---

# 69. DATA EXPORT

Students should be able to export their own data.

Support:

```text
Profile
Academic records
Certificates
Experience
Projects
Achievements
Placement history
```

---

# 70. DATA CORRECTION

Students should be able to request corrections.

Example:

```text
CGPA appears incorrect

[Request Correction]
```

Workflow:

```text
Student request
↓
Faculty/Admin review
↓
Approve / Reject
↓
Audit log
```

---

# 71. AI — ARC INTELLIGENCE

AI is an intelligence layer, not the product itself.

Never allow AI to silently modify authoritative institutional records.

AI can:

- summarize
- recommend
- discover
- classify
- explain
- draft
- predict where appropriate

AI must clearly distinguish:

```text
Verified data
AI inference
AI recommendation
```

---

# 72. AI USE CASES

Examples:

### Student

> How can I improve my placement readiness?

### Placement Officer

> Find students eligible for this role.

### HOD

> Which students have declining academic performance?

### Director

> Why did placement performance decline this year?

### Faculty

> Which students need academic attention?

---

# 73. AI EXPLANABILITY

Never return:

> Student score = 91.

Return:

> Career readiness is 91 because of:
>
> - 8.7 CGPA
> - 2 internships
> - strong coding profile
> - 6 verified projects
> - high profile completeness

---

# 74. AI SAFETY

AI must never:

- change marks
- change attendance
- reject students
- alter placement records
- expose restricted information
- make irreversible decisions

without authorized human action.

---

# 75. DASHBOARD DESIGN

Every dashboard follows:

```text
Page Header
↓
Primary KPI
↓
Important trend
↓
Actionable insights
↓
Detailed data
↓
Secondary information
```

Not:

```text
KPI
KPI
KPI
KPI
Random Chart
Random Chart
Table
```

---

# 76. TABLE SYSTEM

Tables are first-class components.

Support:

- sorting
- filtering
- pagination
- column visibility
- search
- bulk actions
- row selection
- keyboard navigation
- export
- saved views

---

# 77. FILTER SYSTEM

Use filter chips.

Example:

```text
CSE ×
2027 ×
CGPA > 8 ×
Coding > 80 ×
```

Allow:

```text
Save View
```

---

# 78. BULK ACTIONS

Authorized users should be able to:

- notify students
- export
- update status
- assign
- approve
- reject
- schedule

Always show confirmation for destructive actions.

---

# 79. FORMS

Forms should be:

- short
- grouped logically
- validated inline
- keyboard friendly
- autosaving where useful

Avoid huge forms.

Use multi-step flows for complex workflows.

---

# 80. MODALS

Use modals only for:

- confirmation
- quick edit
- focused action

Do not put entire workflows inside giant modals.

Complex workflows should use dedicated pages or drawers.

---

# 81. DRAWERS

Use drawers for contextual detail.

Example:

Clicking a placement application opens:

```text
Right-side drawer

Student
Company
Role
Status
Timeline
Notes
Actions
```

This allows users to inspect without losing context.

---

# 82. TOASTS

Use concise feedback.

Good:

> Attendance saved.

Bad:

> Your attendance has been successfully saved into the database.

---

# 83. LOADING

Use skeletons.

Never show blank white screens.

---

# 84. EMPTY STATES

Every empty state should answer:

1. What happened?
2. Why?
3. What can I do?

Example:

> No placement applications yet.
>
> Applications you submit will appear here.

[Explore opportunities]

---

# 85. ERROR HANDLING

Errors must be human-readable.

Never expose:

```text
500 Internal Server Error
```

as the primary user experience.

Use:

> We couldn't load your applications.

[Try again]

Technical information can be available in details for administrators.

---

# 86. MOBILE

ARC must be genuinely responsive.

Student mobile experience should prioritize:

```text
Home
Timetable
Attendance
Placements
Profile
```

Use bottom navigation.

Admin mobile should prioritize:

```text
Overview
Search
Notifications
Actions
Profile
```

Tables become cards.

---

# 87. ACCESSIBILITY

Target WCAG 2.2 AA.

Requirements:

- keyboard navigation
- focus states
- semantic HTML
- accessible labels
- screen reader support
- sufficient contrast
- reduced motion
- logical tab order

---

# 88. PERFORMANCE

ARC must feel fast.

Target:

```text
Initial page render: extremely fast
Navigation: near instant
Search: responsive
Charts: lazy loaded
Large tables: virtualized where necessary
Images: optimized
```

Use:

- server components where appropriate
- streaming
- caching
- pagination
- virtualization
- optimistic updates where safe

---

# 89. FRONTEND ARCHITECTURE

Use:

```text
apps/
  web/

packages/
  ui/
  design-system/
  types/
  utils/
  config/
  api-client/
```

Organize by domain.

Example:

```text
features/
  students/
  academics/
  attendance/
  placement/
  pulse/
  analytics/
  notifications/
```

Do not create enormous page components.

---

# 90. API ARCHITECTURE

API domains:

```text
/auth
/users
/institutions
/students
/faculty
/departments
/courses
/attendance
/academics
/exams
/resources
/notices
/events
/certificates
/projects
/experiences
/skills
/integrations
/companies
/jobs
/drives
/applications
/interviews
/offers
/analytics
/notifications
/audit
/ai
```

---

# 91. DATABASE DOMAIN MODEL

Core entities:

```text
Tenant
Campus
School
Department
Program
Batch
Section

User
Role
Permission
Session

Student
Faculty
Staff

Course
Subject
Enrollment
Attendance
Assessment
Exam
Grade

Resource
Assignment
Submission
Notice
Event

Project
Experience
Skill
Certification
Achievement
ExternalProfile

Company
Recruiter
Job
PlacementDrive
EligibilityRule
Application
Assessment
Interview
Offer
PlacementOutcome

Notification
Integration
Consent
AuditLog
```

---

# 92. EVENT-DRIVEN ARCHITECTURE

Important events should be represented as domain events.

Examples:

```text
student.created
student.updated

attendance.marked
attendance.threshold_reached

exam.published
result.published

application.created
application.shortlisted
interview.scheduled
offer.created

certificate.verified

integration.synced
```

These events can drive:

- notifications
- analytics
- audit logs
- AI insights

---

# 93. NOTIFICATION ARCHITECTURE

Events:

```text
Event
 ↓
Notification Rules
 ↓
Audience
 ↓
Channel
```

Channels:

```text
In-app
Email
Push
SMS
```

---

# 94. SEARCH ARCHITECTURE

Search must eventually support:

- full-text
- fuzzy search
- filters
- permissions
- entity ranking

Search results must never reveal unauthorized records.

---

# 95. DESIGN TOKENS

Create a central design token system.

Do not scatter:

```text
#111111
#ffffff
16px
12px
```

through components.

Use:

```text
tokens
 ↓
semantic tokens
 ↓
components
```

---

# 96. COMPONENT LIBRARY

Create reusable:

```text
Button
Input
Select
Combobox
Checkbox
Radio
Switch
Tabs
Badge
Avatar
Tooltip
Popover
Dropdown
Dialog
Drawer
Toast
Card
Table
Pagination
Breadcrumb
Progress
Chart
Timeline
Command
Calendar
DatePicker
FileUpload
```

Every component must support:

- default
- hover
- focus
- disabled
- loading
- error
where applicable.

---

# 97. ICON + TEXT RULE

Navigation items should generally have:

```text
Icon + Label
```

Actions may use:

```text
Icon + Label
```

Icon-only buttons require tooltips.

---

# 98. LANDING PAGE

ARC's marketing website should feel different from the application.

Hero:

> **The Operating System for Modern Colleges.**

Supporting text:

> One connected system for academics, student development, institutional intelligence and placements.

Sections:

1. Hero
2. Product ecosystem
3. Student experience
4. Talent intelligence
5. Placement command center
6. Institutional intelligence
7. Integrations
8. Security
9. CTA

---

# 99. PRODUCT NAVIGATION

Primary:

```text
Overview
Students
Academics
Pulse
Placement
Analytics
Communication
Resources
Events
Settings
```

Secondary navigation is role-specific.

---

# 100. DESIGN RULE — NO DEAD ENDS

Every important entity should connect to related entities.

Student:

```text
Student
→ Academics
→ Attendance
→ Skills
→ Projects
→ Experience
→ Placement
```

Company:

```text
Company
→ Jobs
→ Drives
→ Applications
→ Interviews
→ Offers
```

Department:

```text
Department
→ Students
→ Faculty
→ Academics
→ Talent
→ Placement
```

---

# 101. GLOBAL ENTITY HEADER

Every major entity page should have a consistent header.

Example:

```text
← Students

ALOK KUMAR SINGH
CSE · 2023–2027

ARC/ITS/23/CSE/1042

[Edit] [More]
```

Below:

```text
Overview
Academics
Career
Placement
Activity
```

---

# 102. TIMELINE COMPONENT

Use timelines for:

- placement applications
- student achievements
- academic history
- company relationship
- audit logs
- experience

Example:

```text
Oct 7
Interview scheduled

Oct 5
Shortlisted

Oct 2
Application submitted
```

---

# 103. ACTIVITY FEED

Activity should provide context.

Example:

```text
Google application moved to Technical Round
2h ago

Certificate verified
5h ago

Attendance marked
Yesterday
```

---

# 104. SEARCH-FIRST PRODUCTIVITY

Power users should be able to operate ARC primarily through:

```text⌘ K
```

Examples:

```text
Search Alok
Open placement dashboard
Create notice
Find CSE students
Create job drive
Export placement report
```

---

# 105. ROLE-SPECIFIC HOME

Do not force every role into the same dashboard.

Student:

> "What do I need to know today?"

Faculty:

> "What do I need to do?"

HOD:

> "How is my department performing?"

Placement:

> "What is happening across hiring?"

Director:

> "How is the institution performing?"

---

# 106. PRODUCT PERSONALIZATION

Allow users to:

- pin pages
- reorder shortcuts
- save filters
- save reports
- customize dashboard widgets

But don't allow unlimited customization.

ARC should retain strong defaults.

---

# 107. DARK MODE

Dark mode should be first-class.

Not simply:

```text
background → black
```

Create a proper semantic dark palette.

Dark mode should feel like a premium developer/productivity application.

---

# 108. ANIMATION

Use motion for:

- transitions
- feedback
- hierarchy
- state changes

Avoid motion for decoration.

Respect:

```text
prefers-reduced-motion
```

---

# 109. SECURITY UX

Security should be visible but never annoying.

Examples:

```text
Verified
Institution managed
Private
Shared with recruiter
```

Users should understand visibility.

---

# 110. PRIVACY LABELS

Sensitive information can show:

```text
Private
Institution only
Recruiter visible
Public
```

---

# 111. PRODUCT ANALYTICS

ARC itself should track product analytics.

Events:

```text
student.profile.updated
application.created
resource.opened
notice.read
dashboard.viewed
report.exported
integration.connected
```

Do not collect unnecessary personal information.

---

# 112. BILLING / SaaS LAYER

ARC should eventually be sold as SaaS.

Plans can be based on:

```text
Students
Modules
Campuses
Storage
AI usage
Integrations
```

Possible plans:

```text
Starter
Growth
Institution
Enterprise
```

Do not expose pricing inside the core college application.

---

# 113. INSTITUTION ONBOARDING

New college onboarding:

```text
Create Institution
↓
Configure Campus
↓
Departments
↓
Programs
↓
Academic Year
↓
Import Students
↓
Import Faculty
↓
Configure Roles
↓
Configure Placement
↓
Configure Branding
↓
Go Live
```

Support CSV imports initially.

---

# 114. DATA IMPORT

Allow:

```text
CSV
XLSX
API
```

Import preview must show:

```text
Valid rows
Invalid rows
Duplicates
Warnings
```

Never silently import bad data.

---

# 115. BULK IMPORT SAFETY

Before committing:

```text
842 records detected

812 valid
21 warnings
9 errors

[Review] [Import valid records]
```

---

# 116. INSTITUTION BRANDING

Each tenant can configure:

- logo
- name
- accent color
- email domain
- favicon
- academic terminology

ARC's underlying design system remains consistent.

---

# 117. MULTI-CAMPUS

Support institutions with multiple campuses.

Example:

```text
University
├── Noida Campus
├── Delhi Campus
└── Lucknow Campus
```

Analytics can aggregate or filter by campus.

---

# 118. AUDIENCE SEGMENTATION

Create reusable audiences:

```text
CSE 2027
Placement Eligible
Attendance < 75%
CGPA > 8
Internship Students
Hackathon Participants
```

Audiences can power:

- communication
- analytics
- placement
- events

---

# 119. WORKFLOW ENGINE

ARC should eventually support configurable workflows.

Example:

```text
Certificate request
↓
Faculty approval
↓
HOD approval
↓
Admin verification
↓
Certificate issued
```

Another:

```text
Placement drive
↓
Eligibility
↓
Applications
↓
Shortlisting
↓
Interview
↓
Offer
```

---

# 120. APPROVAL ENGINE

Support:

```text
Requester
Approver
Rule
Status
Timestamp
Comment
```

Statuses:

```text
Draft
Pending
Approved
Rejected
Cancelled
```

---

# 121. DOCUMENT ENGINE

Documents can include:

- certificates
- offer letters
- resumes
- academic documents
- institutional documents

Use secure access controls.

---

# 122. VERIFICATION

Important documents should support:

```text
Verified
Pending verification
Rejected
Expired
```

---

# 123. QR VERIFICATION

Future certificates can contain:

```text
Scan QR
↓
ARC verification page
↓
Certificate authenticity
```

---

# 124. PUBLIC VERIFICATION

Example:

```text
verify.arc.app/certificate/ABC123
```

Show:

```text
Authentic Certificate

Issued to:
Student Name

Issued by:
Institution

Issued:
Date

Status:
Verified
```

Expose minimal information.

---

# 125. RECRUITER SEARCH

Recruiters should eventually be able to search only students authorized for discovery.

Example:

```text
React
+
Node.js
+
CGPA > 8
+
2027
```

Results show verified information.

---

# 126. STUDENT CONSENT FOR RECRUITERS

Students must control:

```text
Available to recruiters
```

and optionally:

```text
Available to:
Company X
Company Y
All verified recruiters
```

---

# 127. PLACEMENT ELIGIBILITY TRANSPARENCY

Students must always understand why they are eligible/ineligible.

Example:

```text
Google SDE

✓ CGPA
✓ Graduation year
✓ Branch
✓ No backlogs

✕ Attendance requirement

You are currently not eligible because attendance is 71%.
Required: 75%.
```

---

# 128. NO BLACK-BOX DECISIONS

ARC must never hide institutional decisions behind mysterious scores.

Every automated decision should provide:

```text
Rule
Evidence
Result
```

---

# 129. PERFORMANCE MONITORING

Production ARC should monitor:

```text
API latency
Error rate
Queue health
Database health
Search latency
Notification delivery
Integration failures
```

Admin observability must not expose sensitive data unnecessarily.

---

# 130. RELIABILITY

Important workflows should be:

- idempotent
- retryable
- auditable

Examples:

- payment
- certificate issuance
- notifications
- application status updates
- imports

---

# 131. OFFLINE / DEGRADED EXPERIENCE

Where appropriate:

- timetable should remain cached
- student profile should have basic offline availability
- attendance marking can support controlled offline workflows in future

Do not pretend the entire platform is offline-first.

---

# 132. API ERROR CONTRACT

Use predictable errors:

```json
{
  "code": "PLACEMENT_NOT_ELIGIBLE",
  "message": "Student does not meet the attendance requirement.",
  "details": {
    "required": 75,
    "actual": 71
  }
}
```

Frontend should map errors into human-friendly UI.

---

# 133. FRONTEND STATE

Separate:

```text
Server state
UI state
Form state
Session state
```

Do not put everything into one global store.

---

# 134. FILE UPLOADS

Support:

- progress
- cancel
- retry
- preview
- validation
- size limits
- file type restrictions

---

# 135. RESPONSIVE TABLE STRATEGY

Desktop:

Full data table.

Tablet:

Reduced columns.

Mobile:

Entity cards.

Never force users to horizontally scroll giant tables unless absolutely necessary.

---

# 136. DATA VISUALIZATION

Charts should:

- answer questions
- have clear labels
- support tooltips
- support date ranges
- have accessible alternatives

Every chart should have a textual interpretation when useful.

---

# 137. DASHBOARD INSIGHTS

Instead of only:

```text
Placement: 82%
```

Show:

> Placement increased 7.4% compared with last year.

This is where ARC Intelligence becomes useful.

---

# 138. PRODUCT COPY

Use short, human language.

Good:

> 18 students need attention.

Bad:

> There are currently a total of 18 students who have been identified as requiring additional attention.

Buttons:

```text
View students
Review
Approve
Create drive
Export
```

Not:

```text
Click here to proceed
```

---

# 139. EMPTY COPY

Good:

> No interviews scheduled.

> Interviews will appear here once a placement drive is active.

---

# 140. CONFIRMATION COPY

Good:

> Delete this placement drive?

> This will remove the drive from active workflows.

[Cancel] [Delete]

---

# 141. PRODUCT VOICE

ARC should sound:

- confident
- concise
- professional
- human
- calm

Never:

- overly corporate
- childish
- robotic
- excessively enthusiastic

---

# 142. DESIGN ANTI-PATTERNS

Never:

- use rainbow gradients
- use huge rounded cards everywhere
- use random illustrations
- use emoji navigation
- use excessive glassmorphism
- use 5 different fonts
- use arbitrary colors
- hide important actions
- create gigantic forms
- create 1000px-wide tables on mobile
- create dashboards with meaningless charts
- use lorem ipsum
- use fake data like "John Doe"
- create inaccessible icon-only controls

---

# 143. PRODUCT ANTI-PATTERNS

Never:

- duplicate student records
- allow unauthorized access
- silently change authoritative records
- hide eligibility rules
- rely on AI for final institutional decisions
- expose private student data
- allow unrestricted recruiter access
- silently import external data
- create irreversible destructive actions without confirmation

---

# 144. DESIGN FILE ORGANIZATION

Create:

```text
/design
  design.md
  tokens.md
  components.md
  patterns.md
  accessibility.md
  content.md
```

`design.md` is the master source.

All other documents extend it.

---

# 145. DEVELOPMENT RULE

Every new UI feature must answer:

1. Which user needs this?
2. Which role can access it?
3. Which data does it use?
4. Which entities does it connect?
5. What happens on success?
6. What happens on failure?
7. What happens on mobile?
8. What permissions apply?
9. What gets audited?
10. What notification is triggered?

---

# 146. FEATURE DEVELOPMENT RULE

Never implement:

```text
Page
```

in isolation.

Implement:

```text
Domain
→ Data model
→ Permissions
→ API
→ UI
→ Empty state
→ Loading
→ Error
→ Audit
→ Notification
→ Analytics
```

where applicable.

---

# 147. QUALITY GATE

A feature is not complete until:

### Product

- workflow works
- permissions work
- related entities connect

### UX

- loading state
- empty state
- error state
- success feedback

### Accessibility

- keyboard
- focus
- semantic labels

### Responsive

- desktop
- tablet
- mobile

### Security

- authorization
- data visibility
- audit requirements

### Analytics

- relevant events

---

# 148. CORE EXPERIENCE MAP

The most important ARC journey:

```text
Student joins college
        ↓
ARC identity created
        ↓
Academic profile
        ↓
Attendance
        ↓
Courses
        ↓
Projects
        ↓
Skills
        ↓
Certifications
        ↓
Experience
        ↓
Talent profile
        ↓
Career readiness
        ↓
Placement eligibility
        ↓
Job applications
        ↓
Interviews
        ↓
Offer
        ↓
Career outcome
```

This journey should remain visible in the architecture.

---

# 149. THE ARC GRAPH

ARC's long-term moat is the institutional graph.

```text
                 Institution
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
   Department     Faculty      Companies
        │            │            │
        ▼            ▼            ▼
     Students ←→ Courses      Jobs
        │
 ┌──────┼──────────────┐
 ▼      ▼              ▼
Skills Projects      Experience
 │        │              │
 └────────┼──────────────┘
          ▼
       Talent
          │
          ▼
      Placement
          │
          ▼
       Outcome
```

Every feature should strengthen this graph.

---

# 150. FINAL DESIGN STANDARD

ARC should feel like:

> **If Vercel designed a college operating system with Apple's attention to hierarchy and Linear's operational density.**

Not:

> "A modernized college ERP."

The distinction is critical.

---

# 151. FINAL PRODUCT STANDARD

When a director opens ARC, they should think:

> "I can finally see what's happening across my institution."

When a placement officer opens ARC:

> "I don't need ten spreadsheets anymore."

When a faculty member opens ARC:

> "I immediately know what needs my attention."

When a student opens ARC:

> "Everything related to my college life and career is here."

When a recruiter opens ARC:

> "I can discover verified talent without dealing with fragmented data."

That is the product.

---

# 152. BUILD ORDER

Build ARC in the following order.

## Phase 0 — Foundation

- Design system
- Tokens
- App shell
- Authentication
- Tenant model
- User model
- RBAC/ABAC
- Audit architecture

## Phase 1 — Student Core

- Student identity
- Profile
- Academics
- Attendance
- Timetable
- Resources
- Notices

## Phase 2 — Student Development

- Skills
- Projects
- Experience
- Certifications
- Achievements
- Events
- Clubs
- Career readiness

## Phase 3 — ARC Pulse

- Talent model
- Talent discovery
- Rankings
- Filters
- Student intelligence
- At-risk detection
- Institutional talent analytics

## Phase 4 — ARC Placement

- Companies
- Recruiters
- Jobs
- Drives
- Eligibility
- Applications
- Interviews
- Offers
- Placement analytics

## Phase 5 — Institutional Operations

- Faculty
- Mentors
- HOD
- Director
- Communication
- Reports
- Workflow engine
- Approval engine

## Phase 6 — Intelligence

- AI assistant
- Recommendations
- Natural language analytics
- Email intelligence
- Career recommendations

## Phase 7 — Ecosystem

- GitHub
- LinkedIn
- LeetCode
- Calendar
- Email
- Recruiter portal
- Public student profiles

---

# 153. MVP PRIORITY

If development capacity is limited, prioritize:

```text
P0

Identity
RBAC
Student
Academics
Attendance
Placement
Talent
Director dashboard
Search
Notifications
Audit

P1

Resources
Assignments
Certificates
Projects
Experience
Career readiness
Events
Analytics

P2

Recruiter portal
Integrations
Resume builder
AI
Email intelligence
Public profiles

P3

Advanced intelligence
Predictive analytics
Workflow builder
Custom reports
Marketplace
```

---

# 154. NORTH STAR

ARC's north-star metric should not simply be:

> Number of students.

A better measure:

> **Percentage of student lifecycle managed through ARC.**

Supporting metrics:

```text
Active students
Academic engagement
Profile completeness
Verified records
Placement applications
Placement outcomes
Faculty adoption
Institution adoption
```

---

# 155. FINAL RULE

Whenever a new feature is proposed, ask:

> **Does this make ARC a better connected operating system for the institution?**

If yes:

Build it.

If it is just another isolated dashboard feature:

Reconsider the architecture.

---

# END

ARC is not a collection of dashboards.

ARC is:

**Identity + Academics + Student Development + Talent Intelligence + Placement + Institutional Intelligence**

connected through one institutional data graph.

The interface should make that complexity feel simple.

**Build calm. Build precise. Build connected.**
