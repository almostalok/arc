// ============================================================================
// ARC Shared UI Component Types & Exports (Section 53)
// ============================================================================

export type BadgeVariant =
  | 'default'
  | 'brand'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'outline';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'link';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}
