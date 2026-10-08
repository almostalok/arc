import { NextRequest } from 'next/server';
import { successResponse } from '@/lib/apiResponse';
import { mockAuditLogs } from '@/data/mockData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const actorRole = searchParams.get('actorRole');
  const status = searchParams.get('status');

  let filtered = [...mockAuditLogs];

  if (actorRole) {
    filtered = filtered.filter(
      (a) => a.actorRole.toLowerCase() === actorRole.toLowerCase()
    );
  }

  if (status) {
    filtered = filtered.filter(
      (a) => a.status.toLowerCase() === status.toLowerCase()
    );
  }

  return successResponse(filtered);
}
