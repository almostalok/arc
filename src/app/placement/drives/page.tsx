'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/layout/AppShell';
import { mockDrives } from '../../../data/mockData';
import { Briefcase, ArrowUpRight, Calendar, Users, Award, CheckCircle2 } from 'lucide-react';

export default function DrivesListPage() {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
            Campus Placement Drives • Session 2024–25
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Active Recruitment Drives
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Institutional drives open for candidate registration, screening, and interview evaluation.
          </p>
        </div>

        {/* Drives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockDrives.map((d) => (
            <div
              key={d.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-2xs transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-base text-slate-800">
                      {d.companyName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {d.companyName}
                      </h3>
                      <p className="text-xs text-slate-500">{d.role}</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ₹{d.packageLPA} LPA
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {d.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-100 text-center font-mono">
                  <div className="p-2 rounded-lg bg-slate-50">
                    <span className="text-[10px] text-slate-400 block">Eligible</span>
                    <span className="text-xs font-bold text-slate-800">{d.eligibleStudentsCount}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50">
                    <span className="text-[10px] text-slate-400 block">Applied</span>
                    <span className="text-xs font-bold text-slate-800">{d.appliedCount}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50">
                    <span className="text-[10px] text-slate-400 block">Shortlisted</span>
                    <span className="text-xs font-bold text-indigo-700">{d.shortlistedCount}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50">
                    <span className="text-[10px] text-slate-400 block">Selected</span>
                    <span className="text-xs font-bold text-emerald-700">{d.selectedCount}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  Deadline: {d.deadlineDate}
                </span>
                <Link
                  href={`/placement/drives/${d.id}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 text-white font-semibold flex items-center space-x-1.5 transition-colors shadow-2xs"
                >
                  <span>Open Drive Funnel</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
