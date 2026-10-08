'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/layout/AppShell';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { mockStudents } from '../../../data/mockData';
import { 
  ShieldCheck, 
  GraduationCap, 
  CalendarCheck, 
  Award, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  FolderGit2, 
  Star, 
  CheckCircle2, 
  Calendar, 
  MapPin,
  Flame,
  Globe,
  Share2,
  FileText,
  Building,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../../components/ui/BrandIcons';

export default function StudentProfilePage() {
  const student = mockStudents[0]; // Alok Kumar Singh
  const [activeTab, setActiveTab] = useState<'overview' | 'academics' | 'skills' | 'projects' | 'placement'>('overview');

  const tabs = [
    { id: 'overview', label: 'Ecosystem Overview' },
    { id: 'academics', label: 'Academic Transcript & GPA' },
    { id: 'skills', label: 'Verified Skills & Evidence' },
    { id: 'projects', label: 'Engineering Projects' },
    { id: 'placement', label: 'Placement Pipeline' },
  ] as const;

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Institutional Digital ID Header (Rule 22 & 24) */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Institutional Watermark background */}
          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-[0.03] pointer-events-none select-none text-9xl font-black font-mono">
            ARC
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <div className="relative shrink-0">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover ring-1 ring-slate-700 shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 p-1 bg-indigo-600 rounded-md text-white shadow-xs" title="Institutional Identity Verified">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {student.name}
                  </h1>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-medium border border-emerald-500/30 flex items-center space-x-1">
                    <Check className="w-2.5 h-2.5" />
                    <span>Verified Institutional ID</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-normal">
                  {student.department} • Batch {student.batch}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 font-mono pt-0.5">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/80 text-indigo-300 text-[11px]">
                    {student.arcId}
                  </span>
                  <span>Roll: {student.rollNumber}</span>
                  <span>•</span>
                  <span>Sem {student.currentSemester} (Sec {student.section})</span>
                </div>
              </div>
            </div>

            {/* External Profile Verification Badges (Rule 23) */}
            <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs w-full md:w-auto">
              <div className="flex items-center space-x-2">
                <a
                  href={student.externalProfiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-white" />
                  <span>GitHub ✓ Synced</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={student.externalProfiles.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-amber-300 border border-slate-700 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode ✓ Knight</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                <span>Apex Institute of Technology</span>
                <span>•</span>
                <span className="text-emerald-400">Status: {student.status}</span>
              </div>
            </div>
          </div>

          {/* Subdued Verification Metrics Strip (Rule 23) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800/80 text-xs">
            <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
              <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                Cumulative GPA
              </span>
              <div className="text-lg font-bold font-mono text-white mt-0.5 tabular-nums">
                {student.cgpa} / 10.0
              </div>
              <span className="text-[10px] text-emerald-400 flex items-center space-x-1 mt-0.5">
                <Check className="w-2.5 h-2.5" />
                <span>Registrar Verified</span>
              </span>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
              <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                Overall Attendance
              </span>
              <div className="text-lg font-bold font-mono text-white mt-0.5 tabular-nums">
                {student.attendancePercentage}%
              </div>
              <span className="text-[10px] text-emerald-400 flex items-center space-x-1 mt-0.5">
                <Check className="w-2.5 h-2.5" />
                <span>Biometric Verified</span>
              </span>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
              <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                Career Readiness Index
              </span>
              <div className="text-lg font-bold font-mono text-indigo-300 mt-0.5 tabular-nums">
                {student.careerReadinessScore} / 100
              </div>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                Top 2% in Batch
              </span>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
              <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                Degree Credits
              </span>
              <div className="text-lg font-bold font-mono text-white mt-0.5 tabular-nums">
                {student.creditsEarned} / {student.creditsTotal}
              </div>
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                64 credits to graduate
              </span>
            </div>
          </div>
        </div>

        {/* Profile Navigation Tabs */}
        <div className="border-b border-slate-200/80 flex space-x-6 overflow-x-auto text-xs font-semibold">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-indigo-600 text-indigo-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 1 Col: Skills & Certifications */}
            <div className="space-y-6">
              {/* Verified Technical Skills */}
              <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Verified Skills
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    {student.skills.length} Evaluated
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {student.skills.map((sk) => (
                    <span
                      key={sk.name}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800"
                    >
                      <span>{sk.name}</span>
                      {sk.verified && (
                        <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Industry Certifications
                  </h3>
                  <Award className="w-4 h-4 text-amber-500" />
                </div>

                <div className="space-y-2.5">
                  {student.certifications.map((c) => (
                    <div
                      key={c.id}
                      className="p-3 rounded-lg border border-slate-200/70 bg-slate-50/40 space-y-1"
                    >
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-slate-900">{c.title}</h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center justify-between">
                        <span>{c.issuer}</span>
                        <span className="font-mono">{c.issueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 2 Cols: Experience & Projects */}
            <div className="lg:col-span-2 space-y-6">
              {/* Professional Experience */}
              <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-indigo-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Work Experience & Internships
                    </h3>
                  </div>
                  <Badge variant="verified" size="sm" dot>
                    Verified Experience
                  </Badge>
                </div>

                <div className="space-y-3">
                  {student.experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 rounded-lg border border-slate-200/80 bg-slate-50/30 space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            {exp.role} <span className="text-indigo-600">@ {exp.company}</span>
                          </h4>
                          <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                            <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5 text-slate-400" /> {exp.location}</span>
                            <span>•</span>
                            <span className="font-medium text-slate-700">{exp.type}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {exp.skillsUsed.map((sk, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FolderGit2 className="w-4 h-4 text-indigo-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Engineering Projects
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">17 Repos on GitHub</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {student.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-lg border border-slate-200/80 hover:border-indigo-300 transition-all bg-white space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between">
                          <h4 className="text-xs font-bold text-slate-900 leading-snug">{proj.title}</h4>
                          {proj.stars && (
                            <span className="text-[10px] font-mono flex items-center space-x-1 text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                              <span>{proj.stars}</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {proj.description}
                        </p>
                        {proj.metrics && (
                          <div className="text-[11px] font-mono text-indigo-700 bg-indigo-50/70 p-1.5 rounded border border-indigo-100">
                            ⚡ {proj.metrics}
                          </div>
                        )}
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="flex flex-wrap gap-1">
                          {proj.techStack.map((tech, tIdx) => (
                            <span key={tIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-3 text-xs pt-1">
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-600 hover:text-slate-900 flex items-center space-x-1"
                            >
                              <GithubIcon className="w-3 h-3" />
                              <span>Source</span>
                            </a>
                          )}
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center space-x-1"
                            >
                              <Globe className="w-3 h-3" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Academics */}
        {activeTab === 'academics' && (
          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Semester-by-Semester GPA Record
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Official academic progression certified by Examination Cell.
                  </p>
                </div>
                <Badge variant="verified" size="sm" dot>
                  Transcript Signed
                </Badge>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50/70 border-b border-slate-200 text-slate-600 font-semibold">
                    <tr>
                      <th className="p-3">Semester</th>
                      <th className="p-3">Credits Registered</th>
                      <th className="p-3">SGPA</th>
                      <th className="p-3">Active Backlogs</th>
                      <th className="p-3">Verification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {student.semesterGpa.map((sem) => (
                      <tr key={sem.semester} className="hover:bg-slate-50/50">
                        <td className="p-3 font-semibold text-slate-900">Semester {sem.semester}</td>
                        <td className="p-3 font-mono">{sem.credits} Credits</td>
                        <td className="p-3 font-mono font-bold text-slate-900">{sem.gpa}</td>
                        <td className="p-3 font-mono text-emerald-600 font-semibold">{sem.backlogs} Backlogs</td>
                        <td className="p-3">
                          <span className="text-[11px] text-slate-500 flex items-center space-x-1">
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>Verified</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Skills & Evidence */}
        {activeTab === 'skills' && (
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              6-Axis Evidence Verification
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-slate-200/80 bg-slate-50/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                  <span>Competitive Programming (LeetCode)</span>
                  <Badge variant="verified" size="sm">Knight Tier</Badge>
                </div>
                <div className="text-xl font-mono font-bold text-amber-700">{student.evidence.codingRating} Rating</div>
                <p className="text-xs text-slate-600">{student.evidence.codingProblems} problems solved across dynamic programming, graphs, and system design.</p>
              </div>

              <div className="p-4 rounded-lg border border-slate-200/80 bg-slate-50/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                  <span>Open Source Development (GitHub)</span>
                  <Badge variant="verified" size="sm">Active</Badge>
                </div>
                <div className="text-xl font-mono font-bold text-slate-900">{student.evidence.githubContributions} Contributions</div>
                <p className="text-xs text-slate-600">{student.evidence.githubRepos} public repositories indexed with continuous green contribution graph.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Projects */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {student.projects.map((proj) => (
              <div key={proj.id} className="p-5 rounded-xl border border-slate-200/80 bg-white space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">{proj.title}</h4>
                  {proj.stars && (
                    <span className="text-xs font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200 flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{proj.stars}</span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>
                {proj.metrics && (
                  <div className="text-xs font-mono text-indigo-700 bg-indigo-50/70 p-2 rounded border border-indigo-100">
                    ⚡ {proj.metrics}
                  </div>
                )}
                <div className="flex flex-wrap gap-1 pt-1">
                  {proj.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Placement Pipeline */}
        {activeTab === 'placement' && (
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Active Placement Applications
            </h3>
            <div className="divide-y divide-slate-100">
              {student.applications.map((app) => (
                <div key={app.id} className="py-3.5 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{app.companyName}</h4>
                    <p className="text-xs text-slate-500">{app.role} • CTC: ₹{app.packageLPA} LPA</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="info" size="sm">{app.currentStage}</Badge>
                    <Link href={`/placement/drives/${app.driveId}`}>
                      <Button variant="outline" size="sm">View Drive →</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
