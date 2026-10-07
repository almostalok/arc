# ARC Accessibility Specification

**Document:** `accessibility.md`  
**Reference:** Sections 87 & 108 of Master `design.md`  
**Standard:** WCAG 2.2 Level AA Compliance  

---

## 1. Core Principles

ARC is critical institutional infrastructure. It must be accessible to every student, educator, and administrator regardless of ability or assistive technology.

---

## 2. Keyboard Navigation Contract

Every feature in ARC must be fully operable using keyboard alone without a mouse:

| Action | Keystroke | Behavior |
| :--- | :--- | :--- |
| **Global Command Search** | `⌘K` or `Ctrl+K` | Opens global search palette; traps focus inside search input |
| **ARC Intelligence Assistant** | `⌘J` or `Ctrl+J` | Launches AI query modal |
| **Modal / Drawer Dismissal** | `Escape` | Closes active overlay and restores focus to initiating element |
| **Tabbed Interfaces** | `Left` / `Right` Arrow keys | Navigates between tabs (`role="tab"`) |
| **Interactive Selection** | `Enter` or `Space` | Activates focused button, toggle, or expands accordion |
| **Sequential Navigation** | `Tab` / `Shift+Tab` | Traverses interactive elements in predictable DOM reading order |

---

## 3. Focus Indicators & Focus Trapping

1. **High-Contrast Visible Focus**: Never apply `outline: none` without providing an equivalent `:focus-visible` ring.
   ```css
   :focus-visible {
     outline: 2px solid var(--primary);
     outline-offset: 2px;
   }
   ```
2. **Focus Trapping**: Modals (`GlobalSearchModal`, `ArcIntelligenceModal`) and slide-over drawers (`NotificationDrawer`) must trap focus within the active container while open. Focus must not bleed into underlying dimmed page content.
3. **Focus Restoration**: When an overlay closes, focus must immediately return to the trigger element that summoned it.

---

## 4. Color Contrast Ratios (WCAG 2.2 AA)

- **Normal Text (<18px regular / <14px bold)**: Minimum **4.5:1** contrast ratio against its background.
  - Light mode: Slate 900 (`#0F172A`) on Slate 50 (`#F8FAFC`) gives **14.8:1** (Exceeds AAA).
  - Muted secondary text: Slate 600 (`#475569`) on white gives **5.6:1** (Passes AA).
- **Large Text (≥18px regular / ≥14px bold)**: Minimum **3.0:1** contrast ratio.
- **UI Components & Borders**: Minimum **3.0:1** contrast ratio for active input borders and focus indicators.
- **No Color-Only Information**: Errors, warnings, and success states always combine color with an explicit semantic icon (e.g. checkmark, alert triangle) and descriptive textual copy.

---

## 5. Screen Reader Semantics & ARIA Landmarks

1. **Semantic Structure**:
   - `<header>` for Topbar navigation.
   - `<aside>` for sidebar navigation (`aria-label="Main sidebar navigation"`).
   - `<main>` for primary operational workspace.
   - `<nav>` with descriptive labels for breadcrumbs and tab segments.
2. **Data Tables (Sec. 76, 135)**:
   - Must use proper `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` with `scope="col"`.
   - Complex tables must contain `aria-label` or `<caption>` summarizing the dataset.
3. **Live Regions**:
   - Background sync updates, notifications, and AI generation states declare `aria-live="polite"` so screen readers announce completions without interrupting the user.
4. **Icon-Only Buttons (Sec. 97)**:
   - Must specify explicit `aria-label` or `title` (e.g. `<button aria-label="Search institutional records">`).

---

## 6. Motion & Vestibular Safety (Sec. 108)

All transitions and animations must strictly respect the user's operating system preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

No content may flash or pulse more than 3 times in any 1-second period to prevent photo-sensitive seizures.
