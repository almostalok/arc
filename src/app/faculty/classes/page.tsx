'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/layout/AppShell';
import { mockStudents } from '../../../data/mockData';
import { CalendarCheck, Users, Check, X, ArrowUpRight } from 'lucide-react';

export default function FacultyClassesPage() {
  const [selectedClass, setSelectedClass] = useState<'CSE 6B' | 'CSE 6A'>('CSE 6B');
  const [attendanceState, setAttendanceState] = useState<Record<string, boolean>>({
    's-1042': true,
    's-1043': true,
    's-1045': true,
    's-1089': true,
    's-1102': true,
    's-1145': false,
    's-1056': true,
  });

  const toggleStudent = (id: string) => {
    setAttendanceState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
            Faculty Workbench • Lecture Sessions
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Class Roster & Attendance Marker
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Mark lecture attendance directly with biometric synchronization to ARC institutional records.
          </p>
        </div>

        {/* Section Switcher */}
        <div className="flex gap-2">
          {(['CSE 6B', 'CSE 6A'] as const).map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                selectedClass === cls
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cls} {cls === 'CSE 6B' ? '(Operating Systems — 61 Students)' : '(DBMS — 64 Students)'}
            </button>
          ))}
        </div>

        {/* Attendance Register Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Lecture 45 Register — {selectedClass === 'CSE 6B' ? 'Operating Systems (CS602)' : 'Database Management Systems (CS601)'}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Session: 11:00 AM – 12:00 PM • Room A-301
              </p>
            </div>

            <button
              onClick={() => alert(`Attendance successfully committed for ${selectedClass}! Synced with ARC Student Digital IDs.`)}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-xs transition-colors"
            >
              Commit & Lock Attendance →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">ARC Identity</th>
                  <th className="p-3">Aggregate Attendance</th>
                  <th className="p-3 text-center">Status Today</th>
                  <th className="p-3 text-right">Unified Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockStudents.map((s) => {
                  const isPresent = attendanceState[s.id] ?? true;

                  return (
                    <tr key={s.id} className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">{s.name}</td>
                      <td className="p-3 font-mono text-slate-400">{s.arcId}</td>
                      <td className="p-3 font-mono">
                        <span className={s.attendancePercentage < 80 ? 'text-amber-600 font-bold' : 'text-emerald-600 font-bold'}>
                          {s.attendancePercentage}%
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => toggleStudent(s.id)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors inline-flex items-center space-x-1 ${
                            isPresent
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-rose-100 text-rose-800 border border-rose-300'
                          }`}
                        >
                          {isPresent ? <Check className="w-3.5 h-3.5 mr-0.5" /> : <X className="w-3.5 h-3.5 mr-0.5" />}
                          <span>{isPresent ? 'Present' : 'Absent'}</span>
                        </button>
                      </td>
                      <td className="p-3 text-right">
                        <Link
                          href={`/pulse/students/${s.id}`}
                          className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold"
                        >
                          <span>Profile</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
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
