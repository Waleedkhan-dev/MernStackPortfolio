'use client';

import { motion } from 'framer-motion';
import { Monitor, Server, ShieldCheck, Database, Cloud, Rocket, ChevronDown } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { viewportOnce } from '@/lib/motion';

const layers = [
  {
    icon: Monitor,
    title: 'Frontend',
    tech: 'Next.js · React · TypeScript · Tailwind',
    desc: 'Server components, responsive UI, and smooth client interactions.',
  },
  {
    icon: Server,
    title: 'API Layer',
    tech: 'Node.js · Express · REST · WebSockets',
    desc: 'Typed endpoints, validation, and realtime where it matters.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication',
    tech: 'JWT · OAuth · Sessions · RBAC',
    desc: 'Secure auth flows with role-based access control.',
  },
  {
    icon: Database,
    title: 'Database',
    tech: 'MongoDB · PostgreSQL · Prisma · Mongoose',
    desc: 'Well-modeled data with the right store per use case.',
  },
  {
    icon: Cloud,
    title: 'Cloud',
    tech: 'AWS (EC2, S3, IAM) · Object Storage',
    desc: 'Compute, storage, and access control for production.',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    tech: 'Vercel · Render · Railway · Docker',
    desc: 'CI/CD, preview deploys, and containerized builds.',
  },
];

export function Architecture() {
  return (
    <Section id="architecture" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-1/10 blur-3xl" />
      <SectionHeading
        eyebrow="System Design"
        title={
          <>
            How I architect <span className="text-gradient">full-stack apps</span>
          </>
        }
        description="A layered request flow — from the user’s browser all the way to production infrastructure."
      />

      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-0">
        {layers.map((layer, i) => (
          <div key={layer.title} className="flex w-full flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative w-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-1/40"
            >
              <div className="border-gradient pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1/20 to-brand-3/20 text-brand-1">
                  <layer.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-base font-semibold">{layer.title}</h3>
                    <span className="font-mono text-[11px] text-muted-foreground">{layer.tech}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{layer.desc}</p>
                </div>
                <span className="ml-auto hidden font-mono text-xs text-muted-foreground sm:block">
                  0{i + 1}
                </span>
              </div>
            </motion.div>

            {i < layers.length - 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 28 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="relative flex w-px items-center justify-center bg-gradient-to-b from-brand-1/60 to-brand-3/60"
              >
                <ChevronDown className="absolute h-4 w-4 text-brand-1" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
