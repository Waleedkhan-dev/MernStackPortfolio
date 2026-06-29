'use client';

import { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Home,
  User,
  Wrench,
  Briefcase,
  FolderGit2,
  Network,
  BarChart3,
  Mail,
  FileDown,
  Github,
  Linkedin,
  Sun,
  Moon,
  MessageCircle,
} from 'lucide-react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { projects } from '@/data/projects';
import { profile, socials } from '@/data/profile';

type Ctx = { open: boolean; setOpen: (v: boolean) => void; toggle: () => void };
const CommandContext = createContext<Ctx | null>(null);

export function useCommandPalette() {
  const ctx = useContext(CommandContext);
  if (!ctx) throw new Error('useCommandPalette must be used within CommandPaletteProvider');
  return ctx;
}

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (e.key === '/' && /input|textarea/i.test((e.target as HTMLElement)?.tagName)) return;
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [toggle]);

  const go = useCallback((href: string) => {
    setOpen(false);
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const nav = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Skills', href: '#skills', icon: Wrench },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Architecture', href: '#architecture', icon: Network },
    { label: 'GitHub Stats', href: '#stats', icon: BarChart3 },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <CommandContext.Provider value={{ open, setOpen, toggle }}>
      {children}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search projects…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            {nav.map((item) => (
              <CommandItem key={item.href} value={item.label} onSelect={() => go(item.href)}>
                <item.icon />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Projects">
            {projects.map((p) => (
              <CommandItem
                key={p.slug}
                value={`project ${p.title} ${p.tech.join(' ')}`}
                onSelect={() => go('#projects')}
              >
                <FolderGit2 />
                {p.title}
                <span className="ml-auto text-xs text-muted-foreground">{p.category}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Actions">
            <CommandItem value="download resume cv" onSelect={() => go(profile.resumeUrl)}>
              <FileDown />
              Download Résumé
            </CommandItem>
            <CommandItem
              value="toggle theme dark light mode"
              onSelect={() => {
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
                setOpen(false);
              }}
            >
              {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
              Toggle Theme
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Connect">
            <CommandItem value="github" onSelect={() => go(socials.github)}>
              <Github />
              GitHub
            </CommandItem>
            <CommandItem value="linkedin" onSelect={() => go(socials.linkedin)}>
              <Linkedin />
              LinkedIn
            </CommandItem>
            <CommandItem value="whatsapp" onSelect={() => go(socials.whatsapp)}>
              <MessageCircle />
              WhatsApp
            </CommandItem>
            <CommandItem value="email" onSelect={() => go(socials.email)}>
              <Mail />
              Email
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </CommandContext.Provider>
  );
}
