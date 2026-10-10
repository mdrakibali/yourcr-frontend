"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Navigation links configuration
const navLinks = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/#faq" },
  { label: "Feature", href: "/#feature" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
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
          <Link href="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/assets/yourcr-logo.png"
              alt="YourCR Logo"
              width={150}
              height={80}
              className=" object-contain transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-semibold text-foreground rounded-full px-6">
              Login
            </Button>
            <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full px-6 font-semibold shadow-sm">
              Register
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden pt-24 px-4 pb-4 overflow-y-auto">
          <div className="bg-card border border-border rounded-3xl shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 fade-in duration-300">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <Button 
                variant="ghost" 
                className="w-full justify-center rounded-full text-base py-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Button>
              <Button 
                className="w-full justify-center bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full text-base py-6 shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
