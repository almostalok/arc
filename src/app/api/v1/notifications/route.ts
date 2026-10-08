import { NextRequest } from 'next/server';
import { successResponse } from '@/lib/apiResponse';

let notificationsStore = [
  {
    id: 'notif-1',
    userId: 'usr-1042',
    title: 'Google Placement Drive Open',
    message: 'Online application window for Software Engineer - Campus 2025 closes on 12 Oct.',
    category: 'PLACEMENT',
    read: false,
    createdAt: '10 mins ago',
    linkUrl: '/student/placements',
  },
  {
    id: 'notif-2',
    userId: 'usr-1042',
    title: 'Mid-Semester Examination Schedule',
    message: 'Theory examination timetable for Semester 6 has been released by Dean Academics.',
    category: 'ACADEMIC',
    read: false,
    createdAt: '2 hours ago',
    linkUrl: '/student/academics',
  },
  {
    id: 'notif-3',
    userId: 'usr-1042',
    title: 'Attendance Alert — DBMS Lab',
    message: 'Your attendance is at 81.2%. Maintain regularity to stay well above the 75% threshold.',
    category: 'ACADEMIC',
    read: true,
    createdAt: '1 day ago',
    linkUrl: '/student/attendance',
  },
  {
    id: 'notif-4',
    userId: 'usr-1042',
    title: 'Career Readiness Milestone Achieved',
    message: 'Your Talent Score crossed 90 percentile following verified LeetCode rating update.',
    category: 'SYSTEM',
    read: true,
    createdAt: '2 days ago',
    linkUrl: '/pulse',
  },
];

export async function GET() {
  return successResponse(notificationsStore);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  notificationsStore.forEach((n) => {
    n.read = true;
  });
  return successResponse({ success: true, count: notificationsStore.length });
}
