'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { StatRow } from '../../components/ui/StatRow';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
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
  Layers,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';

export default function DirectorDashboardPage() {
  const { setIsAiOpen } = useRole();

  const healthBreakdown = [
    { label: 'Academic Rigor', score: 91, status: 'Compliant' },
    { label: 'Student Retention', score: 86, status: 'Strong' },
    { label: 'Placement Conversion', score: 89, status: 'Above Target' },
    { label: 'Classroom Engagement', score: 82, status: 'Stable' },
    { label: 'Career Readiness Index', score: 87, status: 'Strong' },
  ];

  const departmentComparison = [
    { code: 'CSE', dept: 'Computer Science & Engineering', students: 824, gpa: 8.12, attendance: 88.2, placement: 91.4, avgPackage: '₹14.2 LPA', riskCount: 8 },
    { code: 'IT', dept: 'Information Technology', students: 480, gpa: 7.94, attendance: 86.5, placement: 88.0, avgPackage: '₹12.8 LPA', riskCount: 5 },
    { code: 'ECE', dept: 'Electronics & Communication', students: 620, gpa: 7.82, attendance: 85.1, placement: 84.2, avgPackage: '₹10.8 LPA', riskCount: 14 },
    { code: 'ME', dept: 'Mechanical Engineering', students: 510, gpa: 7.55, attendance: 82.4, placement: 72.0, avgPackage: '₹7.6 LPA', riskCount: 19 },
    { code: 'CE', dept: 'Civil Engineering', students: 420, gpa: 7.42, attendance: 81.0, placement: 68.5, avgPackage: '₹6.9 LPA', riskCount: 12 },
  ];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Executive Breadcrumb Drilldown Path (Rule 34) */}
        <Breadcrumb
          items={[
            { label: 'Apex Institute of Technology', href: '/director' },
            { label: 'Directorate Governance', href: '/director' },
            { label: 'Campus Macro Telemetry', isCurrent: true },
          ]}
        />

        {/* Executive Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                Directorate Executive Command Center
              </span>
              <Badge variant="verified" size="sm" dot>
                Institutional Telemetry Synced
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Institution Overview & Executive Governance
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              High-signal, institution-level telemetry evaluating academic retention, regulatory compliance, department performance, and placement outcomes.
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<Sparkles className="w-3.5 h-3.5 text-white" />}
              onClick={() => setIsAiOpen(true)}
            >
              Query Institutional AI
            </Button>
            <Link href="/director/analytics">
              <Button variant="outline" size="sm">
                Executive Health Audit →
              </Button>
            </Link>
          </div>
        </div>

        {/* High-Signal Institution-Level Metric Row (Rule 33) */}
        <StatRow
          stats={[
            {
              label: 'Total Indexed Students',
              value: '8,421',
              meta: '5 Undergraduate Departments',
              badge: 'Campus Census',
            },
            {
              label: 'Institutional Mean GPA',
              value: '7.92',
              change: '+0.08',
              trend: 'up',
              meta: 'Target: 8.00 CGPA standard',
              badge: 'CBCS System',
            },
            {
              label: 'Aggregate Attendance',
              value: '86.4%',
              meta: 'Above 75% regulatory margin',
              badge: 'AICTE Compliant',
            },
            {
              label: 'Placement Conversion',
              value: '82.5%',
              change: '+3.1%',
              trend: 'up',
              meta: 'Avg CTC: ₹8.4 LPA (Peak: ₹54 LPA)',
              badge: '2026 Session',
            },
          ]}
        />

        {/* Institutional Health Score Banner (Calm, structured, Rule 7 & 12) */}
        <div className="p-6 rounded-xl bg-slate-900 text-white shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Institutional Health Index
              </span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-4xl font-bold font-mono text-emerald-400 tabular-nums">87</span>
                <span className="text-slate-400 font-mono text-sm">/ 100</span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Algorithmic synthesis across exam results, faculty instruction workload, student attendance buffers, and campus placement conversion rates.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">NAAC A++ Quality Metric</div>
                <div className="text-emerald-300 text-[11px]">Autonomous Accreditation Standards Met</div>
              </div>
            </div>
          </div>

          {/* 5-part Health Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4 border-t border-slate-800">
            {healthBreakdown.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block truncate">{item.label}</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-base font-bold font-mono text-white tabular-nums">{item.score}</span>
                  <span className="text-[10px] font-medium text-emerald-400">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Comparison Table with Drilldown (Rule 34 & 92) */}
        <div className="rounded-xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Academic, Retention & Placement Health by Department
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Click any department to drill down into section-level rosters and HOD analytics.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">Academic Year 2026–27</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-3 py-3">Students</th>
                  <th className="px-3 py-3">Mean GPA</th>
                  <th className="px-3 py-3">Attendance</th>
                  <th className="px-3 py-3">Placement %</th>
                  <th className="px-3 py-3">Avg CTC</th>
                  <th className="px-3 py-3">At-Risk Count</th>
                  <th className="px-4 py-3 text-right">Drill Down</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {departmentComparison.map((dep) => (
                  <tr key={dep.dept} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-bold border border-slate-200">
                          {dep.code}
                        </span>
                        <span className="font-semibold text-slate-900">{dep.dept}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 font-mono text-slate-600 tabular-nums">{dep.students}</td>
                    <td className="px-3 py-3 font-mono font-bold text-slate-900 tabular-nums">{dep.gpa}</td>
                    <td className="px-3 py-3 font-mono text-slate-700 tabular-nums">{dep.attendance}%</td>
                    <td className="px-3 py-3 font-mono font-bold text-indigo-700 tabular-nums">{dep.placement}%</td>
                    <td className="px-3 py-3 font-mono font-bold text-emerald-700 tabular-nums">{dep.avgPackage}</td>
                    <td className="px-3 py-3">
                      <Badge variant={dep.riskCount > 10 ? 'warning' : 'neutral'} size="sm" dot>
                        {dep.riskCount} Students
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href="/hod"
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                      >
                        <span>Inspect HOD Roster</span>
                        <ChevronRight className="w-3.5 h-3.5" />
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
