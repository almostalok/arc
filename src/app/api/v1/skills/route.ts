import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents } from '@/data/mockData';
import { SkillCreateSchema } from '@arc/validation';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get('studentId') || 's-1042';

  const student = mockStudents.find((s) => s.id === studentId);
  if (!student) {
    return errorResponse('NOT_FOUND', `Student ${studentId} not found`, 404);
  }

  return successResponse(student.skills);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = SkillCreateSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse('VALIDATION_ERROR', 'Invalid skill payload', 400);
    }

    const newSkill = {
      ...parsed.data,
      verified: true,
    };

    return successResponse(newSkill, { status: 201 });
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Failed to register skill', 500);
  }
}
