import { NextRequest } from 'next/server';
import { successResponse } from '@/lib/apiResponse';
import { mockStudents } from '@/data/mockData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const department = searchParams.get('department');
  const search = searchParams.get('search')?.toLowerCase();
  const status = searchParams.get('status');
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  let filtered = [...mockStudents];

  if (department) {
    filtered = filtered.filter(
      (s) => s.departmentCode.toLowerCase() === department.toLowerCase()
    );
  }

  if (status) {
    filtered = filtered.filter(
      (s) => s.status.toLowerCase() === status.toLowerCase()
    );
  }

  if (search) {
    filtered = filtered.filter(
      (s) =>
        s.name.toLowerCase().includes(search) ||
        s.rollNumber.toLowerCase().includes(search) ||
        s.arcId.toLowerCase().includes(search) ||
        s.skills.some((sk) => sk.name.toLowerCase().includes(search))
    );
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return successResponse(paginated, {
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: start + limit < total,
      hasPrev: page > 1,
    },
  });
}
