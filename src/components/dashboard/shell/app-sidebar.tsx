'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  Calendar,
  BookOpen,
  UserCheck,
  Building2,
  FileText,
  Bell,
  Users,
  School,
  Settings,
  LogOut,
  GraduationCap,
} from 'lucide-react';
import { SidebarNavItem } from '@/components/dashboard/shell/sidebar-nav-item';
import { DashboardNavItem } from '@/types/navigation';

const NAV_ITEMS: DashboardNavItem[] = [
  { id: 'dashboard', label: 'Overview', href: '/dashboard', icon: LayoutGrid },
  { id: 'routine', label: 'Class Routine', href: '/routine', icon: Calendar },
  { id: 'subject', label: 'Subjects', href: '/subject', icon: BookOpen },
  { id: 'teacher', label: 'Teachers', href: '/teacher', icon: UserCheck },
  { id: 'class', label: 'Class & Room', href: '/class', icon: Building2 },
  { id: 'assignment', label: 'Assignments', href: '/assignment', icon: FileText },
  { id: 'notice', label: 'Notices', href: '/notice', icon: Bell, badge: 1 },
  { id: 'member', label: 'Students', href: '/member', icon: Users },
  { id: 'active-group', label: 'Group Profile', href: '/active-group', icon: School },
  { id: 'setting', label: 'Settings', href: '/setting', icon: Settings, roles: ['owner', 'admin'] },
];

// Modern slim dashboard sidebar rail matching reference image
export function AppSidebar(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <aside className="border-border/40 bg-card sticky top-0 z-40 hidden h-screen w-[72px] shrink-0 flex-col items-center justify-between border-r py-4 transition-colors md:flex">
      {/* Brand logo at top */}
      <div className="flex flex-col items-center gap-6">
        <Link
          href="/dashboard"
          aria-label="Your CR Home"
          className="bg-primary text-primary-foreground flex size-12 items-center justify-center rounded-2xl shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <GraduationCap className="size-6" />
        </Link>

        {/* Navigation icon buttons */}
        <nav className="flex flex-col items-center gap-1.5" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.id}
              href={item.href}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              isActive={pathname === item.href}
            />
          ))}
        </nav>
      </div>

      {/* Bottom logout action button */}
      <div className="flex flex-col items-center pt-2">
        <Link
          href="/login"
          title="Sign Out"
          aria-label="Sign Out"
          className="text-destructive bg-destructive/10 hover:bg-destructive/20 flex size-11 items-center justify-center rounded-full transition-colors active:scale-95"
        >
          <LogOut className="size-5" />
        </Link>
      </div>
    </aside>
  );
}
