'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppShell } from '../../components/layout/AppShell';
import { StatRow } from '../../components/ui/StatRow';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { StudentDrawer } from '../../components/student/StudentDrawer';
import { mockStudents } from '../../data/mockData';
import { Student } from '../../types';
import { 
  Activity, 
  Search, 
  Award, 
  ArrowUpRight, 
  Zap, 
  Users, 
  Filter, 
  SlidersHorizontal,
  Bookmark,
  Check,
  ChevronRight
} from 'lucide-react';

export default function PulseDiscoveryPage() {
  const router = useRouter();
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedTalentArea, setSelectedTalentArea] = useState('All');
  const [minCgpa, setMinCgpa] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [inspectedStudent, setInspectedStudent] = useState<Student | null>(null);

  const departments = ['All', 'CSE', 'IT', 'ECE', 'ME'];
  const talentAreas = ['All', 'Coding', 'Web Development', 'AI / ML', 'Leadership'];
  const cgpaOptions = ['All', '8.0+', '8.5+', '9.0+'];

  const presets = [
    { id: 'sde', name: 'Top SDE Candidates', dept: 'All', talent: 'Coding', cgpa: '8.0+' },
    { id: 'placement_ready', name: 'Placement Ready (Score > 85)', dept: 'All', talent: 'All', cgpa: '8.0+' },
    { id: 'cse_high', name: 'CSE High Potential', dept: 'CSE', talent: 'Web Development', cgpa: '8.5+' },
  ];

  const handleApplyPreset = (preset: typeof presets[0]) => {
    if (activePreset === preset.id) {
      setActivePreset(null);
      setSelectedDept('All');
      setSelectedTalentArea('All');
      setMinCgpa('All');
    } else {
      setActivePreset(preset.id);
      setSelectedDept(preset.dept);
      setSelectedTalentArea(preset.talent);
      setMinCgpa(preset.cgpa);
    }
  };

  const filteredStudents = mockStudents.filter((s) => {
    const matchesDept = selectedDept === 'All' || s.departmentCode === selectedDept;
    const matchesQuery = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.arcId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.rollNumber.toLowerCase().includes(searchQuery.toLowerCase());
    
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
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                ARC Pulse • Institutional Talent Intelligence
              </span>
              <Badge variant="verified" size="sm" dot>
                Identity Graph Synced
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Talent Discovery & Competence Radar
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Evidence-based competence index correlating LeetCode ratings, GitHub commits, hackathon achievements, and academic performance.
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <Link href="/pulse/rankings">
              <Button variant="outline" size="sm" leftIcon={<Award className="w-3.5 h-3.5 text-amber-500" />}>
                Campus Leaderboards
              </Button>
            </Link>
          </div>
        </div>

        {/* High-Signal Metric Row (Linear / Stripe style, replacing generic KPI cards) */}
        <StatRow
          stats={[
            {
              label: 'Total Indexed Students',
              value: '8,421',
              meta: 'Verified across 5 departments',
              badge: 'Campus Node',
            },
            {
              label: 'High Potential Candidates',
              value: '243',
              change: '+18 this sem',
              trend: 'up',
              meta: 'Readiness score > 85/100',
            },
            {
              label: 'Competitive Coders',
              value: '412',
              meta: 'LeetCode rating > 1600 verified',
            },
            {
              label: 'Placement Ready',
              value: '67.4%',
              change: '+4.2%',
              trend: 'up',
              meta: 'Eligible for Day-0 / Day-1 drives',
            },
          ]}
        />

        {/* Saved Views / Power Filter Presets (Rule 42) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider flex items-center space-x-1 shrink-0">
            <Bookmark className="w-3 h-3 text-slate-600" />
            <span>Saved Views:</span>
          </span>
          {presets.map((p) => {
            const isSelected = activePreset === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleApplyPreset(p)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium shrink-0 transition-colors flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                    : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-emerald-400" />}
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Multi-Dimensional Filter Bar (Rule 26 & 41) */}
        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candidates by name, roll number, or ARC ID..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-lg bg-slate-50 border border-slate-200/80 focus:outline-hidden focus:border-indigo-600 focus:bg-white text-slate-900 transition-colors"
              />
            </div>

            <div className="text-xs text-slate-600 font-mono">
              Showing <strong>{filteredStudents.length}</strong> verified student records
            </div>
          </div>

          {/* Compact Filter Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100 text-xs">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Department
              </label>
              <div className="flex flex-wrap gap-1">
                {departments.map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setSelectedDept(d);
                      setActivePreset(null);
                    }}
                    className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors ${
                      selectedDept === d
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Talent Dimension
              </label>
              <div className="flex flex-wrap gap-1">
                {talentAreas.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setSelectedTalentArea(t);
                      setActivePreset(null);
                    }}
                    className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors ${
                      selectedTalentArea === t
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Minimum CGPA
              </label>
              <div className="flex flex-wrap gap-1">
                {cgpaOptions.map((cg) => (
                  <button
                    key={cg}
                    onClick={() => {
                      setMinCgpa(cg);
                      setActivePreset(null);
                    }}
                    className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors ${
                      minCgpa === cg
                        ? 'bg-emerald-600 text-white border-emerald-600'
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

        {/* Professional Talent Table (Rule 27 & 39) */}
        <div className="rounded-xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200/80 flex items-center justify-between bg-slate-50/50">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Institutional Talent Register
              </h3>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Click any row for quick contextual inspection drawer; click arrow to open full profile.
              </p>
            </div>
            <span className="text-[11px] text-slate-600 font-mono">
              Keyboard shortcut: ESC closes drawer
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50/70 border-b border-slate-200/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Student Identity</th>
                  <th className="px-3 py-3">Dept</th>
                  <th className="px-3 py-3">CGPA</th>
                  <th className="px-3 py-3">Coding Score (Evidence)</th>
                  <th className="px-3 py-3">Development</th>
                  <th className="px-3 py-3">Leadership</th>
                  <th className="px-3 py-3">Career Readiness</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredStudents.map((s) => (
                  <tr
                    key={s.id}
                    onClick={() => setInspectedStudent(s)}
                    className="hover:bg-slate-50/80 cursor-pointer transition-colors group"
                  >
                    {/* Identity */}
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={s.avatar}
                          alt={s.name}
                          className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                            {s.name}
                          </div>
                          <div className="text-[11px] text-slate-600 font-mono">
                            {s.arcId}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Dept */}
                    <td className="px-3 py-3">
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] font-medium border border-slate-200/60">
                        {s.departmentCode}
                      </span>
                    </td>

                    {/* CGPA */}
                    <td className="px-3 py-3 font-mono font-bold text-slate-900 tabular-nums">
                      {s.cgpa}
                    </td>

                    {/* Coding Score with Evidence Footnote (Rule 28) */}
                    <td className="px-3 py-3">
                      <div className="flex flex-col">
                        <span className="font-mono font-bold text-indigo-700 tabular-nums">
                          {s.scores.coding} / 100
                        </span>
                        <span className="text-[10px] text-slate-600 font-mono truncate max-w-[170px]">
                          {s.evidence.codingRating} rating · {s.evidence.codingProblems} solved
                        </span>
                      </div>
                    </td>

                    {/* Development */}
                    <td className="px-3 py-3">
                      <div className="flex flex-col">
                        <span className="font-mono font-semibold text-blue-700 tabular-nums">
                          {s.scores.development}
                        </span>
                        <span className="text-[10px] text-slate-600 font-mono truncate max-w-[140px]">
                          {s.evidence.projectsCount} projects · {s.evidence.githubContributions} commits
                        </span>
                      </div>
                    </td>

                    {/* Leadership */}
                    <td className="px-3 py-3 font-mono font-semibold text-slate-700 tabular-nums">
                      {s.scores.leadership}
                    </td>

                    {/* Career Readiness */}
                    <td className="px-3 py-3">
                      <Badge variant={s.careerReadinessScore >= 85 ? 'success' : 'neutral'} size="sm" dot>
                        {s.careerReadinessScore}% Ready
                      </Badge>
                    </td>

                    {/* Action */}
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/pulse/students/${s.id}`);
                        }}
                        className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition-colors"
                      >
                        <span>Profile</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Contextual Student Inspection Drawer (Rule 43) */}
      <StudentDrawer
        student={inspectedStudent}
        isOpen={!!inspectedStudent}
        onClose={() => setInspectedStudent(null)}
      />
    </AppShell>
  );
}
