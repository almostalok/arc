'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`p-8 sm:p-12 text-center rounded-xl border border-dashed border-slate-200/90 bg-slate-50/50 flex flex-col items-center justify-center max-w-md mx-auto ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-slate-500 mb-3.5">
        <Icon className="w-5 h-5 text-slate-600" />
      </div>
      <h3 className="text-sm font-semibold text-slate-900 tracking-tight">{title}</h3>
      <p className="text-xs text-slate-600 mt-1.5 max-w-xs leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <div className="mt-4">
          <Button variant="primary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
