'use client';

import React from 'react';
import Link from 'next/link';
import { Drawer } from '../ui/Drawer';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Student } from '../../types';
import { 
  GraduationCap, 
  CalendarCheck, 
  ShieldCheck, 
  ArrowUpRight, 
  FolderGit2, 
  Briefcase, 
  Code2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface StudentDrawerProps {
  student: Student | null;
  isOpen: boolean;
  onClose: () => void;
}

export function StudentDrawer({ student, isOpen, onClose }: StudentDrawerProps) {
  if (!student) return null;

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title={student.name}
      description={`${student.department} • Batch ${student.batch} • Sem ${student.currentSemester}`}
      footer={
        <div className="flex items-center justify-between w-full">
          <span className="text-[11px] text-slate-500 font-mono">
            ARC ID: {student.arcId}
          </span>
          <Link href={`/pulse/students/${student.id}`} onClick={onClose}>
            <Button variant="primary" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
              View Full Profile
            </Button>
          </Link>
        </div>
      }
    >
      {/* Top Identity Block */}
      <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-200 shadow-2xs"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-900 truncate text-sm">{student.name}</span>
            <Badge variant="verified" size="sm" dot>
              Verified
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 truncate mt-0.5">{student.email}</p>
          <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono mt-1">
            <span>Roll: {student.rollNumber}</span>
            <span>•</span>
            <span>Sec {student.section}</span>
          </div>
        </div>
      </div>

      {/* Primary Metrics Strip */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
          <div className="text-[10px] uppercase font-semibold text-slate-400">Cumulative GPA</div>
          <div className="text-xl font-bold font-mono text-slate-900 mt-1 tabular-nums">
            {student.cgpa}
          </div>
          <div className="text-[10px] text-emerald-600 font-medium mt-0.5">
            Verified by Registrar
          </div>
        </div>

        <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
          <div className="text-[10px] uppercase font-semibold text-slate-400">Attendance</div>
          <div className="text-xl font-bold font-mono text-slate-900 mt-1 tabular-nums">
            {student.attendancePercentage}%
          </div>
          <div className="text-[10px] text-slate-500 font-medium mt-0.5">
            {student.attendancePercentage >= 75 ? 'Above 75% threshold' : 'Attendance warning'}
          </div>
        </div>
      </div>

      {/* Talent Competency Breakdown */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          6-Axis Competence Index
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="text-[10px] text-slate-500 block">Coding</span>
            <span className="font-mono font-bold text-sm text-indigo-700">
              {student.scores.coding}
            </span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="text-[10px] text-slate-500 block">Development</span>
            <span className="font-mono font-bold text-sm text-blue-700">
              {student.scores.development}
            </span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="text-[10px] text-slate-500 block">Leadership</span>
            <span className="font-mono font-bold text-sm text-amber-700">
              {student.scores.leadership}
            </span>
          </div>
        </div>
      </div>

      {/* Top Verified Skills */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Verified Skills
        </div>
        <div className="flex flex-wrap gap-1.5">
          {student.skills.slice(0, 6).map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200/60 flex items-center space-x-1"
            >
              <span>{skill.name}</span>
              {skill.verified && <CheckCircle2 className="w-2.5 h-2.5 text-indigo-600" />}
            </span>
          ))}
        </div>
      </div>

      {/* External Verified Evidence */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          External Evidence
        </div>
        <div className="space-y-1.5">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs">
            <span className="text-slate-600">LeetCode Rating</span>
            <span className="font-mono font-bold text-amber-700">
              {student.evidence.codingRating} ({student.evidence.codingProblems} solved)
            </span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs">
            <span className="text-slate-600">GitHub Contributions</span>
            <span className="font-mono font-bold text-slate-900">
              {student.evidence.githubContributions} commits · {student.evidence.githubRepos} repos
            </span>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Featured Engineering Project
        </div>
        {student.projects.length > 0 ? (
          <div className="p-3 rounded-lg border border-slate-200/80 bg-white space-y-1.5">
            <div className="font-semibold text-slate-900 text-xs flex items-center space-x-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="truncate">{student.projects[0].title}</span>
            </div>
            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
              {student.projects[0].description}
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {student.projects[0].techStack.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-slate-400 text-xs">No projects indexed yet.</p>
        )}
      </div>

      {/* Placement Status */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Placement Pipeline Status
        </div>
        <div className="p-3 rounded-lg border border-slate-200/80 bg-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Briefcase className="w-4 h-4 text-slate-500" />
            <div>
              <div className="font-semibold text-slate-900 text-xs">
                {student.applications.length} Active Applications
              </div>
              <div className="text-[10px] text-slate-400">
                {student.applications.map((a) => a.companyName).join(', ')}
              </div>
            </div>
          </div>
          <Badge variant="info" size="sm">
            In Funnel
          </Badge>
        </div>
      </div>
    </Drawer>
  );
}
