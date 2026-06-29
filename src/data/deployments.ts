import { SiVercel, SiRender, SiRailway, SiDocker } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export type Deployment = {
  name: string;
  icon: IconType;
  color: string;
  what: string;
};

export const deployments: Deployment[] = [
  {
    name: 'Vercel',
    icon: SiVercel,
    color: '#ffffff',
    what: 'Primary host for Next.js & React frontends — serverless API routes, preview deployments, and edge delivery for most of my live projects.',
  },
  {
    name: 'Render',
    icon: SiRender,
    color: '#46E3B7',
    what: 'Node/Express APIs and background services with managed databases and zero-downtime deploys.',
  },
  {
    name: 'Railway',
    icon: SiRailway,
    color: '#a78bfa',
    what: 'Quick backend + database provisioning for prototypes and full-stack services with simple environment management.',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
    what: 'Containerizing apps for consistent local-to-prod parity and reproducible builds across environments.',
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: '#FF9900',
    what: 'EC2 for compute, S3 for object/asset storage, and IAM basics for access control on production workloads.',
  },
];
