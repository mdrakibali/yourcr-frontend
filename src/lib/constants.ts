import { Faq } from '@/types/faq';
import { StepItem, RoleCardItem } from '@/types/how-it-works';
import { NavLink } from '@/types/navbar';
import { Testimonial } from '@/types/testimonial';
import { MapLocation } from '@/types/map';
import { Feature } from '@/types/feature';
import {
  CalendarDays,
  ClipboardList,
  BookOpenCheck,
  BellRing,
  Library,
  Users,
} from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#feature' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Testimonials', href: '/#testimonial' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

// Steps data for the How It Works section
export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Find or select your institution',
    description:
      'Choose your university, college or polytechnic from the list.',
    image: '/how-it-works/step1.png',
    alt: 'Find institution',
  },
  {
    number: '02',
    title: 'Create or join a group',
    description:
      'Start a new group or join an existing one with an invite link.',
    image: '/how-it-works/step2.png',
    alt: 'Create or join group',
  },
  {
    number: '03',
    title: 'Manage your semester',
    description: 'View your classes, exams, assignments, notices and more.',
    image: '/how-it-works/step3.png',
    alt: 'Manage your semester',
  },
];

// Role cards data for the How It Works section
export const HOW_IT_WORKS_ROLE_CARDS: RoleCardItem[] = [
  {
    tag: 'FOR CLASS REPRESENTATIVES',
    title: 'Manage your group, lead with ease.',
    items: [
      'Organize academic information',
      'Publish notices',
      'Manage schedules and assignments',
      'Coordinate group members',
    ],
    image: '/how-it-works/cr.png',
    alt: 'Class representative',
  },
  {
    tag: 'FOR STUDENTS',
    title: 'Stay informed, stay ahead.',
    items: [
      'Check the next class',
      'Find exam dates',
      'Track upcoming deadlines',
      'Read important notices and access resources',
    ],
    image: '/how-it-works/student.png',
    alt: 'Student',
  },
];

export const INSTITUTION_LOCATIONS: MapLocation[] = [
  // Original ones outside Dhaka
  {
    id: '3',
    name: 'Rajshahi University',
    district: 'Rajshahi',
    coordinates: [88.6366, 24.3698],
  },
  {
    id: '4',
    name: 'Chittagong University',
    district: 'Chattogram',
    coordinates: [91.7825, 22.4705],
  },
  {
    id: '6',
    name: 'Khulna University',
    district: 'Khulna',
    coordinates: [89.5403, 22.802],
  },

  // From trusted-institutions.tsx
  {
    id: '1',
    name: 'University of Dhaka (DU)',
    district: 'Dhaka',
    coordinates: [90.3929, 23.734],
  },
  {
    id: '2',
    name: 'Bangladesh University of Engineering and Technology (BUET)',
    district: 'Dhaka',
    coordinates: [90.3923, 23.7265],
  },
  {
    id: '5',
    name: 'Shahjalal University of Science and Technology (SUST)',
    district: 'Sylhet',
    coordinates: [91.8315, 24.9221],
  },
  {
    id: '7',
    name: 'Canadian University of Bangladesh (CUB)',
    district: 'Dhaka',
    coordinates: [90.4071, 23.8223],
  },
  {
    id: '8',
    name: 'Jahangirnagar University (JU)',
    district: 'Dhaka',
    coordinates: [90.269, 23.8814],
  },
  {
    id: '9',
    name: 'BRAC University',
    district: 'Dhaka',
    coordinates: [90.4286, 23.7801],
  },
  {
    id: '10',
    name: 'American International University-Bangladesh (AIUB)',
    district: 'Dhaka',
    coordinates: [90.4262, 23.8221],
  },
  {
    id: '11',
    name: 'Daffodil International University (DIU)',
    district: 'Dhaka',
    coordinates: [90.3201, 23.8769],
  },
  {
    id: '12',
    name: 'East West University (EWU)',
    district: 'Dhaka',
    coordinates: [90.4293, 23.7689],
  },
  {
    id: '13',
    name: 'Independent University, Bangladesh (IUB)',
    district: 'Dhaka',
    coordinates: [90.4277, 23.8153],
  },
  {
    id: '14',
    name: 'North South University (NSU)',
    district: 'Dhaka',
    coordinates: [90.4278, 23.8158],
  },
  // Added to fill map
  {
    id: '15',
    name: 'Bangladesh Agricultural University (BAU)',
    district: 'Mymensingh',
    coordinates: [90.4357, 24.7214],
  },
  {
    id: '16',
    name: 'University of Barishal',
    district: 'Barishal',
    coordinates: [90.3524, 22.6565],
  },
  {
    id: '17',
    name: 'Begum Rokeya University, Rangpur',
    district: 'Rangpur',
    coordinates: [89.2618, 25.7262],
  },
  {
    id: '18',
    name: 'Comilla University',
    district: 'Cumilla',
    coordinates: [91.1352, 23.419],
  },
  {
    id: '19',
    name: 'Noakhali Science and Technology University (NSTU)',
    district: 'Noakhali',
    coordinates: [91.1009, 22.7937],
  },
  {
    id: '20',
    name: 'Bangabandhu Sheikh Mujib Medical College (BSMMC)',
    district: 'Faridpur',
    coordinates: [89.8437, 23.5934],
  },
  {
    id: '21',
    name: 'Shaheed Ziaur Rahman Medical College (SZMC)',
    district: 'Bogura',
    coordinates: [89.3516, 24.8197],
  },
  {
    id: '22',
    name: 'Mawlana Bhashani Science and Technology University (MBSTU)',
    district: 'Tangail',
    coordinates: [89.8893, 24.2388],
  },
  {
    id: '23',
    name: 'Patuakhali Science and Technology University (PSTU)',
    district: 'Patuakhali',
    coordinates: [90.38, 22.4639],
  },
  {
    id: '24',
    name: 'Pabna University of Science and Technology (PUST)',
    district: 'Pabna',
    coordinates: [89.2789, 24.0048],
  },
  {
    id: '25',
    name: 'Jashore University of Science and Technology (JUST)',
    district: 'Jashore',
    coordinates: [89.1491, 23.2327],
  },
  {
    id: '26',
    name: 'Hajee Mohammad Danesh Science and Technology University (HSTU)',
    district: 'Dinajpur',
    coordinates: [88.6534, 25.5788],
  },
  {
    id: '27',
    name: 'Bangabandhu Sheikh Mujibur Rahman Science and Technology University',
    district: 'Gopalganj',
    coordinates: [89.8168, 22.9642],
  },
  {
    id: '28',
    name: 'Rangamati Science and Technology University (RMSTU)',
    district: 'Rangamati',
    coordinates: [92.1746, 22.6247],
  },
  {
    id: '29',
    name: 'Islamic University, Bangladesh',
    district: 'Kushtia',
    coordinates: [89.15, 23.7196],
  },
  {
    id: '30',
    name: "Cox's Bazar Medical College",
    district: "Cox's Bazar",
    coordinates: [92.0003, 21.4322],
  },
  {
    id: '31',
    name: 'Khulna University of Engineering & Technology (KUET)',
    district: 'Khulna',
    coordinates: [89.502, 22.9005],
  },
  {
    id: '32',
    name: 'Rajshahi University of Engineering & Technology (RUET)',
    district: 'Rajshahi',
    coordinates: [88.6283, 24.3703],
  },
  {
    id: '33',
    name: 'Chittagong University of Engineering & Technology (CUET)',
    district: 'Chattogram',
    coordinates: [91.9701, 22.4616],
  },
  {
    id: '34',
    name: 'Islamic University of Technology (IUT)',
    district: 'Gazipur',
    coordinates: [90.3789, 23.9482],
  },
  {
    id: '35',
    name: 'Bangabandhu Sheikh Mujibur Rahman Agricultural University',
    district: 'Gazipur',
    coordinates: [90.4079, 24.0373],
  },
];

export const TRUSTED_INSTITUTIONS = [
  {
    name: 'Canadian University of Bangladesh',
    logo: '/assets/institutions/CUB.png',
  },
  { name: 'BUET', logo: '/assets/institutions/BUET.png' },
  { name: 'University of Dhaka', logo: '/assets/institutions/DU.png' },
  { name: 'Jahangirnagar University', logo: '/assets/institutions/JU.png' },
  { name: 'Shahjalal University', logo: '/assets/institutions/SUST.png' },
  { name: 'BRAC University', logo: '/assets/institutions/brac.png' },
  { name: 'AIUB', logo: '/assets/institutions/AIUB.png' },
  {
    name: 'Daffodil International University',
    logo: '/assets/institutions/DIU.png',
  },
  { name: 'East West University', logo: '/assets/institutions/EWU.png' },
  { name: 'IUB', logo: '/assets/institutions/IUB.png' },
  { name: 'North South University', logo: '/assets/institutions/NSU.png' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    company: 'University of Dhaka',
    companyLogo: '/assets/institutions/DU.png',
    text: 'Being a Class Representative used to mean dealing with hundreds of messages daily. Now, I just update the schedule on YourCR, and everyone gets notified instantly. It has saved me hours of stress and kept the whole batch organized.',
    author: 'Tanvir Ahmed',
    role: 'Class Representative, Batch 29',
    avatar: 'https://i.pravatar.cc/150?u=tanvir',
  },
  {
    text: 'The notice board feature is a lifesaver. No more scrolling through endless WhatsApp groups to find that one syllabus PDF sent three weeks ago.',
    author: 'Sadia Rahman',
    role: 'Computer Science Student',
    avatar: 'https://i.pravatar.cc/150?u=sadia',
  },
  {
    text: 'Before this platform, class cancellations or sudden room changes caused massive confusion. Now, real-time push notifications ensure nobody misses a single update.',
    author: 'Fahim Faysal',
    role: 'Department Coordinator',
    avatar: 'https://i.pravatar.cc/150?u=fahim',
  },
  {
    text: 'Everything we need for the semester—routines, assignments, and exam dates—is finally in one place. The user interface is incredibly intuitive and fast.',
    author: 'Nusrat Jahan',
    role: 'BBA Student',
    avatar: 'https://i.pravatar.cc/150?u=nusrat',
  },
  {
    text: "As a faculty member, sharing resources with specific class groups has never been easier. I can directly upload lecture notes that go straight to the students' dashboard.",
    author: 'Dr. Shafiqul Islam',
    role: 'Assistant Professor',
    avatar: 'https://i.pravatar.cc/150?u=shafiq',
  },
  {
    text: 'I love how easy it is to track my assignments. The upcoming deadline reminders keep me from procrastinating. Absolutely brilliant platform for university students!',
    author: 'Rafiqul Hasan',
    role: 'Engineering Student',
    avatar: 'https://i.pravatar.cc/150?u=rafiq',
  },
  {
    company: 'BUET',
    companyLogo: '/assets/institutions/BUET.png',
    text: "We integrated our entire batch's workflow here. The ability to create custom subgroups for lab sections and project teams means the right information always reaches the right people without spamming the general group.",
    author: 'Ayman Sadiq',
    role: 'Batch Representative, CSE',
    avatar: 'https://i.pravatar.cc/150?u=ayman',
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'Class Routine',
    description: 'Know what class comes next and where it takes place.',
    icon: CalendarDays,
  },
  {
    title: 'Exam Schedule',
    description: 'Keep upcoming exams and their details together.',
    icon: ClipboardList,
  },
  {
    title: 'Assignments',
    description: 'Stay aware of coursework and approaching deadlines.',
    icon: BookOpenCheck,
  },
  {
    title: 'Notices',
    description: 'Find announcements without searching through chat groups.',
    icon: BellRing,
  },
  {
    title: 'Subjects & Resources',
    description: 'Keep semester learning materials organized.',
    icon: Library,
  },
  {
    title: 'Group Management',
    description: 'Help CRs coordinate semester information with members.',
    icon: Users,
  },
];

export const AVATARS = [
  'https://i.pravatar.cc/150?u=1',
  'https://i.pravatar.cc/150?u=2',
  'https://i.pravatar.cc/150?u=3',
  'https://i.pravatar.cc/150?u=4',
  'https://i.pravatar.cc/150?u=5',
];

export const FAQS: Faq[] = [
  {
    question: 'How can I invite my classmates to join our class?',
    answer:
      'You can easily invite your classmates by sharing a unique invite link or class code generated from your dashboard. Once they sign up using the link, they will be automatically added to your class.',
  },
  {
    question: 'Does the app send notifications for schedule changes?',
    answer:
      'Yes! Whenever a Class Representative (CR) updates the schedule, adds an assignment, or makes an announcement, all students in the class receive instant notifications.',
  },
  {
    question: 'Can students upload and share their own class notes?',
    answer:
      'Currently, only CRs and assigned admins can upload official resources and notes to ensure accuracy. However, students can request to add materials through the built-in request system.',
  },
  {
    question: "Is 'Your CR' free to use for students?",
    answer:
      'Yes, the platform is completely free for students. Our core features for class management, schedules, and announcements are available to all users at no cost.',
  },
  {
    question: 'Can I manage multiple classes at the same time?',
    answer:
      'Absolutely. If you are a CR for multiple courses or a student enrolled in different departments, you can switch between all your active classes from a single unified dashboard.',
  },
];
