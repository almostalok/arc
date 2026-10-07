'use client';

import React, { useState } from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { mockResources } from '../../../data/mockData';
import { 
  FolderOpen, 
  Download, 
  Search, 
  Filter, 
  FileText, 
  BookOpen, 
  CheckCircle,
  FileCode,
  GraduationCap
} from 'lucide-react';

export default function StudentResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Notes', 'Assignments', 'Previous Papers', 'Lab Manuals', 'Books'];

  const filtered = mockResources.filter((r) => {
    const matchesCat = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesQuery = 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.facultyName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Academic Knowledge Bank • Course Materials
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Resource Library & Study Repository
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Faculty-vetted lecture slides, previous year question papers, lab manuals, and assignments.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes, algorithms, faculty, question banks..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-indigo-600 focus:bg-white text-slate-900"
              />
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
              <span>Showing {filtered.length} of {mockResources.length} items</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((res) => (
            <div
              key={res.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-2xs transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {res.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{res.fileSize}</span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {res.title}
                </h3>

                <div className="text-xs text-slate-500 space-y-0.5 pt-1">
                  <div>Course: <span className="font-semibold text-slate-700">{res.subject}</span> ({res.subjectCode})</div>
                  <div>Faculty: <span className="text-slate-700">{res.facultyName}</span></div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  {res.downloadCount} downloads
                </span>
                <button
                  onClick={() => alert(`Simulated download of ${res.title}`)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 text-white font-semibold flex items-center space-x-1.5 transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-500 text-xs">
              No course resources found matching the criteria.
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
