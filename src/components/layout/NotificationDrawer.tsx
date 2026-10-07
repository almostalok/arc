'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRole } from '../../context/RoleContext';
import { mockNotices, mockDetectedEmails } from '../../data/mockData';
import { 
  X, 
  Bell, 
  Briefcase, 
  GraduationCap, 
  AlertTriangle, 
  Mail, 
  CheckCheck,
  FileText
} from 'lucide-react';

export function NotificationDrawer() {
  const { isNotificationsOpen, setIsNotificationsOpen } = useRole();
  const [activeTab, setActiveTab] = useState<'all' | 'placement' | 'academic' | 'urgent'>('all');
  const [readNotices, setReadNotices] = useState<string[]>([]);

  if (!isNotificationsOpen) return null;

  const filteredNotices = mockNotices.filter((n) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'placement') return n.category === 'Placement';
    if (activeTab === 'academic') return n.category === 'Academic';
    if (activeTab === 'urgent') return n.category === 'Urgent';
    return true;
  });

  const markAllRead = () => {
    setReadNotices(mockNotices.map((n) => n.id));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Placement':
        return <Briefcase className="w-3.5 h-3.5 text-indigo-600" />;
      case 'Academic':
        return <GraduationCap className="w-3.5 h-3.5 text-blue-600" />;
      case 'Urgent':
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />;
      default:
        return <FileText className="w-3.5 h-3.5 text-slate-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/40 backdrop-blur-2xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">Institutional Notifications</h3>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold font-mono">
              {mockNotices.length - readNotices.length} new
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={markAllRead}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center space-x-1"
              title="Mark all as read"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Mark all</span>
            </button>
            <button
              onClick={() => setIsNotificationsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Career Email Activity Alert Banner */}
        <div className="p-3 bg-indigo-50/70 border-b border-indigo-100 flex items-start space-x-2.5">
          <Mail className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <div className="font-semibold text-indigo-950">
              ARC detected {mockDetectedEmails.length} career-related emails
            </div>
            <p className="text-[11px] text-indigo-700 mt-0.5">
              Google Technical Interview invitation, Microsoft OA clearance & Deloitte shortlist.
            </p>
            <Link
              href="/settings/integrations"
              onClick={() => setIsNotificationsOpen(false)}
              className="inline-block mt-1 font-semibold text-[11px] text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Review detected activity →
            </Link>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex border-b border-slate-200 bg-white px-2 pt-2 gap-1 text-xs font-medium">
          {(['all', 'placement', 'academic', 'urgent'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-t-lg capitalize text-xs font-semibold border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-600 bg-indigo-50/40'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {filteredNotices.map((n) => {
            const isRead = readNotices.includes(n.id);
            return (
              <div 
                key={n.id} 
                className={`p-4 transition-colors hover:bg-slate-50 ${isRead ? 'opacity-70' : 'bg-white'}`}
              >
                <div className="flex items-start justify-between space-x-2">
                  <div className="flex items-center space-x-1.5">
                    {getCategoryIcon(n.category)}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {n.category}
                    </span>
                    {n.pinned && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
                        Pinned
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{n.date}</span>
                </div>

                <h4 className="text-xs font-bold text-slate-900 mt-1.5 leading-snug">
                  {n.title}
                </h4>

                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {n.summary}
                </p>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{n.author}</span>
                  {n.hasAttachment && (
                    <span className="text-indigo-600 font-semibold hover:underline flex items-center space-x-1">
                      <span>{n.attachmentName?.slice(0, 18)}...</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
          <Link
            href="/student/notices"
            onClick={() => setIsNotificationsOpen(false)}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
          >
            View Complete Institutional Notice Archive →
          </Link>
        </div>
      </div>
    </div>
  );
}
