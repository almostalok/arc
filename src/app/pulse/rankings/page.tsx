'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppShell } from '../../../components/layout/AppShell';
import { mockStudents } from '../../../data/mockData';
import { Award, ArrowUpRight, Trophy, Medal, Star, TrendingUp, Filter } from 'lucide-react';

export default function TalentRankingsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Overall' | 'Coding' | 'Development' | 'Academics' | 'Leadership'>('Overall');
  const [selectedDept, setSelectedDept] = useState('All');

  const tabs = ['Overall', 'Coding', 'Development', 'Academics', 'Leadership'] as const;
  const departments = ['All', 'CSE', 'IT', 'ECE', 'ME'];

  const sortedStudents = [...mockStudents]
    .filter((s) => selectedDept === 'All' || s.departmentCode === selectedDept)
    .sort((a, b) => {
      if (activeTab === 'Coding') return b.scores.coding - a.scores.coding;
      if (activeTab === 'Development') return b.scores.development - a.scores.development;
      if (activeTab === 'Academics') return b.scores.academics - a.scores.academics;
      if (activeTab === 'Leadership') return b.scores.leadership - a.scores.leadership;
      return b.careerReadinessScore - a.careerReadinessScore;
    });

  const getScoreForTab = (student: typeof mockStudents[0]) => {
    if (activeTab === 'Coding') return { score: student.scores.coding, label: 'LeetCode Rating & Problems' };
    if (activeTab === 'Development') return { score: student.scores.development, label: 'GitHub Repos & Commits' };
    if (activeTab === 'Academics') return { score: student.scores.academics, label: `CGPA ${student.cgpa}` };
    if (activeTab === 'Leadership') return { score: student.scores.leadership, label: 'Club Leads & SIH Winner' };
    return { score: student.careerReadinessScore, label: 'Unified Readiness Score' };
  };

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
            Campus Leaderboards • Institutional Merit Index
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Institutional Talent Rankings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time merit rankings across coding, open-source development, academic consistency, and leadership.
          </p>
        </div>

        {/* Tab switcher & Department filter */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs px-3.5 py-1.5 rounded-xl border transition-all ${
                  activeTab === tab
                    ? 'bg-slate-900 text-white border-slate-900 font-bold shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab} Leaderboard
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 pt-2 border-t border-slate-100 text-xs">
            <span className="font-semibold text-slate-500">Filter Department:</span>
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDept(d)}
                className={`px-2 py-0.5 rounded text-xs ${
                  selectedDept === d
                    ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3 w-16 text-center">Rank</th>
                  <th className="p-3">Student Name & Roll</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">CGPA</th>
                  <th className="p-3 font-mono">Performance Metric</th>
                  <th className="p-3 text-right">Talent Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sortedStudents.map((s, idx) => {
                  const data = getScoreForTab(s);
                  const rank = idx + 1;

                  return (
                    <tr
                      key={s.id}
                      onClick={() => router.push(`/pulse/students/${s.id}`)}
                      className="hover:bg-indigo-50/40 cursor-pointer transition-colors group"
                    >
                      <td className="p-3 text-center">
                        {rank === 1 ? (
                          <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-bold inline-flex items-center justify-center font-mono">
                            🥇
                          </span>
                        ) : rank === 2 ? (
                          <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold inline-flex items-center justify-center font-mono">
                            🥈
                          </span>
                        ) : rank === 3 ? (
                          <span className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 font-bold inline-flex items-center justify-center font-mono">
                            🥉
                          </span>
                        ) : (
                          <span className="font-mono font-bold text-slate-400">
                            #{rank}
                          </span>
                        )}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center space-x-3">
                          <img
                            src={s.avatar}
                            alt={s.name}
                            className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                          />
                          <div>
                            <div className="font-bold text-slate-900 group-hover:text-indigo-600">
                              {s.name}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              {s.arcId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 font-semibold text-slate-700 font-mono">
                        {s.departmentCode}
                      </td>
                      <td className="p-3 font-mono font-bold text-slate-900">
                        {s.cgpa}
                      </td>
                      <td className="p-3">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-base font-extrabold font-mono text-indigo-700">
                            {data.score}
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal">
                            ({data.label})
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-right">
                        <span className="inline-flex items-center space-x-1 text-indigo-600 font-semibold group-hover:underline">
                          <span>View Talent Profile</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
