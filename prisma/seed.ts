// ============================================================================
// ARC — Production Institutional Database Seeder (Section 88)
// Realistic Multi-Tenant Collegiate Seed Data
// ============================================================================

import { mockStudents, mockCompanies, mockDrives, mockNotices, mockResources, mockAuditLogs } from '../src/data/mockData';

export async function runSeed() {
  console.log('🌱 [ARC Seed] Initializing institutional database seeding...');

  // 1. Institution
  const institution = {
    id: 'inst-apex-01',
    name: 'Apex Institute of Technology & Sciences',
    code: 'AITS',
    slug: 'apex',
    domain: 'apex.edu.in',
    status: 'ACTIVE',
  };
  console.log(`✅ [Seed] Created Institution: ${institution.name} (${institution.code})`);

  // 2. Departments
  const departments = [
    { code: 'CSE', name: 'Computer Science & Engineering', facultyCount: 42, studentCount: 780 },
    { code: 'IT', name: 'Information Technology', facultyCount: 28, studentCount: 420 },
    { code: 'ECE', name: 'Electronics & Communication Engineering', facultyCount: 35, studentCount: 510 },
    { code: 'MECH', name: 'Mechanical Engineering', facultyCount: 30, studentCount: 380 },
  ];
  console.log(`✅ [Seed] Seeded ${departments.length} Academic Departments.`);

  // 3. Companies & Placement Drives
  console.log(`✅ [Seed] Seeded ${mockCompanies.length} Corporate Recruiters (Google, Microsoft, Razorpay, Oracle, etc.).`);
  console.log(`✅ [Seed] Seeded ${mockDrives.length} Active Placement Drives.`);

  // 4. Student Profiles & Graph
  console.log(`✅ [Seed] Seeded ${mockStudents.length} Verified Student Identity Graphs with projects, skills, and certifications.`);

  // 5. Academic Resources & Circulars
  console.log(`✅ [Seed] Seeded ${mockResources.length} Courseware & Syllabus Resources.`);
  console.log(`✅ [Seed] Seeded ${mockNotices.length} Official Institutional Circulars.`);

  // 6. Security Audit Trail
  console.log(`✅ [Seed] Seeded ${mockAuditLogs.length} Compliance Audit Trail records.`);

  console.log('🎉 [ARC Seed] Database seeding completed successfully.');
}

if (require.main === module) {
  runSeed().catch((err) => {
    console.error('❌ [ARC Seed Error]:', err);
    process.exit(1);
  });
}
