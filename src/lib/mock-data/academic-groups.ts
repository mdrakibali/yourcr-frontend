import { AcademicGroup, UserGroupMembership } from '@/types/academic-group';

export const MOCK_ACADEMIC_GROUPS: AcademicGroup[] = [
  {
    id: 'group-diu-cse-4a',
    name: 'CSE — Fall 2026 — Semester 4 — Section A',
    institutionId: 'inst-1',
    departmentId: 'dept-1',
    programId: 'prog-1',
    institutionName: 'Daffodil International University',
    departmentName: 'Computer Science and Engineering',
    programName: 'BSc in CSE',
    attributes: {
      session: '2024–2025',
      yearOfStudy: 2,
      semester: 4,
      section: 'A',
      shift: 'Day',
      batch: 'Batch 62',
    },
    joinCode: 'CR-DIU-62A',
    totalStudents: 54,
    createdAt: '2026-01-10T08:00:00Z',
  },
  {
    id: 'group-buet-cse-22b',
    name: 'BUET CSE — Level 2 Term 1 — Section B',
    institutionId: 'inst-2',
    departmentId: 'dept-4',
    programId: 'prog-3',
    institutionName: 'BUET',
    departmentName: 'Computer Science and Engineering',
    programName: 'BSc in CSE',
    attributes: {
      session: '2023–2024',
      yearOfStudy: 2,
      semester: 1,
      section: 'B',
      shift: 'Day',
      batch: 'Batch 22',
    },
    joinCode: 'CR-BUET-22B',
    totalStudents: 62,
    createdAt: '2026-02-15T09:30:00Z',
  },
];

export const MOCK_USER_MEMBERSHIPS: UserGroupMembership[] = [
  {
    groupId: 'group-diu-cse-4a',
    role: 'owner', // User is Owner / CR here
    joinedAt: '2026-01-10T08:00:00Z',
    group: MOCK_ACADEMIC_GROUPS[0],
  },
  {
    groupId: 'group-buet-cse-22b',
    role: 'member', // User is Student / Member here
    joinedAt: '2026-02-20T11:00:00Z',
    group: MOCK_ACADEMIC_GROUPS[1],
  },
];
