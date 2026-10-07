'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { MetricCard } from '../../components/ui/MetricCard';
import { PlacementPipelineKanban } from '../../components/placement/PlacementPipelineKanban';
import { 
  Briefcase, 
  Building, 
  Users, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  ArrowRight,
  Filter,
  BarChart3,
  Calendar
} from 'lucide-react';

export default function PlacementCommandPage() {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                ARC Placement • Recruitment Command Center
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-200">
                Session 2024–25
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Manage Every Opportunity from Application to Offer
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              End-to-end recruitment funnel tracking across Tier 1, Dream, and Core engineering companies.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/placement/companies"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-2xs"
            >
              <Building className="w-3.5 h-3.5" />
              <span>Company Directory</span>
            </Link>
            <Link
              href="/placement/analytics"
              className="px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>CTC Analytics</span>
            </Link>
          </div>
        </div>

        {/* 5 Core Metrics from Section 21 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <MetricCard
            title="Active Drives"
            value="18"
            subtitle="Tier 1 & Dream"
            icon={Briefcase}
          />
          <MetricCard
            title="Applications"
            value="842"
            subtitle="In active process"
            icon={Users}
          />
          <MetricCard
            title="Shortlisted"
            value="421"
            subtitle="Cleared screening"
            icon={CheckCircle2}
          />
          <MetricCard
            title="Interviews"
            value="143"
            subtitle="Technical & HR"
            icon={Calendar}
          />
          <MetricCard
            title="Offers Released"
            value="38"
            subtitle="Highest: ₹54 LPA"
            change="+12 this week"
            trend="up"
            icon={Award}
          />
        </div>

        {/* Placement Pipeline Kanban (Section 22) */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Live Candidate Pipeline (Kanban)</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Drag or inspect candidate progress across recruitment evaluation milestones.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <span className="font-semibold text-slate-500">Fast Filter:</span>
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-mono font-semibold">
                Google, Microsoft, Razorpay, Deloitte
              </span>
            </div>
          </div>

          <PlacementPipelineKanban />
        </div>
      </div>
    </AppShell>
  );
}
