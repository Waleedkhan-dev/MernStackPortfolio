'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Section } from '@/components/shared/section';
import { SectionHeading } from '@/components/shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blog';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading
        eyebrow="Writing"
        title={
          <>
            From the <span className="text-gradient">blog</span>
          </>
        }
        description="Thoughts on full-stack development, AI, and performance. New posts coming soon."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
        {blogPosts.map((post) => (
          <motion.article
            key={post.slug}
            variants={fadeInUp}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand-1/40"
          >
            <div className="flex items-center justify-between">
              <Badge variant="brand">{post.tag}</Badge>
              {post.comingSoon && (
                <Badge variant="outline" className="text-[10px]">
                  Coming soon
                </Badge>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-1 text-muted-foreground transition-colors group-hover:text-brand-1">
                Read <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
