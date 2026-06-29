import { cn } from '@/lib/utils';

/** Decorative animated aurora blobs + grid. Purely presentational. */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)} aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="animate-aurora absolute -left-1/4 top-0 h-[40rem] w-[40rem] rounded-full bg-brand-1/25 blur-[120px]" />
      <div
        className="animate-aurora absolute -right-1/4 top-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-2/20 blur-[120px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="animate-aurora absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-3/20 blur-[120px]"
        style={{ animationDelay: '-12s' }}
      />
    </div>
  );
}
