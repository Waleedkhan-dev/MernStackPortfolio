import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <p className="text-7xl font-bold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Button asChild variant="gradient" className="mt-6 rounded-full">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </div>
  );
}
