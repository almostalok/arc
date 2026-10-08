import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents, mockDrives } from '@/data/mockData';
import { evaluateEligibility } from '@arc/utils';

export async function POST(req: NextRequest) {
  try {
    const { studentId, driveId } = await req.json();

    if (!studentId || !driveId) {
      return errorResponse('VALIDATION_ERROR', 'studentId and driveId are required', 400);
    }

    const student = mockStudents.find((s) => s.id === studentId || s.arcId === studentId);
    if (!student) {
      return errorResponse('NOT_FOUND', `Student ${studentId} not found`, 404);
    }

    const drive = mockDrives.find((d) => d.id === driveId);
    if (!drive) {
      return errorResponse('NOT_FOUND', `Placement drive ${driveId} not found`, 404);
    }

    const result = evaluateEligibility(student, drive);
    return successResponse(result);
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Eligibility evaluation failed', 500);
  }
}
