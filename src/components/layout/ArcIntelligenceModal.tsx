'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRole } from '../../context/RoleContext';
import { mockAiPresetQueries } from '../../data/mockData';
import { 
  Sparkles, 
  X, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ExternalLink,
  Bot
} from 'lucide-react';

export function ArcIntelligenceModal() {
  const { isAiOpen, setIsAiOpen, aiDefaultQuery } = useRole();
  const [selectedPresetId, setSelectedPresetId] = useState<string>('q1');
  const [customInput, setCustomInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (aiDefaultQuery) {
      setCustomInput(aiDefaultQuery);
    }
  }, [aiDefaultQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsAiOpen(false);
    };
    if (isAiOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAiOpen, setIsAiOpen]);

  if (!isAiOpen) return null;

  const currentPreset = mockAiPresetQueries.find((q) => q.id === selectedPresetId) || mockAiPresetQueries[0];

  const handleSelectPreset = (id: string) => {
    setIsProcessing(true);
    setSelectedPresetId(id);
    setTimeout(() => {
      setIsProcessing(false);
    }, 250);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs">
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-900 text-white">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-bold tracking-tight">ARC Institutional Intelligence</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 font-mono border border-indigo-400/30">
                  GPT-4o Enterprise Graph
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Cross-correlating Academic Records, GitHub, LeetCode, and Placement Funnels.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAiOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Prompt Pills */}
        <div className="p-3 bg-slate-50 border-b border-slate-200">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
            Institutional Queries & Intelligence Presets
          </div>
          <div className="flex flex-wrap gap-1.5">
            {mockAiPresetQueries.map((pq) => (
              <button
                key={pq.id}
                onClick={() => handleSelectPreset(pq.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border text-left transition-all ${
                  selectedPresetId === pq.id
                    ? 'bg-indigo-600 text-white border-indigo-600 font-semibold shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                {pq.query}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {isProcessing ? (
            <div className="py-16 text-center space-y-3">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-indigo-600 border-t-transparent" />
              <div className="text-xs text-slate-500 font-medium">
                Analyzing 8,421 student graphs across academic & coding indices...
              </div>
            </div>
          ) : (
            <div>
              {/* Question & Summary Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-indigo-700 text-xs font-semibold">
                  <Bot className="w-4 h-4" />
                  <span>{currentPreset.responseTitle}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentPreset.responseSummary}
                </p>
              </div>

              {/* Preset 1: Candidates breakdown */}
              {currentPreset.candidates && (
                <div className="mt-4 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Ranked Matches with Verified Evidence Signals
                  </div>
                  {currentPreset.candidates.map((cand, idx) => (
                    <div 
                      key={cand.name}
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-200 bg-white shadow-2xs space-y-2.5 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-bold text-slate-900">{cand.name}</span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            Match: {cand.matchScore}
                          </span>
                        </div>
                        <Link
                          href={`/pulse/students/${cand.studentId}`}
                          onClick={() => setIsAiOpen(false)}
                          className="inline-flex items-center space-x-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold"
                        >
                          <span>Open Talent Graph</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 pt-1">
                        {cand.signals.map((sig, sIdx) => (
                          <div key={sIdx} className="flex items-start space-x-1.5 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{sig}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Preset 2: Placement Eligibility Risk Breakdown */}
              {currentPreset.breakdown && (
                <div className="mt-4 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Risk Breakdown Matrix (Requires Action)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentPreset.breakdown.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg border border-slate-200 bg-white flex items-center justify-between">
                        <div>
                          <div className="text-xs font-semibold text-slate-800">{item.reason}</div>
                          <span className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded mt-1 inline-block ${
                            item.severity === 'Critical' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}>
                            {item.severity} Risk
                          </span>
                        </div>
                        <div className="text-lg font-bold text-slate-900 font-mono">
                          {item.count}
                        </div>
                      </div>
                    ))}
                  </div>

                  {currentPreset.recommendedActions && (
                    <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
                      <div className="text-xs font-bold text-amber-900 flex items-center space-x-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                        <span>Recommended Institutional Interventions:</span>
                      </div>
                      <ul className="space-y-1 text-xs text-amber-800">
                        {currentPreset.recommendedActions.map((action, aIdx) => (
                          <li key={aIdx} className="flex items-start space-x-1.5">
                            <span className="font-bold">•</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Preset 3: Stats comparison */}
              {currentPreset.stats && (
                <div className="mt-4 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Department Comparative Matrix
                  </div>
                  <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                        <tr>
                          <th className="p-3">Performance Dimension</th>
                          <th className="p-3">Computer Science (CSE)</th>
                          <th className="p-3">Electronics (ECE)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {currentPreset.stats.map((st, sIdx) => (
                          <tr key={sIdx} className="hover:bg-slate-50/60">
                            <td className="p-3 font-medium text-slate-800">{st.metric}</td>
                            <td className="p-3 font-semibold text-indigo-700 font-mono">{st.cse}</td>
                            <td className="p-3 font-semibold text-slate-700 font-mono">{st.ece}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Interactive Query Input Footer */}
        <form onSubmit={handleCustomSubmit} className="p-3 border-t border-slate-200 bg-white flex items-center space-x-2">
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Ask anything about student talent, CGPA trends, placement funnels, or attendance anomalies..."
            className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-indigo-600 focus:bg-white text-slate-900"
          />
          <button
            type="submit"
            disabled={!customInput.trim()}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors disabled:opacity-40"
          >
            <span>Ask ARC</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
