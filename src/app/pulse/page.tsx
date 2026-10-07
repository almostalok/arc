'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppShell } from '../../components/layout/AppShell';
import { MetricCard } from '../../components/ui/MetricCard';
import { mockStudents } from '../../data/mockData';
import { 
  Activity, 
  Search, 
  Filter, 
  ArrowUpRight, 
  Users, 
  Sparkles, 
  Zap, 
  Award, 
  TrendingUp,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

export default function PulseDiscoveryPage() {
  const router = useRouter();
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedTalentArea, setSelectedTalentArea] = useState('All');
  const [minCgpa, setMinCgpa] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = ['All', 'CSE', 'IT', 'ECE', 'ME'];
  const talentAreas = ['All', 'Coding', 'Web Development', 'AI / ML', 'Leadership', 'Research'];
  const cgpaOptions = ['All', '8.0+', '8.5+', '9.0+'];

  const filteredStudents = mockStudents.filter((s) => {
    const matchesDept = selectedDept === 'All' || s.departmentCode === selectedDept;
    const matchesQuery = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.arcId.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesCgpa = true;
    if (minCgpa === '8.0+') matchesCgpa = s.cgpa >= 8.0;
    if (minCgpa === '8.5+') matchesCgpa = s.cgpa >= 8.5;
    if (minCgpa === '9.0+') matchesCgpa = s.cgpa >= 9.0;

    let matchesTalent = true;
    if (selectedTalentArea === 'Coding') matchesTalent = s.scores.coding >= 85;
    if (selectedTalentArea === 'Web Development') matchesTalent = s.scores.development >= 85;
    if (selectedTalentArea === 'Leadership') matchesTalent = s.scores.leadership >= 85;

    return matchesDept && matchesQuery && matchesCgpa && matchesTalent;
  });

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
                ARC Pulse • Talent Intelligence
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 font-semibold border border-rose-200">
                Live Graph
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Discover Talent Across Your Institution
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Multi-dimensional talent discovery correlating algorithmic coding, GitHub commits, hackathons, and academics.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/pulse/rankings"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-2xs"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Campus Leaderboards</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* 5 Master Top Metrics from Section 16 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <MetricCard
            title="Total Students"
            value="8,421"
            subtitle="Indexed in graph"
            icon={Users}
          />
          <MetricCard
            title="Faculty"
            value="412"
            subtitle="Verified evaluators"
            icon={Users}
          />
          <MetricCard
            title="High Potential"
            value="243"
            subtitle="Score > 90/100"
            change="+18 this sem"
            trend="up"
            icon={Zap}
          />
          <MetricCard
            title="Achievements"
            value="1,284"
            subtitle="Hackathons & papers"
            icon={Award}
          />
          <MetricCard
            title="Career Ready"
            value="67%"
            subtitle="Tier 1 eligible"
            change="+4.2%"
            trend="up"
            icon={Activity}
          />
        </div>

        {/* Filters Matrix */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candidates by name, roll number, or ARC ID..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-indigo-600 focus:bg-white text-slate-900"
              />
            </div>

            <div className="text-xs text-slate-500 font-mono">
              Displaying <strong>{filteredStudents.length}</strong> matching candidate records
            </div>
          </div>

          {/* Filter Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-100 text-xs">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Department
              </label>
              <div className="flex flex-wrap gap-1">
                {departments.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDept(d)}
                    className={`px-2.5 py-1 rounded-lg border text-xs ${
                      selectedDept === d
                        ? 'bg-slate-900 text-white font-semibold border-slate-900'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Talent Area
              </label>
              <div className="flex flex-wrap gap-1">
                {talentAreas.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTalentArea(t)}
                    className={`px-2.5 py-1 rounded-lg border text-xs ${
                      selectedTalentArea === t
                        ? 'bg-indigo-600 text-white font-semibold border-indigo-600'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Minimum CGPA
              </label>
              <div className="flex flex-wrap gap-1">
                {cgpaOptions.map((cg) => (
                  <button
                    key={cg}
                    onClick={() => setMinCgpa(cg)}
                    className={`px-2.5 py-1 rounded-lg border text-xs ${
                      minCgpa === cg
                        ? 'bg-emerald-600 text-white font-semibold border-emerald-600'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cg}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sophisticated Talent Data Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Talent Matrix & Verified Competence Scores</h3>
            <span className="text-xs text-slate-400 font-mono">Click any row to open student profile</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Student Identity</th>
                  <th className="p-3">Dept</th>
                  <th className="p-3">CGPA</th>
                  <th className="p-3">Coding</th>
                  <th className="p-3">Development</th>
                  <th className="p-3">Communication</th>
                  <th className="p-3">Leadership</th>
                  <th className="p-3">Career Readiness</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.map((s) => (
                  <tr
                    key={s.id}
                    onClick={() => router.push(`/pulse/students/${s.id}`)}
                    className="hover:bg-indigo-50/40 cursor-pointer transition-colors group"
                  >
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={s.avatar}
                          alt={s.name}
                          className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                        />
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {s.name}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            {s.arcId}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold font-mono">
                        {s.departmentCode}
                      </span>
                    </td>
                    <td className="p-3 font-mono font-bold text-slate-900">{s.cgpa}</td>
                    <td className="p-3 font-mono font-semibold text-indigo-700">{s.scores.coding}</td>
                    <td className="p-3 font-mono font-semibold text-blue-700">{s.scores.development}</td>
                    <td className="p-3 font-mono font-semibold text-slate-700">{s.scores.communication}</td>
                    <td className="p-3 font-mono font-semibold text-slate-700">{s.scores.leadership}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-bold">
                        {s.careerReadinessScore} / 100
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <span className="inline-flex items-center space-x-1 text-indigo-600 font-semibold group-hover:underline">
                        <span>Profile</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
