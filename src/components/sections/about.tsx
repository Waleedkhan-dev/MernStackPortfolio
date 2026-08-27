'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Compass, Users } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { profile } from '@/data/profile';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion';

const pillars = [
  {
    icon: Code2,
    title: 'My Journey',
    body: 'From a curious frontend intern to a full-stack engineer shipping production apps — I’ve spent 2+ years going deep across the MERN stack, Next.js, and AI.',
  },
  {
    icon: Rocket,
    title: 'What I Build',
    body: 'Fast, scalable web apps: e-commerce, dashboards, SaaS, and AI chatbots — from polished UIs to secure APIs and well-modeled databases.',
  },
  {
    icon: Compass,
    title: 'My Philosophy',
    body: 'Clean architecture, reusable components, and performance by default. I write code that’s readable today and maintainable tomorrow.',
  },
  {
    icon: Users,
    title: 'What to Expect',
    body: 'Ownership, clear communication, and reliable delivery. I care about UX, accessibility, and the small details that make products feel premium.',
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title={
          <>
            Turning ideas into <span className="text-gradient">production software</span>
          </>
        }
        description={profile.bio}
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 md:grid-cols-2"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeInUp}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand-1/40"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand-1/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1/20 to-brand-3/20 text-brand-1">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/50 p-6 sm:grid-cols-4"
      >
        {profile.metrics.map((m) => (
          <motion.div key={m.label} variants={fadeInUp} className="text-center">
            <p className="text-3xl font-bold text-gradient sm:text-4xl">{m.value}</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
