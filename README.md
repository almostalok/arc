# ARC — The Operating System for Modern Colleges

> **Academics. Talent. Careers. One Connected Ecosystem.**

ARC is a production-grade, multi-tenant college operating system connecting:
1. **ARC Student / ERP** (Academic records, biometric attendance, degree credits, coursework, timetable)
2. **ARC Pulse** (Evidence-backed talent intelligence, algorithmic competency radar, verified GitHub/LeetCode signals)
3. **ARC Placement** (Corporate CRM, placement drives, rule-based eligibility engine, application funnel, interview scorecards)
4. **ARC Intelligence** (Explainable cross-platform AI synthesis, skill gap auditing, contextual institutional assistance)

---

## 🏛️ System Architecture

ARC is engineered as a domain-driven monorepo utilizing **pnpm workspaces** and **Turborepo**:

```text
ARC/
├── apps/
│   ├── web/            # Next.js 16 (App Router / React 19) Unified Collegiate Web Platform
│   ├── api/            # Modular REST API Backend Service
│   ├── recruiter/      # Scoped Corporate Recruiter Portal
│   └── admin/          # Institution Administration Console
│
├── packages/
│   ├── types/          # Normalized Domain Models & Standard RFC API Envelopes
│   ├── constants/      # Regulatory Attendance Cutoffs, Tiers, Scoring Weights, Status Enums
│   ├── validation/     # Centralized Zod Validation Schemas
│   ├── permissions/    # Granular RBAC & ABAC Multi-Tenancy Policy Engine
│   ├── events/         # Domain Events Contracts & Pub/Sub Event Bus
│   ├── utils/          # Deterministic Eligibility, Attendance Risk & Talent Scoring Engines
│   ├── api-client/     # Typed HTTP Client with Context & Error Parsing
│   ├── config/         # Environment Variable Validation
│   ├── auth/           # HttpOnly Session Security & Token Cryptography
│   ├── design-system/  # Token Specs (Vercel Precision + Linear Density + Stripe Clarity)
│   └── ui/             # Reusable UI Primitives (Badge, Button, Drawer, StatRow, EmptyState)
│
├── prisma/
│   ├── schema.prisma   # Normalized 60+ Model PostgreSQL Schema
│   └── seed.ts         # Multi-Tenant Institutional Database Seeder
│
├── infra/
│   ├── docker/         # Production Dockerfiles (Web, API, BullMQ Worker)
│   ├── terraform/      # AWS Cloud Infrastructure IaC (RDS, ElastiCache, S3, ECS)
│   ├── monitoring/     # Prometheus Scrape Targets & Grafana Operational Dashboard
│   └── scripts/        # Automated Database Migration, Backup & Seed Scripts
│
├── docs/
│   ├── architecture/   # System, Database, Auth, Permissions & Event specs
│   ├── product/        # Student, Faculty, Placement, Pulse & Recruiter specs
│   ├── design-system/  # Token guidelines, accessibility (WCAG 2.2 AA)
│   └── api/            # OpenAPI 3.1 Specification
│
├── docker-compose.yml  # Multi-Container Development Orchestration
├── turbo.json          # Monorepo Pipeline Orchestration
└── pnpm-workspace.yaml
```

---

## ⚡ Core Domain Subsystems

### 1. 🎓 ARC Student OS
- **Unified Institutional Identity**: Live synchronisation across Registrar marks, attendance registers, and recruiter submissions.
- **Attendance Intelligence**: Computes current attendance percentage alongside exact *safe missable classes* before breaching the statutory 75% threshold.
- **Academic Transcript & GPA**: Multi-semester SGPA/CGPA progression and credit audit.
- **Official Resume Generation**: Instant export of verified collegiate resumes (`/api/v1/resumes/export`) directly from the student graph.

### 2. ⚡ ARC Pulse — Talent Intelligence
- **Evidence-Backed Talent Radar**: 6-axis competence analysis (Academics, Coding, Development, Experience, Communication, Certifications) weighted by verified artifacts.
- **Code & Repository Signals**: Verified LeetCode ratings and GitHub repository activity evaluated without arbitrary black-box AI scores.
- **Institutional Leaderboards**: Departmental talent rankings and peer benchmarks.

### 3. 💼 ARC Placement Command Center
- **Recruiter CRM**: Tiered directory of corporate hiring partners (Super Dream, Dream, Tier 1, Tier 2).
- **Rule-Based Eligibility Engine**: Automatically evaluates CGPA, active backlogs, departmental eligibility, and attendance records with transparent pass/fail explanations.
- **Multi-Stage Kanban Pipeline**: Tracks candidates from `Applied` → `Shortlisted` → `Online Assessment` → `Technical Round` → `HR Round` → `Selected` → `Placed`.
- **Interview Scorecards**: Multi-metric evaluation (Technical, Communication, Problem Solving, Culture Fit, Recommendation).

### 4. 🧠 ARC Intelligence Layer
- **Explainable Opportunity Matching**: Breaks down why a student matches a role and identifies specific skill gaps to bridge.
- **Cross-Platform Natural Language Assistant**: Real-time querying across collegiate student records, attendance anomalies, and placement funnels.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Recharts, Lucide Icons |
| **Backend & APIs** | Next.js Route Handlers (`/api/v1/*`), Node.js, Express/NestJS modular architecture |
| **Database & Cache**| PostgreSQL 16, Prisma ORM, Redis 7 (BullMQ async queues) |
| **Storage & Infra** | MinIO / AWS S3 (Signed Artifact URLs), Docker Compose, Terraform |
| **Observability** | Structured JSON logging, Prometheus metrics, Grafana dashboards |
| **Security & Auth** | RBAC + ABAC Policy Engine, HttpOnly Session Cookies, Zod validation |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v22+`
- npm `10+` or pnpm `10+`
- Docker & Docker Compose (optional for local database container)

### 2. Local Setup

```bash
# Clone the repository
git clone https://github.com/almostalok/arc.git
cd arc

# Install monorepo dependencies
npm install

# Start local PostgreSQL, Redis, and MinIO via Docker Compose (optional)
docker compose up -d postgres redis minio

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view ARC.

---

## 🧪 Testing & Verification

```bash
# Type safety check
npx tsc --noEmit

# Production build verification
npm run build

# Run linting
npm run lint
```

---

## 🛡️ Security & Tenant Isolation

- **Tenant Boundary Enforcement**: Every entity is scoped by `institutionId`, checked both at the route handler and authorization policy layers.
- **Zero LocalStorage Tokens**: Authentication sessions are stored in cryptographically verified, HttpOnly, secure cookies.
- **Audit Logging**: Every sensitive action (`MARK_UPDATED`, `ATTENDANCE_RECORDED`, `APPLICATION_STAGE_CHANGED`, `OFFER_RELEASED`) is recorded with actor ID, timestamp, and IP address.
