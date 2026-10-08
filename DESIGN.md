# ARC — Design Engineering Specification

> **Aesthetic Foundation:** Vercel Precision × Apple Hierarchy × Linear Density × Stripe Data Clarity  
> *Authoritative Design Guidelines & System Truth for ARC Operating System*

---

## 1. Visual Philosophy & Personality

ARC is mission-critical institutional software. It is **not** a playful consumer app, a gaming leaderboard, a crypto trading terminal, or an AI-generated SaaS template.

### The ARC Aesthetic Pillars
- **Intelligent & Calm**: Visual noise is systematically eliminated. Whitespace is intentional. Screens breathe while maintaining high operational information density.
- **Institutional & Trustworthy**: Gives administrators and students absolute confidence that data is accurate, verified, and durable.
- **Technical & Precise**: Exact 1px borders, crisp typography, tabular data alignment, and micro-interactions that feel immediate and tactile.
- **Mature & Restrained**: Accents and colors exist solely to communicate state, urgency, and hierarchy—never for arbitrary decorative flair.

---

## 2. Impeccable Anti-Patterns (Explicitly Forbidden)

To prevent generic AI-generated SaaS aesthetics, ARC strictly prohibits:
- ❌ **The "Generic SaaS" Layout**: Sidebar + 4 giant saturated KPI cards + 3 random decorative charts + huge table with thick borders.
- ❌ **Purple-to-Blue Gradients**: No decorative hero gradients, rainbow button borders, or multi-color glow backgrounds.
- ❌ **Cards-Inside-Cards**: Avoid nesting containers within containers. Structure information using clean typographic hierarchy and subtle border dividers.
- ❌ **Decorative Rounded Icon Tiles**: Never place an arbitrary pastel circular/rounded icon box above every heading.
- ❌ **Rainbow Status Systems**: Status indicators must use semantic tokens with text + dot indicator, never 10 conflicting fluorescent badges.
- ❌ **Bouncing / Elastic Animations**: No springy physics, heavy parallax, or looping pulse widgets that distract from work.
- ❌ **Indiscriminate Font Usage**: Do not fall back to browser defaults or unconfigured fonts without deliberate typographic intent.
- ❌ **Pure Black / Pure White Harshness**: Use warm/cool tinted darks and neutrals for ergonomic, long-session viewing.

---

## 3. Color Architecture

### Light Mode (Default Operational Canvas)
- **Background**: `#f8fafc` (Slate 50) — A calm, cool neutral that reduces screen glare compared to pure `#ffffff`.
- **Primary Surface**: `#ffffff` (Pure white) — For elevated panels, topbars, and content sections.
- **Subtle Surface**: `#f1f5f9` (Slate 100) — For table headers, code blocks, and inactive filter pills.
- **Foreground / Text Primary**: `#0f172a` (Slate 900) — Deep tinted charcoal black for maximum legible contrast.
- **Text Secondary / Muted**: `#475569` (Slate 600) — For supporting labels and descriptions.
- **Border Default**: `#e2e8f0` (Slate 200) — Ultra-crisp 1px boundary.
- **Border Strong**: `#cbd5e1` (Slate 300) — Active inputs, hover borders.

### ARC Accent
- **Primary Indigo**: `#4f46e5` (Indigo 600) / Active Hover: `#4338ca` (Indigo 700).
- **Subtle Tint**: `#eef2ff` (Indigo 50) — Used strictly for active selection or focused entity states.

### Semantic Status Colors
State is always communicated through **color + icon/text**, never color alone:
- **Success / Placed / Verified**: `#10b981` (Emerald 600) | Background: `#ecfdf5`
- **Warning / At-Risk / Pending**: `#f59e0b` (Amber 600) | Background: `#fffbeb`
- **Danger / Critical Debarment / Rejected**: `#ef4444` (Red 600) | Background: `#fef2f2`
- **Info / In Review / Active Drive**: `#3b82f6` (Blue 600) | Background: `#eff6ff`

---

## 4. Typography & Typographic Scale

Primary Typeface: **Geist Sans** (via `next/font/google`)  
Monospace / Tabular Typeface: **Geist Mono** for metrics, IDs, roll numbers, and dates.

### Scale & Hierarchy
```text
Display (Hero / Landing)     40px – 48px | font-extrabold | tracking-tight | line-height: 1.1
Page Title (H1)              24px – 28px | font-bold      | tracking-tight | line-height: 1.2
Section Header (H2)          18px – 20px | font-semibold  | tracking-tight | line-height: 1.25
Subsection Header (H3)       15px – 16px | font-semibold  | tracking-tight | line-height: 1.35
Body Default                 13px – 14px | font-normal    | leading-relaxed
Body Small / Metadata        11px – 12px | font-medium    | leading-tight  | tracking-normal
Micro / Badges               10px – 11px | font-semibold  | uppercase      | tracking-wider
```

All numerical metrics and table columns must use `.tabular-nums` for precise vertical scanning.

---

## 5. Spacing Rhythm & Layout Grid

Base Unit: **4px**

```text
4px  (0.25rem) — Micro badge padding, inline icon spacing
8px  (0.5rem)  — Button vertical padding, small gaps
12px (0.75rem) — Input padding, card internal spacing
16px (1.0rem)  — Standard component margin, table cell padding
20px (1.25rem) — Section divider margin
24px (1.5rem)  — Container gutter, page sub-panel padding
32px (2.0rem)  — Major section separation
48px (3.0rem)  — Page block vertical rhythm
```

### Corner Radii
- `6px` (`rounded-md`): Small inputs, badge tags, action chips.
- `8px` (`rounded-lg`): Buttons, dropdown menus, table rows.
- `12px` (`rounded-xl`): Section cards, sheet containers, search modal.
- `9999px` (`rounded-full`): Avatars, status dots, filter pills.

---

## 6. Containers, Borders & Shadows

- **Subtle Borders over Heavy Shadows**: Default containers use `1px solid var(--border)` with `shadow-none` or `shadow-2xs` (`0 1px 2px rgba(0,0,0,0.03)`).
- **Elevation Layers**:
  - `Layer 0 (Canvas)`: `#f8fafc`
  - `Layer 1 (Panels / Content Sections)`: `#ffffff` + 1px border
  - `Layer 2 (Dropdowns / Menus / Drawers)`: `#ffffff` + 1px border + `shadow-lg`
  - `Layer 3 (Modals / Global Command Palette)`: `#ffffff` + 1px border + `shadow-2xl`
- **Avoid "Container Fatigue"**: Do not wrap every tiny stat in its own rounded box. Use a cohesive section table or linear layout with dividers.

---

## 7. Application Shell & Navigation Architecture

### Shell Anatomy
```text
┌────────────────────────────────────────────────────────────────────────┐
│ ARC Topbar: Brand · Campus · Global Search (⌘K) · AI · Role Switcher   │
├─────────────────┬──────────────────────────────────────────────────────┤
│ Sidebar         │ Main Operational Surface                             │
│ (256px, fixed)  │ (Fluid width, max-w-7xl centered or full-bleed)      │
│                 │                                                      │
│ Ecosystem Core  │ Breadcrumbs / Context Bar                            │
│ Dynamic Role Nav│ Page Header (Title + Primary Actions)                │
│ Health Status   │ Content Sections (Tables, Filters, Detail Drawers)   │
└─────────────────┴──────────────────────────────────────────────────────┘
```

- **Top Navigation**: Fixed 56px (`h-14`) high with crisp border-bottom.
- **Sidebar**: Quiet, compact (`w-64`), role-aware, displaying only routes relevant to the active stakeholder.
- **Command Palette (`⌘K`)**: Immediate modal search categorizing students, companies, drives, courses, and quick actions.
- **Contextual Drawers**: Inspecting an entity (e.g. clicking a student row in a table) opens a slide-over drawer, preserving user context without page reloads.

---

## 8. Data Presentation & Tables

The data table is the cornerstone of institutional operations:
1. **Header**: Muted background (`bg-slate-50`), bold 11px uppercase tracking, crisp bottom border.
2. **Row Height**: Compact 44px–48px rows allowing 12–15 records visible per screen.
3. **Typography**: Student names and titles in bold dark slate; roll numbers and codes in muted monospace.
4. **Interactive States**: Hover highlight (`hover:bg-slate-50/70`), active row selection checkbox, keyboard navigability.
5. **No Rainbows**: Status badges use monochromatic or subdued semantic pills with text labels (`● Selected`, `● Pending`).

---

## 9. Connected Graph & Entity Navigation

Every domain entity in ARC must be clickable and connected:
- `Student` ➔ Links to Digital ID Profile & Academic Transcript.
- `Company` ➔ Links to Recruiter Profile & Hiring History.
- `Drive` ➔ Links to Round-by-round Stage Matrix.
- `Department` ➔ Links to Department Head Roster & Curriculum Health.

No screen is a dead end.

---

## 10. Motion & Transitions

- **Duration**: `150ms` (hover, colors), `200ms` (drawers, modal backdrops), `250ms` (sheet slides).
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out).
- **Micro-Interactions Only**: Tactile button presses, smooth drawer reveals, active tab indicators. Zero decorative bouncing or spinning widgets.
- **Reduced Motion**: Respect `prefers-reduced-motion: reduce` by setting durations to 0ms.

---

## 11. Accessibility (WCAG 2.2 AA)

- **Contrast**: Minimum 4.5:1 text-to-background contrast on all body text and UI controls.
- **Focus Indicators**: Visible 2px focus ring (`ring-2 ring-indigo-500 ring-offset-2`).
- **Screen Reader Support**: Proper ARIA landmarks (`nav`, `main`, `header`, `dialog`), descriptive button labels.
- **Keyboard Navigation**: Full keyboard accessibility for tables, modals, dropdowns, and drawers (`ESC` closes, `Arrow` keys navigate menus).
