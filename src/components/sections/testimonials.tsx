'use client';

import { Quote } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { testimonials } from '@/data/testimonials';

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="mx-3 w-[320px] shrink-0 rounded-2xl border border-border bg-card p-6 sm:w-[380px]">
      <Quote className="h-7 w-7 text-brand-1/40" />
      <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-1 to-brand-2 text-sm font-semibold text-white">
          {t.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold">{t.name}</span>
          <span className="block text-xs text-muted-foreground">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <Section id="testimonials" containerClassName="max-w-none px-0 sm:px-0">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What people <span className="text-gradient">say</span>
            </>
          }
          description="Feedback from teams and colleagues I’ve worked with."
        />
      </div>

      <div className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </Section>
  );
}
