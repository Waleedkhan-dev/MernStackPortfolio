/**
 * Single source of truth for personal info, links, and site metadata.
 * Update values here and they propagate across the whole site.
 */
export const profile = {
  name: 'Muhammad Waleed',
  shortName: 'Waleed',
  title: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'MERN Stack Engineer', 'AI Application Developer', 'Problem Solver'],
  tagline: 'I build fast, secure, and scalable web applications.',
  bio: "Full Stack Developer with 2+ years of experience building modern, scalable, and AI-powered web applications across the MERN stack and Next.js.",
  longBio:
    "I'm a Full Stack Developer specializing in the MERN stack and Next.js, with 2+ years of professional experience shipping production software. I work end-to-end — from pixel-perfect, accessible interfaces in React/TypeScript to robust REST APIs, authentication, and data layers in Node.js. I also build AI chatbots and automation systems using OpenAI and LangChain. My focus is clean architecture, performance, and developer experience.",
  location: 'Bahawalpur, Punjab, Pakistan',
  availability: 'Available for new opportunities',
  available: true,
  email: 'waleedcoder030@gmail.com',
  phone: '+92 326 7514362',
  phoneRaw: '+923267514362',
  resumeUrl: '/Muhammad_Waleed_Resume.pdf',
  avatar: '/images/avatar.png',
  githubUsername: 'Waleedkhan-dev',
  yearsOfExperience: '2+',
  metrics: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Shipped', value: '20+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Happy Clients', value: '10+' },
  ],
} as const;

export const socials = {
  github: 'https://github.com/Waleedkhan-dev',
  linkedin: 'https://www.linkedin.com/in/muhammad-waleed-350018360/',
  website: 'https://waleedkhan.netlify.app/',
  whatsapp: 'https://wa.me/923267514362',
  email: 'mailto:waleedcoder030@gmail.com',
} as const;

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://waleedkhan.dev',
  title: `${profile.name} — ${profile.title}`,
  description:
    'Muhammad Waleed is a Full Stack Developer building fast, secure, and scalable web applications with React, Next.js, TypeScript, Node.js, and AI. Explore projects, experience, and case studies.',
  keywords: [
    'Muhammad Waleed',
    'Full Stack Developer',
    'MERN Stack Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Node.js',
    'Portfolio',
    'Pakistan',
    'AI Developer',
  ],
  ogImage: '/api/og',
} as const;
