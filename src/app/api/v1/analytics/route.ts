import { successResponse } from '@/lib/apiResponse';
import { mockStudents, mockCompanies, mockDrives } from '@/data/mockData';

export async function GET() {
  const totalStudents = 1420;
  const totalPlaced = 840;
  const placementRate = Number(((totalPlaced / 1020) * 100).toFixed(1)); // out of eligible 1020
  const avgPackage = 14.8;
  const highestPackage = 48.0;

  return successResponse({
    institution: {
      id: 'inst-apex-01',
      name: 'Apex Institute of Technology & Sciences',
      code: 'AITS',
      campus: 'Main Tech Campus',
    },
    metrics: {
      totalEnrollment: totalStudents,
      facultyCount: 135,
      placementRate,
      averagePackageLPA: avgPackage,
      highestPackageLPA: highestPackage,
      activeDrivesCount: mockDrives.length,
      partnerCompaniesCount: mockCompanies.length,
      averageAttendancePercentage: 86.4,
    },
    departmentBreakdown: [
      { code: 'CSE', name: 'Computer Science', students: 480, placed: 420, avgPackage: 18.2 },
      { code: 'IT', name: 'Information Tech', students: 310, placed: 275, avgPackage: 15.6 },
      { code: 'ECE', name: 'Electronics & Comm', students: 380, placed: 290, avgPackage: 12.4 },
      { code: 'MECH', name: 'Mechanical', students: 250, placed: 160, avgPackage: 9.2 },
    ],
  });
}
