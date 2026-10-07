'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { mockAuditLogs } from '../../../data/mockData';
import { ShieldCheck, Check, Lock, Users, KeyRound, Clock } from 'lucide-react';

export default function RolesPermissionsPage() {
  const rbacMatrix = [
    { role: 'Student', access: ['My Academics & GPA', 'My Attendance Tracker', 'My Placements & Funnel', 'Unified Digital ID Profile'], restricted: ['Faculty Gradebooks', 'Director Executive Analytics', 'Company Drives Configuration'] },
    { role: 'Faculty', access: ['Assigned Class Rosters', 'Classroom Attendance Marker', 'Midterm & Internal Marks', 'Course Material Bank'], restricted: ['Full Campus Placements', 'Executive Health Score', 'Student Records Outside Assigned Course'] },
    { role: 'HOD', access: ['Department Headcount & Roster', 'At-Risk Remedial Flags', 'Faculty Teaching Loads', 'Department Placement Stats'], restricted: ['Campus-wide Institution Finances', 'Super Admin Cluster Config'] },
    { role: 'Placement Cell', access: ['All Student Talent Graphs', 'Company Recruiter Directory', 'Active Job Drives & Rounds', 'Placement Funnel Kanban', 'CTC Salary Analytics'], restricted: ['Classroom Attendance Marking', 'Faculty Evaluations'] },
    { role: 'Director', access: ['Institution Health (87/100)', 'Cross-Department CTC Metrics', 'Accreditation Compliance', 'Executive Audit Logs', 'High-Potential Talent Radar'], restricted: ['Restricted to Executive Oversight'] },
    { role: 'Admin', access: ['RBAC Configuration', 'Audit Trail Ledger', 'Node Synchronization', 'Integration Graph API Keys'], restricted: ['Full Superuser Access'] },
  ];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            Institutional Security UX • Enterprise RBAC
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Role-Based Access Control & Security Ledger
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Zero-trust permission boundaries across university personas with cryptographic audit trails.
          </p>
        </div>

        {/* Section 31: Role-Based Access Demo Matrix */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center space-x-2">
            <KeyRound className="w-4 h-4 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">Institutional Permission Architecture</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rbacMatrix.map((item) => (
              <div
                key={item.role}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {item.role} Persona
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-indigo-700 border border-slate-200">
                    Scoped RBAC
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Granted Scopes</span>
                  {item.access.map((acc, aIdx) => (
                    <div key={aIdx} className="flex items-start space-x-1.5 text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{acc}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-1 text-xs pt-1 border-t border-slate-200/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Protected Enclaves</span>
                  {item.restricted.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start space-x-1.5 text-slate-400 text-[11px]">
                      <Lock className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 49: Audit Logs Screen */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-900">Institutional Activity Audit Trail</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Real-time ledger events</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Actor</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Action Completed</th>
                  <th className="p-3">Target Entity</th>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {mockAuditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50">
                    <td className="p-3 font-sans font-bold text-slate-900">{log.actor}</td>
                    <td className="p-3 text-slate-600">{log.actorRole}</td>
                    <td className="p-3 font-sans text-slate-700">{log.action}</td>
                    <td className="p-3 text-indigo-700">{log.target}</td>
                    <td className="p-3 text-slate-500">{log.timestamp}</td>
                    <td className="p-3 text-right">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                        PASSED
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
