import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents } from '@/data/mockData';
import { ResumeSaveSchema } from '@arc/validation';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get('studentId') || 's-1042';

  const student = mockStudents.find((s) => s.id === studentId);
  if (!student) {
    return errorResponse('NOT_FOUND', `Student ${studentId} not found`, 404);
  }

  const defaultResume = {
    id: `res-${student.id}-master`,
    studentId: student.id,
    title: `${student.name} — Technical Resume`,
    template: 'TECHNICAL',
    summary:
      'Systems and full-stack software engineer with deep expertise in distributed systems, TypeScript, Go, and PostgreSQL. Proven track record across 17 open-source repositories and 1400+ contributions.',
    isMaster: true,
    sectionsOrder: [
      'summary',
      'education',
      'skills',
      'experience',
      'projects',
      'certifications',
      'achievements',
    ],
    sectionsVisibility: {
      summary: true,
      education: true,
      skills: true,
      experience: true,
      projects: true,
      certifications: true,
      achievements: true,
    },
    studentDetails: {
      name: student.name,
      email: student.email,
      phone: student.phone,
      rollNumber: student.rollNumber,
      cgpa: student.cgpa,
      department: student.department,
      skills: student.skills,
      projects: student.projects,
      experiences: student.experiences,
      certifications: student.certifications,
    },
  };

  return successResponse(defaultResume);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ResumeSaveSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse('VALIDATION_ERROR', 'Invalid resume payload', 400);
    }

    const savedResume = {
      id: `res-${Date.now()}`,
      ...parsed.data,
      updatedAt: new Date().toISOString(),
    };

    return successResponse(savedResume, { status: 201 });
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Failed to save resume configuration', 500);
  }
}
