'use client';

import React from 'react';
import { LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: LucideIcon;
  badge?: string;
  onClick?: () => void;
}

export function MetricCard({
  title,
  value,
  subtitle,
  change,
  trend,
  icon: Icon,
  badge,
  onClick,
}: MetricCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs transition-all ${
        onClick ? 'cursor-pointer hover:border-indigo-300 hover:shadow-xs' : ''
      }`}
    >
      <div className="flex items-center justify-between text-slate-500 mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 truncate">
          {title}
        </span>
        {Icon && (
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
          {value}
        </span>
        {change && (
          <span
            className={`text-xs font-semibold flex items-center ${
              trend === 'up'
                ? 'text-emerald-600'
                : trend === 'down'
                ? 'text-rose-600'
                : 'text-slate-500'
            }`}
          >
            {trend === 'up' && <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />}
            {trend === 'down' && <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
            {change}
          </span>
        )}
        {badge && (
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold border border-slate-200">
            {badge}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-[11px] text-slate-600 mt-1.5 leading-snug truncate">
          {subtitle}
        </p>
      )}
    </div>
  );
}
