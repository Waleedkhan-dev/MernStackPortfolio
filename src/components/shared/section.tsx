import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement> & {
  id: string;
  containerClassName?: string;
};

/** Standard section wrapper — consistent vertical rhythm + max-width container. */
export function Section({ id, className, containerClassName, children, ...props }: Props) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-20 sm:py-28', className)}
      {...props}
    >
      <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
