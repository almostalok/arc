'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-slate-500 font-medium ${className}`}>
      <ol className="flex items-center space-x-1.5 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1 || item.isCurrent;

          return (
            <li key={index} className="flex items-center space-x-1.5">
              {index > 0 && <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-slate-900 transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
