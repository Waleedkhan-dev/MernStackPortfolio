'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send, Loader2 } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { profile, socials } from '@/data/profile';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: socials.email },
  { icon: Linkedin, label: 'LinkedIn', value: 'Muhammad Waleed', href: socials.linkedin },
  { icon: Github, label: 'GitHub', value: profile.githubUsername, href: socials.github },
  { icon: MessageCircle, label: 'WhatsApp', value: profile.phone, href: socials.whatsapp },
];

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('Contact form is not configured yet. Please email me directly.');
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      toast.success('Message sent! I’ll get back to you soon.');
      formRef.current.reset();
    } catch {
      toast.error('Something went wrong. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">together</span>
          </>
        }
        description="Have a project, role, or idea in mind? I’m currently open to new opportunities — drop me a message."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Info side */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <motion.div variants={fadeInUp} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Based in {profile.location}. I usually reply within a day.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-brand-1" />
              {profile.location}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid gap-3 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand-1/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1/20 to-brand-3/20 text-brand-1">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{c.label}</span>
                  <span className="block truncate text-sm font-medium">{c.value}</span>
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Form side */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                name="from_name"
                required
                placeholder="Your name"
                className="input-base"
                autoComplete="name"
              />
            </Field>
            <Field label="Email">
              <input
                name="reply_to"
                type="email"
                required
                placeholder="you@email.com"
                className="input-base"
                autoComplete="email"
              />
            </Field>
          </div>
          <Field label="Subject">
            <input name="subject" placeholder="What's this about?" className="input-base" />
          </Field>
          <Field label="Message">
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity…"
              className="input-base resize-none"
            />
          </Field>
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            disabled={loading}
            className="w-full rounded-xl"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>

      <style jsx>{`
        :global(.input-base) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid hsl(var(--input));
          background-color: hsl(var(--background));
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.input-base:focus) {
          border-color: hsl(var(--brand-1));
          box-shadow: 0 0 0 3px hsl(var(--ring) / 0.25);
        }
        :global(.input-base::placeholder) {
          color: hsl(var(--muted-foreground));
        }
      `}</style>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
