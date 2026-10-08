# ARC Design System Specification

> **Vercel Precision + Apple Hierarchy + Linear Density + Stripe Data Clarity**

---

## 1. Core Principles
- **Intelligent & Calm**: Information density without visual noise. Restrained typography and purposeful micro-indicators.
- **Explainable Metrics**: Zero decorative charts or unexplained percentage gauges.
- **Tabular Figures**: Every numeric figure (CGPA, marks, percentages, roll numbers, currency) utilizes `font-variant-numeric: tabular-nums` (`tabular-nums`).
- **Accessible & Contrast Compliant**: All interactive states adhere to WCAG 2.2 AA standard.

---

## 2. Color Palette
- **Primary Brand**: `#4f46e5` (Arc Indigo), `#3b82f6` (Arc Blue)
- **Surfaces**: `#f8fafc` (Page background), `#ffffff` (Card background)
- **Borders**: `#e2e8f0` (Default 1px hairline), `#cbd5e1` (Strong divider)
- **Semantics**:
  - Success: `#10b981` (Safe attendance, verified skill, offer accepted)
  - Warning: `#f59e0b` (Attendance caution zone, impending deadline)
  - Danger: `#ef4444` (Debarment risk, backlog alert, rejected)

---

## 3. UI Primitives
Defined in `src/components/ui/` and `@arc/ui`:
- `Badge`: Semantic status tag with `default`, `brand`, `success`, `warning`, `danger`, `neutral` variants.
- `Button`: Primary, secondary, outline, ghost, danger states with loading indicators.
- `Drawer`: Slide-out panel for fast candidate inspections.
- `EmptyState`: Contextual empty container with actionable next steps.
- `StatRow`: Compact tabular metric row.
