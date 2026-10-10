// Type definitions for Academic Group, Institutions, Departments, and Programs in Your CR

export type InstitutionType =
  | 'University'
  | 'College'
  | 'Polytechnic'
  | 'School'
  | 'Madrasah'
  | 'Other';

export type InstitutionVerificationStatus = 'VERIFIED' | 'PENDING';

export interface Institution {
  id: string;
  name: string;
  type: InstitutionType;
  district?: string;
  city?: string;
  website?: string;
  logoUrl?: string;
  verificationStatus: InstitutionVerificationStatus;
}

export interface Department {
  id: string;
  institutionId: string;
  name: string;
  code?: string;
  description?: string;
}

export type ProgramLevel =
  | 'School'
  | 'College'
  | 'Diploma'
  | 'Undergraduate'
  | 'Postgraduate'
  | 'Other';

export interface AcademicProgram {
  id: string;
  institutionId: string;
  departmentId?: string;
  name: string;
  level: ProgramLevel;
  programType?: string;
  durationYears?: number;
  totalSemesters?: number;
}

export type MemberRole = 'owner' | 'admin' | 'member';

export interface AcademicGroupAttributes {
  session?: string;
  yearOfStudy?: number;
  semester?: number | string;
  section?: string;
  shift?: 'Day' | 'Evening' | 'Morning';
  batch?: string;
}

export interface AcademicGroup {
  id: string;
  name: string;
  institutionId: string;
  departmentId?: string;
  programId: string;
  institutionName: string;
  departmentName?: string;
  programName: string;
  attributes: AcademicGroupAttributes;
  joinCode: string;
  totalStudents: number;
  isArchived?: boolean;
  createdAt: string;
}

export interface UserGroupMembership {
  groupId: string;
  role: MemberRole;
  joinedAt: string;
  group: AcademicGroup;
}
