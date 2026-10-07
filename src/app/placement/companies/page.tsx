'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/layout/AppShell';
import { mockCompanies } from '../../../data/mockData';
import { Building, Search, ArrowUpRight, Briefcase, ExternalLink, Users, Award } from 'lucide-react';

export default function CompaniesDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('All');

  const tiers = ['All', 'Super Dream', 'Dream', 'Tier 1'];

  const filteredCompanies = mockCompanies.filter((c) => {
    const matchesTier = selectedTier === 'All' || c.tier === selectedTier;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTier && matchesSearch;
  });

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
            Recruiter Ecosystem • Corporate Partnerships
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Partner Companies & Recruiter Directory
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Empanelled campus recruiters, active drive pipelines, compensation bands, and institutional hiring history.
          </p>
        </div>

        {/* Filter bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recruiters by name, tech industry, or tier..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-indigo-600 focus:bg-white text-slate-900"
              />
            </div>

            <div className="flex flex-wrap gap-1">
              {tiers.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTier(t)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    selectedTier === t
                      ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompanies.map((comp) => (
            <div
              key={comp.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-2xs transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-base text-slate-800">
                      {comp.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {comp.name}
                      </h3>
                      <p className="text-[11px] text-slate-500">{comp.industry}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border font-mono ${
                    comp.tier === 'Super Dream'
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : comp.tier === 'Dream'
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {comp.tier}
                  </span>
                </div>

                {/* Compensation & Position Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50">
                    <span className="text-[10px] text-slate-400 block">Average CTC</span>
                    <span className="font-mono font-bold text-slate-900">₹{comp.averagePackageLPA} LPA</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50">
                    <span className="text-[10px] text-slate-400 block">Highest CTC</span>
                    <span className="font-mono font-bold text-emerald-700">₹{comp.highestPackageLPA} LPA</span>
                  </div>
                </div>

                {/* Candidate Funnel numbers */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Applications: <strong className="text-slate-800">{comp.totalApplications}</strong></span>
                  <span>Shortlisted: <strong className="text-slate-800">{comp.shortlistedCount}</strong></span>
                  <span>Offers: <strong className="text-emerald-700 font-bold">{comp.selectedCount}</strong></span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">
                  {comp.pastHires} alumni hired
                </span>
                <Link
                  href={`/placement/drives`}
                  className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  <span>Active Drives</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
