'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { MetricCard } from '../../components/ui/MetricCard';
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
  BookOpen
} from 'lucide-react';

export default function StudentDashboardPage() {
  const student = mockStudents[0]; // Alok Kumar Singh

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Email Intelligence Alert banner */}
        <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-600 text-white shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-indigo-950">
                ARC detected {mockDetectedEmails.length} career-related updates in your mailbox
              </span>
              <span className="text-indigo-700 hidden sm:inline ml-2">
                — Google interview confirmation, Microsoft OA result & Deloitte update.
              </span>
            </div>
          </div>
          <Link
            href="/settings/integrations"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 shrink-0"
          >
            <span>Review Detected Activity</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Header Greeting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Student Operating System • Semester 6
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Good morning, {student.name.split(' ')[0]}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Here is your verified academic and career readiness snapshot for today.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/student/profile"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xs flex items-center space-x-1.5 transition-colors"
            >
              <span>View Unified Digital ID</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Core Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <MetricCard
            title="Cumulative GPA"
            value={student.cgpa}
            subtitle="Top 3% in CSE Dept"
            change="+0.04"
            trend="up"
            icon={GraduationCap}
            badge="Sem 1-6"
          />
          <MetricCard
            title="Overall Attendance"
            value={`${student.attendancePercentage}%`}
            subtitle="All subjects safe (>75%)"
            change="+1.2%"
            trend="up"
            icon={CalendarCheck}
            badge="Verified"
          />
          <MetricCard
            title="Credits Completed"
            value={`${student.creditsEarned} / ${student.creditsTotal}`}
            subtitle="60 credits remaining to degree"
            icon={Award}
            badge="B.Tech"
          />
          <MetricCard
            title="Placement Status"
            value="Active (3)"
            subtitle="Google, Microsoft, Deloitte"
            icon={Briefcase}
            badge="In Funnel"
          />
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: Schedule, Applications & Notices */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Schedule */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-900">Today&apos;s Academic Schedule</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Monday, Odd Semester 2024</span>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-slate-900 w-12">09:00</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Database Management Systems</div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5 text-slate-400" /> Room B-204</span>
                        <span>•</span>
                        <span>Dr. Ramesh Chandra</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-semibold">
                    Lecture
                  </span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-slate-900 w-12">11:00</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Operating Systems</div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5 text-slate-400" /> Room A-301</span>
                        <span>•</span>
                        <span>Prof. Shalini Mishra</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-semibold">
                    Lecture
                  </span>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-slate-900 w-12">14:00</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Web Technology Laboratory</div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5 text-slate-400" /> Advanced Lab 3</span>
                        <span>•</span>
                        <span>Prof. Neha Gupta</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono font-semibold">
                    Practical (2 hrs)
                  </span>
                </div>
              </div>
            </div>

            {/* Active Placement Applications */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-900">Active Placement Applications</h3>
                </div>
                <Link
                  href="/student/placements"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  View Application Timeline →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {student.applications.map((app) => (
                  <div
                    key={app.id}
                    className="p-3.5 rounded-xl border border-slate-200/80 hover:border-indigo-300 transition-all space-y-2 bg-slate-50/50"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900">{app.companyName}</h4>
                        <p className="text-[11px] text-slate-500 truncate max-w-[140px]">{app.role}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        ₹{app.packageLPA}L
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                        {app.currentStage}
                      </span>
                      <span className="text-slate-400 font-mono">{app.appliedDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Notices */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Recent Institutional Circulars</h3>
                <Link
                  href="/student/notices"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  All Notices →
                </Link>
              </div>

              <div className="space-y-2">
                {mockNotices.slice(0, 3).map((n) => (
                  <div
                    key={n.id}
                    className="p-3 rounded-xl border border-slate-200/60 bg-slate-50/60 flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-white border border-slate-200 text-slate-600">
                          {n.category}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{n.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{n.summary}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-3">{n.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Career Readiness & Upcoming Milestones */}
          <div className="space-y-6">
            <CareerReadinessScore
              score={student.careerReadinessScore}
              breakdown={[
                { label: 'Profile', score: 100, completed: true },
                { label: 'Resume', score: 100, completed: true },
                { label: 'GitHub Graph', score: 94, completed: true },
                { label: 'LeetCode Score', score: 96, completed: true },
                { label: 'Projects', score: 90, completed: true },
                { label: 'Certifications', score: 72, completed: false },
              ]}
            />

            {/* Upcoming Milestones */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">Upcoming Deadlines & Milestones</h3>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200/80 space-y-1">
                  <div className="flex justify-between text-xs font-bold text-purple-900">
                    <span>Google Technical Round 1</span>
                    <span className="font-mono text-purple-700">14 Oct</span>
                  </div>
                  <p className="text-[11px] text-purple-700">Online CoderPad with Staff SWE (11:00 AM)</p>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-1">
                  <div className="flex justify-between text-xs font-bold text-blue-900">
                    <span>Mid-Semester Exams Begin</span>
                    <span className="font-mono text-blue-700">21 Oct</span>
                  </div>
                  <p className="text-[11px] text-blue-700">DBMS & OS Theory papers scheduled</p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1">
                  <div className="flex justify-between text-xs font-bold text-amber-900">
                    <span>Web Tech Lab Project Submission</span>
                    <span className="font-mono text-amber-700">18 Oct</span>
                  </div>
                  <p className="text-[11px] text-amber-700">Deploy full-stack REST API and submit GitHub repo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
