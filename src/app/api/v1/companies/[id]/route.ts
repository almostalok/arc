import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockCompanies } from '@/data/mockData';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const company = mockCompanies.find((c) => c.id === id);

  if (!company) {
    return errorResponse('NOT_FOUND', `Company with id ${id} not found`, 404);
  }

  return successResponse(company);
}
