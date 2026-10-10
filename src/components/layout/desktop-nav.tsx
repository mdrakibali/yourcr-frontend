"use client";
import React from "react";
import { NavItem } from "@/components/layout/nav-item";
import type { DesktopNavProps } from "@/types/navbar";

// Desktop navigation list
export function DesktopNav({ navLinks }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <NavItem
          key={link.label}
          href={link.href}
          label={link.label}
          className="text-sm"
        />
      ))}
    </nav>
  );
}

