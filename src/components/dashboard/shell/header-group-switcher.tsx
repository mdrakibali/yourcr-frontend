'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { School, ChevronDown, Check, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { MOCK_USER_MEMBERSHIPS } from '@/lib/mock-data/academic-groups';
import { HeaderGroupSwitcherProps } from '@/types/navigation';

// Dropdown group switcher in header for switching between academic workspaces
export function HeaderGroupSwitcher({
  currentGroupName,
  currentRole,
}: HeaderGroupSwitcherProps): React.JSX.Element {
  const [selectedGroupId, setSelectedGroupId] = useState(
    MOCK_USER_MEMBERSHIPS[0].groupId
  );

  const activeMembership =
    MOCK_USER_MEMBERSHIPS.find((m) => m.groupId === selectedGroupId) ||
    MOCK_USER_MEMBERSHIPS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className="bg-card hover:bg-muted/60 border-border/60 flex h-10 items-center gap-2.5 rounded-full border px-3.5 text-xs font-semibold shadow-xs transition-colors"
      >
        <div className="bg-primary/10 text-primary flex size-6 items-center justify-center rounded-full">
          <School className="size-3.5" />
        </div>
        <span className="text-foreground max-w-40 truncate sm:max-w-55">
          {activeMembership.group.attributes.batch || 'CSE 4A'} ·{' '}
          {activeMembership.group.attributes.section
            ? `Sec ${activeMembership.group.attributes.section}`
            : activeMembership.group.name}
        </span>
        <Badge
          variant={activeMembership.role}
          className="px-1.5 py-0 text-[10px] capitalize"
        >
          {activeMembership.role}
        </Badge>
        <ChevronDown className="text-muted-foreground size-3.5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-72">
        <DropdownMenuLabel className="text-muted-foreground text-[11px] font-semibold tracking-wider uppercase">
          Your Academic Workspaces
        </DropdownMenuLabel>

        {MOCK_USER_MEMBERSHIPS.map((m) => {
          const isSelected = m.groupId === selectedGroupId;
          return (
            <DropdownMenuItem
              key={m.groupId}
              onClick={() => setSelectedGroupId(m.groupId)}
              className="flex cursor-pointer items-start justify-between gap-2 p-2.5"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-foreground text-xs font-semibold">
                  {m.group.name}
                </span>
                <span className="text-muted-foreground text-[11px]">
                  {m.group.institutionName}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 pt-0.5">
                <Badge
                  variant={m.role}
                  className="px-1.5 py-0 text-[10px] capitalize"
                >
                  {m.role}
                </Badge>
                {isSelected && <Check className="text-primary size-3.5" />}
              </div>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          render={
            <Link
              href="/onboarding"
              className="text-primary flex items-center gap-2 p-2.5 text-xs font-medium"
            />
          }
        >
          <Plus className="size-3.5" />
          <span>Create or Join New Group</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
