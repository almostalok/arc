'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { StatRow } from '../../components/ui/StatRow';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { StudentDrawer } from '../../components/student/StudentDrawer';
import { mockStudents } from '../../data/mockData';
import { Student } from '../../types';
import { 
  Layers, 
  Users, 
  GraduationCap, 
  CalendarCheck, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  Award,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export default function HodDashboardPage() {
  const [inspectedStudent, setInspectedStudent] = useState<Student | null>(null);
  const cseStudents = mockStudents.filter((s) => s.departmentCode === 'CSE');

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                Department Directorate • Computer Science & Engineering
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                • Dr. Ramesh Chandra (Professor & HOD)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Department Governance & Academic Exceptions
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curricular delivery tracking, faculty teaching workload, student at-risk exceptions, and placement benchmarks.
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <Link href="/hod/students">
              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Student Roster & At-Risk Roster
              </Button>
            </Link>
          </div>
        </div>

        {/* High-Signal Stat Row (Rule 36) */}
        <StatRow
          stats={[
            {
              label: 'CSE Headcount',
              value: '824',
              meta: 'Across 4 undergraduate batches',
              badge: 'Department Total',
            },
            {
              label: 'Mean Department GPA',
              value: '8.12',
              change: '+0.14',
              trend: 'up',
              meta: 'Highest across institution',
              badge: 'Rank #1',
            },
            {
              label: 'Aggregate Attendance',
              value: '88.2%',
              meta: 'Classroom & practical sessions',
              badge: 'Healthy',
            },
            {
              label: 'Placement Conversion',
              value: '91.4%',
              change: '+4.2%',
              trend: 'up',
              meta: 'Google, Microsoft, Razorpay, Juspay',
              badge: 'Day-0 / Day-1',
            },
          ]}
        />

        {/* 2-Column: Top Performers & At-Risk Interventions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Students */}
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-500" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Top Technical Performers (CSE)
                </h3>
              </div>
              <Link href="/pulse" className="text-xs text-indigo-600 font-semibold hover:underline">
                ARC Pulse →
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {cseStudents.slice(0, 4).map((s) => (
                <div
                  key={s.id}
                  onClick={() => setInspectedStudent(s)}
                  className="py-3 flex items-center justify-between text-xs hover:bg-slate-50/70 px-2 rounded-md cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{s.name}</div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {s.arcId} • LeetCode {s.evidence.codingRating}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-slate-900 tabular-nums">CGPA {s.cgpa}</div>
                    <span className="text-[10px] text-emerald-600 font-medium">Readiness {s.careerReadinessScore}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* At-Risk Remedial Interventions (Rule 36: Emphasize exceptions) */}
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-rose-600">
                <ShieldAlert className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Remedial Intervention Alerts
                </h3>
              </div>
              <Badge variant="danger" size="sm" dot>
                Immediate Action Required
              </Badge>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-lg border border-amber-200/90 bg-amber-50/60 text-xs space-y-1">
                <div className="flex justify-between font-semibold text-amber-950">
                  <span>Rohan Verma (Roll #2301042018)</span>
                  <span className="font-mono text-rose-600 font-bold">Attendance: 73.8%</span>
                </div>
                <p className="text-[11px] text-amber-900 leading-snug">
                  Below 75% regulatory cutoff in Operating Systems & AI. Mandatory mentorship notice generated for parent consultation.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-amber-200/90 bg-amber-50/60 text-xs space-y-1">
                <div className="flex justify-between font-semibold text-amber-950">
                  <span>Vikram Aditya (Roll #2301042022)</span>
                  <span className="font-mono text-amber-700 font-bold">CGPA: 7.10</span>
                </div>
                <p className="text-[11px] text-amber-900 leading-snug">
                  Approaching minimum GPA threshold for upcoming Tier-1 campus drives. Assigned academic mentor: Prof. Shalini Mishra.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200/80 bg-slate-50/80 text-xs flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">CS605 (AI) Section A Midterm Outlier</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Section mean fell 4.2% following Unit 3 examination.</p>
                </div>
                <Button variant="outline" size="sm">
                  Schedule Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Workload Matrix (Rule 36) */}
        <div className="rounded-xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Department Faculty Workload & Syllabus Completion Status
            </h3>
            <span className="text-xs text-slate-500 font-mono">Odd Semester 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Faculty Member</th>
                  <th className="px-4 py-3">Assigned Course</th>
                  <th className="px-3 py-3">Batch / Section</th>
                  <th className="px-3 py-3">Student Load</th>
                  <th className="px-3 py-3">Syllabus Coverage</th>
                  <th className="px-4 py-3 text-right">Lectures Delivered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-900">Dr. Ramesh Chandra (HOD)</td>
                  <td className="px-4 py-3 text-slate-700">Database Management Systems (CS601)</td>
                  <td className="px-3 py-3 font-mono">CSE 6A</td>
                  <td className="px-3 py-3 font-mono tabular-nums">64</td>
                  <td className="px-3 py-3 font-mono text-emerald-600 font-bold tabular-nums">88%</td>
                  <td className="px-4 py-3 font-mono text-right font-medium text-slate-900 tabular-nums">46 / 50</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-900">Prof. Shalini Mishra</td>
                  <td className="px-4 py-3 text-slate-700">Operating Systems & Kernels (CS602)</td>
                  <td className="px-3 py-3 font-mono">CSE 6B</td>
                  <td className="px-3 py-3 font-mono tabular-nums">61</td>
                  <td className="px-3 py-3 font-mono text-emerald-600 font-bold tabular-nums">84%</td>
                  <td className="px-4 py-3 font-mono text-right font-medium text-slate-900 tabular-nums">44 / 50</td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-900">Prof. Neha Gupta</td>
                  <td className="px-4 py-3 text-slate-700">Web Technology Laboratory (CS604L)</td>
                  <td className="px-3 py-3 font-mono">CSE 6A + 6B</td>
                  <td className="px-3 py-3 font-mono tabular-nums">125</td>
                  <td className="px-3 py-3 font-mono text-emerald-600 font-bold tabular-nums">92%</td>
                  <td className="px-4 py-3 font-mono text-right font-medium text-slate-900 tabular-nums">29 / 31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Contextual Student Drawer */}
      <StudentDrawer
        student={inspectedStudent}
        isOpen={!!inspectedStudent}
        onClose={() => setInspectedStudent(null)}
      />
    </AppShell>
  );
}
