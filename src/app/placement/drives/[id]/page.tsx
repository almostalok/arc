'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { AppShell } from '../../../../components/layout/AppShell';
import { mockDrives, mockAllApplications } from '../../../../data/mockData';
import { 
  ArrowLeft, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  Users, 
  Calendar, 
  Award, 
  Building,
  ArrowUpRight
} from 'lucide-react';

export default function DriveDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrappedParams = use(params);
  const drive = mockDrives.find((d) => d.id === unwrappedParams.id) || mockDrives[0];
  const driveApplications = mockAllApplications.filter((a) => a.driveId === drive.id);

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <Link
          href="/placement/drives"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Drives</span>
        </Link>

        {/* Drive Overview Hero Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-white text-slate-900 font-black text-2xl flex items-center justify-center shadow-lg">
                {drive.companyName.charAt(0)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{drive.companyName}</h1>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-400/30">
                    {drive.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-300">{drive.role}</p>
                <div className="text-xs text-slate-400 font-mono pt-1">
                  Announced: {drive.announcementDate} • Application Cutoff: {drive.deadlineDate}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 self-start md:self-auto">
              <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Package (CTC)</span>
                <span className="text-2xl font-black font-mono text-emerald-400">
                  ₹{drive.packageLPA} LPA
                </span>
              </div>
            </div>
          </div>

          {/* 5 Funnel Stages Numbers from Section 24 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6 pt-6 border-t border-slate-800/80 text-center font-mono">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Eligible Students</span>
              <span className="text-xl font-bold text-white mt-0.5">{drive.eligibleStudentsCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Applications</span>
              <span className="text-xl font-bold text-white mt-0.5">{drive.appliedCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Shortlisted</span>
              <span className="text-xl font-bold text-indigo-400 mt-0.5">{drive.shortlistedCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Interviewed</span>
              <span className="text-xl font-bold text-amber-400 mt-0.5">{drive.interviewedCount}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Selected / Offers</span>
              <span className="text-xl font-bold text-emerald-400 mt-0.5">{drive.selectedCount}</span>
            </div>
          </div>
        </div>

        {/* Section 24 Timeline Flow */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Recruitment Drive Evaluation Timeline</h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {drive.rounds.map((rnd, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border flex flex-col justify-between space-y-2 ${
                  rnd.status === 'Completed'
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                    : rnd.status === 'In Progress'
                    ? 'bg-indigo-50/70 border-indigo-300 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold">Round {idx + 1}</span>
                  {rnd.status === 'Completed' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : rnd.status === 'In Progress' ? (
                    <Clock className="w-4 h-4 text-indigo-600 animate-spin-slow" />
                  ) : (
                    <span className="w-3 h-3 rounded-full border border-slate-300" />
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-snug">{rnd.name}</h4>
                  <div className="text-[10px] font-mono mt-1 opacity-80">{rnd.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shortlisted Candidates in Funnel Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Candidates in this Drive</h3>
            <span className="text-xs text-slate-400 font-mono">{driveApplications.length} Candidates tracked in ARC</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Arc ID</th>
                  <th className="p-3">Dept</th>
                  <th className="p-3">CGPA</th>
                  <th className="p-3">Current Round</th>
                  <th className="p-3 text-right">Unified Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {driveApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{app.studentName}</td>
                    <td className="p-3 font-mono text-slate-500">{app.studentArcId}</td>
                    <td className="p-3 font-semibold text-slate-700">{app.studentDepartment}</td>
                    <td className="p-3 font-mono font-bold text-slate-900">{app.studentCgpa}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold text-xs">
                        {app.currentStage}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Link
                        href={`/pulse/students/${app.studentId}`}
                        className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        <span>Open Talent Profile</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
