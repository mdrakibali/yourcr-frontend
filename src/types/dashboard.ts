// Dashboard Entities and Overview Types for Your CR

export type PastelVariant = 'blue' | 'yellow' | 'pink' | 'green';

export interface ClassPeriod {
  id: string;
  subjectId: string;
  subjectName: string;
  subjectCode: string;
  teacherName: string;
  teacherAvatarUrl?: string;
  room: string;
  building?: string;
  startTime: string;
  endTime: string;
  dayOfWeek: string;
  pastelVariant: PastelVariant;
  isCurrent?: boolean;
  isNext?: boolean;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  instructorName: string;
  instructorEmail?: string;
  room?: string;
  pastelVariant: PastelVariant;
  syllabusUrl?: string;
}

export interface Teacher {
  id: string;
  name: string;
  initials: string;
  designation: string;
  department: string;
  email: string;
  phone?: string;
  roomNumber: string;
  avatarUrl?: string;
}

export type AssignmentStatus = 'Pending' | 'Submitted' | 'Late' | 'Graded';

export interface AssignmentItem {
  id: string;
  title: string;
  subjectId: string;
  subjectName: string;
  subjectCode: string;
  dueDate: string;
  dueTime?: string;
  type: 'Assignment' | 'Lab Report' | 'Project' | 'Presentation';
  status: AssignmentStatus;
  grade?: string;
  totalMarks?: number;
  instructorName: string;
  instructorAvatarUrl?: string;
}

export type ExamStatus = 'Upcoming' | 'Completed' | 'Rescheduled';

export interface ExamItem {
  id: string;
  title: string;
  subjectName: string;
  subjectCode: string;
  examDate: string;
  startTime: string;
  endTime: string;
  room: string;
  type: 'Midterm' | 'Final' | 'Quiz' | 'Lab Exam';
  status: ExamStatus;
}

export type NoticePriority = 'Urgent' | 'Important' | 'Normal';

export interface NoticeItem {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  publishedBy: string;
  publisherRole: string;
  isPinned: boolean;
  priority: NoticePriority;
}

export interface GroupMember {
  id: string;
  name: string;
  email: string;
  studentId: string;
  role: 'owner' | 'admin' | 'member';
  avatarUrl?: string;
  joinedAt: string;
}

export interface GroupStats {
  totalStudents: number;
  totalSubjects: number;
  activeAssignments: number;
  upcomingExamsCount: number;
}

export interface DashboardOverviewData {
  todayClasses: ClassPeriod[];
  nextClass?: ClassPeriod;
  upcomingAssignments: AssignmentItem[];
  upcomingExams: ExamItem[];
  latestNotices: NoticeItem[];
  stats: GroupStats;
}

// Component Props Interfaces
export interface OverviewBannerProps {
  userName: string;
  subtitle: string;
  isOwnerOrAdmin?: boolean;
}

export interface DateBadgeProps {
  dayNumber: string;
  dayName: string;
  monthName: string;
}

export interface TodayClassesGridProps {
  classes: ClassPeriod[];
}

export interface TodayClassCardProps {
  period: ClassPeriod;
}

export interface RoutineTimelineProps {
  classes: ClassPeriod[];
}

export interface NextClassCardProps {
  nextClass?: ClassPeriod;
  stats: GroupStats;
  isOwnerOrAdmin?: boolean;
}

export interface UpcomingDeadlinesTableProps {
  assignments: AssignmentItem[];
  exams: ExamItem[];
}

