import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents } from '@/data/mockData';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const student = mockStudents.find((s) => s.id === id || s.arcId === id);

  if (!student) {
    return errorResponse('NOT_FOUND', `Student with id ${id} not found`, 404);
  }

  return successResponse(student);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const student = mockStudents.find((s) => s.id === id || s.arcId === id);

  if (!student) {
    return errorResponse('NOT_FOUND', `Student with id ${id} not found`, 404);
  }

  try {
    const body = await req.json();
    // Merge update
    const updated = {
      ...student,
      ...body,
      externalProfiles: {
        ...student.externalProfiles,
        ...(body.externalProfiles || {}),
      },
    };

    return successResponse(updated);
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Failed to update student profile', 500);
  }
}
