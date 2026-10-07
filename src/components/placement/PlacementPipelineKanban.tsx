'use client';

import React from 'react';
import Link from 'next/link';
import { mockAllApplications } from '../../data/mockData';
import { ApplicationStage } from '../../types';
import { Briefcase, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';

const STAGES: { key: ApplicationStage; title: string; color: string }[] = [
  { key: 'Applied', title: 'Applied', color: 'border-slate-300 bg-slate-50 text-slate-700' },
  { key: 'Shortlisted', title: 'Shortlisted', color: 'border-blue-300 bg-blue-50 text-blue-700' },
  { key: 'Online Assessment', title: 'Online Assessment', color: 'border-indigo-300 bg-indigo-50 text-indigo-700' },
  { key: 'Technical Round', title: 'Technical Round', color: 'border-purple-300 bg-purple-50 text-purple-700' },
  { key: 'HR Round', title: 'HR Round', color: 'border-amber-300 bg-amber-50 text-amber-700' },
  { key: 'Selected', title: 'Selected / Offer', color: 'border-emerald-300 bg-emerald-50 text-emerald-700' },
];

export function PlacementPipelineKanban() {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4 min-w-[1100px]">
        {STAGES.map((stg) => {
          const appsInStage = mockAllApplications.filter((a) => a.currentStage === stg.key);

          return (
            <div key={stg.key} className="flex-1 bg-slate-100/70 rounded-xl p-3 border border-slate-200/80 flex flex-col">
              {/* Stage Header */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200">
                <div className="flex items-center space-x-1.5">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${stg.color}`}>
                    {stg.title}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                  {appsInStage.length}
                </span>
              </div>

              {/* Cards List */}
              <div className="space-y-2.5 flex-1 overflow-y-auto max-h-[520px]">
                {appsInStage.map((app) => (
                  <div
                    key={app.id}
                    className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs hover:border-indigo-300 hover:shadow-xs transition-all space-y-2 group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          href={`/pulse/students/${app.studentId}`}
                          className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 flex items-center space-x-1"
                        >
                          <span>{app.studentName}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {app.studentArcId} • CGPA {app.studentCgpa}
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        ₹{app.packageLPA} LPA
                      </span>
                    </div>

                    <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        href={`/placement/drives/${app.driveId}`}
                        className="font-medium text-slate-700 hover:text-indigo-600 truncate max-w-[130px]"
                        title={app.companyName}
                      >
                        {app.companyName} — {app.role.split('—')[0]}
                      </Link>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{app.appliedDate}</span>
                      </span>
                      {app.currentStage === 'Selected' ? (
                        <span className="text-emerald-600 font-semibold flex items-center space-x-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Placed</span>
                        </span>
                      ) : (
                        <span className="text-indigo-600 font-medium">In Funnel</span>
                      )}
                    </div>
                  </div>
                ))}

                {appsInStage.length === 0 && (
                  <div className="py-8 text-center text-slate-400 text-xs italic">
                    No candidates in this stage
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
