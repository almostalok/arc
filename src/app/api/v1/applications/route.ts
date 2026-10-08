import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents, mockDrives } from '@/data/mockData';
import { evaluateEligibility } from '@arc/utils';

// In-memory application store for interactive demo updates
let applicationsStore = mockStudents.flatMap((s) => s.applications);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get('studentId');
  const driveId = searchParams.get('driveId');
  const stage = searchParams.get('stage');

  let filtered = [...applicationsStore];

  if (studentId) {
    filtered = filtered.filter((a) => a.studentId === studentId);
  }

  if (driveId) {
    filtered = filtered.filter((a) => a.driveId === driveId);
  }

  if (stage) {
    filtered = filtered.filter((a) => a.currentStage.toLowerCase() === stage.toLowerCase());
  }

  return successResponse(filtered);
}

export async function POST(req: NextRequest) {
  try {
    const { driveId, studentId } = await req.json();

    if (!driveId || !studentId) {
      return errorResponse('VALIDATION_ERROR', 'driveId and studentId are required', 400);
    }

    const student = mockStudents.find((s) => s.id === studentId);
    if (!student) {
      return errorResponse('NOT_FOUND', `Student ${studentId} not found`, 404);
    }

    const drive = mockDrives.find((d) => d.id === driveId);
    if (!drive) {
      return errorResponse('NOT_FOUND', `Placement drive ${driveId} not found`, 404);
    }

    // Eligibility check
    const evalResult = evaluateEligibility(student, drive);
    if (!evalResult.isEligible) {
      return errorResponse(
        'INELIGIBLE_APPLICATION',
        'Student does not meet the mandatory eligibility criteria for this position.',
        422,
        evalResult.criteriaResults.filter((c) => !c.passed)
      );
    }

    const newApplication = {
      id: `app-${Date.now()}`,
      studentId: student.id,
      studentName: student.name,
      studentArcId: student.arcId,
      studentDepartment: student.departmentCode,
      studentCgpa: student.cgpa,
      driveId: drive.id,
      companyName: drive.companyName,
      companyLogo: drive.companyLogo,
      role: drive.role,
      packageLPA: drive.packageLPA,
      appliedDate: new Date().toISOString().split('T')[0],
      currentStage: 'Applied' as const,
      stageDate: new Date().toISOString().split('T')[0],
      timeline: [
        {
          stage: 'Applied' as const,
          date: new Date().toISOString().split('T')[0],
          completed: true,
          notes: 'Application registered in ARC Placement Command Center',
        },
      ],
    };

    applicationsStore.unshift(newApplication);

    return successResponse(newApplication, { status: 201 });
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Application registration failed', 500);
  }
}
