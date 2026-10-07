'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { mockStudents } from '../../../data/mockData';
import { TalentRadar } from '../../../components/pulse/TalentRadar';
import { Zap, CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Award } from 'lucide-react';

export default function StudentCareerPage() {
  const student = mockStudents[0];

  const categories = [
    { name: 'Academics & CGPA', score: student.scores.academics, benchmark: 80, status: 'Exceeds' },
    { name: 'Technical & Coding', score: student.scores.coding, benchmark: 85, status: 'Top 2%' },
    { name: 'Development & Projects', score: student.scores.development, benchmark: 80, status: 'Top 5%' },
    { name: 'Communication & Soft Skills', score: student.scores.communication, benchmark: 75, status: 'Meets' },
    { name: 'Leadership & Events', score: student.scores.leadership, benchmark: 70, status: 'Exceeds' },
    { name: 'Overall Placement Readiness', score: student.careerReadinessScore, benchmark: 75, status: 'Super Dream Ready' },
  ];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Talent Intelligence • Institutional Competency Audit
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Student Career Readiness Index
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Algorithmic evaluation across code commits, problem difficulty ratings, internships, and communication.
          </p>
        </div>

        {/* Top Score Banner */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
              Aggregated Career Index
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-5xl font-black font-mono text-indigo-400">
                {student.careerReadinessScore}
              </span>
              <span className="text-sm text-slate-400 font-mono">/ 100</span>
            </div>
            <p className="text-xs text-slate-300">
              Ranked in the 98th percentile for Tier 1 Product Engineering Roles
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-slate-800 p-3 rounded-xl border border-slate-700">
            <Zap className="w-6 h-6 text-amber-400" />
            <div className="text-xs">
              <div className="font-bold text-white">Tier 1 Elite Placement Pool</div>
              <div className="text-[11px] text-emerald-300">Google, Microsoft, Amazon eligible</div>
            </div>
          </div>
        </div>

        {/* Grid: Radar Chart + Dimension Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Radar Chart */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Multi-Dimensional Competence Radar</h3>
            <p className="text-xs text-slate-500">
              Visualizes 6 key dimensions evaluated during institutional recruitment screening.
            </p>
            <TalentRadar scores={student.scores} />
          </div>

          {/* Breakdown table */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Score Breakdown & Industry Benchmarks</h3>
            <div className="divide-y divide-slate-100">
              {categories.map((c) => (
                <div key={c.name} className="py-2.5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{c.name}</div>
                    <div className="text-[11px] text-slate-400">Campus benchmark: {c.benchmark}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {c.status}
                    </span>
                    <span className="font-mono font-bold text-sm text-slate-900 w-10 text-right">
                      {c.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actionable Recommendations */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center space-x-2 text-indigo-700">
            <TrendingUp className="w-4 h-4" />
            <h3 className="text-sm font-bold text-slate-900">Targeted Interventions to Reach 98+ Score</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">1. Production-Grade Distributed System Project</div>
              <p className="text-slate-600">
                Deploy 1 end-to-end microservices architecture on AWS ECS or Kubernetes with public metrics and architecture documentation.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">2. Complete AWS Developer Associate Credential</div>
              <p className="text-slate-600">
                AWS Associate certificate will increase cloud verification index to 100%.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">3. Campus Mock Technical Interview 2</div>
              <p className="text-slate-600">
                Participate in the upcoming Department mock system design panel to boost communication index.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">4. Request Verified Juspay Internship Letter</div>
              <p className="text-slate-600">
                Submit mentor verification to authenticate 12-week SDE internship credentials in the institutional graph.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
