import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockDrives } from '@/data/mockData';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const drive = mockDrives.find((d) => d.id === id);

  if (!drive) {
    return errorResponse('NOT_FOUND', `Placement drive with id ${id} not found`, 404);
  }

  return successResponse(drive);
}
