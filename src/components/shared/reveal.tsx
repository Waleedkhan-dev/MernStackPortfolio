'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeInUp, viewportOnce } from '@/lib/motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: 'div' | 'li' | 'section' | 'span';
};

/** Lightweight scroll-reveal wrapper using a shared default variant. */
export function Reveal({ children, className, delay = 0, variants = fadeInUp, as = 'div' }: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
