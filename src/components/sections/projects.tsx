'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github, Search, BookOpen } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { projects, type Project } from '@/data/projects';
import { ProjectModal } from './project-modal';
import { cn } from '@/lib/utils';

const categories = ['All', 'Full Stack', 'AI / SaaS', 'Dashboard', 'Frontend'] as const;

export function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchCat = category === 'All' || p.category === category;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  const openProject = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Work"
        title={
          <>
            Projects I&apos;ve <span className="text-gradient">shipped</span>
          </>
        }
        description="Real applications across e-commerce, AI/SaaS, healthcare, and education. Click any project for a full case study."
      />

      {/* Controls */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech…"
            aria-label="Search projects"
            className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-1 focus:ring-2 focus:ring-ring/40"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                category === c
                  ? 'border-transparent bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              onClick={() => openProject(p)}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-brand-1/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur">
                    <BookOpen className="h-4 w-4" /> View Case Study
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  {p.featured && (
                    <Badge variant="brand" className="h-5 px-2 text-[10px]">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                      +{p.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-brand-1"
                    >
                      Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-brand-1"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                  <span className="ml-auto text-xs text-muted-foreground">Case study →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No projects match “{query}”. Try a different search.
        </p>
      )}

      <ProjectModal project={active} open={open} onOpenChange={setOpen} />
    </Section>
  );
}
