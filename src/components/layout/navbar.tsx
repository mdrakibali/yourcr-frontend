'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DesktopNav } from '@/components/layout/desktop-nav';
import { MobileNav } from '@/components/layout/mobile-nav';
import type { NavLink } from '@/types/navbar';

import { NAV_LINKS } from '@/lib/constants';

// Main Navbar Layout Component
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll event to trigger glassmorphism effect
  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      setIsScrolled(scrollContainer.scrollTop > 20);
    };

    // Check scroll position on mount
    handleScroll();

    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Reset if resized to mobile

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled ? 'pt-2' : 'pt-4'
      )}
    >
      <div
        className={cn(
          'mx-auto h-14 w-full transition-all duration-500 ease-in-out',
          isScrolled
            ? 'bg-background/70 flex max-w-4xl w-[92%] md:w-full items-center justify-between rounded-full px-6 backdrop-blur-lg'
            : 'container flex items-center justify-between gap-3 bg-transparent'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center justify-self-start"
        >
          <Image
            src="/assets/yourcr-logo.png"
            alt="YourCR Logo"
            width={150}
            height={40}
            className={cn(
              'object-contain transition-all duration-300',
              isScrolled ? 'w-28' : 'w-36'
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav navLinks={NAV_LINKS} isScrolled={isScrolled} />

        {/* Right Side Controls */}
        <div className="col-start-3 flex shrink-0 items-center gap-3 justify-self-end">
          {/* Auth Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login">
              <Button
                variant="ghost"
                size={isScrolled ? 'sm' : 'default'}
                className={cn(
                  'text-foreground border-border cursor-pointer rounded-md border font-semibold transition-all duration-300',
                  isScrolled ? 'px-4' : 'px-6'
                )}
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="default"
                size={isScrolled ? 'sm' : 'default'}
                className={cn(
                  'cursor-pointer rounded-md font-semibold shadow-sm transition-all duration-300',
                  isScrolled ? 'px-4' : 'px-6'
                )}
              >
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle with Shadcn Sheet */}
          <MobileNav navLinks={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
