'use client';

import React, { useState } from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { mockNotices } from '../../../data/mockData';
import { Bell, FileText, Download, Briefcase, GraduationCap, AlertTriangle, Pin } from 'lucide-react';

export default function StudentNoticesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>('not-1');

  const categories = ['All', 'Placement', 'Academic', 'Urgent', 'Events', 'Administration'];

  const filteredNotices = mockNotices.filter((n) => {
    return selectedCategory === 'All' || n.category === selectedCategory;
  });

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Official Secretariat • Circulars & Announcements
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Institutional Notice Board
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Authenticated notices from the Office of Examination, Placement Cell, and Dean Academics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
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

        {/* Notice List */}
        <div className="space-y-4">
          {filteredNotices.map((n) => {
            const isExpanded = expandedNoticeId === n.id;

            return (
              <div
                key={n.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {n.category}
                    </span>
                    {n.pinned && (
                      <span className="text-[10px] font-semibold flex items-center space-x-1 px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                        <Pin className="w-3 h-3" />
                        <span>Pinned</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400">{n.date}</span>
                </div>

                <div className="cursor-pointer" onClick={() => setExpandedNoticeId(isExpanded ? null : n.id)}>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {n.summary}
                  </p>
                </div>

                {isExpanded && (
                  <div className="pt-3 border-t border-slate-100 space-y-3 text-xs text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-xl">
                    <p>{n.content}</p>

                    {n.hasAttachment && (
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-xs">
                        <div className="flex items-center space-x-2 text-slate-700 font-mono font-medium">
                          <FileText className="w-4 h-4 text-indigo-600" />
                          <span>{n.attachmentName}</span>
                        </div>
                        <button
                          onClick={() => alert(`Downloading attachment: ${n.attachmentName}`)}
                          className="px-2.5 py-1 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold flex items-center space-x-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>Download Attachment</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <div>
                    Issued by: <span className="font-semibold text-slate-800">{n.author}</span> ({n.authorRole})
                  </div>
                  <button
                    onClick={() => setExpandedNoticeId(isExpanded ? null : n.id)}
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    {isExpanded ? 'Collapse' : 'Read Full Circular →'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
