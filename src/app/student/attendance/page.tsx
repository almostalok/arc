'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { mockStudents } from '../../../data/mockData';
import { CalendarCheck, AlertTriangle, CheckCircle2, ShieldCheck, Calendar, Info } from 'lucide-react';

export default function StudentAttendancePage() {
  const student = mockStudents[0];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Attendance Operating Matrix • Mandatory 75% Regulatory Threshold
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Attendance Records & Eligibility Audits
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time biometric and classroom attendance synced from faculty lectures.
          </p>
        </div>

        {/* Warning Banner if any subject < 80% */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-amber-950">
              Threshold Warning: Artificial Intelligence (CS605) is approaching 75% cutoff
            </span>
            <p className="text-amber-800 mt-0.5 leading-relaxed">
              Your attendance in CS605 stands at 79.2% (38/48 sessions). Missing 3 more classes will drop you below the university exam eligibility requirement.
            </p>
          </div>
        </div>

        {/* Top Overall Attendance Banner */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
              Aggregate Institutional Attendance
            </span>
            <div className="text-4xl font-black font-mono text-emerald-400">
              {student.attendancePercentage}%
            </div>
            <p className="text-xs text-slate-300">
              220 sessions attended out of 252 held across all 6 courses
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <div className="text-xs">
              <div className="font-bold text-white">Full Exam Clearance</div>
              <div className="text-[11px] text-emerald-300 font-mono">Eligible for End-Sem Practicals</div>
            </div>
          </div>
        </div>

        {/* Subject-Wise Attendance Breakdown */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Subject-wise Attendance Distribution</h3>
            <span className="text-xs text-slate-400 font-mono">Odd Semester 2024–25</span>
          </div>

          <div className="space-y-4">
            {student.attendanceBySubject.map((sub) => {
              const isWarning = sub.percentage < 80;

              return (
                <div key={sub.subjectCode} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                          {sub.subjectCode}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">{sub.subjectName}</h4>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Faculty: {sub.faculty}</div>
                    </div>

                    <div className="flex items-center space-x-3 self-start sm:self-auto">
                      <span className="text-xs text-slate-500 font-mono">
                        {sub.attended} / {sub.total} Classes
                      </span>
                      <span className={`text-sm font-extrabold font-mono px-2 py-0.5 rounded border ${
                        isWarning 
                          ? 'bg-amber-50 text-amber-700 border-amber-200' 
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>
                        {sub.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isWarning ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${sub.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 30-Day Attendance Calendar Grid Mockup */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <h3 className="text-sm font-bold text-slate-900">Attendance Log — Recent Lecture Days</h3>
            </div>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="text-slate-600">Present (Full Day)</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="text-slate-600">Absent / Leave</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-15 gap-1.5 pt-2">
            {Array.from({ length: 30 }).map((_, idx) => {
              const day = idx + 1;
              const isAbsent = day === 6 || day === 19 || day === 24;
              const isWeekend = day % 7 === 0 || day % 7 === 6;

              return (
                <div
                  key={idx}
                  className={`p-2 rounded-lg border text-center text-[10px] font-mono transition-colors ${
                    isWeekend
                      ? 'bg-slate-100 text-slate-400 border-slate-200'
                      : isAbsent
                      ? 'bg-rose-50 text-rose-700 border-rose-200 font-bold'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold'
                  }`}
                  title={isWeekend ? `Day ${day}: Holiday / Weekend` : isAbsent ? `Day ${day}: Absent` : `Day ${day}: Present`}
                >
                  <div>D{day}</div>
                  <div className="text-[9px] mt-0.5">{isWeekend ? 'OFF' : isAbsent ? 'ABS' : 'PRE'}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
