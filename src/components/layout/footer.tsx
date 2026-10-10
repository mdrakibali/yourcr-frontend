"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const id = href.substring(1);
      const target = document.getElementById(id);
      const container = document.getElementById("main-scroll-container");
      
      if (target && container) {
        e.preventDefault();
        container.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="w-full bg-card pt-16 md:pt-20 pb-6 mt-auto">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-16">
          
          {/* Left Column (Brand & Description) */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col items-start text-left">
            <Link href="/" className="mb-6">
              <Image
                src="/assets/yourcr-logo.png"
                alt="Your CR Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Your CR Class Management Platform
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              This platform is designed to be highly interactive, utilizing the latest advancements in digital technology to create a dynamic, organized, and engaging learning experience for both students and class representatives.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-base font-bold text-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#feature" onClick={(e) => handleScrollToSection(e, "#feature")} className="hover:text-primary transition-colors">Features</Link>
              </li>
              <li>
                <Link href="#how-it-works" onClick={(e) => handleScrollToSection(e, "#how-it-works")} className="hover:text-primary transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="#testimonial" onClick={(e) => handleScrollToSection(e, "#testimonial")} className="hover:text-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="#faq" onClick={(e) => handleScrollToSection(e, "#faq")} className="hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="#contact" onClick={(e) => handleScrollToSection(e, "#contact")} className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-base font-bold text-foreground mb-6">
              Legal & Compliance
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/copyright" className="hover:text-primary transition-colors">Copyright Notice</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-border/40 gap-4">
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            © {currentYear} Your CR. All Rights Reserved
          </p>
          
          <div className="flex items-center space-x-5 text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

