// ============================================================================
// ARC Domain Events Architecture (Section 15)
// Asynchronous Event Contracts for Microservices, BullMQ Workers, and Audit Trail
// ============================================================================

export type DomainEventName =
  | 'student.created'
  | 'student.updated'
  | 'attendance.recorded'
  | 'attendance.warning'
  | 'marks.published'
  | 'skill.added'
  | 'skill.verified'
  | 'project.created'
  | 'certificate.added'
  | 'job.created'
  | 'candidate.eligible'
  | 'application.created'
  | 'application.status_changed'
  | 'interview.scheduled'
  | 'interview.completed'
  | 'offer.created'
  | 'offer.accepted'
  | 'placement.confirmed'
  | 'audit.logged';

export interface DomainEvent<T = unknown> {
  id: string;
  name: DomainEventName;
  timestamp: string;
  institutionId: string;
  actorId: string;
  actorRole: string;
  payload: T;
}

export type EventHandler<T = unknown> = (event: DomainEvent<T>) => Promise<void> | void;

class EventBus {
  private handlers: Map<DomainEventName, EventHandler[]> = new Map();

  subscribe<T>(eventName: DomainEventName, handler: EventHandler<T>) {
    const list = this.handlers.get(eventName) || [];
    list.push(handler as EventHandler);
    this.handlers.set(eventName, list);
  }

  async publish<T>(event: DomainEvent<T>): Promise<void> {
    const list = this.handlers.get(event.name) || [];
    for (const handler of list) {
      try {
        await handler(event);
      } catch (err) {
        console.error(`[EventBus] Error handling event ${event.name}:`, err);
      }
    }
  }
}

export const globalEventBus = new EventBus();
