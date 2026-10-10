"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItemProps } from "@/types/navbar";

// Single navigation item with active route styling
export function NavItem({ href, label, onClick, className }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname.startsWith(href) && href !== '/');

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-medium transition-colors hover:text-foreground",
        isActive ? "text-brand-teal" : "text-muted-foreground",
        className
      )}
    >
      {label}
    </Link>
  );
}

