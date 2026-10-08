'use client';

import React from 'react';

interface TalentScoreProps {
  label: string;
  score: number;
  evidence: string;
  category?: 'coding' | 'development' | 'communication' | 'leadership' | 'academic' | 'career';
}

const categoryColors: Record<string, { bar: string; text: string }> = {
  coding: { bar: 'bg-indigo-600', text: 'text-indigo-700' },
  development: { bar: 'bg-blue-600', text: 'text-blue-700' },
  communication: { bar: 'bg-emerald-600', text: 'text-emerald-700' },
  leadership: { bar: 'bg-amber-600', text: 'text-amber-700' },
  academic: { bar: 'bg-purple-600', text: 'text-purple-700' },
  career: { bar: 'bg-slate-800', text: 'text-slate-800' },
};

export function TalentScore({
  label,
  score,
  evidence,
  category = 'coding',
}: TalentScoreProps) {
  const colors = categoryColors[category] || categoryColors.coding;

  return (
    <div className="p-3 rounded-lg border border-slate-200/80 bg-white space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-800">{label}</span>
        <div className="flex items-baseline space-x-1">
          <span className={`font-mono font-bold text-sm tabular-nums ${colors.text}`}>
            {score}
          </span>
          <span className="text-[10px] text-slate-400 font-mono">/ 100</span>
        </div>
      </div>

      {/* Progress track */}
      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-full rounded-full ${colors.bar}`}
          style={{ width: `${Math.min(100, Math.max(0, score))}%` }}
        />
      </div>

      {/* Evidence footnote (Rule 28) */}
      <div className="text-[11px] text-slate-500 font-mono leading-tight flex items-center space-x-1 truncate">
        <span className="text-slate-400">•</span>
        <span className="truncate">{evidence}</span>
      </div>
    </div>
  );
}
