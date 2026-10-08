import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents } from '@/data/mockData';
import { AttendanceSessionSubmitSchema } from '@arc/validation';
import { calculateAttendanceMetrics } from '@arc/utils';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get('studentId') || 's-1042';

  const student = mockStudents.find((s) => s.id === studentId || s.arcId === studentId);
  if (!student) {
    return errorResponse('NOT_FOUND', `Student ${studentId} not found`, 404);
  }

  // Enrich subject attendance with computational missable metrics
  const enriched = student.attendanceBySubject.map((item) => {
    const metrics = calculateAttendanceMetrics(item.attended, item.total);
    return {
      ...item,
      classesCanMiss: metrics.classesCanMiss,
      classesNeededToRecover: metrics.classesNeededToRecover,
      calculatedStatus: metrics.status,
    };
  });

  return successResponse({
    overallPercentage: student.attendancePercentage,
    totalAttended: student.attendanceBySubject.reduce((acc, s) => acc + s.attended, 0),
    totalClasses: student.attendanceBySubject.reduce((acc, s) => acc + s.total, 0),
    subjects: enriched,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = AttendanceSessionSubmitSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(
        'VALIDATION_ERROR',
        parsed.error.issues[0]?.message || 'Invalid attendance session data',
        400,
        parsed.error.format()
      );
    }

    const { subjectCode, date, sessionNumber, records } = parsed.data;
    const presentCount = records.filter((r) => r.present).length;
    const absentCount = records.length - presentCount;

    const recordedSession = {
      id: `att-sess-${Date.now()}`,
      subjectCode,
      date,
      sessionNumber,
      totalPresent: presentCount,
      totalAbsent: absentCount,
      recordedAt: new Date().toISOString(),
    };

    return successResponse(recordedSession, { status: 201 });
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Failed to log attendance session', 500);
  }
}
