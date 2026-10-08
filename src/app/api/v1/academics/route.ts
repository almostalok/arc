import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents } from '@/data/mockData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get('studentId') || 's-1042';

  const student = mockStudents.find((s) => s.id === studentId || s.arcId === studentId);
  if (!student) {
    return errorResponse('NOT_FOUND', `Student ${studentId} not found`, 404);
  }

  return successResponse({
    currentSemester: student.currentSemester,
    cgpa: student.cgpa,
    creditsEarned: student.creditsEarned,
    creditsTotal: student.creditsTotal,
    backlogs: student.semesterGpa.reduce((acc, sem) => acc + sem.backlogs, 0),
    semesters: student.semesterGpa,
  });
}
