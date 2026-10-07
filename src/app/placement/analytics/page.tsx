'use client';

import React from 'react';
import { AppShell } from '../../../components/layout/AppShell';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { BarChart3, TrendingUp, Award, Building, DollarSign } from 'lucide-react';

export default function PlacementAnalyticsPage() {
  const departmentData = [
    { department: 'CSE', rate: 91, avgCtc: 14.2, highest: 54 },
    { department: 'IT', rate: 88, avgCtc: 12.8, highest: 42 },
    { department: 'ECE', rate: 84, avgCtc: 10.8, highest: 38 },
    { department: 'ME', rate: 72, avgCtc: 7.6, highest: 18 },
    { department: 'Civil', rate: 68, avgCtc: 6.9, highest: 14 },
  ];

  const historicalTrends = [
    { year: '2021', rate: 74, avgCtc: 6.8, highest: 28 },
    { year: '2022', rate: 79, avgCtc: 7.5, highest: 36 },
    { year: '2023', rate: 82, avgCtc: 8.4, highest: 45 },
    { year: '2024', rate: 86, avgCtc: 9.8, highest: 52 },
    { year: '2025 (Projected)', rate: 91, avgCtc: 11.2, highest: 54 },
  ];

  const tierDistribution = [
    { name: 'Super Dream (>20 LPA)', value: 28, color: '#4f46e5' },
    { name: 'Dream (10-20 LPA)', value: 44, color: '#3b82f6' },
    { name: 'Tier 1 (6-10 LPA)', value: 118, color: '#10b981' },
    { name: 'Core / IT Services (<6 LPA)', value: 65, color: '#f59e0b' },
  ];

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div>
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
            Institutional CTC & Career Outcomes Analytics
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Campus Placement Analytics & Trends
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Department-wise conversion rates, salary bands, recruiter tier breakdown, and multi-year trajectory.
          </p>
        </div>

        {/* 4 Summary Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-bold uppercase text-slate-400">Campus Placement Rate</span>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1">86.4%</div>
            <p className="text-xs text-emerald-600 font-semibold mt-1">+4.4% vs last year</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-bold uppercase text-slate-400">Average Compensation</span>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-700 mt-1">₹10.8 LPA</div>
            <p className="text-xs text-emerald-600 font-semibold mt-1">+14.2% YoY growth</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-bold uppercase text-slate-400">Highest Offer (Google)</span>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600 mt-1">₹54.0 LPA</div>
            <p className="text-xs text-slate-500 mt-1">Product Engineering role</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-bold uppercase text-slate-400">Super Dream Offers</span>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-600 mt-1">28</div>
            <p className="text-xs text-purple-600 font-semibold mt-1">&gt; ₹20 LPA bracket</p>
          </div>
        </div>

        {/* Charts Row 1: Department Placement Rate & Multi-Year Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Placement Rate Chart */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Placement Conversion Rate by Department (%)</h3>
              <span className="text-xs font-mono text-indigo-600 font-semibold">CSE leads at 91%</span>
            </div>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="department" tick={{ fontSize: 11, fill: '#64748b' }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip />
                  <Bar dataKey="rate" fill="#4f46e5" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Historical Trends */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Average Compensation Trajectory (₹ LPA)</h3>
              <span className="text-xs font-mono text-slate-400">5-Year Growth Curve</span>
            </div>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="avgCtc" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4, fill: '#059669' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts Row 2: Offer Tier Distribution Table & Department Matrix */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Department Performance & Salary Band Audit</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Department</th>
                  <th className="p-3">Placement Conversion</th>
                  <th className="p-3">Average CTC (LPA)</th>
                  <th className="p-3">Highest Offer (LPA)</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {departmentData.map((d) => (
                  <tr key={d.department} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{d.department}</td>
                    <td className="p-3 font-mono font-bold text-indigo-700">{d.rate}%</td>
                    <td className="p-3 font-mono text-slate-800">₹{d.avgCtc} LPA</td>
                    <td className="p-3 font-mono font-bold text-emerald-700">₹{d.highest} LPA</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded font-mono font-semibold text-[11px] ${
                        d.rate >= 85 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {d.rate >= 85 ? 'Target Achieved' : 'Active Intervention'}
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
