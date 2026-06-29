export type TimelineItem = {
  type: 'work' | 'education';
  role: string;
  org: string;
  period: string;
  location?: string;
  description?: string;
  highlights?: string[];
  current?: boolean;
};

export const experience: TimelineItem[] = [
  {
    type: 'work',
    role: 'Software Engineer',
    org: 'Algotix AI',
    period: 'Sep 2025 — Present',
    location: 'Onsite',
    current: true,
    description:
      'Building AI-powered products and full-stack features across the MERN/Next.js stack.',
    highlights: [
      'Develop production features end-to-end with React, Next.js and Node.js',
      'Integrate LLM workflows (OpenAI, LangChain) into user-facing products',
      'Collaborate on architecture, code reviews, and performance optimization',
    ],
  },
  {
    type: 'work',
    role: 'MERN Stack Developer',
    org: 'Hubble42 Inc.',
    period: 'Jul 2025 — Sep 2025',
    location: 'Onsite',
    description: 'Shipped client web applications with a focus on clean, scalable code.',
    highlights: [
      'Built REST APIs with Express and MongoDB',
      'Implemented authentication and role-based access',
      'Delivered responsive, accessible React interfaces',
    ],
  },
  {
    type: 'work',
    role: 'MERN Stack Developer',
    org: 'Codings First',
    period: 'Jan 2025 — Jul 2025',
    location: 'Onsite',
    description: 'Developed and maintained full-stack features for production applications.',
    highlights: [
      'Owned features from database modeling to UI',
      'Improved page performance and Core Web Vitals',
      'Worked in an agile team with Git-based workflows',
    ],
  },
  {
    type: 'work',
    role: 'Frontend Developer Intern',
    org: 'Codesthinker',
    period: 'Aug 2024 — Dec 2024',
    location: 'Onsite',
    description: 'First professional role — built responsive UIs and learned production workflows.',
    highlights: [
      'Translated Figma designs into pixel-perfect React components',
      'Learned Git, code review, and team collaboration',
    ],
  },
  {
    type: 'education',
    role: 'B.S. Software Engineering',
    org: 'The Islamia University of Bahawalpur',
    period: '2023 — 2027',
    description: 'Pursuing a degree in Software Engineering alongside full-time industry work.',
  },
  {
    type: 'education',
    role: 'Intermediate (Pre-Engineering)',
    org: 'Punjab College, Lodhran',
    period: '2020 — 2022',
  },
  {
    type: 'education',
    role: 'Matriculation',
    org: 'Govt. Higher Secondary School, Lodhran',
    period: '2019 — 2020',
  },
];
