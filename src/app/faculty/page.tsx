'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { MetricCard } from '../../components/ui/MetricCard';
import { 
  Users, 
  CalendarCheck, 
  BookOpen, 
  Upload, 
  Bell, 
  CheckCircle2, 
  ArrowRight,
  Plus,
  Clock,
  Sparkles
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
              <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                Faculty Academic Workbench
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-semibold border border-purple-200">
                Prof. Shalini Mishra
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Teaching Overview & Course Workbench
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Class attendance marking, internal assessment grading, and lecture notes publishing.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setMarkedToday(true);
                alert('Attendance marked for Operating Systems (CSE 6B) — 58/61 present (95%). Synced to ARC Node.');
              }}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-all shadow-xs"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>{markedToday ? 'Attendance Synced ✓' : 'Quick Mark Attendance'}</span>
            </button>
          </div>
        </div>

        {/* 4 Summary Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Assigned Students"
            value="125"
            subtitle="Across 2 lecture sections"
            icon={Users}
            badge="Enrolled"
          />
          <MetricCard
            title="Lectures Delivered"
            value="44 / 50"
            subtitle="88% course syllabus covered"
            change="+2 this week"
            trend="up"
            icon={Clock}
          />
          <MetricCard
            title="Class Attendance Rate"
            value="89.1%"
            subtitle="Average student attendance"
            icon={CalendarCheck}
          />
          <MetricCard
            title="Course Resources"
            value="14"
            subtitle="Uploaded this semester"
            icon={BookOpen}
          />
        </div>

        {/* Section 30: My Classes */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Assigned Courses & Lecture Batches</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Class 1 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 hover:border-indigo-300 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                    CS602 • Theory
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Operating Systems</h4>
                  <p className="text-xs text-slate-500">Section CSE 6B • Room A-301</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold font-mono text-slate-900">61</span>
                  <span className="text-[10px] text-slate-400 block font-mono">Students</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2 border-t border-slate-100 font-mono">
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block font-sans">Attendance</span>
                  <span className="font-bold text-emerald-600">88.0%</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block font-sans">Class GPA</span>
                  <span className="font-bold text-slate-900">8.05</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block font-sans">Lectures</span>
                  <span className="font-bold text-indigo-600">44 / 50</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <Link
                  href="/faculty/classes"
                  className="font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Manage Class Roster →
                </Link>
                <button
                  onClick={() => alert('Attendance marked for CS602 (Operating Systems)')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold"
                >
                  Mark Attendance
                </button>
              </div>
            </div>

            {/* Class 2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 hover:border-indigo-300 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    CS601 • Theory
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Database Management Systems</h4>
                  <p className="text-xs text-slate-500">Section CSE 6A • Room B-204</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold font-mono text-slate-900">64</span>
                  <span className="text-[10px] text-slate-400 block font-mono">Students</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2 border-t border-slate-100 font-mono">
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block font-sans">Attendance</span>
                  <span className="font-bold text-emerald-600">92.0%</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block font-sans">Class GPA</span>
                  <span className="font-bold text-slate-900">8.22</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block font-sans">Lectures</span>
                  <span className="font-bold text-indigo-600">46 / 50</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <Link
                  href="/faculty/classes"
                  className="font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Manage Class Roster →
                </Link>
                <button
                  onClick={() => alert('Attendance marked for CS601 (Database Systems)')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold"
                >
                  Mark Attendance
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Bar (Section 30: mark attendance, upload resource, enter marks, create assignment, send notice) */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900">Faculty Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            <button
              onClick={() => alert('Modal: Mark Classroom Attendance')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 text-slate-800 font-semibold flex flex-col items-center text-center space-y-1.5 transition-colors"
            >
              <CalendarCheck className="w-5 h-5 text-indigo-600" />
              <span>Mark Attendance</span>
            </button>
            <button
              onClick={() => alert('Modal: Upload Resource to ARC Bank')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 text-slate-800 font-semibold flex flex-col items-center text-center space-y-1.5 transition-colors"
            >
              <Upload className="w-5 h-5 text-blue-600" />
              <span>Upload Resource</span>
            </button>
            <button
              onClick={() => alert('Modal: Enter Mid-Term Internal Marks')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 text-slate-800 font-semibold flex flex-col items-center text-center space-y-1.5 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Enter Marks</span>
            </button>
            <button
              onClick={() => alert('Modal: Create New Lab Assignment')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 text-slate-800 font-semibold flex flex-col items-center text-center space-y-1.5 transition-colors"
            >
              <Plus className="w-5 h-5 text-amber-600" />
              <span>Create Assignment</span>
            </button>
            <button
              onClick={() => alert('Modal: Dispatch Notice to Class Section')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 text-slate-800 font-semibold flex flex-col items-center text-center space-y-1.5 transition-colors"
            >
              <Bell className="w-5 h-5 text-purple-600" />
              <span>Send Notice</span>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
