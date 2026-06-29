import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiMongoose,
  SiVercel,
  SiRender,
  SiRailway,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiLinux,
  SiOpenai,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaAws } from 'react-icons/fa';
import { TbApi, TbShieldLock } from 'react-icons/tb';
import type { IconType } from 'react-icons';

export type Skill = { name: string; icon: IconType };
export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Crafting accessible, responsive, animated interfaces.',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Redux', icon: SiRedux },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Designing robust APIs, auth, and realtime systems.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST API', icon: TbApi },
      { name: 'Authentication', icon: TbShieldLock },
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'OAuth', icon: TbShieldLock },
      { name: 'WebSockets', icon: SiSocketdotio },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    description: 'Modeling data with SQL and NoSQL, the right tool per job.',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Mongoose', icon: SiMongoose },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment',
    description: 'Shipping to the cloud with CI/CD and containers.',
    skills: [
      { name: 'Vercel', icon: SiVercel },
      { name: 'Render', icon: SiRender },
      { name: 'Railway', icon: SiRailway },
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: FaAws },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    description: 'A sharp toolbelt for a fast, reliable workflow.',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Figma', icon: SiFigma },
      { name: 'Linux', icon: SiLinux },
      { name: 'OpenAI', icon: SiOpenai },
    ],
  },
];

/** Flat list used by the marquee strip. */
export const marqueeSkills: Skill[] = skillCategories.flatMap((c) => c.skills);
