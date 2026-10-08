'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRole } from '../context/RoleContext';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Layers, 
  CheckCircle2, 
  Compass, 
  Building2,
  Terminal,
  Zap,
  ChevronRight,
  Check
} from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const { setCurrentRole, setDemoStep } = useRole();

  const startDemoAsStudent = () => {
    setCurrentRole('student');
    setDemoStep(3);
    router.push('/student');
  };

  const startDemoAsDirector = () => {
    setCurrentRole('director');
    setDemoStep(10);
    router.push('/director');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white flex flex-col font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-2 px-4 text-center text-xs text-slate-300">
        <span className="font-semibold text-white">ARC College Operating System v2.4</span>
        <span className="mx-2 text-slate-600">•</span>
        <span>Academics, Talent, and Careers on One Connected Graph</span>
        <span className="mx-2 text-slate-600">•</span>
        <button onClick={startDemoAsStudent} className="underline text-indigo-300 hover:text-white font-medium ml-1">
          Launch Guided Demo Flow →
        </button>
      </div>

      {/* Global Navigation */}
      <header className="border-b border-slate-900 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white tracking-tighter shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-bold tracking-tight text-lg text-white">ARC</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-900 text-slate-400 border border-slate-800 font-mono">
                ENTERPRISE OS
              </span>
            </div>
            <span className="text-[10px] text-slate-400">Apex Institute of Technology</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-slate-400">
          <Link href="/student" className="hover:text-white transition-colors">ARC Student</Link>
          <Link href="/pulse" className="hover:text-white transition-colors">ARC Pulse</Link>
          <Link href="/placement" className="hover:text-white transition-colors">ARC Placement</Link>
          <Link href="/director" className="hover:text-white transition-colors">Executive Directorate</Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
          >
            Role Switcher
          </Link>
          <button
            onClick={startDemoAsStudent}
            className="text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5"
          >
            <span>Explore Platform</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section (Rule 98) */}
      <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>The Operating System for Modern Colleges</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Academics, talent, and careers. <br />
          <span className="text-indigo-400">
            Connected through one institutional platform.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Connect students, faculty, department chairs, placement officers, and directors into a single student identity graph. Real-time talent intelligence replacing legacy, fragmented ERP spreadsheets.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={startDemoAsStudent}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center space-x-2"
          >
            <span>Explore Student OS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <Link
            href="/login"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold text-xs transition-all flex items-center justify-center space-x-2"
          >
            <span>Instant Role Switcher</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>

        {/* Live Identity Graph Quick Proof */}
        <div className="pt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center space-x-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>8,421 Verified Student Identities</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero-Trust Academic Record Integrity</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Synchronized GitHub & LeetCode Graphs</span>
          </div>
        </div>
      </section>

      {/* Hero Interactive Dashboard Visual Mockup */}
      <section className="max-w-6xl mx-auto px-6 pb-20 w-full">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-xs">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
              <span className="font-mono text-slate-400 text-[11px] ml-2">arc.apex.edu.in/student/profile</span>
            </div>
            <div className="flex items-center space-x-2 font-mono text-[11px]">
              <span className="text-emerald-400">● LIVE IDENTITY GRAPH</span>
            </div>
          </div>

          {/* Interior preview card */}
          <div className="p-6 bg-slate-950/80 rounded-b-lg grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-base">
                  AS
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Alok Kumar Singh</h3>
                  <p className="text-[11px] text-slate-400 font-mono">ARC/ITS/23/CSE/1042</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">CGPA</div>
                  <div className="text-base font-mono font-bold text-white">8.44</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">ATTENDANCE</div>
                  <div className="text-base font-mono font-bold text-emerald-400">87.2%</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-900 py-3 md:py-0 md:px-6">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                Talent Radar (ARC Pulse)
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Coding (LeetCode Knight 1842)</span>
                  <span className="font-mono text-indigo-400">94/100</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-1.5">
                  <div className="bg-indigo-500 h-1.5 rounded-full w-[94%]" />
                </div>
                <div className="flex justify-between text-slate-300 pt-1">
                  <span>Development (17 GitHub repos)</span>
                  <span className="font-mono text-indigo-400">91/100</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-1.5">
                  <div className="bg-indigo-500 h-1.5 rounded-full w-[91%]" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                Active Placement Funnel
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white">Google — SWE Intern</span>
                  <span className="font-mono text-[10px] text-emerald-400">₹18 LPA</span>
                </div>
                <div className="text-[11px] text-indigo-300">Technical Round 1 Scheduled</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white">Microsoft — SDE Intern</span>
                  <span className="font-mono text-[10px] text-emerald-400">₹21 LPA</span>
                </div>
                <div className="text-[11px] text-slate-400">OA Completed (Score: 94/100)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Core Systems Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-400">
            Ecosystem Pillars
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Three Core Systems. One Integrated Graph.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            ARC breaks down institutional silos by connecting academic records with real-time talent signals and placement operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* System 1: ARC Student */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">ARC Student</h3>
              <p className="text-xs text-indigo-400 font-medium mt-0.5">The digital identity of every student</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consolidated academic transcripts, real-time subject-wise attendance tracking, digital credentials, project showcases, and career readiness indexing.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Semester GPA & credit tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Attendance threshold alerts (&lt;75%)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Integrated digital portfolio</span>
              </li>
            </ul>
            <Link
              href="/student"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 pt-1"
            >
              <span>Explore Student OS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* System 2: ARC Pulse */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">ARC Pulse</h3>
              <p className="text-xs text-rose-400 font-medium mt-0.5">Discover and understand student talent</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated multi-dimensional talent profiling connecting LeetCode, GitHub, hackathons, and certifications into verified 6-axis competence scores.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Multi-dimensional talent filters</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Evidence-backed coding metrics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Campus coding & dev leaderboards</span>
              </li>
            </ul>
            <Link
              href="/pulse"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 pt-1"
            >
              <span>Explore Talent Discovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* System 3: ARC Placement */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">ARC Placement</h3>
              <p className="text-xs text-amber-400 font-medium mt-0.5">Manage the complete recruitment lifecycle</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              End-to-end recruitment command center: corporate drives, candidate eligibility filtering, live Kanban pipeline tracking, and compensation analytics.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Kanban candidate pipeline</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Recruiter directory & drive matrix</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Package CTC & department benchmarks</span>
              </li>
            </ul>
            <Link
              href="/placement"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 pt-1"
            >
              <span>Explore Placement Operations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-white">ARC</span>
          <span>• Apex Institute of Technology Enterprise Operating System</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-white">Role Login</Link>
          <Link href="/settings/roles" className="hover:text-white">RBAC Matrix</Link>
          <Link href="/settings/integrations" className="hover:text-white">Integrations</Link>
        </div>
      </footer>
    </div>
  );
}
