'use client';

import React, { useState } from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { mockIntegrations, mockDetectedEmails } from '../../../data/mockData';
import { 
  Link2, 
  RotateCw, 
  CheckCircle2, 
  Mail, 
  ExternalLink, 
  Calendar, 
  Code2, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../../components/ui/BrandIcons';

export default function IntegrationsPage() {
  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [syncedIds, setSyncedIds] = useState<string[]>([]);
  const [reviewedMail, setReviewedMail] = useState<string | null>(null);

  const handleSync = (id: string) => {
    setSyncingId(id);
    setTimeout(() => {
      setSyncingId(null);
      setSyncedIds((prev) => [...prev, id]);
    }, 600);
  };

  const getIntegrationIcon = (name: string) => {
    if (name.includes('GitHub')) return <GithubIcon className="w-5 h-5 text-slate-900" />;
    if (name.includes('LinkedIn')) return <LinkedinIcon className="w-5 h-5 text-blue-600" />;
    if (name.includes('LeetCode')) return <Code2 className="w-5 h-5 text-amber-500" />;
    if (name.includes('Calendar')) return <Calendar className="w-5 h-5 text-emerald-600" />;
    return <Mail className="w-5 h-5 text-indigo-600" />;
  };

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            Ecosystem Connectivity • External Profiles & Intelligence
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            External Integrations & Data Ingestion
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Synchronize external developer graphs, professional profiles, and institutional email telemetry.
          </p>
        </div>

        {/* Section 35: Email Intelligence Prototype Banner */}
        <div className="p-6 rounded-2xl bg-indigo-900 text-white shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-bold text-white">ARC Email Intelligence Engine</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 font-mono">
                    AI NLP Classifier
                  </span>
                </div>
                <p className="text-xs text-indigo-200 mt-0.5">
                  ARC detected 3 career-related emails across university mailboxes.
                </p>
              </div>
            </div>

            <button
              onClick={() => alert('Simulated ingestion: 3 verified placement emails converted into live funnel events!')}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-indigo-950 font-bold text-xs shadow-md transition-colors self-start sm:self-auto"
            >
              Review & Ingest Detected Activity
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {mockDetectedEmails.map((mail) => (
              <div
                key={mail.id}
                className="p-3.5 rounded-xl bg-indigo-950/60 border border-indigo-800 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{mail.company}</span>
                  <span className="text-[10px] text-emerald-300 font-mono">Confidence: {mail.confidence}</span>
                </div>
                <p className="text-[11px] text-indigo-200 font-medium line-clamp-1">{mail.subject}</p>
                <div className="text-[10px] text-indigo-300 flex items-center justify-between pt-1">
                  <span className="text-emerald-400 font-semibold">{mail.actionType}</span>
                  <span className="font-mono">{mail.receivedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 34: Connected Integration Cards */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Connected Verification Graph Nodes</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockIntegrations.map((intg) => {
              const isSyncing = syncingId === intg.id;
              const hasSynced = syncedIds.includes(intg.id);

              return (
                <div
                  key={intg.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-2xs transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          {getIntegrationIcon(intg.name)}
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">{intg.name}</h4>
                          <span className="text-[10px] text-slate-400 font-mono">{intg.category}</span>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center space-x-1">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>Connected</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {intg.statusText}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {hasSynced ? 'Synced just now' : `Synced ${intg.lastSynced}`}
                    </span>
                    <button
                      onClick={() => handleSync(intg.id)}
                      disabled={isSyncing}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold flex items-center space-x-1.5 transition-colors disabled:opacity-50"
                    >
                      <RotateCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-indigo-600' : 'text-slate-500'}`} />
                      <span>{isSyncing ? 'Syncing...' : 'Sync Graph'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
