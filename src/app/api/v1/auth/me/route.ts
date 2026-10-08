import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';

export async function GET(req: NextRequest) {
  const role = req.headers.get('x-role') || 'student';
  const institutionId = req.headers.get('x-institution-id') || 'inst-apex-01';

  return successResponse({
    id: 'usr-1042',
    name: 'Alok Kumar Singh',
    email: 'alok.singh@apex.edu.in',
    role,
    institutionId,
    institutionName: 'Apex Institute of Technology & Sciences',
    status: 'ACTIVE',
  });
}
