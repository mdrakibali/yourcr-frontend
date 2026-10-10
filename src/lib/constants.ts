import { StepItem, RoleCardItem } from "@/types/how-it-works";

// Steps data for the How It Works section
export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Find or select your institution",
    description: "Choose your university, college or polytechnic from the list.",
    image: "/how-it-works/step1.png",
    alt: "Find institution",
  },
  {
    number: "02",
    title: "Create or join a group",
    description: "Start a new group or join an existing one with an invite link.",
    image: "/how-it-works/step2.png",
    alt: "Create or join group",
  },
  {
    number: "03",
    title: "Manage your semester",
    description: "View your classes, exams, assignments, notices and more.",
    image: "/how-it-works/step3.png",
    alt: "Manage your semester",
  },
];


// Role cards data for the How It Works section
export const HOW_IT_WORKS_ROLE_CARDS: RoleCardItem[] = [
  {
    tag: "FOR CLASS REPRESENTATIVES",
    title: "Manage your group, lead with ease.",
    items: [
      "Organize academic information",
      "Publish notices",
      "Manage schedules and assignments",
      "Coordinate group members",
    ],
    image: "/how-it-works/cr.png",
    alt: "Class representative",
  },
  {
    tag: "FOR STUDENTS",
    title: "Stay informed, stay ahead.",
    items: [
      "Check the next class",
      "Find exam dates",
      "Track upcoming deadlines",
      "Read important notices and access resources",
    ],
    image: "/how-it-works/student.png",
    alt: "Student",
  },
];

import { MapLocation } from "@/types/map";

export const INSTITUTION_LOCATIONS: MapLocation[] = [
  { id: "1", name: "Dhaka University", district: "Dhaka", coordinates: [90.3959, 23.7323] },
  { id: "2", name: "BUET", district: "Dhaka", coordinates: [90.3927, 23.7266] },
  { id: "3", name: "Rajshahi University", district: "Rajshahi", coordinates: [88.6366, 24.3698] },
  { id: "4", name: "Chittagong University", district: "Chattogram", coordinates: [91.7825, 22.4705] },
  { id: "5", name: "Sylhet Agricultural Univ.", district: "Sylhet", coordinates: [91.9022, 24.9048] },
  { id: "6", name: "Khulna University", district: "Khulna", coordinates: [89.5403, 22.8020] }
];
