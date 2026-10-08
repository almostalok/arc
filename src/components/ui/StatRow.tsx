'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export interface StatItem {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  meta?: string;
  badge?: string;
}

interface StatRowProps {
  stats: StatItem[];
  className?: string;
}

export function StatRow({ stats, className = '' }: StatRowProps) {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs divide-y lg:divide-y-0 lg:divide-x divide-slate-100 ${className}`}
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {stat.label}
            </span>
            {stat.badge && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                {stat.badge}
              </span>
            )}
          </div>

          <div className="flex items-baseline space-x-2 my-1">
            <span className="text-2xl font-bold tracking-tight text-slate-900 font-mono tabular-nums">
              {stat.value}
            </span>
            {stat.change && (
              <span
                className={`text-xs font-semibold flex items-center ${
                  stat.trend === 'up'
                    ? 'text-emerald-600'
                    : stat.trend === 'down'
                    ? 'text-rose-600'
                    : 'text-slate-500'
                }`}
              >
                {stat.trend === 'up' && <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />}
                {stat.trend === 'down' && <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
                {stat.change}
              </span>
            )}
          </div>

          {stat.meta && (
            <p className="text-[11px] text-slate-500 leading-snug truncate mt-0.5">
              {stat.meta}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
