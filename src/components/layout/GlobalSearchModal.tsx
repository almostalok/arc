'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRole } from '../../context/RoleContext';
import { mockStudents, mockCompanies, mockDrives, mockNotices, mockResources } from '../../data/mockData';
import { 
  Search, 
  X, 
  User, 
  Building, 
  Briefcase, 
  BookOpen, 
  Bell, 
  ArrowRight,
  Sparkles,
  CalendarCheck,
  BarChart3,
  Settings,
  ShieldCheck,
  Terminal
} from 'lucide-react';

export function GlobalSearchModal() {
  const router = useRouter();
  const { isSearchOpen, setIsSearchOpen, setIsAiOpen, setAiDefaultQuery } = useRole();
  const [query, setQuery] = useState('');

  // Close on Escape & ⌘K handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingStudents = mockStudents.filter(
    (s) => s.name.toLowerCase().includes(q) || s.arcId.toLowerCase().includes(q) || s.department.toLowerCase().includes(q)
  );

  const matchingCompanies = mockCompanies.filter(
    (c) => c.name.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q)
  );

  const matchingDrives = mockDrives.filter(
    (d) => d.role.toLowerCase().includes(q) || d.companyName.toLowerCase().includes(q)
  );

  const matchingResources = mockResources.filter(
    (r) => r.title.toLowerCase().includes(q) || r.subject.toLowerCase().includes(q)
  );

  const matchingNotices = mockNotices.filter(
    (n) => n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
  );

  const quickCommands = [
    { label: 'Mark Class Attendance', icon: CalendarCheck, path: '/faculty/classes', shortcut: 'G then A' },
    { label: 'Explore Institutional Talent (Pulse)', icon: Sparkles, path: '/pulse', shortcut: 'G then P' },
    { label: 'Manage Placement Drives & Applications', icon: Briefcase, path: '/placement', shortcut: 'G then D' },
    { label: 'Executive Health & Analytics Audit', icon: BarChart3, path: '/director/analytics', shortcut: 'G then H' },
    { label: 'Role Permissions Matrix & RBAC', icon: ShieldCheck, path: '/settings/roles', shortcut: 'G then S' },
  ];

  const filteredCommands = q === '' 
    ? quickCommands 
    : quickCommands.filter(c => c.label.toLowerCase().includes(q));

  const navigateTo = (path: string) => {
    setIsSearchOpen(false);
    setQuery('');
    router.push(path);
  };

  const handleAiAsk = () => {
    setIsSearchOpen(false);
    setAiDefaultQuery(query);
    setIsAiOpen(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-xs"
      onClick={() => setIsSearchOpen(false)}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/50">
          <Search className="w-4 h-4 text-slate-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search students, companies, drives, courses, or run a command..."
            className="flex-1 bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 mr-2"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-500 shadow-2xs">
            ESC
          </kbd>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {query.trim().length > 0 && (
            <div className="p-3 rounded-lg bg-indigo-50/80 border border-indigo-100 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-indigo-950">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Ask ARC Intelligence about <strong>&ldquo;{query}&rdquo;</strong></span>
              </div>
              <button
                onClick={handleAiAsk}
                className="px-2.5 py-1 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-semibold transition-colors shrink-0"
              >
                Synthesize →
              </button>
            </div>
          )}

          {/* Quick Commands (Rule 38) */}
          {(q === '' || filteredCommands.length > 0) && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>Commands & Quick Actions</span>
              </div>
              <div className="space-y-1">
                {filteredCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.path}
                      onClick={() => navigateTo(cmd.path)}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                          {cmd.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-600">
                        {cmd.shortcut}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Students Category */}
          {matchingStudents.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Students & Digital Identities ({matchingStudents.length})</span>
              </div>
              <div className="space-y-1">
                {matchingStudents.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => navigateTo(`/pulse/students/${s.id}`)}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <img src={s.avatar} alt={s.name} className="w-7 h-7 rounded-lg object-cover ring-1 ring-slate-200" />
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-indigo-600">
                          {s.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {s.arcId} • {s.departmentCode} • CGPA {s.cgpa} • Readiness {s.careerReadinessScore}%
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Companies & Recruiter Category */}
          {matchingCompanies.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center space-x-1.5">
                <Building className="w-3.5 h-3.5 text-slate-500" />
                <span>Recruiters & Companies ({matchingCompanies.length})</span>
              </div>
              <div className="space-y-1">
                {matchingCompanies.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => navigateTo('/placement/companies')}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-800">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-indigo-600">
                          {c.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {c.industry} • {c.tier} • Avg CTC ₹{c.averagePackageLPA} LPA
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Placement Drives */}
          {matchingDrives.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center space-x-1.5">
                <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                <span>Campus Job Drives ({matchingDrives.length})</span>
              </div>
              <div className="space-y-1">
                {matchingDrives.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => navigateTo(`/placement/drives/${d.id}`)}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-indigo-600">
                        {d.companyName} — {d.role}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        ₹{d.packageLPA} LPA • {d.appliedCount} Applied • {d.shortlistedCount} Shortlisted
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Academic Resources */}
          {matchingResources.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                <span>Academic Resources</span>
              </div>
              <div className="space-y-1">
                {matchingResources.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => navigateTo('/student/resources')}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-indigo-600">
                        {r.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {r.subject} ({r.subjectCode}) • {r.category} • {r.fileSize}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Notices */}
          {matchingNotices.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center space-x-1.5">
                <Bell className="w-3.5 h-3.5 text-slate-500" />
                <span>Notices & Circulars</span>
              </div>
              <div className="space-y-1">
                {matchingNotices.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => navigateTo('/student/notices')}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-indigo-600">
                        {n.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {n.category} • {n.date}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {q !== '' &&
            matchingStudents.length === 0 &&
            matchingCompanies.length === 0 &&
            matchingDrives.length === 0 &&
            matchingResources.length === 0 &&
            matchingNotices.length === 0 &&
            filteredCommands.length === 0 && (
              <div className="py-10 text-center text-slate-500 text-xs">
                No institutional records or commands found matching &ldquo;{query}&rdquo;.
              </div>
            )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between font-mono">
          <span>⌘K / Ctrl+K Global Search & Commands</span>
          <span>Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
