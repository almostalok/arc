import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents } from '@/data/mockData';
import { ProjectCreateSchema } from '@arc/validation';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get('studentId') || 's-1042';

  const student = mockStudents.find((s) => s.id === studentId);
  if (!student) {
    return errorResponse('NOT_FOUND', `Student ${studentId} not found`, 404);
  }

  return successResponse(student.projects);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ProjectCreateSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(
        'VALIDATION_ERROR',
        parsed.error.issues[0]?.message || 'Invalid project data',
        400
      );
    }

    const newProject = {
      id: `proj-${Date.now()}`,
      stars: 12,
      ...parsed.data,
    };

    return successResponse(newProject, { status: 201 });
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Failed to save project', 500);
  }
}
