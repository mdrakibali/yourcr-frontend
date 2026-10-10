'use client';

import React from 'react';
import { Search, Bell } from 'lucide-react';
import { HeaderGroupSwitcher } from '@/components/dashboard/shell/header-group-switcher';
import { ThemeToggle } from '@/components/dashboard/shell/theme-toggle';
import { UserProfileMenu } from '@/components/dashboard/shell/user-profile-menu';

// Top Dashboard Header bar matching reference image layout
export function AppHeader(): React.JSX.Element {
  return (
    <header className="border-border/40 bg-card/80 sticky top-0 z-30 flex h-16 w-full items-center justify-between gap-4 border-b px-4 backdrop-blur-md transition-colors md:px-6">
      {/* Left side: Group Switcher & Search Bar */}
      <div className="flex items-center gap-3 md:gap-4">
        <HeaderGroupSwitcher
          currentGroupName="CSE — Semester 4 — Section A"
          currentRole="owner"
        />

        {/* Pill Search Input matching reference image */}
        <div className="relative hidden lg:block">
          <Search className="text-muted-foreground absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
          <input
            type="search"
            placeholder="Search subjects, routine, notices..."
            className="bg-muted/40 hover:bg-muted/60 border-border/60 focus:ring-primary/20 h-10 w-64 rounded-full border pr-4 pl-9.5 text-xs transition-all outline-none focus:ring-2 xl:w-80"
          />
        </div>
      </div>

      {/* Right side: Notifications, Theme Switcher & User Avatar */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Notification bell button */}
        <button
          type="button"
          aria-label="View notifications"
          className="text-muted-foreground hover:bg-muted hover:text-foreground relative flex size-10 items-center justify-center rounded-full transition-colors active:scale-95"
        >
          <Bell className="size-5" />
          <span className="bg-destructive ring-card absolute top-2 right-2 size-2 rounded-full ring-2" />
        </button>

        {/* Theme pill toggle */}
        <ThemeToggle />

        {/* User profile dropdown */}
        <UserProfileMenu
          userName="Tanvir Ahmed"
          roleTitle="Class Representative (CR)"
        />
      </div>
    </header>
  );
}
