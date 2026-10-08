'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { StatRow } from '../../components/ui/StatRow';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { StudentDrawer } from '../../components/student/StudentDrawer';
import { PlacementPipelineKanban } from '../../components/placement/PlacementPipelineKanban';
import { mockAllApplications, mockStudents } from '../../data/mockData';
import { Student } from '../../types';
import { 
  Briefcase, 
  Building, 
  Users, 
  CheckCircle2, 
  Award, 
  BarChart3, 
  Calendar,
  Layers,
  ArrowUpRight,
  Filter
} from 'lucide-react';

export default function PlacementCommandPage() {
  const [viewMode, setViewMode] = useState<'kanban' | 'table'>('kanban');
  const [inspectedStudent, setInspectedStudent] = useState<Student | null>(null);

  const handleOpenStudent = (studentId: string) => {
    const student = mockStudents.find((s) => s.id === studentId) || mockStudents[0];
    setInspectedStudent(student);
  };

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                ARC Placement • Recruitment Command Center
              </span>
              <Badge variant="verified" size="sm" dot>
                Drive Funnels Active
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Campus Recruitment Pipelines & Offers
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              End-to-end recruitment funnel tracking across Super Dream, Dream, and Core engineering companies.
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <Link href="/placement/companies">
              <Button variant="outline" size="sm" leftIcon={<Building className="w-3.5 h-3.5" />}>
                Recruiter Directory
              </Button>
            </Link>
            <Link href="/placement/analytics">
              <Button variant="secondary" size="sm" leftIcon={<BarChart3 className="w-3.5 h-3.5" />}>
                CTC & Placement Analytics
              </Button>
            </Link>
          </div>
        </div>

        {/* High-Signal Stat Row (Rule 12 & 30) */}
        <StatRow
          stats={[
            {
              label: 'Active Campus Drives',
              value: '18 Drives',
              meta: 'Super Dream & Tier 1 Recruiters',
              badge: '2026 Cycle',
            },
            {
              label: 'Total In-Process Candidates',
              value: '842',
              meta: 'In active review funnels',
              badge: 'Campus Wide',
            },
            {
              label: 'Shortlisted for Assessments',
              value: '421',
              meta: 'Cleared preliminary criteria',
            },
            {
              label: 'Official Offers Released',
              value: '38 Offers',
              change: '+12 this week',
              trend: 'up',
              meta: 'Peak CTC: ₹54 LPA (Google)',
              badge: 'Confirmed',
            },
          ]}
        />

        {/* View Switcher Controls (Rule 30: Pipelines + Tables) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Operational View:
            </span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs">
              <button
                onClick={() => setViewMode('kanban')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  viewMode === 'kanban'
                    ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pipeline Stages (Kanban)
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  viewMode === 'table'
                    ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Candidate Roster (Table)
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link href="/placement/drives">
              <Button variant="outline" size="sm">
                View All 18 Drives Matrix →
              </Button>
            </Link>
          </div>
        </div>

        {/* Primary View Area */}
        {viewMode === 'kanban' ? (
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Multi-Stage Candidate Funnel
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Applied → Shortlisted → Assessment → Technical Round → HR Round → Offer
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500">Live Funnel</span>
            </div>
            <PlacementPipelineKanban />
          </div>
        ) : (
          <div className="rounded-xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden">
            <div className="px-5 py-3.5 border-b border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Placement Applications Roster
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {mockAllApplications.length} Candidates tracked
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Candidate</th>
                    <th className="px-3 py-3">ARC ID / Dept</th>
                    <th className="px-3 py-3">Company</th>
                    <th className="px-3 py-3">Role</th>
                    <th className="px-3 py-3">Package</th>
                    <th className="px-3 py-3">Stage</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {mockAllApplications.map((app) => (
                    <tr
                      key={app.id}
                      onClick={() => handleOpenStudent(app.studentId)}
                      className="hover:bg-slate-50/70 cursor-pointer transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {app.studentName}
                      </td>
                      <td className="px-3 py-3 font-mono text-slate-500">
                        {app.studentArcId} • {app.studentDepartment}
                      </td>
                      <td className="px-3 py-3 font-medium text-slate-900">
                        <Link
                          href={`/placement/companies`}
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-indigo-600 hover:underline"
                        >
                          {app.companyName}
                        </Link>
                      </td>
                      <td className="px-3 py-3 text-slate-600">{app.role}</td>
                      <td className="px-3 py-3 font-mono font-bold text-slate-900 tabular-nums">
                        ₹{app.packageLPA} LPA
                      </td>
                      <td className="px-3 py-3">
                        <Badge
                          variant={app.currentStage === 'Selected' ? 'success' : 'info'}
                          size="sm"
                          dot
                        >
                          {app.currentStage}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={`/placement/drives/${app.driveId}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center space-x-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                        >
                          <span>Drive Matrix</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
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
