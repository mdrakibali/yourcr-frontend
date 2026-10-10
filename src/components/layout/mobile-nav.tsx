"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItem } from "@/components/layout/nav-item";
import type { MobileNavProps } from "@/types/navbar";

// Mobile navigation drawer using Shadcn Sheet
export function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="md:hidden p-2 text-foreground focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent side="right" className="w-75 sm:w-100 border-none p-6">
        <SheetHeader className="text-left mb-6 mt-4">
          <SheetTitle>
            <Image
              src="/assets/yourcr-logo.png"
              alt="YourCR Logo"
              width={140}
              height={40}
              className="object-contain w-auto h-8"
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              href={link.href}
              label={link.label}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base hover:bg-muted rounded-xl"
            />
          ))}
        </nav>
        <div className="flex flex-col gap-3 mt-6 pt-6">
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <Button 
              variant="ghost" 
              className="w-full justify-center text-base py-6 text-foreground border border-border rounded-md"
            >
              Login
            </Button>
          </Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>
            <Button 
              variant="default"
              className="w-full justify-center text-base py-6 rounded-md"
            >
              Register
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

