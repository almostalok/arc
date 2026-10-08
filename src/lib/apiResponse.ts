import { NextResponse } from 'next/server';

// ============================================================================
// ARC Standard API Response Envelope Helper (Section 77 & 78)
// Guarantees predictable RFC contract format: { data, meta, error }
// ============================================================================

export interface ResponseMeta {
  timestamp: string;
  requestId: string;
  tenantId?: string;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export function successResponse<T>(
  data: T,
  options: {
    status?: number;
    tenantId?: string;
    pagination?: ResponseMeta['pagination'];
  } = {}
) {
  const meta: ResponseMeta = {
    timestamp: new Date().toISOString(),
    requestId: `req_${Math.random().toString(36).substring(2, 10)}`,
    tenantId: options.tenantId || 'inst-apex-01',
    pagination: options.pagination,
  };

  return NextResponse.json(
    {
      data,
      meta,
      error: null,
    },
    { status: options.status || 200 }
  );
}

export function errorResponse(
  code: string,
  message: string,
  status = 400,
  details?: unknown
) {
  const meta: ResponseMeta = {
    timestamp: new Date().toISOString(),
    requestId: `err_${Math.random().toString(36).substring(2, 10)}`,
  };

  return NextResponse.json(
    {
      data: null,
      meta,
      error: {
        code,
        message,
        details,
        timestamp: new Date().toISOString(),
      },
    },
    { status }
  );
}
