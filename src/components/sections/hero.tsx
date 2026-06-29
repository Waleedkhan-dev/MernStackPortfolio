'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, MessageCircle, Sparkles } from 'lucide-react';
import { profile, socials } from '@/data/profile';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/shared/magnetic';
import { AuroraBackground } from '@/components/shared/aurora-background';
import { fadeInUp, staggerContainer } from '@/lib/motion';

/** Lightweight typing effect (no dependency). */
function useTypewriter(words: readonly string[], speed = 70, pause = 1400) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === '';
    let delay = deleting ? speed / 2 : speed;
    if (done) delay = pause;
    if (cleared) delay = 300;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setI((p) => p + 1);
      } else {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

const socialIcons = [
  { href: socials.github, icon: Github, label: 'GitHub' },
  { href: socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: socials.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
];

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <AuroraBackground />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" animate="show">
          <motion.div variants={fadeInUp}>
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {profile.availability}
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-4 flex h-9 items-center text-xl font-semibold text-muted-foreground sm:text-2xl"
          >
            <span>I&apos;m a&nbsp;</span>
            <span className="text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-brand-1" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            {profile.longBio}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button
                variant="gradient"
                size="lg"
                className="rounded-full"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="h-4 w-4" />
                View My Work
              </Button>
            </Magnetic>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={profile.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download Résumé
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Find me</span>
            <div className="h-px w-8 bg-border" />
            <div className="flex gap-2">
              {socialIcons.map((s) => (
                <Magnetic key={s.label} strength={0.5}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-1 hover:text-foreground"
                  >
                    <s.icon className="h-[18px] w-[18px]" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-1/30 via-brand-2/20 to-brand-3/30 blur-2xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="border-gradient relative overflow-hidden rounded-[2rem] bg-card p-2 shadow-2xl"
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={520}
              height={620}
              priority
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-lg"
          >
            <p className="text-2xl font-bold text-gradient">{profile.yearsOfExperience}</p>
            <p className="text-xs text-muted-foreground">Years Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="glass absolute -right-4 top-6 rounded-2xl px-4 py-3 shadow-lg"
          >
            <p className="text-2xl font-bold text-gradient">20+</p>
            <p className="text-xs text-muted-foreground">Projects</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
