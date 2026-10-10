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
    const scrollContainer = document.getElementById("main-scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      setIsScrolled(scrollContainer.scrollTop > 20);
    };
    
    // Check scroll position on mount
    handleScroll();
    
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled ? "pt-2" : "pt-4"
      )}
    >
      <div
        className={cn(
          "mx-auto w-full flex items-center justify-between transition-all duration-500 ease-in-out",
          isScrolled
            ? "max-w-4xl bg-background/70 backdrop-blur-lg rounded-full py-2 px-6"
            : "container bg-transparent py-4"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/assets/yourcr-logo.png"
            alt="YourCR Logo"
            width={150}
            height={40}
            className={cn(
              "object-contain transition-all duration-300",
              isScrolled ? "w-28" : "w-36"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav navLinks={navLinks} isScrolled={isScrolled} />

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="ghost" 
            size={isScrolled ? "sm" : "default"}
            className={cn(
              "font-semibold text-foreground rounded-md border border-border cursor-pointer transition-all duration-300",
              isScrolled ? "px-4" : "px-6"
            )}
          >
            Login
          </Button>
          <Button 
            variant="default" 
            size={isScrolled ? "sm" : "default"}
            className={cn(
              "rounded-md font-semibold shadow-sm cursor-pointer transition-all duration-300",
              isScrolled ? "px-4" : "px-6"
            )}
          >
            Register
          </Button>
        </div>

        {/* Mobile Menu Toggle with Shadcn Sheet */}
        <MobileNav navLinks={navLinks} />
      </div>
    </header>
  );
}
