export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Stats', href: '#stats' },
  { label: 'Contact', href: '#contact' },
];

/** Section ids tracked by the scroll-spy in the navbar. */
export const sectionIds = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'deployment',
  'architecture',
  'stats',
  'testimonials',
  'blog',
  'contact',
];
