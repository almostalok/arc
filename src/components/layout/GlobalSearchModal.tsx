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
  Sparkles
} from 'lucide-react';

export function GlobalSearchModal() {
  const router = useRouter();
  const { isSearchOpen, setIsSearchOpen, setIsAiOpen, setAiDefaultQuery } = useRole();
  const [query, setQuery] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    if (isSearchOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search students, recruiters, drives, resources, notices..."
            className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {query.trim().length > 0 && (
            <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-indigo-900">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Ask ARC Intelligence about <strong>&ldquo;{query}&rdquo;</strong></span>
              </div>
              <button
                onClick={handleAiAsk}
                className="px-2.5 py-1 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-colors"
              >
                Synthesize →
              </button>
            </div>
          )}

          {/* Students Category */}
          {matchingStudents.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5" />
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
                      <img src={s.avatar} alt={s.name} className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600">
                          {s.name}
                        </div>
                        <div className="text-[11px] text-slate-600">
                          {s.arcId} • {s.departmentCode} • CGPA {s.cgpa} • Readiness {s.careerReadinessScore}%
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Companies & Recruiter Category */}
          {matchingCompanies.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center space-x-1.5">
                <Building className="w-3.5 h-3.5" />
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
                      <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600">
                          {c.name}
                        </div>
                        <div className="text-[11px] text-slate-600">
                          {c.industry} • {c.tier} • Avg CTC ₹{c.averagePackageLPA} LPA
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Placement Drives */}
          {matchingDrives.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center space-x-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Job Drives ({matchingDrives.length})</span>
              </div>
              <div className="space-y-1">
                {matchingDrives.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => navigateTo(`/placement/drives/${d.id}`)}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600">
                        {d.companyName} — {d.role}
                      </div>
                      <div className="text-[11px] text-slate-600">
                        ₹{d.packageLPA} LPA • {d.appliedCount} Applied • {d.shortlistedCount} Shortlisted
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Academic Resources */}
          {matchingResources.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5" />
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
                      <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600">
                        {r.title}
                      </div>
                      <div className="text-[11px] text-slate-600">
                        {r.subject} ({r.subjectCode}) • {r.category} • {r.fileSize}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Notices */}
          {matchingNotices.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center space-x-1.5">
                <Bell className="w-3.5 h-3.5" />
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
                      <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600">
                        {n.title}
                      </div>
                      <div className="text-[11px] text-slate-600">
                        {n.category} • {n.date}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchingStudents.length === 0 &&
            matchingCompanies.length === 0 &&
            matchingDrives.length === 0 &&
            matchingResources.length === 0 &&
            matchingNotices.length === 0 && (
              <div className="py-12 text-center text-slate-600 text-xs">
                No institutional records found matching &ldquo;{query}&rdquo;.
              </div>
            )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
          <span>Search spans Students, Talent graph, Drives, Resources & Circulars</span>
          <span>Press <strong>ESC</strong> to close</span>
        </div>
      </div>
    </div>
  );
}
