'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavItemProps } from '@/types/navbar';

// Single navigation item with active route styling
export function NavItem({ href, label, onClick, className }: NavItemProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname.startsWith(href) && href !== '/');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Custom smooth scrolling for hash links inside our custom scroll container
    if (href.includes('#')) {
      const id = href.split('#')[1];
      const target = document.getElementById(id);
      const container = document.getElementById('main-scroll-container');

      if (target && container) {
        e.preventDefault();
        container.scrollTo({
          top: target.offsetTop - 80, // 80px offset for fixed navbar
          behavior: 'smooth',
        });
      }
    }

    // Call the original onClick if provided (e.g. for mobile menu closing)
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        'hover:text-foreground font-medium transition-colors',
        isActive ? 'text-brand-teal' : 'text-muted-foreground',
        className
      )}
    >
      {label}
    </Link>
  );
}
