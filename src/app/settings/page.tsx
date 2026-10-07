'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../components/layout/AppShell';
import { ShieldCheck, Link2, Bell, Lock, ArrowRight, User } from 'lucide-react';

export default function SettingsHubPage() {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            System Preferences • Institution Control
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Settings & Configurations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage institutional access control, developer graph integrations, and security telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/settings/integrations"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-2xs transition-all space-y-3 group"
          >
            <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 w-fit">
              <Link2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                <span>External Integrations & Email Sync</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Connect and sync GitHub, LeetCode, LinkedIn, Google Workspace, and review AI-detected career emails.
              </p>
            </div>
          </Link>

          <Link
            href="/settings/roles"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-2xs transition-all space-y-3 group"
          >
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                <span>Role Permissions & Audit Ledger</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Inspect institutional RBAC boundaries across Student, Faculty, HOD, Placement Cell, and view real-time audit trails.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
