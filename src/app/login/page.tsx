'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRole } from '../../context/RoleContext';
import { UserRole } from '../../types';
import { 
  GraduationCap, 
  Users, 
  Layers, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { setCurrentRole, setDemoStep } = useRole();
  const [emailInput, setEmailInput] = useState('alok.singh@apex.edu.in');

  const handleRoleLogin = (role: UserRole, targetRoute: string, step: number) => {
    setCurrentRole(role);
    setDemoStep(step);
    router.push(targetRoute);
  };

  const handleCustomEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.includes('director')) {
      handleRoleLogin('director', '/director', 10);
    } else if (emailInput.includes('hod')) {
      handleRoleLogin('hod', '/hod', 3);
    } else if (emailInput.includes('faculty')) {
      handleRoleLogin('faculty', '/faculty', 3);
    } else if (emailInput.includes('placement')) {
      handleRoleLogin('placement', '/placement', 7);
    } else {
      handleRoleLogin('student', '/student', 3);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6">
      <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white tracking-tighter">
            A
          </div>
          <span className="font-extrabold tracking-tight text-white text-lg">ARC</span>
        </Link>
        <Link
          href="/"
          className="text-xs text-slate-400 hover:text-white transition-colors"
        >
          ← Back to Overview
        </Link>
      </div>

      <div className="max-w-md mx-auto w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="space-y-1 text-center">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-800 text-[11px] text-indigo-300 font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Apex Institute Authentication Node</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">ARC Sign In</h1>
          <p className="text-xs text-slate-400">
            The Operating System for Modern Colleges
          </p>
        </div>

        {/* Email form */}
        <form onSubmit={handleCustomEmailSubmit} className="space-y-3">
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Institutional Email
            </label>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="name@apex.edu.in"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <span>Continue with Institutional SSO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-slate-500">
            <span className="bg-slate-900 px-3">Instant Demo Access</span>
          </div>
        </div>

        {/* Quick Demo Access Roles */}
        <div className="space-y-2">
          <p className="text-[11px] text-slate-400 text-center">
            Click any persona below to launch the prototype with verified mock data:
          </p>

          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => handleRoleLogin('student', '/student', 3)}
              className="p-3 rounded-xl bg-slate-950/80 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-600/50 flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-indigo-300">
                    Student (Alok Kumar Singh)
                  </div>
                  <div className="text-[10px] text-slate-400">
                    B.Tech CSE Sem 6 • CGPA 8.44 • LeetCode Knight
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </button>

            <button
              onClick={() => handleRoleLogin('placement', '/placement', 7)}
              className="p-3 rounded-xl bg-slate-950/80 hover:bg-amber-950/40 border border-slate-800 hover:border-amber-600/50 flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-amber-950 text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-300">
                    Placement Cell (Prof. Aggarwal)
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Kanban pipeline • 18 active drives • Google & Microsoft
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
            </button>

            <button
              onClick={() => handleRoleLogin('director', '/director', 10)}
              className="p-3 rounded-xl bg-slate-950/80 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-600/50 flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300">
                    Director (Dr. K. N. Subramanian)
                  </div>
                  <div className="text-[10px] text-slate-400">
                    8,421 Students • 87/100 Health • Department metrics
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </button>

            <button
              onClick={() => handleRoleLogin('hod', '/hod', 3)}
              className="p-3 rounded-xl bg-slate-950/80 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-600/50 flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-950 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-300">
                    HOD (Dr. Ramesh Chandra, CSE)
                  </div>
                  <div className="text-[10px] text-slate-400">
                    824 CSE Students • At-risk attendance roster
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </button>

            <button
              onClick={() => handleRoleLogin('faculty', '/faculty', 3)}
              className="p-3 rounded-xl bg-slate-950/80 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-600/50 flex items-center justify-between text-left transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-purple-950 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-purple-300">
                    Faculty (Prof. Shalini Mishra)
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Operating Systems • Class attendance & grades
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-[11px] text-slate-500">
        ARC Operating System Prototype • Enterprise Role-Based Access Control Demo
      </div>
    </div>
  );
}
