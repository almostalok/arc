'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { StatRow } from '../../components/ui/StatRow';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { CareerReadinessScore } from '../../components/student/CareerReadinessScore';
import { mockStudents, mockNotices, mockDetectedEmails } from '../../data/mockData';
import { 
  GraduationCap, 
  CalendarCheck, 
  Award, 
  Briefcase, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Calendar, 
  AlertCircle, 
  Mail, 
  ChevronRight,
  ExternalLink,
  BookOpen,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function StudentDashboardPage() {
  const student = mockStudents[0]; // Alok Kumar Singh

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Email Intelligence Alert banner */}
        <div className="p-3.5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 rounded-lg bg-indigo-600 text-white shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-white">
                ARC Mail Intelligence: {mockDetectedEmails.length} recruitment updates detected
              </span>
              <span className="text-slate-300 hidden sm:inline ml-2">
                — Google Technical Round confirmed · Microsoft OA score synced.
              </span>
            </div>
          </div>
          <Link
            href="/settings/integrations"
            className="text-xs font-semibold text-indigo-300 hover:text-white flex items-center space-x-1 shrink-0"
          >
            <span>Review Activity</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Header Greeting conforming strictly to Rule 21 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Student Operating System • Semester 6
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Good morning, {student.name.split(' ')[0]}. Here&apos;s what needs your attention today.
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              B.Tech Computer Science & Engineering • Section {student.section} • Roll: {student.rollNumber}
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <Link href="/student/profile">
              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Unified Digital ID
              </Button>
            </Link>
          </div>
        </div>

        {/* Priority Attention Strip (Rule 20: What should this user know or do right now?) */}
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="font-semibold text-amber-950">
                Attendance Margin Warning:
              </span>
              <span className="text-amber-800 ml-1.5">
                Database Management Systems attendance is currently <strong>81.2%</strong>. You can miss at most 2 more lectures before breaching the 75% regulatory debarment threshold.
              </span>
            </div>
          </div>
          <Link
            href="/student/attendance"
            className="text-xs font-semibold text-amber-900 hover:underline shrink-0"
          >
            View Subject Attendance Log →
          </Link>
        </div>

        {/* High-Signal Operational Stat Row (Replaces 4 generic KPI cards, Rule 12) */}
        <StatRow
          stats={[
            {
              label: 'Cumulative GPA',
              value: student.cgpa,
              change: '+0.04',
              trend: 'up',
              meta: 'Ranked top 3% in CSE Dept',
              badge: 'Verified',
            },
            {
              label: 'Overall Attendance',
              value: `${student.attendancePercentage}%`,
              change: '+1.2%',
              trend: 'up',
              meta: 'Regulatory threshold is 75%',
              badge: 'Safe',
            },
            {
              label: 'Degree Credits Earned',
              value: `${student.creditsEarned} / ${student.creditsTotal}`,
              meta: '64 credits remaining to graduate',
              badge: 'B.Tech CBCS',
            },
            {
              label: 'Active Placement Drives',
              value: `${student.applications.length} Drives`,
              meta: 'Google, Microsoft, Deloitte',
              badge: 'In Pipeline',
            },
          ]}
        />

        {/* 2-Column Operational Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: Schedule, Applications & Notices */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Schedule */}
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Today&apos;s Lecture Schedule
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Monday • Odd Semester 2026</span>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <span className="text-xs font-mono font-bold text-slate-900 w-12 tabular-nums">09:00</span>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Database Management Systems</div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5 text-slate-400" /> Room B-204</span>
                        <span>•</span>
                        <span>Dr. Ramesh Chandra (HOD)</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-medium border border-slate-200/60">
                    Lecture
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <span className="text-xs font-mono font-bold text-slate-900 w-12 tabular-nums">11:00</span>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Operating Systems & Kernels</div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5 text-slate-400" /> Room A-301</span>
                        <span>•</span>
                        <span>Prof. Shalini Mishra</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-medium border border-slate-200/60">
                    Lecture
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <span className="text-xs font-mono font-bold text-slate-900 w-12 tabular-nums">14:00</span>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Web Technology Laboratory</div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5 text-slate-400" /> Advanced Lab 3</span>
                        <span>•</span>
                        <span>Prof. Neha Gupta</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/80 font-mono font-medium">
                    Practical (2 hrs)
                  </span>
                </div>
              </div>
            </div>

            {/* Active Placement Applications (Connected Graph: Rule 91 & 92) */}
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Active Recruitment Pipeline
                  </h3>
                </div>
                <Link
                  href="/student/placements"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Application Tracker →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {student.applications.map((app) => (
                  <Link
                    key={app.id}
                    href={`/placement/drives/${app.driveId}`}
                    className="p-3.5 rounded-lg border border-slate-200/80 hover:border-indigo-300 hover:bg-slate-50/50 transition-all space-y-2 block group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {app.companyName}
                        </h4>
                        <p className="text-[11px] text-slate-500 truncate max-w-[130px]">{app.role}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/80">
                        ₹{app.packageLPA}L
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <Badge variant="info" size="sm">
                        {app.currentStage}
                      </Badge>
                      <span className="text-slate-400 font-mono text-[10px]">{app.appliedDate}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Institutional Circulars */}
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Institutional Circulars & Notices
                </h3>
                <Link
                  href="/student/notices"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  All Notices →
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                {mockNotices.slice(0, 3).map((n) => (
                  <div
                    key={n.id}
                    className="py-3 flex items-center justify-between hover:bg-slate-50/60 px-1 rounded-md transition-colors"
                  >
                    <div className="space-y-0.5 min-w-0 pr-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="neutral" size="sm">
                          {n.category}
                        </Badge>
                        <h4 className="text-xs font-semibold text-slate-900 truncate">{n.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">{n.summary}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0">{n.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Career Readiness & Upcoming Deadlines */}
          <div className="space-y-6">
            <CareerReadinessScore
              score={student.careerReadinessScore}
              breakdown={[
                { label: 'Profile Verification', score: 100, completed: true },
                { label: 'Master Resume', score: 100, completed: true },
                { label: 'GitHub Graph (1480 commits)', score: 94, completed: true },
                { label: 'LeetCode Rating (1842)', score: 96, completed: true },
                { label: 'Featured Projects (6)', score: 90, completed: true },
                { label: 'Cloud Certifications', score: 72, completed: false },
              ]}
            />

            {/* Upcoming Deadlines & Milestones (Calm institutional list, Rule 8 & 12) */}
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Deadlines & Milestones
                </h3>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/50 space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-900">
                    <span>Google Technical Round 1</span>
                    <span className="font-mono text-indigo-600 font-bold">14 Oct</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Live CoderPad with Staff Systems Engineer (11:00 AM IST)
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/50 space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-900">
                    <span>Mid-Semester Exams Begin</span>
                    <span className="font-mono text-slate-700 font-bold">21 Oct</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    DBMS & Operating Systems Theory papers scheduled
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/50 space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-900">
                    <span>Web Tech Laboratory Project</span>
                    <span className="font-mono text-slate-700 font-bold">18 Oct</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Deploy REST API & submit GitHub repository to faculty portal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
