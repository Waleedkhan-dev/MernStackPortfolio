'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Github, GitFork, Star, FolderGit2, Flame } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { profile, socials } from '@/data/profile';
import { useMounted } from '@/hooks/use-mounted';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion';

const user = profile.githubUsername;

const quickStats = [
  { icon: FolderGit2, label: 'Repositories', value: '30+' },
  { icon: Star, label: 'Stars Earned', value: '50+' },
  { icon: GitFork, label: 'Contributions', value: '500+' },
  { icon: Flame, label: 'Active Streak', value: 'Daily' },
];

export function GitHubStats() {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark';

  // github-readme-stats theme names
  const statsTheme = dark ? 'tokyonight' : 'default';
  const params = `username=${user}&show_icons=true&hide_border=true&include_all_commits=true&count_private=true&theme=${statsTheme}&bg_color=00000000&title_color=8b5cf6&icon_color=22d3ee`;
  const langParams = `username=${user}&layout=compact&hide_border=true&theme=${statsTheme}&bg_color=00000000&title_color=8b5cf6`;
  const streakTheme = dark ? 'tokyonight' : 'default';
  const streakParams = `user=${user}&hide_border=true&theme=${streakTheme}&background=00000000&ring=8b5cf6&fire=ec4899&currStreakLabel=22d3ee`;

  return (
    <Section id="stats">
      <SectionHeading
        eyebrow="GitHub Activity"
        title={
          <>
            Code, <span className="text-gradient">consistently</span>
          </>
        }
        description="A snapshot of my open-source activity, top languages, and contribution streak."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {quickStats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeInUp}
            className="rounded-2xl border border-border bg-card p-5 text-center"
          >
            <s.icon className="mx-auto mb-2 h-6 w-6 text-brand-1" />
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {mounted && (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?${params}`}
              alt={`${profile.name} GitHub stats`}
              loading="lazy"
              className="h-auto w-full max-w-md"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?${langParams}`}
              alt="Top languages"
              loading="lazy"
              className="h-auto w-full max-w-md"
            />
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-4 lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?${streakParams}`}
              alt="GitHub streak"
              loading="lazy"
              className="h-auto w-full max-w-xl"
            />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card p-5 lg:col-span-2">
            <p className="mb-3 text-sm font-semibold">Contribution Graph</p>
            <Image
              src={`https://ghchart.rshah.org/8b5cf6/${user}`}
              alt="GitHub contribution graph"
              width={900}
              height={140}
              unoptimized
              className="h-auto w-full min-w-[640px]"
            />
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" /> View GitHub Profile
          </a>
        </Button>
      </div>
    </Section>
  );
}
