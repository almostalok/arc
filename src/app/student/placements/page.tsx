'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/layout/AppShell';
import { mockStudents } from '../../../data/mockData';
import { ApplicationStage } from '../../../types';
import { Briefcase, CheckCircle2, Clock, Calendar, ArrowRight, Building, ExternalLink } from 'lucide-react';

const ALL_STAGES: ApplicationStage[] = [
  'Applied',
  'Shortlisted',
  'Online Assessment',
  'Technical Round',
  'HR Round',
  'Selected',
];

export default function StudentPlacementsPage() {
  const student = mockStudents[0];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Career Management • Campus Recruitment Funnels
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Placement Application Tracking
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real-time multi-stage status, interview dates, and offer releases for your active applications.
            </p>
          </div>

          <Link
            href="/placement/drives"
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center space-x-1.5 self-start sm:self-auto shadow-2xs"
          >
            <span>Explore All Active Campus Drives</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          {student.applications.map((app) => (
            <div
              key={app.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-base text-slate-800">
                    {app.companyName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base font-bold text-slate-900">{app.companyName}</h3>
                      <Link
                        href={`/placement/drives/${app.driveId}`}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center space-x-0.5"
                      >
                        <span>View Drive</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <p className="text-xs text-slate-500">{app.role}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-mono block">Compensation</span>
                    <span className="text-base font-extrabold font-mono text-emerald-700">
                      ₹{app.packageLPA} LPA
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Current: {app.currentStage}
                  </span>
                </div>
              </div>

              {/* Progress Stepper Flow */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Application Lifecycle Pipeline
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {ALL_STAGES.map((stg, sIdx) => {
                    const timelineItem = app.timeline.find((t) => t.stage === stg);
                    const isCompleted = timelineItem?.completed;
                    const isCurrent = app.currentStage === stg;

                    return (
                      <div
                        key={stg}
                        className={`p-3 rounded-xl border flex flex-col justify-between space-y-2 ${
                          isCompleted
                            ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                            : isCurrent
                            ? 'bg-indigo-50/80 border-indigo-300 text-indigo-950 ring-2 ring-indigo-500/20'
                            : 'bg-slate-50/40 border-slate-200 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold">
                            0{sIdx + 1}
                          </span>
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : isCurrent ? (
                            <Clock className="w-4 h-4 text-indigo-600 animate-spin-slow" />
                          ) : (
                            <span className="w-3 h-3 rounded-full border border-slate-300 inline-block" />
                          )}
                        </div>

                        <div>
                          <div className="text-xs font-bold leading-tight">{stg}</div>
                          <div className="text-[10px] font-mono mt-0.5 opacity-80">
                            {timelineItem?.date || 'Pending'}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stage Specific Note / Upcoming action */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Calendar className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>
                    Status Note: <strong>{app.stageDate}</strong>
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  Applied on {app.appliedDate} via ARC Unified Gateway
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
