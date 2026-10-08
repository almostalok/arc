'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { StatRow } from '../../components/ui/StatRow';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { 
  Users, 
  CalendarCheck, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  FileCheck,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function FacultyDashboardPage() {
  const [markedToday, setMarkedToday] = useState(false);

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                Faculty Instruction Workbench
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                • Prof. Shalini Mishra (Associate Professor, CSE)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Teaching Overview & Course Actions
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Lecture attendance marking, continuous evaluation grading, and student threshold alerts.
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <Button
              variant={markedToday ? 'outline' : 'secondary'}
              size="sm"
              leftIcon={<CalendarCheck className="w-3.5 h-3.5" />}
              onClick={() => {
                setMarkedToday(true);
              }}
            >
              {markedToday ? 'Attendance Synced ✓' : 'Mark Next Lecture Attendance'}
            </Button>
          </div>
        </div>

        {/* Action Priority Grid (Rule 35: Faculty UI should prioritize actions) */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Immediate Teaching Actions Pending Today
            </h3>
            <span className="text-xs text-slate-500 font-mono">3 items requiring review</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Action 1: Next Class Attendance */}
            <div className="p-4 rounded-lg border border-slate-200/80 bg-slate-50/50 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="info" size="sm">Today · 11:00 AM</Badge>
                  <span className="font-mono text-slate-500 text-[11px]">Room A-301</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs pt-1">
                  Operating Systems (CS602) • Section B
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Lecture 45 of 50: Virtual Memory Page Replacement Algorithms.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => setMarkedToday(true)}
                >
                  {markedToday ? 'Attendance Logged (58/61)' : 'Launch Attendance Sheet'}
                </Button>
              </div>
            </div>

            {/* Action 2: Submissions to Grade */}
            <div className="p-4 rounded-lg border border-slate-200/80 bg-slate-50/50 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="warning" size="sm">24 Submissions</Badge>
                  <span className="font-mono text-slate-500 text-[11px]">Due Today</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs pt-1">
                  Lab Exercise 6: Shell Scripting
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  24 students submitted practical solutions awaiting code evaluation.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <Link href="/faculty/students" className="block">
                  <Button variant="outline" size="sm" className="w-full">
                    Open Grading Rubric
                  </Button>
                </Link>
              </div>
            </div>

            {/* Action 3: At-Risk Attendance Alerts */}
            <div className="p-4 rounded-lg border border-slate-200/80 bg-slate-50/50 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="danger" size="sm">3 Students at Risk</Badge>
                  <span className="font-mono text-slate-500 text-[11px]">Margin &lt; 76%</span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs pt-1">
                  Attendance Regulatory Alerts
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  3 learners are 1 lecture away from exam debarment in CS602.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <Link href="/faculty/classes" className="block">
                  <Button variant="outline" size="sm" className="w-full">
                    Review At-Risk Roster
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* High-Signal Stat Row */}
        <StatRow
          stats={[
            {
              label: 'Total Assigned Students',
              value: '125',
              meta: 'Across 2 lecture batches (CSE 6A & 6B)',
              badge: 'Enrolled',
            },
            {
              label: 'Lectures Delivered',
              value: '44 / 50',
              change: '+2 this week',
              trend: 'up',
              meta: '88% syllabus covered',
            },
            {
              label: 'Class Attendance Average',
              value: '89.1%',
              meta: 'Well above 75% regulatory cutoff',
              badge: 'Healthy',
            },
            {
              label: 'Course Bank Material',
              value: '14 Files',
              meta: 'Lecture slides & lab guides uploaded',
            },
          ]}
        />

        {/* Assigned Courses Cards */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Assigned Courses & Lecture Batches
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="neutral" size="sm">CS602 • Core Theory</Badge>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">Operating Systems & Kernels</h4>
                  <p className="text-xs text-slate-500">B.Tech CSE • Semester 6 • Section B (61 Students)</p>
                </div>
                <Link href="/faculty/classes">
                  <Button variant="outline" size="sm">View Class</Button>
                </Link>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Coverage: 44/50 Lectures</span>
                <span className="font-mono font-semibold text-emerald-600">89.4% Attendance</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="neutral" size="sm">CS604L • Laboratory</Badge>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">Web Technology Laboratory</h4>
                  <p className="text-xs text-slate-500">B.Tech CSE • Semester 6 • Section A (64 Students)</p>
                </div>
                <Link href="/faculty/classes">
                  <Button variant="outline" size="sm">View Lab</Button>
                </Link>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Coverage: 22/24 Lab Sessions</span>
                <span className="font-mono font-semibold text-emerald-600">92.1% Attendance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
