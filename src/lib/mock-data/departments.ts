import { Department } from '@/types/academic-group';

export const MOCK_DEPARTMENTS: Department[] = [
  {
    id: 'dept-1',
    institutionId: 'inst-1', // DIU
    name: 'Computer Science and Engineering',
    code: 'CSE',
    description: 'Department of Computer Science and Engineering',
  },
  {
    id: 'dept-2',
    institutionId: 'inst-1', // DIU
    name: 'Software Engineering',
    code: 'SWE',
    description: 'Department of Software Engineering',
  },
  {
    id: 'dept-3',
    institutionId: 'inst-1', // DIU
    name: 'Business Administration',
    code: 'BBA',
    description: 'Faculty of Business and Entrepreneurship',
  },
  {
    id: 'dept-4',
    institutionId: 'inst-2', // BUET
    name: 'Computer Science and Engineering',
    code: 'CSE',
    description: 'Department of CSE, BUET',
  },
  {
    id: 'dept-5',
    institutionId: 'inst-2', // BUET
    name: 'Electrical and Electronic Engineering',
    code: 'EEE',
    description: 'Department of EEE, BUET',
  },
  {
    id: 'dept-6',
    institutionId: 'inst-4', // Dhaka Polytechnic
    name: 'Computer Technology',
    code: 'CMT',
    description: 'Department of Computer Technology',
  },
  {
    id: 'dept-7',
    institutionId: 'inst-5', // Notre Dame College
    name: 'Science',
    code: 'SCI',
    description: 'HSC Science Group',
  },
];
