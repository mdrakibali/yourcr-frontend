'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from 'cn';
import { SidebarNavItemProps } from '@/types/navigation';

// Single accessible icon navigation item for dashboard sidebar
export function SidebarNavItem({
  href,
  icon: Icon,
  label,
  badge,
  isActive,
}: SidebarNavItemProps): React.JSX.Element {
  return (
    <Link
      href={href}
      title={label}
      aria-label={label}
      className={cn(
        'group relative flex size-11 items-center justify-center rounded-2xl transition-all duration-200',
        isActive
          ? 'bg-primary/10 text-primary shadow-xs'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      <Icon
        className={cn(
          'size-5 transition-transform group-hover:scale-105',
          isActive && 'stroke-[2.25]'
        )}
      />

      {/* Notification or counter badge */}
      {badge && (
        <span className="bg-destructive ring-background absolute top-1 right-1 flex size-2 items-center justify-center rounded-full ring-2">
          <span className="sr-only">{badge} notifications</span>
        </span>
      )}

      {/* Active side indicator */}
      {isActive && (
        <span className="bg-primary absolute -left-2.5 h-6 w-1 rounded-r-full" />
      )}
    </Link>
  );
}
