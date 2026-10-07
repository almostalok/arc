'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRole } from '../../context/RoleContext';
import {
  LayoutDashboard,
  User,
  GraduationCap,
  CalendarCheck,
  FolderOpen,
  Bell,
  Briefcase,
  TrendingUp,
  Activity,
  Award,
  Building,
  BarChart3,
  Users,
  Layers,
  ShieldCheck,
  Settings,
  Sparkles,
  Link2,
  FileText
} from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();
  const { currentRole, setIsAiOpen } = useRole();

  // Helper for active link checking
  const isActive = (href: string) => {
    if (href === '/student' || href === '/placement' || href === '/pulse' || href === '/director' || href === '/hod' || href === '/faculty') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const navLinkClass = (href: string) => {
    const active = isActive(href);
    return `flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
      active
        ? 'bg-slate-900 text-white font-semibold shadow-2xs'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
    }`;
  };

  return (
    <aside className="w-64 border-r border-slate-200/80 bg-white min-h-[calc(100vh-3.5rem)] flex flex-col justify-between p-3 select-none">
      <div className="space-y-5">
        {/* Module Switcher / Product Branding Section */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-600 px-3 mb-1.5">
            Ecosystem Core
          </div>
          <div className="grid grid-cols-2 gap-1 px-1">
            <Link
              href="/student"
              className={`flex flex-col p-2 rounded-lg border text-left transition-colors ${
                pathname.startsWith('/student')
                  ? 'bg-indigo-50/70 border-indigo-200 text-indigo-900'
                  : 'border-slate-100 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center space-x-1.5 text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                <span>Student</span>
              </div>
              <span className="text-[9px] text-slate-600 mt-0.5">Digital Identity</span>
            </Link>

            <Link
              href="/pulse"
              className={`flex flex-col p-2 rounded-lg border text-left transition-colors ${
                pathname.startsWith('/pulse')
                  ? 'bg-indigo-50/70 border-indigo-200 text-indigo-900'
                  : 'border-slate-100 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center space-x-1.5 text-xs font-semibold">
                <Activity className="w-3.5 h-3.5 text-rose-500" />
                <span>Pulse</span>
              </div>
              <span className="text-[9px] text-slate-600 mt-0.5">Talent Discovery</span>
            </Link>

            <Link
              href="/placement"
              className={`flex flex-col p-2 rounded-lg border text-left transition-colors ${
                pathname.startsWith('/placement')
                  ? 'bg-indigo-50/70 border-indigo-200 text-indigo-900'
                  : 'border-slate-100 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center space-x-1.5 text-xs font-semibold">
                <Briefcase className="w-3.5 h-3.5 text-amber-500" />
                <span>Placement</span>
              </div>
              <span className="text-[9px] text-slate-600 mt-0.5">Drives & Pipeline</span>
            </Link>

            <button
              onClick={() => setIsAiOpen(true)}
              className="flex flex-col p-2 rounded-lg border border-slate-100 hover:bg-indigo-50/40 text-slate-700 text-left transition-colors group"
            >
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-900 group-hover:text-indigo-600">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>AI Assist</span>
              </div>
              <span className="text-[9px] text-slate-600 mt-0.5">Intelligence Layer</span>
            </button>
          </div>
        </div>

        {/* Dynamic Navigation Based on Role */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-600 px-3 mb-1.5 flex items-center justify-between">
            <span>
              {currentRole === 'student' && 'Student Operating System'}
              {currentRole === 'faculty' && 'Faculty Workbench'}
              {currentRole === 'hod' && 'Department Directorate'}
              {currentRole === 'placement' && 'Placement Operations'}
              {currentRole === 'director' && 'Executive Governance'}
              {currentRole === 'admin' && 'Enterprise Administration'}
            </span>
          </div>

          <nav className="space-y-0.5">
            {/* Student Navigation */}
            {currentRole === 'student' && (
              <>
                <Link href="/student" className={navLinkClass('/student')}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Overview</span>
                </Link>
                <Link href="/student/profile" className={navLinkClass('/student/profile')}>
                  <User className="w-4 h-4" />
                  <span>Digital ID Profile</span>
                </Link>
                <Link href="/student/academics" className={navLinkClass('/student/academics')}>
                  <GraduationCap className="w-4 h-4" />
                  <span>Academics & GPA</span>
                </Link>
                <Link href="/student/attendance" className={navLinkClass('/student/attendance')}>
                  <CalendarCheck className="w-4 h-4" />
                  <span>Attendance Tracker</span>
                </Link>
                <Link href="/student/resources" className={navLinkClass('/student/resources')}>
                  <FolderOpen className="w-4 h-4" />
                  <span>Academic Resources</span>
                </Link>
                <Link href="/student/placements" className={navLinkClass('/student/placements')}>
                  <Briefcase className="w-4 h-4" />
                  <span>My Applications</span>
                </Link>
                <Link href="/student/career" className={navLinkClass('/student/career')}>
                  <TrendingUp className="w-4 h-4" />
                  <span>Career Readiness</span>
                </Link>
                <Link href="/student/notices" className={navLinkClass('/student/notices')}>
                  <Bell className="w-4 h-4" />
                  <span>Notices & Circulars</span>
                </Link>
              </>
            )}

            {/* Faculty Navigation */}
            {currentRole === 'faculty' && (
              <>
                <Link href="/faculty" className={navLinkClass('/faculty')}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Teaching Overview</span>
                </Link>
                <Link href="/faculty/classes" className={navLinkClass('/faculty/classes')}>
                  <Users className="w-4 h-4" />
                  <span>My Classes & Attendance</span>
                </Link>
                <Link href="/faculty/students" className={navLinkClass('/faculty/students')}>
                  <FileText className="w-4 h-4" />
                  <span>Student Evaluations</span>
                </Link>
                <Link href="/student/resources" className={navLinkClass('/student/resources')}>
                  <FolderOpen className="w-4 h-4" />
                  <span>Course Material Bank</span>
                </Link>
                <Link href="/student/notices" className={navLinkClass('/student/notices')}>
                  <Bell className="w-4 h-4" />
                  <span>Department Notices</span>
                </Link>
              </>
            )}

            {/* HOD Navigation */}
            {currentRole === 'hod' && (
              <>
                <Link href="/hod" className={navLinkClass('/hod')}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Department Command</span>
                </Link>
                <Link href="/hod/students" className={navLinkClass('/hod/students')}>
                  <Users className="w-4 h-4" />
                  <span>Student Roster & At-Risk</span>
                </Link>
                <Link href="/hod/analytics" className={navLinkClass('/hod/analytics')}>
                  <BarChart3 className="w-4 h-4" />
                  <span>Curriculum & GPA Analytics</span>
                </Link>
                <Link href="/pulse" className={navLinkClass('/pulse')}>
                  <Activity className="w-4 h-4" />
                  <span>Department Talent (Pulse)</span>
                </Link>
                <Link href="/placement" className={navLinkClass('/placement')}>
                  <Briefcase className="w-4 h-4" />
                  <span>Placement Status</span>
                </Link>
              </>
            )}

            {/* Placement Cell Navigation */}
            {currentRole === 'placement' && (
              <>
                <Link href="/placement" className={navLinkClass('/placement')}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Drives Command Center</span>
                </Link>
                <Link href="/placement/companies" className={navLinkClass('/placement/companies')}>
                  <Building className="w-4 h-4" />
                  <span>Recruiter Directory</span>
                </Link>
                <Link href="/placement/drives" className={navLinkClass('/placement/drives')}>
                  <Briefcase className="w-4 h-4" />
                  <span>Active Drives Matrix</span>
                </Link>
                <Link href="/pulse" className={navLinkClass('/pulse')}>
                  <Activity className="w-4 h-4" />
                  <span>Talent Discovery Engine</span>
                </Link>
                <Link href="/placement/analytics" className={navLinkClass('/placement/analytics')}>
                  <BarChart3 className="w-4 h-4" />
                  <span>Placement & CTC Analytics</span>
                </Link>
              </>
            )}

            {/* Director Navigation */}
            {currentRole === 'director' && (
              <>
                <Link href="/director" className={navLinkClass('/director')}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Executive Command</span>
                </Link>
                <Link href="/director/analytics" className={navLinkClass('/director/analytics')}>
                  <BarChart3 className="w-4 h-4" />
                  <span>Institutional Health</span>
                </Link>
                <Link href="/pulse" className={navLinkClass('/pulse')}>
                  <Activity className="w-4 h-4" />
                  <span>Campus Talent Pool</span>
                </Link>
                <Link href="/placement/analytics" className={navLinkClass('/placement/analytics')}>
                  <TrendingUp className="w-4 h-4" />
                  <span>Campus Placements</span>
                </Link>
                <Link href="/settings/roles" className={navLinkClass('/settings/roles')}>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Audit Logs & Security</span>
                </Link>
              </>
            )}

            {/* Admin Navigation */}
            {currentRole === 'admin' && (
              <>
                <Link href="/director" className={navLinkClass('/director')}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>System Overview</span>
                </Link>
                <Link href="/settings/roles" className={navLinkClass('/settings/roles')}>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Role Permissions & RBAC</span>
                </Link>
                <Link href="/settings/integrations" className={navLinkClass('/settings/integrations')}>
                  <Link2 className="w-4 h-4" />
                  <span>Integrations & Graph Sync</span>
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Intelligence & Connected Ecosystem Cross-links */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-600 px-3 mb-1.5">
            Intelligence Links
          </div>
          <nav className="space-y-0.5">
            <Link href="/pulse/rankings" className={navLinkClass('/pulse/rankings')}>
              <Award className="w-4 h-4 text-amber-500" />
              <span>Campus Leaderboards</span>
            </Link>
            <Link href="/settings/integrations" className={navLinkClass('/settings/integrations')}>
              <Link2 className="w-4 h-4 text-emerald-500" />
              <span>Connected Graphs</span>
            </Link>
            <button
              onClick={() => setIsAiOpen(true)}
              className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors text-left"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Query ARC AI Engine</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Bottom Institutional Health & Settings Pill */}
      <div className="pt-3 border-t border-slate-200/80 space-y-2">
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-semibold text-slate-600">ARC Node Status</div>
            <div className="text-xs font-semibold text-slate-800 flex items-center space-x-1 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Identity Graph Synced</span>
            </div>
          </div>
          <Link
            href="/settings/roles"
            className="p-1.5 rounded-md hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
