'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRole } from '../../context/RoleContext';
import { 
  LayoutDashboard, 
  User, 
  Activity, 
  Briefcase, 
  Sparkles 
} from 'lucide-react';

export function MobileNav() {
  const pathname = usePathname();
  const { currentRole, setIsAiOpen } = useRole();

  const getPrimaryHome = () => {
    if (currentRole === 'faculty') return '/faculty';
    if (currentRole === 'hod') return '/hod';
    if (currentRole === 'placement') return '/placement';
    if (currentRole === 'director' || currentRole === 'admin') return '/director';
    return '/student';
  };

  const navItemClass = (href: string) => {
    const active = pathname === href;
    return `flex flex-col items-center justify-center flex-1 py-2 text-[10px] font-semibold transition-colors ${
      active ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'
    }`;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 flex items-center justify-around px-2 pb-safe">
      <Link href={getPrimaryHome()} className={navItemClass(getPrimaryHome())}>
        <LayoutDashboard className="w-5 h-5 mb-0.5" />
        <span>Home</span>
      </Link>

      <Link href="/student/profile" className={navItemClass('/student/profile')}>
        <User className="w-5 h-5 mb-0.5" />
        <span>Identity</span>
      </Link>

      <button
        onClick={() => setIsAiOpen(true)}
        className="flex flex-col items-center justify-center flex-1 py-1 text-[10px] font-bold text-indigo-700"
      >
        <div className="p-1.5 rounded-full bg-indigo-600 text-white shadow-xs -mt-3 mb-0.5">
          <Sparkles className="w-4 h-4" />
        </div>
        <span>ARC AI</span>
      </button>

      <Link href="/pulse" className={navItemClass('/pulse')}>
        <Activity className="w-5 h-5 mb-0.5" />
        <span>Pulse</span>
      </Link>

      <Link href="/placement" className={navItemClass('/placement')}>
        <Briefcase className="w-5 h-5 mb-0.5" />
        <span>Placement</span>
      </Link>
    </nav>
  );
}
