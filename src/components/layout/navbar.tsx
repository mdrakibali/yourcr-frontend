"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import type { NavLink } from "@/types/navbar";

import { NAV_LINKS } from "@/lib/constants";

// Main Navbar Layout Component
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll event to trigger glassmorphism effect
  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      // Only trigger glassmorphism on desktop/tablet (>= 768px)
      if (window.innerWidth >= 768) {
        setIsScrolled(scrollContainer.scrollTop > 20);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Check scroll position on mount
    handleScroll();
    
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Reset if resized to mobile
    
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
          "mx-auto w-full transition-all duration-500 ease-in-out h-14",
          isScrolled
            ? "max-w-4xl bg-background/70 backdrop-blur-lg rounded-full px-6 flex items-center justify-between"
            : "container bg-transparent flex justify-between items-center gap-3"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group min-w-0 shrink-0 justify-self-start">
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
        <DesktopNav navLinks={NAV_LINKS} isScrolled={isScrolled} />

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 shrink-0 justify-self-end col-start-3">
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
          <MobileNav navLinks={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
