import {
  ApiResponse,
  ApiErrorResponse,
  Student,
  Company,
  PlacementDrive,
  StudentApplication,
  AttendanceSession,
  EligibilityResult,
  AuditLog,
  InAppNotification,
  UserRole,
} from '@arc/types';

// ============================================================================
// ARC Centralized Typed API Client
// Standard RFC Envelope Handlers, Multi-Tenant Context Injection & Error Parsing
// ============================================================================

export interface ApiClientConfig {
  baseUrl?: string;
  institutionId?: string;
  role?: UserRole;
  token?: string;
}

export class ArcApiClient {
  private baseUrl: string;
  private institutionId: string;
  private role: UserRole;
  private token?: string;

  constructor(config: ApiClientConfig = {}) {
    this.baseUrl = config.baseUrl || '/api/v1';
    this.institutionId = config.institutionId || 'inst-apex-01';
    this.role = config.role || 'student';
    this.token = config.token;
  }

  setContext(institutionId: string, role: UserRole, token?: string) {
    this.institutionId = institutionId;
    this.role = role;
    if (token) this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'x-institution-id': this.institutionId,
      'x-role': this.role,
      ...(options.headers as Record<string, string>),
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const res = await fetch(url, {
        ...options,
        headers,
      });

      const json = await res.json();

      if (!res.ok) {
        const errorRes = json as ApiErrorResponse;
        throw new Error(
          errorRes.error?.message || `API error ${res.status}: ${res.statusText}`
        );
      }

      return json as ApiResponse<T>;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown network error';
      throw new Error(`[ArcApiClient] ${message}`);
    }
  }

  // Auth & Identity
  async getMe() {
    return this.request<{ id: string; name: string; role: UserRole; email: string }>('/auth/me');
  }

  // Students & Profile
  async getStudents(params?: { department?: string; search?: string; status?: string }) {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return this.request<Student[]>(`/students${query ? `?${query}` : ''}`);
  }

  async getStudent(id: string) {
    return this.request<Student>(`/students/${id}`);
  }

  async updateStudentProfile(id: string, data: Partial<Student>) {
    return this.request<Student>(`/students/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Attendance
  async getAttendance(studentId?: string) {
    const query = studentId ? `?studentId=${studentId}` : '';
    return this.request<any>(`/attendance${query}`);
  }

  async recordAttendanceSession(sessionData: any) {
    return this.request<AttendanceSession>('/attendance', {
      method: 'POST',
      body: JSON.stringify(sessionData),
    });
  }

  // Placement CRM & Drives
  async getCompanies() {
    return this.request<Company[]>('/companies');
  }

  async getCompany(id: string) {
    return this.request<Company>(`/companies/${id}`);
  }

  async getPlacementDrives() {
    return this.request<PlacementDrive[]>('/jobs');
  }

  async getPlacementDrive(id: string) {
    return this.request<PlacementDrive>(`/jobs/${id}`);
  }

  async createPlacementDrive(driveData: Partial<PlacementDrive>) {
    return this.request<PlacementDrive>('/jobs', {
      method: 'POST',
      body: JSON.stringify(driveData),
    });
  }

  // Eligibility Evaluation
  async checkEligibility(studentId: string, driveId: string) {
    return this.request<EligibilityResult>('/eligibility', {
      method: 'POST',
      body: JSON.stringify({ studentId, driveId }),
    });
  }

  // Applications
  async getApplications(params?: { studentId?: string; driveId?: string; stage?: string }) {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return this.request<StudentApplication[]>(`/applications${query ? `?${query}` : ''}`);
  }

  async submitApplication(driveId: string, studentId: string) {
    return this.request<StudentApplication>('/applications', {
      method: 'POST',
      body: JSON.stringify({ driveId, studentId }),
    });
  }

  async updateApplicationStage(applicationId: string, stage: string, notes?: string) {
    return this.request<StudentApplication>(`/applications/${applicationId}`, {
      method: 'PATCH',
      body: JSON.stringify({ stage, notes }),
    });
  }

  // Notifications
  async getNotifications() {
    return this.request<InAppNotification[]>('/notifications');
  }

  async markNotificationRead(id: string) {
    return this.request<{ success: boolean }>(`/notifications/${id}/read`, {
      method: 'POST',
    });
  }

  // Audit
  async getAuditLogs(params?: { actorRole?: string; limit?: number }) {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return this.request<AuditLog[]>(`/audit${query ? `?${query}` : ''}`);
  }

  // Intelligence Assistant
  async askIntelligence(query: string, studentId?: string) {
    return this.request<{ answer: string; evidence: string[]; recommendations: string[] }>(
      '/intelligence',
      {
        method: 'POST',
        body: JSON.stringify({ query, studentId }),
      }
    );
  }
}

// Global default singleton instance
export const arcApi = new ArcApiClient();
