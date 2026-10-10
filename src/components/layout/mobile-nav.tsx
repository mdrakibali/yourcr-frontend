'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavItem } from '@/components/layout/nav-item';
import type { MobileNavProps } from '@/types/navbar';

// Mobile navigation drawer using Shadcn Sheet
export function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-foreground p-2 focus:outline-none md:hidden"
        aria-label="Toggle mobile menu"
      >
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent side="right" className="w-75 border-none p-6 sm:w-100">
        <SheetHeader className="mt-4 mb-6 text-left">
          <SheetTitle>
            <Image
              src="/assets/yourcr-logo.png"
              alt="YourCR Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              href={link.href}
              label={link.label}
              onClick={() => setIsOpen(false)}
              className="hover:bg-muted block rounded-xl px-4 py-2 text-base"
            />
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-border/40">
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <Button
              variant="ghost"
              className="text-foreground border-border w-full justify-center rounded-md border py-5 text-base"
            >
              Login
            </Button>
          </Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>
            <Button
              variant="default"
              className="w-full justify-center rounded-md py-5 text-base"
            >
              Register
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
