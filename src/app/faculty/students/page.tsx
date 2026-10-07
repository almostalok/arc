'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/layout/AppShell';
import { mockStudents } from '../../../data/mockData';
import { ArrowUpRight, GraduationCap, Award } from 'lucide-react';

export default function FacultyStudentsEvaluationPage() {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
            Evaluation Matrix • Operating Systems (CS602)
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Student Marks & Internal Evaluations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Continuous internal assessment, midterm tests, and lab assignment scores.
          </p>
        </div>

        {/* Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Student Identity</th>
                  <th className="p-3 font-mono">Midterm 1 (20)</th>
                  <th className="p-3 font-mono">Midterm 2 (20)</th>
                  <th className="p-3 font-mono">Assignments (10)</th>
                  <th className="p-3 font-mono">Total Internal (30)</th>
                  <th className="p-3">Performance Grade</th>
                  <th className="p-3 text-right">Student Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {mockStudents.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="p-3 font-sans">
                      <div className="font-bold text-slate-900">{s.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{s.arcId}</div>
                    </td>
                    <td className="p-3 text-slate-700">18 / 20</td>
                    <td className="p-3 text-slate-700">19 / 20</td>
                    <td className="p-3 text-slate-700">9 / 10</td>
                    <td className="p-3 font-bold text-indigo-700">28 / 30</td>
                    <td className="p-3 font-sans">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                        Distinction
                      </span>
                    </td>
                    <td className="p-3 text-right font-sans">
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
