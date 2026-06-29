'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { CommandPaletteProvider } from '@/components/layout/command-palette';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={150}>
        <CommandPaletteProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast: 'glass !text-foreground !border-border',
              },
            }}
          />
        </CommandPaletteProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
