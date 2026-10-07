'use client';

import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface CareerReadinessProps {
  score: number;
  breakdown: {
    label: string;
    score: number;
    completed: boolean;
  }[];
  recommendations?: string[];
}

export function CareerReadinessScore({
  score,
  breakdown,
  recommendations = [
    'Add 1 production-level system design project with live demo URL',
    'Complete AWS Solutions Architect or Cloud Practitioner certification',
    'Participate in College Mock Interview Drive Round 2',
    'Request verified recommendation letter for Juspay internship',
  ],
}: CareerReadinessProps) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>Career Readiness Index</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-800 mt-0.5">
            Institutional Placement Eligibility & Competence
          </h3>
        </div>
        <div className="flex items-baseline space-x-1 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-xl">
          <span className="text-2xl font-black font-mono text-indigo-700">{score}</span>
          <span className="text-xs text-indigo-500 font-semibold">/100</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${score}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] text-slate-600 mt-1 font-mono">
          <span>Campus Threshold: 70%</span>
          <span className="font-semibold text-emerald-600">Tier 1 Eligible (Top 5%)</span>
        </div>
      </div>

      {/* Dimensions Breakdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
        {breakdown.map((item, idx) => (
          <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-medium text-slate-600">{item.label}</div>
              <div className="text-xs font-bold text-slate-900 font-mono mt-0.5">
                {item.score}%
              </div>
            </div>
            {item.completed ? (
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            ) : (
              <span className="text-[10px] font-bold text-amber-600 font-mono">
                PENDING
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Recommendations */}
      {recommendations && recommendations.length > 0 && (
        <div className="pt-2 border-t border-slate-100">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
            Targeted Actions to Reach 98%+ Readiness
          </div>
          <div className="space-y-1.5">
            {recommendations.map((rec, rIdx) => (
              <div key={rIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                <ArrowRight className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
