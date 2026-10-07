'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRole } from '../../context/RoleContext';
import { UserRole } from '../../types';
import { 
  Search, 
  Bell, 
  Sparkles, 
  ChevronDown, 
  Check, 
  ShieldCheck, 
  Building2, 
  Compass, 
  UserCircle,
  Briefcase,
  GraduationCap,
  Users,
  Layers
} from 'lucide-react';

const roleNames: Record<UserRole, { title: string; badge: string; icon: React.ComponentType<{ className?: string }> }> = {
  student: { title: 'Student', badge: 'Alok Kumar Singh', icon: GraduationCap },
  faculty: { title: 'Faculty', badge: 'Prof. Shalini Mishra', icon: Users },
  hod: { title: 'HOD (CSE)', badge: 'Dr. Ramesh Chandra', icon: Layers },
  placement: { title: 'Placement Cell', badge: 'Prof. V. K. Aggarwal', icon: Briefcase },
  director: { title: 'Director', badge: 'Dr. K. N. Subramanian', icon: ShieldCheck },
  admin: { title: 'Admin', badge: 'Root Administration', icon: ShieldCheck },
};

export function Topbar() {
  const router = useRouter();
  const { 
    currentRole, 
    setCurrentRole, 
    setIsSearchOpen, 
    setIsAiOpen, 
    isNotificationsOpen, 
    setIsNotificationsOpen,
    showDemoGuide,
    setShowDemoGuide,
    demoStep
  } = useRole();

  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  const handleRoleSelect = (role: UserRole) => {
    setCurrentRole(role);
    setRoleMenuOpen(false);

    // Route dynamically based on role selected
    if (role === 'student') router.push('/student');
    else if (role === 'faculty') router.push('/faculty');
    else if (role === 'hod') router.push('/hod');
    else if (role === 'placement') router.push('/placement');
    else if (role === 'director' || role === 'admin') router.push('/director');
  };

  const CurrentRoleIcon = roleNames[currentRole].icon;

  return (
    <header className="sticky top-0 z-40 w-full h-14 bg-white/95 backdrop-blur border-b border-slate-200/80 px-4 flex items-center justify-between">
      {/* Left: Brand Logo & Campus Indicator */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-white font-bold text-base tracking-tighter shadow-sm group-hover:bg-indigo-600 transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold tracking-tight text-slate-900 text-lg leading-none">ARC</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                v2.4 OS
              </span>
            </div>
            <span className="text-[10px] text-slate-600 hidden sm:inline leading-tight font-medium">
              Apex Institute of Technology
            </span>
          </div>
        </Link>

        {/* Institution Selector Pill */}
        <div className="hidden lg:flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/60 text-xs text-slate-600">
          <Building2 className="w-3.5 h-3.5 text-slate-600" />
          <span className="font-medium text-slate-700">Main Campus</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600">Cluster A</span>
        </div>
      </div>

      {/* Middle: Global Search bar trigger */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="w-full h-9 px-3 rounded-lg bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between transition-all group"
        >
          <div className="flex items-center space-x-2">
            <Search className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-600" />
            <span className="font-normal text-slate-600">Search students, companies, drives, courses...</span>
          </div>
          <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-600 bg-white border border-slate-200 rounded shadow-2xs">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right: Actions, AI trigger, Demo Tour, Notifications, Role Switcher */}
      <div className="flex items-center space-x-2 sm:space-x-2.5">
        {/* Mobile Search Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="md:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100"
          title="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* ARC Intelligence Trigger */}
        <button
          onClick={() => setIsAiOpen(true)}
          className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100/80 text-indigo-700 border border-indigo-200/80 text-xs font-semibold transition-all shadow-2xs"
          title="Open ARC Institutional Intelligence"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-subtle-pulse" />
          <span className="hidden sm:inline">ARC AI</span>
        </button>

        {/* Demo Tour Toggle Pill */}
        <button
          onClick={() => setShowDemoGuide(!showDemoGuide)}
          className={`inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            showDemoGuide 
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100/70' 
              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
          }`}
          title="Interactive Demo Walkthrough"
        >
          <Compass className="w-3.5 h-3.5 text-emerald-600" />
          <span className="hidden md:inline font-semibold">Demo Flow</span>
          <span className="text-[10px] px-1 py-0.2 rounded bg-white border border-emerald-200/60 font-mono text-emerald-700">
            {demoStep}/11
          </span>
        </button>

        {/* Notification Bell */}
        <button
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          className="relative p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-600 ring-2 ring-white" />
        </button>

        {/* ROLE SWITCHER DROPDOWN (Core Requirement) */}
        <div className="relative">
          <button
            onClick={() => setRoleMenuOpen(!roleMenuOpen)}
            className="flex items-center space-x-2 pl-2.5 pr-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-2xs border border-slate-800"
          >
            <CurrentRoleIcon className="w-3.5 h-3.5 text-indigo-400" />
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
                Viewing as
              </span>
              <span className="text-xs font-semibold leading-tight text-white flex items-center space-x-1">
                <span>{roleNames[currentRole].title}</span>
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
          </button>

          {roleMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white border border-slate-200 shadow-xl py-1.5 z-50 text-xs">
              <div className="px-3 py-2 border-b border-slate-100">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                  Select Ecosystem Persona
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Dynamically shifts permissions, navigation and dashboard intelligence.
                </p>
              </div>

              <div className="p-1 space-y-0.5">
                {(Object.keys(roleNames) as UserRole[]).map((r) => {
                  const item = roleNames[r];
                  const Icon = item.icon;
                  const isSelected = currentRole === r;

                  return (
                    <button
                      key={r}
                      onClick={() => handleRoleSelect(r)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors ${
                        isSelected 
                          ? 'bg-indigo-50/80 text-indigo-950 font-semibold' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className={`p-1.5 rounded-md ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{item.title}</div>
                          <div className="text-[10px] text-slate-600">{item.badge}</div>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-indigo-600" />}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 p-2 bg-slate-50/60 rounded-b-xl flex items-center justify-between text-[11px] text-slate-600">
                <span>Enterprise RBAC Active</span>
                <Link href="/settings/roles" className="text-indigo-600 font-medium hover:underline">
                  Audit Matrix →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
