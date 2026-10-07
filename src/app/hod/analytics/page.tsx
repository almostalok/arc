'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { BarChart3, TrendingUp, CheckCircle2, BookOpen } from 'lucide-react';

export default function HodAnalyticsPage() {
  const subjectAverages = [
    { code: 'CS601 (DBMS)', avg: 82, passRate: 98 },
    { code: 'CS602 (OS)', avg: 79, passRate: 96 },
    { code: 'CS603 (CN)', avg: 77, passRate: 94 },
    { code: 'CS604L (Web Tech)', avg: 91, passRate: 100 },
    { code: 'CS605 (AI)', avg: 74, passRate: 91 },
    { code: 'CS606 (DAA)', avg: 85, passRate: 97 },
  ];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Curricular Analytics • CSE Department
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Course Performance & Grade Distributions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Class aggregate evaluations, exam pass benchmarks, and syllabus telemetry across CSE subjects.
          </p>
        </div>

        {/* Chart */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Subject Class Averages (Out of 100)</h3>
            <span className="text-xs font-mono text-slate-400">Odd Semester 2024–25</span>
          </div>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectAverages} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="code" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis domain={[50, 100]} tick={{ fontSize: 11, fill: '#64748b' }} />
                <Tooltip />
                <Bar dataKey="avg" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Audit Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900">Course Examination Pass Statistics</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Course Code & Title</th>
                  <th className="p-3 font-mono">Class Mean Score</th>
                  <th className="p-3 font-mono">Pass Percentage</th>
                  <th className="p-3">Academic Health</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {subjectAverages.map((s) => (
                  <tr key={s.code} className="hover:bg-slate-50">
                    <td className="p-3 font-sans font-bold text-slate-900">{s.code}</td>
                    <td className="p-3 text-indigo-700 font-bold">{s.avg} / 100</td>
                    <td className="p-3 text-emerald-600 font-bold">{s.passRate}%</td>
                    <td className="p-3 font-sans">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        s.avg >= 80 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {s.avg >= 80 ? 'Normal' : 'Requires Tutorial'}
                      </span>
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
