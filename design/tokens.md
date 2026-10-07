# ARC Design Tokens

**Specification:** ARC Operating System  
**Base Unit:** 4px  
**Aesthetic:** Vercel × Apple × Linear × Stripe  

---

## 1. Color System (Semantic Tokens)

### Light Mode (Default)
```css
:root {
  --background: #f8fafc;        /* Slate 50 */
  --foreground: #0f172a;        /* Slate 900 */
  --surface: #ffffff;           /* Pure white */
  --surface-subtle: #f1f5f9;    /* Slate 100 */
  --surface-hover: #e2e8f0;     /* Slate 200 */
  --border: #e2e8f0;            /* Slate 200 */
  --border-strong: #cbd5e1;     /* Slate 300 */
  --muted: #64748b;             /* Slate 500 */
  --muted-foreground: #475569;  /* Slate 600 */

  /* ARC Brand Accent */
  --primary: #4f46e5;           /* Indigo 600 */
  --primary-hover: #4338ca;     /* Indigo 700 */
  --primary-foreground: #ffffff;

  /* Semantic Feedback */
  --success: #10b981;           /* Emerald 500 */
  --success-subtle: #ecfdf5;    /* Emerald 50 */
  --warning: #f59e0b;           /* Amber 500 */
  --warning-subtle: #fffbeb;    /* Amber 50 */
  --danger: #ef4444;            /* Red 500 */
  --danger-subtle: #fef2f2;     /* Red 50 */
  --info: #3b82f6;              /* Blue 500 */
  --info-subtle: #eff6ff;       /* Blue 50 */
}
```

### Dark Mode (First-class)
```css
[data-theme="dark"] {
  --background: #090a0f;        /* Deep charcoal */
  --foreground: #f8fafc;
  --surface: #0f131f;           /* Elevated surface */
  --surface-subtle: #171c2b;
  --surface-hover: #1f263b;
  --border: #22293c;
  --border-strong: #333d59;
  --muted: #94a3b8;
  --muted-foreground: #cbd5e1;

  --primary: #6366f1;           /* Electric Indigo */
  --primary-hover: #818cf8;
  --primary-foreground: #ffffff;

  --success: #10b981;
  --success-subtle: #064e3b;
  --warning: #f59e0b;
  --warning-subtle: #78350f;
  --danger: #ef4444;
  --danger-subtle: #7f1d1d;
  --info: #3b82f6;
  --info-subtle: #1e3a8a;
}
```

---

## 2. Typography Scale

- **Display**: `font-size: 3rem (48px)` | `line-height: 1.1` | `font-weight: 800`
- **H1**: `font-size: 2rem (32px)` | `line-height: 1.2` | `font-weight: 800`
- **H2**: `font-size: 1.5rem (24px)` | `line-height: 1.25` | `font-weight: 700`
- **H3**: `font-size: 1.125rem (18px)` | `line-height: 1.35` | `font-weight: 700`
- **Body**: `font-size: 0.875rem (14px)` | `line-height: 1.5` | `font-weight: 400`
- **Body Small**: `font-size: 0.75rem (12px)` | `line-height: 1.5` | `font-weight: 500`
- **Caption**: `font-size: 0.6875rem (11px)` | `line-height: 1.4` | `font-weight: 500`
- **Metadata / Monospace**: `font-size: 0.625rem (10px)` | `font-mono tabular-nums`

---

## 3. Spacing Scale (4px Base)
`4px (1), 8px (2), 12px (3), 16px (4), 20px (5), 24px (6), 32px (8), 40px (10), 48px (12), 64px (16)`

---

## 4. Radius System
- `sm`: 6px (Badges, tags, small inputs)
- `md`: 8px (Buttons, menus, table cells)
- `lg`: 12px (Cards, modal containers)
- `xl`: 16px (Dashboards, command palette)
- `full`: 9999px (Status pills, avatar circles)
