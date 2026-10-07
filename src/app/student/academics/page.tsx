'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
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
import { GraduationCap, Award, TrendingUp, AlertTriangle, BookOpen, CheckCircle } from 'lucide-react';

export default function StudentAcademicsPage() {
  const student = mockStudents[0];

  const chartData = student.semesterGpa.map((s) => ({
    name: `Sem ${s.semester}`,
    gpa: s.gpa,
  }));

  const subjects = [
    { code: 'CS601', name: 'Database Management Systems', credits: 4, internal: 28, external: 64, total: 92, grade: 'O (Outstanding)', attendance: 92 },
    { code: 'CS602', name: 'Operating Systems', credits: 4, internal: 26, external: 61, total: 87, grade: 'A+ (Excellent)', attendance: 88 },
    { code: 'CS603', name: 'Computer Networks', credits: 4, internal: 25, external: 58, total: 83, grade: 'A (Very Good)', attendance: 81 },
    { code: 'CS604L', name: 'Web Technology Laboratory', credits: 2, internal: 29, external: 66, total: 95, grade: 'O (Outstanding)', attendance: 94 },
    { code: 'CS605', name: 'Artificial Intelligence', credits: 3, internal: 24, external: 55, total: 79, grade: 'B+ (Good)', attendance: 79 },
    { code: 'CS606', name: 'Design & Analysis of Algorithms', credits: 3, internal: 27, external: 63, total: 90, grade: 'O (Outstanding)', attendance: 92 },
  ];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Academic Performance • Transcripts & Evaluations
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Academic Records & GPA Progression
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Certified institutional grade sheets, subject credit audits, and semester trends.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs text-slate-500 font-semibold uppercase">Cumulative GPA (CGPA)</span>
            <div className="text-3xl font-extrabold font-mono text-slate-900 mt-1">{student.cgpa}</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">Consistent 8.4+ throughout all 6 semesters</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs text-slate-500 font-semibold uppercase">Degree Credits Earned</span>
            <div className="text-3xl font-extrabold font-mono text-indigo-600 mt-1">{student.creditsEarned} / 160</div>
            <p className="text-xs text-slate-500 mt-1">On schedule for 2027 graduation</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs text-slate-500 font-semibold uppercase">Active Backlogs</span>
            <div className="text-3xl font-extrabold font-mono text-emerald-600 mt-1">0</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">100% first-attempt clearance</p>
          </div>
        </div>

        {/* Academic Insights Banner */}
        <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-1.5">
          <div className="text-xs font-bold text-indigo-950 flex items-center space-x-1.5">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span>Automated Academic Insights (ARC Intelligence)</span>
          </div>
          <p className="text-xs text-indigo-800 leading-relaxed">
            • Your strongest academic performance is in <strong>Computer Science Core Subjects</strong> (Algorithms, DBMS & Web Tech with &apos;O&apos; grades).
          </p>
          <p className="text-xs text-indigo-800 leading-relaxed">
            • Note: AI (CS605) attendance is currently at <strong>79.2%</strong>, approaching the university 75% eligibility cutoff. Attending the next 3 sessions will restore safety margin.
          </p>
        </div>

        {/* Semester GPA Chart */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Semester GPA Trend (Sem 1 to Sem 6)</h3>
            <span className="text-xs font-mono text-slate-400">Scale 0.0 - 10.0</span>
          </div>
          <div className="w-full h-56">
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
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Semester Subject Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Semester 6 Course Grades & Attendance Audit</h3>
            <span className="text-xs text-slate-500 font-mono">20 Total Credits</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Course Code & Title</th>
                  <th className="p-3">Credits</th>
                  <th className="p-3">Internal (30)</th>
                  <th className="p-3">External (70)</th>
                  <th className="p-3">Total (100)</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Attendance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {subjects.map((sub) => (
                  <tr key={sub.code} className="hover:bg-slate-50/60">
                    <td className="p-3">
                      <div className="font-bold text-slate-900">{sub.name}</div>
                      <div className="text-[11px] font-mono text-slate-400">{sub.code}</div>
                    </td>
                    <td className="p-3 font-mono font-medium text-slate-700">{sub.credits}</td>
                    <td className="p-3 font-mono font-medium text-slate-700">{sub.internal}</td>
                    <td className="p-3 font-mono font-medium text-slate-700">{sub.external}</td>
                    <td className="p-3 font-mono font-bold text-slate-900">{sub.total}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold font-mono">
                        {sub.grade}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`font-mono font-semibold ${sub.attendance < 80 ? 'text-amber-600' : 'text-emerald-600'}`}>
                        {sub.attendance}%
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
