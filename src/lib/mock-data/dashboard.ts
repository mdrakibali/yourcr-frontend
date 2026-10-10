import {
  DashboardOverviewData,
  ClassPeriod,
  AssignmentItem,
  ExamItem,
  NoticeItem,
  Subject,
  Teacher,
  GroupMember,
} from '@/types/dashboard';

export const MOCK_TODAY_CLASSES: ClassPeriod[] = [
  {
    id: 'period-1',
    subjectId: 'sub-1',
    subjectName: 'Algorithms & Data Structures Lab',
    subjectCode: 'CSE 222',
    teacherName: 'Prof. Filbert Rahman',
    room: 'Lab 4 (ECE Building)',
    building: 'Engineering Block',
    startTime: '09:00 AM',
    endTime: '10:30 AM',
    dayOfWeek: 'Tuesday',
    pastelVariant: 'blue',
  },
  {
    id: 'period-2',
    subjectId: 'sub-2',
    subjectName: 'Database Management Systems',
    subjectCode: 'CSE 223',
    teacherName: 'Dr. Brian Shafiq',
    room: 'Room 402',
    building: 'Academic Building 2',
    startTime: '10:30 AM',
    endTime: '11:45 AM',
    dayOfWeek: 'Tuesday',
    pastelVariant: 'yellow',
  },
  {
    id: 'period-3',
    subjectId: 'sub-3',
    subjectName: 'Software Engineering & Design',
    subjectCode: 'CSE 224',
    teacherName: 'Prof. John Chowdhury',
    room: 'Room 501',
    building: 'Main Campus',
    startTime: '01:30 PM',
    endTime: '02:45 PM',
    dayOfWeek: 'Tuesday',
    pastelVariant: 'pink',
  },
  {
    id: 'period-4',
    subjectId: 'sub-4',
    subjectName: 'Computer Networks',
    subjectCode: 'CSE 225',
    teacherName: 'Prof. Herman Ali',
    room: 'Network Lab 2',
    building: 'IT Building',
    startTime: '03:00 PM',
    endTime: '04:15 PM',
    dayOfWeek: 'Tuesday',
    pastelVariant: 'green',
  },
];

export const MOCK_NEXT_CLASS: ClassPeriod = {
  id: 'period-2',
  subjectId: 'sub-2',
  subjectName: 'Database Management Systems Lab',
  subjectCode: 'CSE 223',
  teacherName: 'Dr. Brian Shafiq',
  room: 'Room 402, ECE Building',
  building: 'Academic Building 2',
  startTime: '11:30 AM',
  endTime: '01:00 PM',
  dayOfWeek: 'Tuesday',
  pastelVariant: 'blue',
  isNext: true,
};

export const MOCK_ASSIGNMENTS: AssignmentItem[] = [
  {
    id: 'asg-1',
    title: 'DBMS Phase 1: Relational Schema & Normalization',
    subjectId: 'sub-2',
    subjectName: 'Database Management Systems',
    subjectCode: 'CSE 223',
    dueDate: 'Mon, 20 May',
    dueTime: '11:59 PM',
    type: 'Assignment',
    status: 'Late',
    grade: '88',
    totalMarks: 100,
    instructorName: 'Dr. Brian Shafiq',
  },
  {
    id: 'asg-2',
    title: 'Software UI/UX & Architecture Mockup Submission',
    subjectId: 'sub-3',
    subjectName: 'Software Engineering & Design',
    subjectCode: 'CSE 224',
    dueDate: 'Wed, 22 May',
    dueTime: '05:00 PM',
    type: 'Project',
    status: 'Submitted',
    grade: '-',
    totalMarks: 50,
    instructorName: 'Prof. Herman Ali',
  },
  {
    id: 'asg-3',
    title: 'Algorithm Graph Traversal: BFS & Dijkstra Analysis',
    subjectId: 'sub-1',
    subjectName: 'Algorithms & Data Structures',
    subjectCode: 'CSE 222',
    dueDate: 'Sun, 26 May',
    dueTime: '11:59 PM',
    type: 'Lab Report',
    status: 'Pending',
    grade: '-',
    totalMarks: 40,
    instructorName: 'Prof. Filbert Rahman',
  },
];

export const MOCK_EXAMS: ExamItem[] = [
  {
    id: 'exam-1',
    title: 'Midterm Examination: Computer Networks',
    subjectName: 'Computer Networks',
    subjectCode: 'CSE 225',
    examDate: 'Sun, 26 May',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    room: 'Auditorium 1',
    type: 'Midterm',
    status: 'Upcoming',
  },
  {
    id: 'exam-2',
    title: 'Lab Final: Database Systems',
    subjectName: 'Database Management Systems',
    subjectCode: 'CSE 223',
    examDate: 'Tue, 28 May',
    startTime: '02:00 PM',
    endTime: '04:00 PM',
    room: 'Lab 4',
    type: 'Lab Exam',
    status: 'Upcoming',
  },
];

export const MOCK_NOTICES: NoticeItem[] = [
  {
    id: 'notice-1',
    title: 'Midterm Exam Schedule & Room Allocation Published',
    content:
      'The centralized schedule for Spring 2026 Midterm Examinations has been released. Please check your exam rooms and timings.',
    publishedAt: 'Today, 08:30 AM',
    publishedBy: 'Tanvir Ahmed',
    publisherRole: 'Class Representative (CR)',
    isPinned: true,
    priority: 'Urgent',
  },
  {
    id: 'notice-2',
    title: 'Algorithms Class Rescheduled for Thursday 2 PM',
    content:
      'Due to department faculty meeting, Tuesday 9 AM Algorithms class make-up will be held on Thursday at 2:00 PM in Room 402.',
    publishedAt: 'Yesterday, 04:15 PM',
    publishedBy: 'Prof. Filbert Rahman',
    publisherRole: 'Course Faculty',
    isPinned: false,
    priority: 'Important',
  },
];

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 'sub-1',
    name: 'Algorithms & Data Structures',
    code: 'CSE 222',
    credits: 3,
    instructorName: 'Prof. Filbert Rahman',
    instructorEmail: 'filbert@cse.university.edu',
    room: 'Room 304',
    pastelVariant: 'blue',
  },
  {
    id: 'sub-2',
    name: 'Database Management Systems',
    code: 'CSE 223',
    credits: 3,
    instructorName: 'Dr. Brian Shafiq',
    instructorEmail: 'brian@cse.university.edu',
    room: 'Room 402',
    pastelVariant: 'yellow',
  },
  {
    id: 'sub-3',
    name: 'Software Engineering & Design',
    code: 'CSE 224',
    credits: 3,
    instructorName: 'Prof. John Chowdhury',
    instructorEmail: 'john@cse.university.edu',
    room: 'Room 501',
    pastelVariant: 'pink',
  },
  {
    id: 'sub-4',
    name: 'Computer Networks',
    code: 'CSE 225',
    credits: 3,
    instructorName: 'Prof. Herman Ali',
    instructorEmail: 'herman@cse.university.edu',
    room: 'Lab 2',
    pastelVariant: 'green',
  },
];

export const MOCK_TEACHERS: Teacher[] = [
  {
    id: 'teacher-1',
    name: 'Prof. Filbert Rahman',
    initials: 'FR',
    designation: 'Associate Professor',
    department: 'Computer Science & Engineering',
    email: 'filbert@university.edu.bd',
    phone: '+880 1711-234567',
    roomNumber: 'Faculty Room 408, ECE Building',
  },
  {
    id: 'teacher-2',
    name: 'Dr. Brian Shafiq',
    initials: 'BS',
    designation: 'Professor & Head',
    department: 'Computer Science & Engineering',
    email: 'brian@university.edu.bd',
    roomNumber: 'Room 401, Academic Building 2',
  },
  {
    id: 'teacher-3',
    name: 'Prof. John Chowdhury',
    initials: 'JC',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    email: 'john@university.edu.bd',
    roomNumber: 'Room 306, Main Campus',
  },
  {
    id: 'teacher-4',
    name: 'Prof. Herman Ali',
    initials: 'HA',
    designation: 'Senior Lecturer',
    department: 'Computer Science & Engineering',
    email: 'herman@university.edu.bd',
    roomNumber: 'Room 214, IT Building',
  },
];

export const MOCK_MEMBERS: GroupMember[] = [
  {
    id: 'mem-1',
    name: 'Tanvir Ahmed (You)',
    email: 'tanvir@student.edu.bd',
    studentId: '221-15-4082',
    role: 'owner',
    joinedAt: '2026-01-10',
  },
  {
    id: 'mem-2',
    name: 'Sadia Rahman',
    email: 'sadia@student.edu.bd',
    studentId: '221-15-4085',
    role: 'admin',
    joinedAt: '2026-01-11',
  },
  {
    id: 'mem-3',
    name: 'Rafiqul Hasan',
    email: 'rafiq@student.edu.bd',
    studentId: '221-15-4091',
    role: 'member',
    joinedAt: '2026-01-12',
  },
  {
    id: 'mem-4',
    name: 'Nusrat Jahan',
    email: 'nusrat@student.edu.bd',
    studentId: '221-15-4100',
    role: 'member',
    joinedAt: '2026-01-12',
  },
];

// Async fetcher simulating network latency for proper skeleton testing
export async function getDashboardOverview(
  _groupId?: string
): Promise<DashboardOverviewData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        todayClasses: MOCK_TODAY_CLASSES,
        nextClass: MOCK_NEXT_CLASS,
        upcomingAssignments: MOCK_ASSIGNMENTS,
        upcomingExams: MOCK_EXAMS,
        latestNotices: MOCK_NOTICES,
        stats: {
          totalStudents: 54,
          totalSubjects: 4,
          activeAssignments: 3,
          upcomingExamsCount: 2,
        },
      });
    }, 600);
  });
}
