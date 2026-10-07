'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/layout/AppShell';
import { mockStudents } from '../../../data/mockData';
import { Search, ArrowUpRight, AlertTriangle, ShieldCheck, Mail, Users } from 'lucide-react';

export default function HodStudentsRosterPage() {
  const [filterMode, setFilterMode] = useState<'All' | 'At Risk' | 'High Potential'>('All');
  const [search, setSearch] = useState('');

  const cseStudents = mockStudents.filter((s) => s.departmentCode === 'CSE');

  const filtered = cseStudents.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.arcId.toLowerCase().includes(search.toLowerCase());
    if (filterMode === 'At Risk') return matchesSearch && (s.status === 'At Risk' || s.attendancePercentage < 80);
    if (filterMode === 'High Potential') return matchesSearch && s.careerReadinessScore >= 90;
    return matchesSearch;
  });

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Department Roster • CSE Enrollment
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Student Roster & Remedial Monitoring
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Complete academic and biometric attendance records for all Computer Science & Engineering students.
          </p>
        </div>

        {/* Search & Tabs */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search CSE candidates by name or ARC ID..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-indigo-600 text-slate-900"
              />
            </div>

            <div className="flex gap-1.5">
              {(['All', 'High Potential', 'At Risk'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterMode(tab)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    filterMode === tab
                      ? 'bg-slate-900 text-white border-slate-900 font-bold'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Student Roster Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Student Identity</th>
                  <th className="p-3">Batch & Section</th>
                  <th className="p-3">CGPA</th>
                  <th className="p-3">Attendance %</th>
                  <th className="p-3">Readiness Index</th>
                  <th className="p-3">Academic Status</th>
                  <th className="p-3 text-right">Unified Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <img src={s.avatar} alt={s.name} className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200" />
                        <div>
                          <div className="font-bold text-slate-900">{s.name}</div>
                          <div className="text-[11px] text-slate-400 font-mono">{s.arcId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 font-mono text-slate-600">
                      {s.batch} (Sec {s.section})
                    </td>
                    <td className="p-3 font-mono font-bold text-slate-900">{s.cgpa}</td>
                    <td className="p-3 font-mono">
                      <span className={s.attendancePercentage < 80 ? 'text-rose-600 font-bold' : 'text-emerald-600 font-bold'}>
                        {s.attendancePercentage}%
                      </span>
                    </td>
                    <td className="p-3 font-mono font-bold text-indigo-700">
                      {s.careerReadinessScore} / 100
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded font-mono font-semibold text-[10px] ${
                        s.status === 'At Risk'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Link
                        href={`/pulse/students/${s.id}`}
                        className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        <span>Inspect Profile</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
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
