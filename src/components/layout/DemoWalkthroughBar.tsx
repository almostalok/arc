'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useRole } from '../../context/RoleContext';
import { 
  Compass, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Sparkles, 
  Play,
  RotateCcw
} from 'lucide-react';

interface StepDefinition {
  step: number;
  title: string;
  description: string;
  route: string;
  roleToSet?: 'student' | 'faculty' | 'hod' | 'placement' | 'director' | 'admin';
  action?: 'openAi';
}

const DEMO_STEPS: StepDefinition[] = [
  {
    step: 1,
    title: 'Public Landing Page',
    description: 'Overview of ARC Operating System architecture, stakeholder value & connected ecosystem.',
    route: '/',
  },
  {
    step: 2,
    title: 'Instant Role Login',
    description: 'Select persona to verify ARC permission boundaries and identity graphs.',
    route: '/login',
  },
  {
    step: 3,
    title: 'Student Command Dashboard',
    description: 'Good morning Alok: Academic snapshot, today\'s lectures, alerts, and readiness index.',
    route: '/student',
    roleToSet: 'student',
  },
  {
    step: 4,
    title: 'Student Digital ID Profile',
    description: 'Unified student identity graph: Verified LeetCode Knight, GitHub, CGPA 8.44 & SIH win.',
    route: '/student/profile',
    roleToSet: 'student',
  },
  {
    step: 5,
    title: 'ARC Pulse — Talent Discovery',
    description: 'Filter 8,421 students across CSE, Coding score, and high-potential radar.',
    route: '/pulse',
    roleToSet: 'student',
  },
  {
    step: 6,
    title: 'Student Talent Intelligence Profile',
    description: 'Evidence-backed 6-axis talent radar: 420 LeetCode problems, 17 GitHub repos, 2 internships.',
    route: '/pulse/students/s-1042',
    roleToSet: 'student',
  },
  {
    step: 7,
    title: 'ARC Placement — Drives & Pipeline',
    description: 'Kanban pipeline tracking candidates across Applied, Shortlisted, OA, Technical & Offers.',
    route: '/placement',
    roleToSet: 'placement',
  },
  {
    step: 8,
    title: 'Recruiter Drive (Google SDE 2026)',
    description: 'Drive metrics: ₹18 LPA intern / ₹34 LPA fulltime, 184 applicants, 62 shortlisted.',
    route: '/placement/drives/drive-google-2026',
    roleToSet: 'placement',
  },
  {
    step: 9,
    title: 'Student Application Tracker',
    description: 'Candidate view of Google, Microsoft, and Deloitte multi-stage progress & interview dates.',
    route: '/student/placements',
    roleToSet: 'student',
  },
  {
    step: 10,
    title: 'Director Command Center',
    description: 'Executive view of 8,421 students, 87/100 Institutional Health, and department CTC metrics.',
    route: '/director',
    roleToSet: 'director',
  },
  {
    step: 11,
    title: 'ARC Intelligence Layer',
    description: 'Ask: "Which CSE students are best suited for software engineering roles?"',
    route: '/director',
    roleToSet: 'director',
    action: 'openAi',
  },
];

export function DemoWalkthroughBar() {
  const router = useRouter();
  const { 
    demoStep, 
    setDemoStep, 
    showDemoGuide, 
    setShowDemoGuide,
    setCurrentRole,
    setIsAiOpen
  } = useRole();

  if (!showDemoGuide) return null;

  const currentDef = DEMO_STEPS.find((s) => s.step === demoStep) || DEMO_STEPS[0];

  const goToStep = (stepNumber: number) => {
    const target = DEMO_STEPS.find((s) => s.step === stepNumber);
    if (!target) return;

    setDemoStep(stepNumber);
    if (target.roleToSet) {
      setCurrentRole(target.roleToSet);
    }
    router.push(target.route);

    if (target.action === 'openAi') {
      setIsAiOpen(true);
    }
  };

  const nextStep = () => {
    if (demoStep < DEMO_STEPS.length) {
      goToStep(demoStep + 1);
    } else {
      goToStep(1);
    }
  };

  const prevStep = () => {
    if (demoStep > 1) {
      goToStep(demoStep - 1);
    }
  };

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-4xl bg-slate-950/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-slate-800 p-3 sm:px-4 sm:py-2.5 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Left: Step counter & description */}
      <div className="flex items-center space-x-3 min-w-0">
        <div className="hidden sm:flex p-2 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-400 shrink-0">
          <Compass className="w-4 h-4 animate-spin-slow" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              Demo Step {currentDef.step} of 11
            </span>
            <h4 className="text-xs font-bold text-slate-100 truncate">
              {currentDef.title}
            </h4>
          </div>
          <p className="text-[11px] text-slate-400 truncate max-w-md sm:max-w-lg mt-0.5">
            {currentDef.description}
          </p>
        </div>
      </div>

      {/* Middle & Right: Actions & Stepper controls */}
      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={prevStep}
          disabled={demoStep === 1}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors"
          title="Previous Step"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextStep}
          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-1 transition-all shadow-xs"
        >
          <span>{demoStep === 11 ? 'Restart' : 'Next Step'}</span>
          {demoStep === 11 ? <RotateCcw className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={() => setShowDemoGuide(false)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Dismiss Demo Banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
