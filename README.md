# ARC — The Operating System for Modern Colleges

> **Academics. Talent. Careers. One connected ecosystem.**

ARC is a modern, connected operating system for institutions of higher education. Unlike traditional, fragmented college ERPs, ARC connects students, faculty, department chairs, placement cells, university administration, and recruiters into a single **unified student identity graph**.

---

## 🏛️ System Architecture

ARC is structured into four core interconnected product systems:

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

### 1. 🎓 ARC Student
- **Unified Digital ID Profile**: Consolidates academic history, verified skills, GitHub projects, LeetCode ratings, internships, and certifications.
- **Academic GPA Engine**: Multi-semester performance tracking, subject-wise credits, internal/external evaluations, and grade audits.
- **Attendance Tracker**: Lecture-by-lecture presence logs with automated alerts when approaching the 75% regulatory eligibility threshold.
- **Career Readiness Index**: Evidence-based competence scoring with targeted recommendations.
- **Application Tracking**: Multi-stage pipeline from applied to offer.

### 2. ⚡ ARC Pulse
- **Multi-Dimensional Talent Discovery**: Powerful filters across Department, Batch, CGPA, Coding score, Open Source contributions, and Hackathon wins.
- **Evidence-Based Talent Radar**: 6-axis competence analysis (Academics, Coding, Development, Communication, Leadership, Career).
- **Institutional Leaderboards**: Campus rankings across coding competitions, technical development, academics, and leadership.
- **At-Risk Detection**: Early warning signals for students experiencing sudden attendance declines or eligibility deficits.

### 3. 💼 ARC Placement
- **Recruitment Command Center**: Live Kanban pipeline tracking candidates across Applied, Shortlisted, Online Assessment, Technical Round, HR Round, and Selected.
- **Recruiter Directory**: Company profiles with hiring histories, average packages, and active drives (Google, Microsoft, Razorpay, Deloitte, Amazon, etc.).
- **Job Drives Matrix**: Full round-by-round timelines, candidate funnels, and compensation breakdowns.
- **CTC & Salary Analytics**: Multi-year compensation trends and department conversion benchmarks.

### 4. 🧠 ARC Intelligence
- **Cross-System AI Synthesis**: Natural language institutional queries like *"Which CSE students are best suited for software engineering roles?"* or *"Which students are at risk of missing placement eligibility?"*.
- **Email Intelligence**: Prototype screen displaying AI-detected career updates from institutional mailboxes.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `10+`

### Installation

```bash
# Clone the repository
git clone https://github.com/almostalok/arc.git
cd arc

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧭 The 3–5 Minute Guided Demo Flow

The prototype comes with a floating **Interactive Demo Walkthrough Bar** at the bottom of the screen.

| Step | Persona | Feature | Direct Route |
| :--- | :--- | :--- | :--- |
| **01** | Public | **Platform Overview & Core Systems** | [`/`](http://localhost:3000/) |
| **02** | Any | **Instant Multi-Role Login** | [`/login`](http://localhost:3000/login) |
| **03** | Student | **Student Command Center** | [`/student`](http://localhost:3000/student) |
| **04** | Student | **Verified Digital ID Profile** | [`/student/profile`](http://localhost:3000/student/profile) |
| **05** | Student / HOD | **ARC Pulse — Talent Discovery** | [`/pulse`](http://localhost:3000/pulse) |
| **06** | Student / Recruiter | **Student Talent Intelligence Profile** | [`/pulse/students/s-1042`](http://localhost:3000/pulse/students/s-1042) |
| **07** | Placement Cell | **Live Kanban Placement Pipeline** | [`/placement`](http://localhost:3000/placement) |
| **08** | Placement Cell | **Recruiter Drive (Google SDE 2026)** | [`/placement/drives/drive-google-2026`](http://localhost:3000/placement/drives/drive-google-2026) |
| **09** | Student | **Multi-Stage Application Tracker** | [`/student/placements`](http://localhost:3000/student/placements) |
| **10** | Director | **Director Executive Command Center** | [`/director`](http://localhost:3000/director) |
| **11** | All | **ARC Intelligence Assistant** | Press `✨ ARC AI` in Topbar or `⌘J` |

---

## ⌨️ Keyboard Shortcuts & Productivity

- **`⌘K` / `Ctrl+K`**: Global Command Palette & Unified Entity Search
- **`⌘J` / `Ctrl+J`**: Launch ARC Institutional Intelligence AI Assistant
- **`ESC`**: Dismiss open modal or drawer

---

## 🎨 Design System

Complete design and architecture documentation is available in the [`/design`](./design/) directory:
- [`design/design.md`](./design/design.md): Master product design system specification (155 sections)
- [`design/tokens.md`](./design/tokens.md): Semantic color tokens, typography scales, spacing units, and radius specs

---

## 🔒 Security & Privacy Architecture

- **Tenant Isolation**: Institution-level data boundary ensuring zero cross-tenant leakage.
- **RBAC & ABAC**: Attribute-based scoped access (`self`, `section`, `subject`, `department`, `institution`).
- **Cryptographic Audit Ledger**: Immutable activity logging for regulatory compliance and administrative accountability.
