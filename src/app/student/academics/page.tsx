'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { StatRow } from '../../../components/ui/StatRow';
import { Badge } from '../../../components/ui/Badge';
import { mockStudents } from '../../../data/mockData';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { 
  GraduationCap, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  BookOpen
} from 'lucide-react';

export default function StudentAcademicsPage() {
  const student = mockStudents[0];

  const chartData = student.semesterGpa.map((s) => ({
    name: `Sem ${s.semester}`,
    gpa: s.gpa,
  }));

  const subjects = [
    { code: 'CS601', name: 'Database Management Systems', credits: 4, internal: 28, external: 64, total: 92, grade: 'O (Outstanding)', attendance: 92 },
    { code: 'CS602', name: 'Operating Systems & Kernels', credits: 4, internal: 26, external: 61, total: 87, grade: 'A+ (Excellent)', attendance: 88 },
    { code: 'CS603', name: 'Computer Networks', credits: 4, internal: 25, external: 58, total: 83, grade: 'A (Very Good)', attendance: 81 },
    { code: 'CS604L', name: 'Web Technology Laboratory', credits: 2, internal: 29, external: 66, total: 95, grade: 'O (Outstanding)', attendance: 94 },
    { code: 'CS605', name: 'Artificial Intelligence', credits: 3, internal: 24, external: 55, total: 79, grade: 'B+ (Good)', attendance: 79 },
    { code: 'CS606', name: 'Design & Analysis of Algorithms', credits: 3, internal: 27, external: 63, total: 90, grade: 'O (Outstanding)', attendance: 92 },
  ];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div className="border-b border-slate-200/80 pb-5">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Academic Governance • Transcripts & Evaluations
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Academic Performance & GPA Progression
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Certified university grade sheets, semester credit audits, and institutional grading benchmarks.
          </p>
        </div>

        {/* High-Signal Stat Row (Rule 12) */}
        <StatRow
          stats={[
            {
              label: 'Cumulative GPA (CGPA)',
              value: student.cgpa,
              change: '+0.04',
              trend: 'up',
              meta: 'Consistent 8.4+ across all 6 semesters',
              badge: 'Verified',
            },
            {
              label: 'Degree Credits Earned',
              value: `${student.creditsEarned} / ${student.creditsTotal}`,
              meta: 'On schedule for 2027 graduation',
              badge: 'CBCS System',
            },
            {
              label: 'Active Backlogs',
              value: '0',
              meta: '100% first-attempt clearance',
              badge: 'Zero Deficit',
            },
            {
              label: 'Current Semester SGPA',
              value: '8.72',
              change: '+0.12',
              trend: 'up',
              meta: 'Projected semester outcome',
            },
          ]}
        />

        {/* Distinguishing: Verified Data | AI Insight | Recommendation (Rule 58) */}
        <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3 shadow-2xs">
          <div className="flex items-center space-x-2 text-xs font-bold text-indigo-400">
            <Sparkles className="w-4 h-4" />
            <span>ARC Academic Intelligence Synthesis</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-xs">
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Verified Academic Fact</span>
              <p className="text-slate-200 leading-snug">
                Consistent &apos;O&apos; grades achieved in Core Computer Science theory and laboratory subjects.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] uppercase font-bold text-indigo-400 block">ARC System Insight</span>
              <p className="text-slate-200 leading-snug">
                Elective course CS605 (AI) attendance is 79.2%, 4.2% above the AICTE 75% cutoff threshold.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-400 block">Strategic Recommendation</span>
              <p className="text-slate-200 leading-snug">
                Attending the next 3 scheduled lecture hours in CS605 will securely elevate attendance margin to 84%.
              </p>
            </div>
          </div>
        </div>

        {/* Semester GPA Trend (Rule 56) */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                GPA Trend Across Six Semesters
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Scale 0.0 to 10.0 • Demonstrates continuous upward academic trajectory.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">Dean of Academics Verified</span>
          </div>

          <div className="w-full h-56 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis domain={[7.0, 9.5]} tick={{ fontSize: 11, fill: '#64748b' }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="gpa"
                  stroke="#4f46e5"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#4338ca' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Semester Course Evaluations Table (Rule 39) */}
        <div className="rounded-xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Semester 6 Course Evaluations & Grade Breakdowns
            </h3>
            <span className="text-[11px] text-slate-500 font-mono">Total: 20 Credits Registered</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Course Code</th>
                  <th className="px-4 py-3">Subject Name</th>
                  <th className="px-3 py-3">Credits</th>
                  <th className="px-3 py-3">Internal (30)</th>
                  <th className="px-3 py-3">External (70)</th>
                  <th className="px-3 py-3">Total (100)</th>
                  <th className="px-3 py-3">Grade Awarded</th>
                  <th className="px-4 py-3">Attendance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {subjects.map((sub) => (
                  <tr key={sub.code} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">{sub.code}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{sub.name}</td>
                    <td className="px-3 py-3 font-mono">{sub.credits}</td>
                    <td className="px-3 py-3 font-mono tabular-nums">{sub.internal}</td>
                    <td className="px-3 py-3 font-mono tabular-nums">{sub.external}</td>
                    <td className="px-3 py-3 font-mono font-bold text-slate-900 tabular-nums">{sub.total}</td>
                    <td className="px-3 py-3">
                      <span className="font-semibold text-indigo-700 font-mono text-[11px] bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/80">
                        {sub.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={sub.attendance >= 85 ? 'success' : 'warning'} size="sm" dot>
                        {sub.attendance}%
                      </Badge>
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
