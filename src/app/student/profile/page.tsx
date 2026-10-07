'use client';

import React from 'react';
import Link from 'next/link';
import { AppShell } from '../../../components/layout/AppShell';
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
  Share2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../../components/ui/BrandIcons';

export default function StudentProfilePage() {
  const student = mockStudents[0]; // Alok Kumar Singh

  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Top Digital ID Card Header */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Institutional Watermark background */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none select-none text-9xl font-black font-mono">
            ARC
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <div className="relative">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-2 ring-indigo-500/80 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 p-1 bg-indigo-600 rounded-lg text-white shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                    {student.name}
                  </h1>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-400/30">
                    Verified Digital ID
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-300">
                  {student.department} • {student.batch}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono pt-1">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700/80 text-indigo-300">
                    ARC ID: {student.arcId}
                  </span>
                  <span>Roll: {student.rollNumber}</span>
                  <span>Sem: {student.currentSemester} (Sec {student.section})</span>
                </div>
              </div>
            </div>

            {/* Quick External Profiles & Share */}
            <div className="flex flex-col sm:items-end space-y-3 w-full md:w-auto">
              <div className="flex items-center space-x-2">
                <a
                  href={student.externalProfiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-white" />
                  <span>GitHub (17 Repos)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={student.externalProfiles.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-amber-300 border border-slate-700 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode (1842)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              <div className="flex items-center space-x-2 text-xs">
                <a
                  href={student.externalProfiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-blue-900/40 text-blue-300 border border-blue-800/60 font-medium flex items-center space-x-1 hover:bg-blue-900/60 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
                <span className="text-[11px] text-slate-400">Apex Institute of Technology</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Cumulative GPA</span>
              <div className="text-xl font-bold font-mono text-white mt-0.5">{student.cgpa} / 10.0</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Overall Attendance</span>
              <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">{student.attendancePercentage}%</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Career Readiness</span>
              <div className="text-xl font-bold font-mono text-indigo-400 mt-0.5">{student.careerReadinessScore} / 100</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Student Status</span>
              <div className="text-xl font-bold text-emerald-400 mt-0.5 flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold">{student.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Sections: Skills & Academic vs Projects & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 1 Col: Verified Skills & Academic Trend */}
          <div className="space-y-6">
            {/* Skills Matrix */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Verified Technical Skills</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold font-mono">
                  {student.skills.length} Skills
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {student.skills.map((sk) => (
                  <span
                    key={sk.name}
                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 hover:border-indigo-300 transition-colors"
                  >
                    <span>{sk.name}</span>
                    {sk.verified && (
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Semester Breakdown */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Semester GPA Progression</h3>
                <Link
                  href="/student/academics"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Deep Dive →
                </Link>
              </div>

              <div className="space-y-2">
                {student.semesterGpa.map((sem) => (
                  <div
                    key={sem.semester}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50/60 border border-slate-200/60 text-xs"
                  >
                    <span className="font-semibold text-slate-700">Semester {sem.semester}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-slate-400 font-mono">{sem.credits} Credits</span>
                      <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {sem.gpa} GPA
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Industry Certifications</h3>
                <Award className="w-4 h-4 text-amber-500" />
              </div>

              <div className="space-y-2.5">
                {student.certifications.map((c) => (
                  <div
                    key={c.id}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50/40 space-y-1"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">{c.title}</h4>
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

          {/* Right 2 Cols: Experience, Projects, Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Work & Internship Experience */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-900">Professional Experience & Internships</h3>
                </div>
                <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Verified Records
                </span>
              </div>

              <div className="space-y-4">
                {student.experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/30 space-y-2 hover:border-indigo-300 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {exp.role} <span className="text-indigo-600">@ {exp.company}</span>
                        </h4>
                        <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                          <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5" /> {exp.location}</span>
                          <span>•</span>
                          <span className="font-semibold text-slate-700">{exp.type}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
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
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FolderGit2 className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-900">Featured Engineering Projects</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">17 Total on GitHub</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {student.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all bg-white space-y-2.5 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-slate-900 leading-snug">{proj.title}</h4>
                        {proj.stars && (
                          <span className="text-[10px] font-mono flex items-center space-x-1 text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
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

                      <div className="flex items-center space-x-2 text-xs pt-1">
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-900 flex items-center space-x-1"
                          >
                            <GithubIcon className="w-3 h-3" />
                            <span>Code</span>
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

            {/* Achievements & Honors */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-3">
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-orange-500" />
                <h3 className="text-sm font-bold text-slate-900">Honors & Hackathon Achievements</h3>
              </div>

              <div className="space-y-2">
                {student.achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-700">
                          {ach.category}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">{ach.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{ach.event} • {ach.rankOrPosition}</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 self-start sm:self-auto">{ach.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
