"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import type { NavLink } from "@/types/navbar";

// Navigation links configuration
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/#faq" },
  { label: "Feature", href: "/#feature" },
  { label: "Contact", href: "/#contact" },
];

// Main Navbar Layout Component
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to trigger glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check scroll position on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8",
        isScrolled ? "pt-2" : "pt-4"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500 ease-in-out",
          isScrolled
            ? "max-w-4xl bg-background/70 backdrop-blur-lg shadow-sm border border-border rounded-full py-2 px-6"
            : "container bg-transparent py-4"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/assets/yourcr-logo.png"
            alt="YourCR Logo"
            width={150}
            height={80}
            className="object-contain transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav navLinks={navLinks} />

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-semibold text-foreground rounded-md px-6 border border-border cursor-pointer">
            Login
          </Button>
          <Button variant="default" className="rounded-md px-6 font-semibold shadow-sm cursor-pointer">
            Register
          </Button>
        </div>

        {/* Mobile Menu Toggle with Shadcn Sheet */}
        <MobileNav navLinks={navLinks} />
      </div>
    </header>
  );
}
