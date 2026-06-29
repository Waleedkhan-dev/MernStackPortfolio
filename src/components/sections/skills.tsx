'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { skillCategories, marqueeSkills } from '@/data/skills';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion';

function Marquee() {
  const row = [...marqueeSkills, ...marqueeSkills];
  return (
    <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max gap-4">
        {row.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
          >
            <s.icon className="h-4 w-4 text-brand-1" />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="relative">
      <SectionHeading
        eyebrow="Skills & Tech"
        title={
          <>
            My <span className="text-gradient">technical toolbox</span>
          </>
        }
        description="A categorized look at the technologies I use to design, build, and ship full-stack products."
      />

      <div className="mt-12 flex justify-center">
        <Tabs defaultValue={skillCategories[0].id} className="w-full">
          <div className="flex justify-center">
            <TabsList>
              {skillCategories.map((c) => (
                <TabsTrigger key={c.id} value={c.id}>
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((c) => (
            <TabsContent key={c.id} value={c.id}>
              <p className="mb-6 text-center text-sm text-muted-foreground">{c.description}</p>
              <motion.div
                variants={staggerContainer(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
              >
                {c.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-colors hover:border-brand-1/40"
                  >
                    <s.icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-brand-1" />
                    <span className="text-sm font-medium">{s.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Marquee />
    </Section>
  );
}
