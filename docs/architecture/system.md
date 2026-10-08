# ARC System Architecture

> **The Operating System for Modern Colleges**  
> *Academics. Talent. Careers. One Connected Ecosystem.*

---

## 1. Executive Architecture Overview

ARC replaces legacy fragmented collegiate ERPs, disconnected spreadsheets, and third-party recruiting trackers with a **single unified multi-tenant operational graph**.

```mermaid
graph TD
    Client["Client Devices (Web / Mobile)"] --> CDN["Cloudflare CDN / Edge Proxy"]
    CDN --> WebApp["ARC Web App (Next.js 16 / React 19)"]
    CDN --> Recruiter["ARC Recruiter Portal"]
    CDN --> Admin["ARC Admin Console"]
    
    WebApp --> APIRouter["ARC REST API Layer (/api/v1/*)"]
    Recruiter --> APIRouter
    Admin --> APIRouter
    
    APIRouter --> AuthGuard["RBAC / ABAC Security Guard Engine"]
    AuthGuard --> DomainServices["Domain Engines (Eligibility / Pulse / Attendance)"]
    
    DomainServices --> Postgres[("PostgreSQL 16 (Normalized Student Graph)")]
    DomainServices --> Redis[("Redis 7 (Sessions, Queues, Cache)")]
    DomainServices --> MinIO[("Object Storage (Resumes, Artifacts)")]
    
    DomainServices --> BullMQ["BullMQ Worker Services"]
    BullMQ --> EventBus["Domain Event Bus"]
```

---

## 2. Core Pillars

1. **ARC Student / ERP**: Academic records, real-time subject attendance with safe missable limits, timetable, courseware, and verified credits.
2. **ARC Pulse**: Evidence-backed talent intelligence transforming GitHub commits, LeetCode ratings, verified projects, and hackathon wins into explainable radar signals.
3. **ARC Placement**: Multi-stage company CRM, job drives, deterministic eligibility gates, interview scorecards, and offer releases.
4. **ARC Intelligence**: Explainable cross-platform assistant and opportunity matching layer.
