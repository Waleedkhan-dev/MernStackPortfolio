'use client';

import Image from 'next/image';
import {
  ArrowUpRight,
  Github,
  Layers,
  ListChecks,
  Lightbulb,
  TriangleAlert,
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Project } from '@/data/projects';

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectModal({ project, open, onOpenChange }: Props) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-hidden p-0">
        <div className="max-h-[90vh] overflow-y-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <Badge variant="brand" className="mb-2">
                {project.category} · {project.year}
              </Badge>
              <DialogTitle className="text-2xl font-bold sm:text-3xl">{project.title}</DialogTitle>
              <DialogDescription className="mt-1 text-sm text-muted-foreground">
                {project.tagline}
              </DialogDescription>
            </div>
          </div>

          <div className="space-y-7 p-6">
            <div className="flex flex-wrap gap-3">
              {project.links.live && (
                <Button asChild variant="gradient" size="sm" className="rounded-full">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> Source
                  </a>
                </Button>
              )}
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <Block icon={ListChecks} title="Key Features">
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-1" />
                    {f}
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={Layers} title="Architecture">
              <p className="text-sm leading-relaxed text-muted-foreground">{project.architecture}</p>
            </Block>

            <div className="grid gap-6 sm:grid-cols-2">
              <Block icon={TriangleAlert} title="Challenges">
                <ul className="space-y-2">
                  {project.challenges.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block icon={Lightbulb} title="Lessons Learned">
                <ul className="space-y-2">
                  {project.lessons.map((l) => (
                    <li key={l} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-3" />
                      {l}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <Icon className="h-4 w-4 text-brand-1" />
        {title}
      </h4>
      {children}
    </div>
  );
}
