'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from 'cn';

// Pill theme toggle matching the reference image switcher
export function ThemeToggle(): React.JSX.Element {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-18 rounded-full bg-muted/60" />;
  }

  const isDark = (theme === 'system' ? resolvedTheme : theme) === 'dark';

  return (
    <div
      role="radiogroup"
      aria-label="Theme mode"
      className="bg-card border-border/60 flex h-9.5 items-center gap-1 rounded-full border p-1 shadow-xs"
    >
      <button
        type="button"
        aria-label="Light mode"
        onClick={() => setTheme('light')}
        className={cn(
          'flex size-7.5 items-center justify-center rounded-full transition-all duration-200',
          !isDark
            ? 'bg-amber-400 text-amber-950 shadow-xs'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        <Sun className="size-4" />
      </button>

      <button
        type="button"
        aria-label="Dark mode"
        onClick={() => setTheme('dark')}
        className={cn(
          'flex size-7.5 items-center justify-center rounded-full transition-all duration-200',
          isDark
            ? 'bg-primary text-primary-foreground shadow-xs'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}
