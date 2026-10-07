# ARC Component System Specification

**Document:** `components.md`  
**Reference:** Section 96 of Master `design.md`  
**Design Standard:** Vercel × Apple × Linear × Stripe  

---

## 1. Component State Contract

Every interactive component in ARC strictly implements the following state contract:
- `Default`: Clean, restrained, neutral border, semantic surface.
- `Hover`: Subtle border darkening (`--border-strong`), subtle surface tint (`--surface-hover`). No dramatic size jumps.
- `Focus`: Visible 2px outline offset using `--primary` or `--border-strong`. High contrast focus ring for keyboard navigation (`:focus-visible`).
- `Disabled`: Opacity 40–50%, `cursor: not-allowed`, no hover or pointer triggers.
- `Loading`: Compact spinner or pulse overlay, preserves layout dimensions to avoid reflow.
- `Error`: Border `--danger`, error helper text with 11px caption and alert icon.

---

## 2. Core Interactive Primitives

### 2.1 Button
- **Variants**:
  - `Primary`: Solid charcoal/near-black in light mode (`bg-slate-900 text-white hover:bg-slate-800`), electric indigo for primary callouts (`bg-indigo-600 hover:bg-indigo-500`).
  - `Secondary`: Bordered neutral (`bg-white border-slate-200 text-slate-800 hover:bg-slate-50`).
  - `Subtle / Ghost`: Borderless (`text-slate-600 hover:bg-slate-100/80 hover:text-slate-900`).
  - `Destructive`: Danger tone (`bg-red-50 text-red-700 border-red-200 hover:bg-red-100`).
- **Sizes**:
  - `sm`: Height 32px, text 11px, icon 14px, padding 8px 12px, radius 6px.
  - `md` (Default): Height 38px, text 12px, icon 16px, padding 10px 16px, radius 8px.
  - `lg`: Height 44px, text 14px, icon 18px, padding 12px 20px, radius 10px.
- **Rule (Sec. 97)**: Button must have `Icon + Label` or tooltip if icon-only.

### 2.2 Input & Textarea
- **Structure**: Label (11px uppercase bold) + Input container + Helper text (11px caption).
- **Default**: `bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 radius-md`.
- **Focus**: `bg-white border-indigo-600 ring-2 ring-indigo-500/10`.
- **Error**: `bg-red-50/40 border-red-500 text-red-900`.

### 2.3 Select & Combobox
- Native and custom options popover.
- Typeahead search support for 10+ items (courses, branches, faculty roster).
- Multi-select with removable filter chips (`CSE ×`, `CGPA > 8 ×`).

### 2.4 Checkbox & Radio
- Custom crisp 16px boxes with 4px border radius for checkbox and 50% for radio.
- Filled state: `--primary` with white checkmark.

### 2.5 Switch / Toggle
- 36px width × 20px height with 16px circular thumb.
- Smooth 150ms cubic-bezier transition.

---

## 3. Navigation & Feedback Primitives

### 3.1 Tabs
- Line style (`border-b-2 border-indigo-600 font-semibold`) or Pill segment style (`bg-slate-100 text-slate-600 active:bg-white active:shadow-2xs active:text-slate-900`).
- Seamless keyboard navigation with arrow keys and `role="tablist"`.

### 3.2 Badge & Status Pill
- Reserved strictly for statuses, verification tiers, and categories.
- **Sizes**: Height 20px (compact) / 24px (standard).
- **Semantics**:
  - Success: `bg-emerald-50 text-emerald-700 border-emerald-200`
  - Warning: `bg-amber-50 text-amber-700 border-amber-200`
  - Danger: `bg-rose-50 text-rose-700 border-rose-200`
  - Info: `bg-indigo-50 text-indigo-700 border-indigo-200`
  - Neutral: `bg-slate-100 text-slate-700 border-slate-200`

### 3.3 Avatar
- Sizes: `xs` (24px), `sm` (32px), `md` (40px), `lg` (64px), `xl` (96px).
- Fallback: Crisp 2-letter uppercase initials on subtle tonal background.
- Status indicator: Dot in bottom-right (`bg-emerald-500` ringed in white).

---

## 4. Overlay & Presentation Primitives

### 4.1 Drawer (Section 81)
- Contextual inspection without losing main view.
- 440px – 560px width sliding in from right margin.
- Used for: Placement application inspect, audit trail inspect, notification details.

### 4.2 Dialog / Modal (Section 80)
- Reserved strictly for short confirmations and focused quick edits.
- Max width: 480px (confirmation) / 640px (quick action).
- Escape key and backdrop dismissal.

### 4.3 Command Palette (Section 64, 65)
- Shortcut: `⌘K` / `Ctrl+K`.
- Integrated instant search across students, drives, companies, courses, and circulars.

### 4.4 Toast (Section 82)
- Concise single-sentence feedback (e.g. *"Attendance saved."*).
- Auto-dismiss in 4 seconds. Optional undo action.

---

## 5. Data & Structure Primitives

### 5.1 Card
- Light mode: `bg-white border border-slate-200/80 rounded-xl shadow-2xs`.
- Dark mode: `bg-slate-900 border border-slate-800 rounded-xl`.
- Padding: 16px (compact) / 24px (spacious). No heavy drop-shadows.

### 5.2 Table System (Section 76, 135)
- Desktop: Dense tabular rows, hover state `bg-slate-50/60`, tabular numerals (`font-mono tabular-nums`).
- Mobile: Transforms gracefully into entity cards.

### 5.3 Timeline Component (Section 102)
- Vertical node-and-connector line with date badge, title, and outcome badge.
- Used for: Placement funnels, internship histories, and audit logs.

### 5.4 Progress & Radar Chart (Section 35, 36)
- Progress: 6px–8px height track, smooth animated fill.
- Radar: 6-axis Recharts polygon with evidence breakdown directly underneath.
