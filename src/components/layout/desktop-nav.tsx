'use client';
import React from 'react';
import { NavItem } from '@/components/layout/nav-item';
import type { DesktopNavProps } from '@/types/navbar';
import { cn } from '@/lib/utils';

// Desktop navigation list
export function DesktopNav({ navLinks, isScrolled }: DesktopNavProps) {
  return (
    <nav
      className={cn(
        'hidden items-center transition-all duration-300 md:flex',
        isScrolled ? 'gap-6' : 'gap-8'
      )}
    >
      {navLinks.map((link) => (
        <NavItem
          key={link.label}
          href={link.href}
          label={link.label}
          className={cn(
            'text-sm transition-all duration-300',
            isScrolled ? 'text-xs' : 'text-sm'
          )}
        />
      ))}
    </nav>
  );
}
