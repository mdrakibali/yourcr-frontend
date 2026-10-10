import { AcademicProgram } from '@/types/academic-group';

export const MOCK_PROGRAMS: AcademicProgram[] = [
  {
    id: 'prog-1',
    institutionId: 'inst-1', // DIU
    departmentId: 'dept-1',
    name: 'BSc in Computer Science and Engineering',
    level: 'Undergraduate',
    programType: 'Engineering',
    durationYears: 4,
    totalSemesters: 8,
  },
  {
    id: 'prog-2',
    institutionId: 'inst-1', // DIU
    departmentId: 'dept-3',
    name: 'Bachelor of Business Administration (BBA)',
    level: 'Undergraduate',
    programType: 'Business',
    durationYears: 4,
    totalSemesters: 8,
  },
  {
    id: 'prog-3',
    institutionId: 'inst-2', // BUET
    departmentId: 'dept-4',
    name: 'BSc in CSE',
    level: 'Undergraduate',
    programType: 'Engineering',
    durationYears: 4,
    totalSemesters: 8,
  },
  {
    id: 'prog-4',
    institutionId: 'inst-4', // Dhaka Polytechnic
    departmentId: 'dept-6',
    name: 'Diploma in Computer Technology',
    level: 'Diploma',
    programType: 'Polytechnic Engineering',
    durationYears: 4,
    totalSemesters: 8,
  },
  {
    id: 'prog-5',
    institutionId: 'inst-5', // Notre Dame College
    departmentId: 'dept-7',
    name: 'HSC Science',
    level: 'College',
    programType: 'Higher Secondary',
    durationYears: 2,
    totalSemesters: 4,
  },
];
