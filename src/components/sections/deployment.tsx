'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { deployments } from '@/data/deployments';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Deployment() {
  return (
    <Section id="deployment">
      <SectionHeading
        eyebrow="Deployment & DevOps"
        title={
          <>
            Shipping to the <span className="text-gradient">cloud</span>
          </>
        }
        description="I deploy and operate apps across multiple platforms — choosing the right tool for each workload."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {deployments.map((d) => (
          <motion.div
            key={d.name}
            variants={fadeInUp}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand-1/40"
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary"
                style={{ color: d.color }}
              >
                <d.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold">{d.name}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{d.what}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
