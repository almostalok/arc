# ARC Interaction Patterns

**Document:** `patterns.md`  
**Reference:** Sections 100–128 of Master `design.md`  
**Design Standard:** Vercel × Apple × Linear × Stripe  

---

## 1. The Connected Graph Doctrine — "No Dead Ends" (Sec. 100)

Every major entity in ARC is bidirectionally linked. A user should never encounter an isolated dead-end screen.

```text
Student ➔ Academics ➔ Attendance ➔ Skills ➔ Projects ➔ Placements
Company ➔ Jobs ➔ Drives ➔ Applications ➔ Interviews ➔ Offers
Department ➔ Students ➔ Faculty ➔ Academics ➔ Talent ➔ Placements
```

### UX Rules:
1. Clicking a student in **ARC Pulse** opens their unified digital profile.
2. Clicking a placement drive application opens the company details and round timeline.
3. Clicking a company card links back to active student applicants in that company's funnel.
4. Clicking a faculty name navigates to their assigned courses and office hours.

---

## 2. Global Entity Header (Sec. 101)

Every primary entity page (Student, Company, Drive, Department) begins with a standardized structural header:

```text
← [Parent Back Link]

[ENTITY TITLE IN DISPLAY CAPS]
[Department or Industry] · [Batch or Tier]

[ARC ID or Unique System Identifier]

[Contextual Actions: Edit, Share, Export, Audit]
────────────────────────────────────────────────
[Tab Navigation: Overview | Academics | Career | Placements | Activity]
```

---

## 3. Evidence-Backed Talent Radar (Sec. 35, 36)

**Principle:** Never display arbitrary numerical scores without verifiable proof.

```text
Coding Score = 94 / 100
├── 420 LeetCode problems solved (Rating: 1842 Knight)
├── 8 coding contests participated
└── 3 hackathons won
```

Every score card renders:
1. Metric badge with benchmark comparisons.
2. 6-axis visual polygon (Academics, Coding, Development, Communication, Leadership, Career).
3. Directly beneath: bulleted list of cryptographic or institutional evidence sources.

---

## 4. Multi-Stage Kanban Pipeline (Sec. 45)

Used in **ARC Placement** to manage hiring funnels:

```text
Applied ➔ Shortlisted ➔ Assessment (OA) ➔ Technical Round ➔ HR Round ➔ Selected / Offer
```

### Card Anatomy:
- Candidate Name + ARC ID + Branch + CGPA.
- Current compensation band (e.g. `₹18 LPA`).
- Stage timestamp (e.g. *Applied 12 Sep, OA cleared 28 Sep*).
- Click triggers contextual right-side drawer.

---

## 5. Placement Eligibility Transparency (Sec. 44, 127)

**Principle:** No black-box decisions. When a student is eligible or ineligible for a campus drive, the system provides transparent rule-by-rule evaluation:

```text
Google SDE 2026 Drive Eligibility:
  ✓ CGPA: 8.44 (Minimum required: 8.0)
  ✓ Graduation Year: 2027
  ✓ Branch: Computer Science & Engineering
  ✓ Backlogs: 0 active

  ✕ Attendance: 71.2% (Required minimum: 75.0%)
  ─────────────────────────────────────────────
  Result: Ineligible due to attendance threshold deficit (-3.8%).
```

---

## 6. Contextual Application Drawer (Sec. 81)

Instead of navigating away or opening disruptive full-screen modals:
1. Clicking any row in a table or card in a Kanban board slides in a 480px right-side drawer.
2. The drawer exposes complete candidate details, interview notes, and status advancement controls.
3. Users can update status and close the drawer without losing their table scroll position or active filters.

---

## 7. Search-First Productivity Pattern (Sec. 64, 65, 104)

Power users operate ARC with `⌘K` / `Ctrl+K`:
- Type student name, roll number, or ARC ID ➔ Jump directly to profile.
- Type company name ➔ Jump to active recruiter drive.
- Type course code (e.g. `CS601`) ➔ Jump to syllabus & resource repository.
- Type quick action (e.g. *Mark Attendance*, *Create Notice*) ➔ Trigger relevant workflow.

---

## 8. Email Intelligence Review Pattern (Sec. 33)

**Principle:** AI detects, human confirms.
1. Background NLP parser detects recruitment communication in student/institutional mailboxes.
2. System displays non-intrusive alert: *"ARC detected 3 career-related emails"*.
3. User reviews parsed metadata (Company, Round, Date, Offer status).
4. With 1-click confirmation, records are ingested into the student's authoritative placement timeline. Never auto-commit without review.

---

## 9. Non-Destructive AI Pattern (Sec. 71–74)

ARC Intelligence is strictly an assistive layer:
1. **Explainable Output**: AI responses cite specific verified data points (e.g., *"Candidate matches because of 420 LeetCode problems and CGPA 8.44"*).
2. **Read-Only Inferences**: AI can recommend actions or rank candidates, but cannot overwrite attendance records, modify exam grades, or reject candidates.
