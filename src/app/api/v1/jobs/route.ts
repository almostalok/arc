import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockDrives } from '@/data/mockData';
import { JobDriveCreateSchema } from '@arc/validation';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');
  const search = searchParams.get('search')?.toLowerCase();

  let filtered = [...mockDrives];

  if (status) {
    filtered = filtered.filter((d) => d.status.toLowerCase() === status.toLowerCase());
  }

  if (search) {
    filtered = filtered.filter(
      (d) =>
        d.role.toLowerCase().includes(search) ||
        d.companyName.toLowerCase().includes(search)
    );
  }

  return successResponse(filtered);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = JobDriveCreateSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(
        'VALIDATION_ERROR',
        parsed.error.issues[0]?.message || 'Invalid job drive payload',
        400,
        parsed.error.format()
      );
    }

    const newDrive = {
      id: `drive-${Date.now()}`,
      companyName: 'Corporate Recruiter',
      companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=200',
      eligibleStudentsCount: 145,
      appliedCount: 0,
      shortlistedCount: 0,
      interviewedCount: 0,
      selectedCount: 0,
      status: 'Active' as const,
      announcementDate: new Date().toISOString().split('T')[0],
      rounds: [
        { name: 'Online Assessment', date: 'TBA', status: 'Upcoming' as const },
        { name: 'Technical Round', date: 'TBA', status: 'Upcoming' as const },
        { name: 'HR Round', date: 'TBA', status: 'Upcoming' as const },
      ],
      ...parsed.data,
    };

    return successResponse(newDrive, { status: 201 });
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Failed to create job drive', 500);
  }
}
