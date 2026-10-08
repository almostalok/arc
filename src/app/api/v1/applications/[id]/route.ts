import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/lib/apiResponse';
import { mockStudents } from '@/data/mockData';
import { ApplicationStageUpdateSchema } from '@arc/validation';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await req.json();
    const parsed = ApplicationStageUpdateSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(
        'VALIDATION_ERROR',
        parsed.error.issues[0]?.message || 'Invalid stage data',
        400
      );
    }

    const { stage, notes } = parsed.data;

    // Search for application in mock students data
    let foundApp = null;
    for (const student of mockStudents) {
      const app = student.applications.find((a) => a.id === id);
      if (app) {
        foundApp = app;
        app.currentStage = stage;
        app.stageDate = new Date().toISOString().split('T')[0];
        app.timeline.push({
          stage,
          date: new Date().toISOString().split('T')[0],
          completed: true,
          notes: notes || `Moved to stage: ${stage}`,
        });
        break;
      }
    }

    if (!foundApp) {
      return errorResponse('NOT_FOUND', `Application with id ${id} not found`, 404);
    }

    return successResponse(foundApp);
  } catch {
    return errorResponse('INTERNAL_ERROR', 'Stage transition failed', 500);
  }
}
