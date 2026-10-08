'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { StatRow } from '../../../components/ui/StatRow';
import { Badge } from '../../../components/ui/Badge';
import { mockStudents } from '../../../data/mockData';
import { calculateAttendanceMetrics } from '@arc/utils';
import { 
  CalendarCheck, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  Info,
  Calendar
} from 'lucide-react';

export default function StudentAttendancePage() {
  const student = mockStudents[0];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div className="border-b border-slate-200/80 pb-5">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Attendance Operating Matrix • Statutory 75% Regulatory Threshold
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Attendance Records & Regulatory Eligibility
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Lecture-by-lecture biometric verification synced from faculty attendance registers.
          </p>
        </div>

        {/* High-Signal Stat Row (Rule 12) */}
        <StatRow
          stats={[
            {
              label: 'Overall Aggregate Attendance',
              value: `${student.attendancePercentage}%`,
              change: '+1.2%',
              trend: 'up',
              meta: '220 sessions attended of 252 conducted',
              badge: 'Safe Status',
            },
            {
              label: 'Statutory 75% Margin',
              value: '+31 Classes',
              meta: 'Cushion above mandatory threshold',
              badge: 'Regulatory Compliant',
            },
            {
              label: 'Courses in Warning Zone',
              value: '1 Course',
              change: 'CS605 at 79.2%',
              trend: 'down',
              meta: 'Requires attention',
              badge: 'At Caution',
            },
            {
              label: 'Examination Eligibility',
              value: '100% Cleared',
              meta: 'Approved for End-Semester Examinations',
              badge: 'Certified',
            },
          ]}
        />

        {/* Warning Banner if any subject approaches threshold */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start space-x-3 text-xs">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-amber-950">
              Regulatory Margin Notice: Artificial Intelligence (CS605) is approaching the 75% cutoff
            </span>
            <p className="text-amber-800 leading-relaxed">
              Your CS605 attendance is currently <strong>79.2%</strong> (38/48 sessions). Missing 3 more classes without medical documentation will trigger automated exam debarment.
            </p>
          </div>
        </div>

        {/* Subject-Wise Attendance Distribution Table (Rule 39) */}
        <div className="rounded-xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Course Attendance Register & Threshold Audits
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Calculated in real-time according to AICTE statutory mandates.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">Odd Semester 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Course Code</th>
                  <th className="px-4 py-3">Subject Name</th>
                  <th className="px-3 py-3">Faculty In-Charge</th>
                  <th className="px-3 py-3">Attended / Total</th>
                  <th className="px-4 py-3">Attendance %</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Margin Cushion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {student.attendanceBySubject.map((sub) => {
                  const metrics = calculateAttendanceMetrics(sub.attended, sub.total);
                  const isSafe = metrics.status === 'Safe';
                  const isWarning = metrics.status === 'Warning';

                  return (
                    <tr key={sub.subjectCode} className="hover:bg-slate-50/70 transition-colors">
                      <td className="px-4 py-3 font-mono font-semibold text-slate-900">
                        {sub.subjectCode}
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {sub.subjectName}
                      </td>
                      <td className="px-3 py-3 text-slate-600">
                        {sub.faculty}
                      </td>
                      <td className="px-3 py-3 font-mono tabular-nums text-slate-600">
                        {sub.attended} / {sub.total}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold tabular-nums text-slate-900">
                        <div className="flex items-center space-x-2">
                          <span>{sub.percentage}%</span>
                          <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                isSafe ? 'bg-emerald-500' : isWarning ? 'bg-amber-500' : 'bg-rose-500'
                              }`}
                              style={{ width: `${sub.percentage}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={isSafe ? 'success' : isWarning ? 'warning' : 'danger'}
                          size="sm"
                          dot
                        >
                          {metrics.status === 'Safe' ? 'Safe Status' : metrics.status === 'Warning' ? 'Caution' : 'Critical'}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-[11px] text-slate-600">
                        {metrics.classesCanMiss > 0 ? (
                          <span className="text-emerald-700 font-semibold">
                            Can safely miss {metrics.classesCanMiss} class{metrics.classesCanMiss > 1 ? 'es' : ''}
                          </span>
                        ) : metrics.classesNeededToRecover > 0 ? (
                          <span className="text-rose-600 font-bold">
                            Attend {metrics.classesNeededToRecover} class{metrics.classesNeededToRecover > 1 ? 'es' : ''} to recover
                          </span>
                        ) : (
                          <span className="text-amber-700 font-medium">At 75% limit (cannot miss)</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
