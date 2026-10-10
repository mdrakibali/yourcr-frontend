'use client';

import React from 'react';
import Link from 'next/link';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { UserProfileMenuProps } from '@/types/navigation';

// User profile trigger & dropdown matching reference image
export function UserProfileMenu({
  userName,
  roleTitle,
}: UserProfileMenuProps): React.JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className="bg-card hover:bg-muted/60 border-border/60 flex h-10 items-center gap-2.5 rounded-full border px-2.5 shadow-xs transition-colors"
      >
        <div className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-full font-bold text-xs">
          {userName.charAt(0)}
        </div>
        <div className="hidden flex-col text-left sm:flex">
          <span className="text-xs font-semibold leading-tight text-foreground">
            {userName}
          </span>
          <span className="text-[10px] text-muted-foreground leading-tight">
            {roleTitle}
          </span>
        </div>
        <ChevronDown className="text-muted-foreground size-3.5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="flex flex-col gap-0.5">
          <span className="text-xs font-semibold text-foreground">{userName}</span>
          <span className="text-[11px] text-muted-foreground font-normal">tanvir@student.edu.bd</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem render={<Link href="/profile" className="flex items-center gap-2 text-xs" />}>
          <User className="size-3.5" />
          <span>My Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem render={<Link href="/setting" className="flex items-center gap-2 text-xs" />}>
          <Settings className="size-3.5" />
          <span>Group Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem render={<Link href="/login" className="flex items-center gap-2 text-xs text-destructive" />}>
          <LogOut className="size-3.5" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
