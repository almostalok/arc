import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockCompanies } from '@/data/mockData';
import { CompanyCreateSchema } from '@arc/validation';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tier = searchParams.get('tier');
  const search = searchParams.get('search')?.toLowerCase();

  let filtered = [...mockCompanies];

  if (tier) {
    filtered = filtered.filter((c) => c.tier.toLowerCase() === tier.toLowerCase());
  }

  if (search) {
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(search) ||
        c.industry.toLowerCase().includes(search)
    );
  }

  return successResponse(filtered);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CompanyCreateSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(
        'VALIDATION_ERROR',
        parsed.error.issues[0]?.message || 'Invalid company data',
        400,
        parsed.error.format()
      );
    }

    const newCompany = {
      id: `comp-${Date.now()}`,
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=200',
      openPositions: 5,
      totalApplications: 0,
      shortlistedCount: 0,
      selectedCount: 0,
      activeDrives: 1,
      pastHires: 0,
      ...parsed.data,
    };

    return successResponse(newCompany, { status: 201 });
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Failed to create company', 500);
  }
}
