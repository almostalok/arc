'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { mockAuditLogs } from '../../../data/mockData';
import { BarChart3, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function DirectorAnalyticsPage() {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            Governance & Executive Intelligence • Campus Telemetry
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Institutional Health & Governance Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Executive oversight over curriculum compliance, faculty load balancing, and institutional security audit trails.
          </p>
        </div>

        {/* 3 Executive Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs text-slate-400 font-semibold uppercase">Accreditation Readiness</span>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600 mt-1">94.8%</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">NAAC Cycle 4 Criteria fully documented</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs text-slate-400 font-semibold uppercase">At-Risk Student Ratio</span>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-600 mt-1">4.2%</div>
            <p className="text-xs text-slate-500 mt-1">37 students undergoing remedial intervention</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs text-slate-400 font-semibold uppercase">Faculty-to-Student Ratio</span>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-600 mt-1">1 : 18.4</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">Exceeds AICTE statutory requirement (1:20)</p>
          </div>
        </div>

        {/* Security & Activity Audit Log Section (Section 49 from Prompt) */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <h3 className="text-sm font-bold text-slate-900">Institutional Security & Audit Logs (Real-time)</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Immutable cryptographic event stream</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Actor & Persona</th>
                  <th className="p-3">Action Description</th>
                  <th className="p-3">Target Node</th>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">IP Address</th>
                  <th className="p-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {mockAuditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50">
                    <td className="p-3">
                      <div className="font-bold text-slate-900 font-sans">{log.actor}</div>
                      <div className="text-[10px] text-slate-400">{log.actorRole}</div>
                    </td>
                    <td className="p-3 font-sans text-slate-700">{log.action}</td>
                    <td className="p-3 text-indigo-600">{log.target}</td>
                    <td className="p-3 text-slate-500">{log.timestamp}</td>
                    <td className="p-3 text-slate-400">{log.ipAddress}</td>
                    <td className="p-3 text-right">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                        {log.status}
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
