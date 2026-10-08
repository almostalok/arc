import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { LoginSchema } from '@arc/validation';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = LoginSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(
        'VALIDATION_ERROR',
        parsed.error.issues[0]?.message || 'Invalid login payload',
        400,
        parsed.error.format()
      );
    }

    const { email, role = 'student' } = parsed.data;

    return successResponse({
      token: `arc_jwt_${Buffer.from(email).toString('base64')}`,
      user: {
        id: 'usr-1042',
        name: 'Alok Kumar Singh',
        email,
        role,
        institutionId: 'inst-apex-01',
      },
    });
  } catch (err: unknown) {
    return errorResponse('INTERNAL_ERROR', 'Login processing failed', 500);
  }
}
