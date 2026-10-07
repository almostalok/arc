'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { MetricCard } from '../../components/ui/MetricCard';
import { mockStudents } from '../../data/mockData';
import { 
  Layers, 
  Users, 
  GraduationCap, 
  CalendarCheck, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight,
  CheckCircle2,
  Award,
  Clock
} from 'lucide-react';

export default function HodDashboardPage() {
  const cseStudents = mockStudents.filter((s) => s.departmentCode === 'CSE');
  const atRiskStudents = mockStudents.filter((s) => s.status === 'At Risk' || s.attendancePercentage < 80);

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Department Directorate • CSE Division
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                Dr. Ramesh Chandra (HOD)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Computer Science & Engineering Command
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Curricular tracking, faculty allocation, student at-risk interventions, and placement outcomes.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/hod/students"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-2xs"
            >
              <span>Student Roster & At-Risk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Core Department Metrics from Section 29 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="CSE Headcount"
            value="824"
            subtitle="Across 4 batches"
            icon={Users}
            badge="Enrolled"
          />
          <MetricCard
            title="Department Average GPA"
            value="8.12"
            subtitle="Highest among engineering depts"
            change="+0.14"
            trend="up"
            icon={GraduationCap}
          />
          <MetricCard
            title="Aggregate Attendance"
            value="88.2%"
            subtitle="Classroom & Lab sessions"
            icon={CalendarCheck}
          />
          <MetricCard
            title="Placement Conversion"
            value="91.4%"
            subtitle="Google, Microsoft, Razorpay"
            change="+4.2%"
            trend="up"
            icon={TrendingUp}
          />
        </div>

        {/* 2-Column: Top Performers & At-Risk Roster */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Students */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900">Top Technical Students (CSE)</h3>
              </div>
              <Link href="/pulse" className="text-xs text-indigo-600 font-semibold hover:underline">
                Explore in ARC Pulse →
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {cseStudents.slice(0, 4).map((s) => (
                <div key={s.id} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    <img src={s.avatar} alt={s.name} className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200" />
                    <div>
                      <div className="font-bold text-slate-900">{s.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {s.arcId} • LeetCode {s.evidence.codingRating}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-indigo-700">CGPA {s.cgpa}</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">Readiness {s.careerReadinessScore}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* At-Risk Students & Attendance Alerts */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-rose-600">
                <AlertTriangle className="w-4 h-4" />
                <h3 className="text-sm font-bold text-slate-900">Immediate Remedial Intervention Alerts</h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold border border-rose-200">
                Requires Notice
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1">
                <div className="flex justify-between font-bold text-amber-950">
                  <span>Rohan Verma (ME • Arc #1145)</span>
                  <span className="font-mono text-rose-600">Attendance: 73.8%</span>
                </div>
                <p className="text-[11px] text-amber-800">
                  Below 75% cutoff in 2 theory subjects. Parent consultation alert dispatched.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1">
                <div className="flex justify-between font-bold text-amber-950">
                  <span>Vikram Aditya (CSE • Arc #1077)</span>
                  <span className="font-mono text-rose-600">CGPA: 7.10</span>
                </div>
                <p className="text-[11px] text-amber-800">
                  Approaching minimum criteria for upcoming Microsoft and Razorpay drives. Assigned faculty mentor: Prof. Shalini Mishra.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-200 text-xs flex items-center justify-between">
                <div>
                  <div className="font-bold text-indigo-950">CS605 (Artificial Intelligence) Class Average Alert</div>
                  <p className="text-[11px] text-indigo-700 mt-0.5">Section A average dropped 4.2% following Midterm Unit 3.</p>
                </div>
                <button
                  onClick={() => alert('Dispatched tutorial revision schedule to CSE Section A')}
                  className="px-2.5 py-1 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[11px] shrink-0 ml-2"
                >
                  Schedule Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Load & Course Performance Matrix */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Faculty Workload & Course Evaluation Status</h3>
            <span className="text-xs text-slate-400 font-mono">Odd Sem 2024–25</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Faculty Member</th>
                  <th className="p-3">Assigned Course</th>
                  <th className="p-3">Section</th>
                  <th className="p-3">Student Load</th>
                  <th className="p-3">Syllabus Completion</th>
                  <th className="p-3">Attendance Marked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Dr. Ramesh Chandra (HOD)</td>
                  <td className="p-3 text-slate-700">Database Management Systems (CS601)</td>
                  <td className="p-3 font-mono font-semibold">CSE 6A</td>
                  <td className="p-3 font-mono">64</td>
                  <td className="p-3 font-mono text-emerald-600 font-bold">88%</td>
                  <td className="p-3 font-mono text-emerald-600 font-bold">46 / 50 Lectures</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Prof. Shalini Mishra</td>
                  <td className="p-3 text-slate-700">Operating Systems (CS602)</td>
                  <td className="p-3 font-mono font-semibold">CSE 6B</td>
                  <td className="p-3 font-mono">61</td>
                  <td className="p-3 font-mono text-emerald-600 font-bold">84%</td>
                  <td className="p-3 font-mono text-emerald-600 font-bold">44 / 50 Lectures</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Prof. Neha Gupta</td>
                  <td className="p-3 text-slate-700">Web Technology Laboratory (CS604L)</td>
                  <td className="p-3 font-mono font-semibold">CSE 6A + 6B</td>
                  <td className="p-3 font-mono">125</td>
                  <td className="p-3 font-mono text-emerald-600 font-bold">92%</td>
                  <td className="p-3 font-mono text-emerald-600 font-bold">29 / 31 Labs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
