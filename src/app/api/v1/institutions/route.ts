import { successResponse } from '@/lib/apiResponse';

export async function GET() {
  const institution = {
    id: 'inst-apex-01',
    name: 'Apex Institute of Technology & Sciences',
    code: 'AITS',
    domain: 'apex.edu.in',
    status: 'ACTIVE',
    campuses: [
      { id: 'camp-main', name: 'Main Tech Campus', location: 'Bengaluru Tech Corridor' },
      { id: 'camp-north', name: 'North Innovation Campus', location: 'Whitefield' },
    ],
    departments: [
      { code: 'CSE', name: 'Computer Science & Engineering', programs: ['B.Tech', 'M.Tech'] },
      { code: 'IT', name: 'Information Technology', programs: ['B.Tech'] },
      { code: 'ECE', name: 'Electronics & Communication Engineering', programs: ['B.Tech', 'M.Tech'] },
      { code: 'MECH', name: 'Mechanical Engineering', programs: ['B.Tech'] },
    ],
  };

  return successResponse(institution);
}
