'use client';

import { Github, Linkedin, Mail, MessageCircle, Globe, ArrowUpRight } from 'lucide-react';
import { profile, socials } from '@/data/profile';
import { navItems } from '@/data/navigation';

const socialLinks = [
  { label: 'GitHub', href: socials.github, icon: Github },
  { label: 'LinkedIn', href: socials.linkedin, icon: Linkedin },
  { label: 'WhatsApp', href: socials.whatsapp, icon: MessageCircle },
  { label: 'Email', href: socials.email, icon: Mail },
  { label: 'Website', href: socials.website, icon: Globe },
];

export function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 max-w-3xl rounded-full bg-brand-1/10 blur-3xl" />
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-1 to-brand-2 text-white">
                MW
              </span>
              {profile.name}
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{profile.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-1 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => go(item.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={socials.email} className="transition-colors hover:text-foreground">
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneRaw}`}
                  className="transition-colors hover:text-foreground"
                >
                  {profile.phone}
                </a>
              </li>
              <li>{profile.location}</li>
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-1 font-medium text-foreground hover:text-brand-1"
                >
                  Download Résumé <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
