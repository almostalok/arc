'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { MetricCard } from '../../components/ui/MetricCard';
import { useRole } from '../../context/RoleContext';
import { 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  CalendarCheck, 
  TrendingUp, 
  DollarSign, 
  Award, 
  Sparkles, 
  ArrowRight,
  Activity,
  Layers
} from 'lucide-react';

export default function DirectorDashboardPage() {
  const { setIsAiOpen } = useRole();

  const healthBreakdown = [
    { label: 'Academic Rigor', score: 91, status: 'Excellent' },
    { label: 'Student Success', score: 86, status: 'Strong' },
    { label: 'Placement Outcomes', score: 89, status: 'Surging' },
    { label: 'Classroom Engagement', score: 82, status: 'Good' },
    { label: 'Career Readiness', score: 87, status: 'Strong' },
  ];

  const departmentComparison = [
    { dept: 'Computer Science & Engineering', students: 824, gpa: 8.12, attendance: 88.2, placement: 91.4, avgPackage: '₹14.2 LPA' },
    { dept: 'Information Technology', students: 480, gpa: 7.94, attendance: 86.5, placement: 88.0, avgPackage: '₹12.8 LPA' },
    { dept: 'Electronics & Communication', students: 620, gpa: 7.82, attendance: 85.1, placement: 84.2, avgPackage: '₹10.8 LPA' },
    { dept: 'Mechanical Engineering', students: 510, gpa: 7.55, attendance: 82.4, placement: 72.0, avgPackage: '₹7.6 LPA' },
    { dept: 'Civil Engineering', students: 420, gpa: 7.42, attendance: 81.0, placement: 68.5, avgPackage: '₹6.9 LPA' },
  ];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                Directorate Executive Command Center
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200">
                Institutional Node
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Institution Overview & Telemetry
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              A real-time executive view of academic integrity, talent health, faculty load, and career outcomes.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsAiOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Query Institutional AI</span>
            </button>
            <Link
              href="/director/analytics"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
            >
              Executive Health Audit →
            </Link>
          </div>
        </div>

        {/* 6 Top-Level Master Metrics from Section 27 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <MetricCard
            title="Total Students"
            value="8,421"
            subtitle="5 Departments"
            icon={Users}
          />
          <MetricCard
            title="Average GPA"
            value="7.92"
            subtitle="Institutional mean"
            change="+0.08"
            trend="up"
            icon={GraduationCap}
          />
          <MetricCard
            title="Attendance"
            value="86.4%"
            subtitle="Above 75% threshold"
            icon={CalendarCheck}
          />
          <MetricCard
            title="Placement Rate"
            value="82.5%"
            subtitle="2024–25 session"
            change="+3.1%"
            trend="up"
            icon={TrendingUp}
          />
          <MetricCard
            title="Average CTC"
            value="₹8.4 LPA"
            subtitle="Campus benchmark"
            icon={DollarSign}
          />
          <MetricCard
            title="Highest Offer"
            value="₹54.0 LPA"
            subtitle="Google (Product SWE)"
            icon={Award}
          />
        </div>

        {/* Institutional Health Score Banner (Section 28) */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                Institutional Health Index
              </span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-5xl font-black font-mono text-emerald-400">87</span>
                <span className="text-slate-400 font-mono text-base">/ 100</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Calculated across verified examination performance, talent participation, and placement velocity.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div className="text-xs">
                <div className="font-bold text-white">NAAC A++ Benchmark</div>
                <div className="text-emerald-300 text-[11px]">Autonomous Accreditation Met</div>
              </div>
            </div>
          </div>

          {/* 5-part Health Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4 border-t border-slate-800">
            {healthBreakdown.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{item.label}</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-lg font-bold font-mono text-white">{item.score}</span>
                  <span className="text-[10px] font-semibold text-emerald-400">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Comparison Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Academic & Placement Health by Department</h3>
            <span className="text-xs text-slate-400 font-mono">Academic Year 2024–25</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Department</th>
                  <th className="p-3">Student Headcount</th>
                  <th className="p-3">Average GPA</th>
                  <th className="p-3">Class Attendance</th>
                  <th className="p-3">Placement %</th>
                  <th className="p-3 font-mono">Average Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {departmentComparison.map((dep) => (
                  <tr key={dep.dept} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{dep.dept}</td>
                    <td className="p-3 font-mono text-slate-600">{dep.students}</td>
                    <td className="p-3 font-mono font-bold text-slate-900">{dep.gpa}</td>
                    <td className="p-3 font-mono text-slate-700">{dep.attendance}%</td>
                    <td className="p-3 font-mono font-bold text-indigo-700">{dep.placement}%</td>
                    <td className="p-3 font-mono font-bold text-emerald-700">{dep.avgPackage}</td>
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
