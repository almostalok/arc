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
  ChevronRight
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
      <div className="bg-indigo-950/80 border-b border-indigo-900/60 py-2 px-4 text-center text-xs text-indigo-200">
        <span className="font-semibold text-white">ARC College Operating System v2.4</span>
        <span className="mx-2">•</span>
        <span>Interactive Enterprise Prototype Built for University Leadership</span>
        <span className="mx-2">•</span>
        <button onClick={startDemoAsStudent} className="underline text-indigo-300 hover:text-white font-medium ml-1">
          Launch 3-Minute Guided Demo →
        </button>
      </div>

      {/* Global Navigation */}
      <header className="border-b border-slate-900/80 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white tracking-tighter shadow-md">
            A
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-extrabold tracking-tight text-xl text-white">ARC</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-mono">
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
          <Link href="/director" className="hover:text-white transition-colors">Executive Intelligence</Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
          >
            Role Switcher Login
          </Link>
          <button
            onClick={startDemoAsStudent}
            className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 rounded-lg shadow-sm transition-all flex items-center space-x-1.5"
          >
            <span>Explore ARC</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>The Operating System for Modern Colleges</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Academics. Talent. Careers. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-200">
            One Connected Ecosystem.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
          Connect students, faculty, department chairs, placement officers, and directors on a unified student identity graph. Real-time talent intelligence replacing legacy, fragmented college ERPs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={startDemoAsStudent}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl hover:shadow-indigo-500/20 transition-all flex items-center justify-center space-x-2"
          >
            <span>Explore ARC Platform</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/login"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all flex items-center justify-center space-x-2"
          >
            <span>Try Multi-Role Access Demo</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Live Identity Graph Quick Proof */}
        <div className="pt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>8,421 Verified Student Identities</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero-Trust Academic Record Integrity</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Live GitHub & LeetCode Talent Graphs</span>
          </div>
        </div>
      </section>

      {/* Hero Interactive Dashboard Visual Mockup */}
      <section className="max-w-6xl mx-auto px-6 pb-20 w-full">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-md">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-slate-400 text-[11px] ml-2">arc.apex.edu.in/student/profile</span>
            </div>
            <div className="flex items-center space-x-2 font-mono text-[11px]">
              <span className="text-emerald-400">● LIVE IDENTITY GRAPH</span>
            </div>
          </div>

          {/* Interior preview card */}
          <div className="p-6 bg-slate-950/80 rounded-b-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center font-bold text-white text-lg">
                  AS
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Alok Kumar Singh</h3>
                  <p className="text-xs text-slate-400 font-mono">ARC/ITS/23/CSE/1042</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">CGPA</div>
                  <div className="text-lg font-mono font-bold text-white">8.44</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">ATTENDANCE</div>
                  <div className="text-lg font-mono font-bold text-emerald-400">87.2%</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-900 py-3 md:py-0 md:px-6">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
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
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Active Placement Funnel
              </div>
              <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-900/60 space-y-1">
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
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-400">
            Modular Enterprise Architecture
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Three Core Systems. One Integrated Platform.
          </h2>
          <p className="text-sm text-slate-400">
            ARC breaks down institutional silos by connecting student records with real-time talent signals and placement operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* System 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-600/60 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">ARC Student</h3>
              <p className="text-xs text-indigo-400 font-semibold mt-0.5">The digital identity of every student</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consolidated academic transcripts, real-time subject-wise attendance tracking, digital credentials, project showcases, and career readiness indexing.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Semester GPA & credit tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Attendance threshold alerts (&lt;75%)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Integrated digital resume & portfolio</span>
              </li>
            </ul>
            <Link
              href="/student"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 pt-2"
            >
              <span>Explore Student OS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* System 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-600/60 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">ARC Pulse</h3>
              <p className="text-xs text-rose-400 font-semibold mt-0.5">Discover and understand student talent</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated multi-dimensional talent profiling connecting LeetCode, GitHub, hackathons, and certifications into verified 6-axis competence scores.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cross-department talent discovery filters</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Evidence-backed coding & dev metrics</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Leaderboards across coding, AI & leadership</span>
              </li>
            </ul>
            <Link
              href="/pulse"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-rose-400 hover:text-rose-300 pt-2"
            >
              <span>Explore Talent Discovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* System 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-600/60 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">ARC Placement</h3>
              <p className="text-xs text-amber-400 font-semibold mt-0.5">Manage the complete placement lifecycle</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              End-to-end recruitment command center: corporate drives, candidate eligibility filtering, live Kanban pipeline tracking, and package analytics.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kanban pipeline from application to offer</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified recruiter company directories</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>CTC, department & tier analytics</span>
              </li>
            </ul>
            <Link
              href="/placement"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 pt-2"
            >
              <span>Explore Placement Operations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Identity Flow: The Shared Student Identity Graph */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full border-t border-slate-900 text-center">
        <div className="max-w-2xl mx-auto space-y-2 mb-10">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-400">
            One Shared Graph
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            The Connected Student Identity Journey
          </h2>
          <p className="text-xs text-slate-400">
            Every interaction connects back to the student&apos;s verified profile.
          </p>
        </div>

        {/* Horizontal Flow Diagram */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-left">
          {[
            { step: '01', title: 'Student', sub: 'Single Identity', icon: GraduationCap },
            { step: '02', title: 'Academics', sub: 'GPA & Attendance', icon: Layers },
            { step: '03', title: 'Skills', sub: 'GitHub & LeetCode', icon: Terminal },
            { step: '04', title: 'Achievements', sub: 'Hackathons & Papers', icon: Zap },
            { step: '05', title: 'Talent Profile', sub: 'ARC Pulse Radar', icon: Activity },
            { step: '06', title: 'Placement', sub: 'Kanban Funnel', icon: Briefcase },
            { step: '07', title: 'Career', sub: 'Offers & CTC', icon: ShieldCheck },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-slate-500 text-[10px] font-mono">
                  <span>{item.step}</span>
                  <Icon className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{item.title}</h4>
                  <p className="text-[10px] text-slate-400">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stakeholder Value Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-400">
            All Stakeholders Connected
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineered for Every University Stakeholder
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { role: 'Students', desc: 'Unified digital ID, real-time attendance alarms, and 1-click campus placements.' },
            { role: 'Faculty', desc: 'Instant attendance marking, class performance insights, and material publishing.' },
            { role: 'HODs', desc: 'Department-wide GPA health, student risk intervention, and curriculum telemetry.' },
            { role: 'Placement Cell', desc: 'Automated company drives, stage progression tracking, and CTC analytics.' },
            { role: 'Directors', desc: 'Institution-wide executive command, 87/100 health metrics, and audit logs.' },
          ].map((st, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white text-indigo-300">{st.role}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-950 to-indigo-950/40 border-t border-slate-900 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          One institution. One connected intelligence layer.
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Start exploring the ARC College Operating System prototype now with simulated real-world university data.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={startDemoAsStudent}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg transition-all"
          >
            Launch Student OS (Alok Kumar Singh)
          </button>
          <button
            onClick={startDemoAsDirector}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 font-bold text-sm transition-all"
          >
            Launch Director Command Center
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 px-6 text-center text-xs text-slate-500">
        <div>ARC — The Operating System for Modern Colleges • v2.4 Enterprise</div>
        <div className="mt-1">Apex Institute of Technology • Integrated Academic & Career Ecosystem</div>
      </footer>
    </div>
  );
}
