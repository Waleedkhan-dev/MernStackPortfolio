'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/data/experience';
import { viewportOnce } from '@/lib/motion';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            My <span className="text-gradient">journey</span> so far
          </>
        }
        description="Internships, full-time roles, and education — the milestones that shaped me as an engineer."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-1 via-border to-transparent sm:left-1/2" />

        <div className="space-y-8">
          {experience.map((item, i) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  left ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                }`}
              >
                {/* node */}
                <span
                  className={`absolute left-4 top-1.5 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-card text-brand-1 sm:left-auto ${
                    left ? 'sm:-right-4 sm:left-auto sm:translate-x-1/2' : 'sm:-left-4 sm:-translate-x-1/2'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-1/40">
                  <div
                    className={`flex flex-wrap items-center gap-2 ${left ? 'sm:justify-end' : ''}`}
                  >
                    <h3 className="text-base font-semibold">{item.role}</h3>
                    {item.current && (
                      <Badge variant="success" className="h-5 px-2 text-[10px]">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-brand-1">{item.org}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.period}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                  {item.description && (
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  )}
                  {item.highlights && (
                    <ul
                      className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${
                        left ? 'sm:text-right' : ''
                      }`}
                    >
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-2 sm:contents">
                          <span className={`text-brand-1 ${left ? 'sm:hidden' : ''}`}>▹</span>
                          <span className="block sm:before:hidden">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
