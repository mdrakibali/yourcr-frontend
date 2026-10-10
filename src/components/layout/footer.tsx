'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      const id = href.substring(1);
      const target = document.getElementById(id);
      const container = document.getElementById('main-scroll-container');

      if (target && container) {
        e.preventDefault();
        container.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="bg-card mt-auto w-full pt-16 pb-6 md:pt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-16">
          {/* Left Column (Brand & Description) */}
          <div className="flex flex-col items-start text-left md:col-span-12 lg:col-span-6">
            <Link href="/" className="mb-6">
              <Image
                src="/assets/yourcr-logo.png"
                alt="Your CR Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>
            <h3 className="text-foreground mb-4 text-lg font-bold">
              Your CR Class Management Platform
            </h3>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              This platform is designed to be highly interactive, utilizing the
              latest advancements in digital technology to create a dynamic,
              organized, and engaging learning experience for both students and
              class representatives.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-start text-left md:col-span-6 lg:col-span-3">
            <h4 className="text-foreground mb-6 text-base font-bold">
              Navigation
            </h4>
            <ul className="text-muted-foreground space-y-4 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#feature"
                  onClick={(e) => handleScrollToSection(e, '#feature')}
                  className="hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  onClick={(e) => handleScrollToSection(e, '#how-it-works')}
                  className="hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonial"
                  onClick={(e) => handleScrollToSection(e, '#testimonial')}
                  className="hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  onClick={(e) => handleScrollToSection(e, '#faq')}
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, '#contact')}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col items-start text-left md:col-span-6 lg:col-span-3">
            <h4 className="text-foreground mb-6 text-base font-bold">
              Legal & Compliance
            </h4>
            <ul className="text-muted-foreground space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright"
                  className="hover:text-primary transition-colors"
                >
                  Copyright Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border/40 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-muted-foreground text-xs font-medium md:text-sm">
            © {currentYear} Your CR. All Rights Reserved
          </p>

          <div className="text-muted-foreground flex items-center space-x-5">
            <Link href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
