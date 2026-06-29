'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '@/data/profile';

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Hide once the window has loaded (or after a short max wait).
    const finish = () => setTimeout(() => setDone(true), 600);
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    const fallback = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative grid h-20 w-20 place-items-center rounded-2xl border border-border bg-card text-2xl font-bold"
            >
              <span className="text-gradient">MW</span>
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                style={{ borderTopColor: 'hsl(var(--brand-1))' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
              />
            </motion.div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-1 to-brand-3"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {profile.shortName}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
