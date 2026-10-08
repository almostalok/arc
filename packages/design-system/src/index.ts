// ============================================================================
// ARC Design System Tokens (Sections 49 & 50)
// Vercel Precision + Apple Hierarchy + Linear Density + Stripe Data Clarity
// ============================================================================

export const colors = {
  brand: {
    indigo: '#4f46e5',
    indigoHover: '#4338ca',
    indigoLight: '#eef2ff',
    blue: '#3b82f6',
    blueLight: '#eff6ff',
  },
  neutral: {
    bgPage: '#f8fafc',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textMuted: '#475569',
    textSubtle: '#64748b',
    border: '#e2e8f0',
    borderStrong: '#cbd5e1',
  },
  semantic: {
    success: '#10b981',
    successBg: '#ecfdf5',
    warning: '#f59e0b',
    warningBg: '#fffbeb',
    danger: '#ef4444',
    dangerBg: '#fef2f2',
    info: '#0ea5e9',
    infoBg: '#f0f9ff',
  },
} as const;

export const typography = {
  fontSans: 'var(--font-sans, system-ui, sans-serif)',
  fontMono: 'var(--font-mono, ui-monospace, monospace)',
} as const;

export const radius = {
  sm: '0.375rem', // 6px
  md: '0.5rem',   // 8px
  lg: '0.75rem',  // 12px
  xl: '1rem',     // 16px
  full: '9999px',
} as const;

export const shadows = {
  subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  drawer: '-4px 0 24px rgba(0, 0, 0, 0.12)',
  modal: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
} as const;
