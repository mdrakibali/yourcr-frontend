import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DateBadge } from '@/components/dashboard/overview/date-badge';
import { OverviewBannerProps } from '@/types/dashboard';

// Greeting banner with date badge and primary action button
export function OverviewBanner({
  userName,
  subtitle,
  isOwnerOrAdmin = true,
}: OverviewBannerProps): React.JSX.Element {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Greeting and subtitle */}
      <div className="flex flex-col gap-1">
        <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
          Good Morning, {userName} <span className="inline-block animate-pulse">👋</span>
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm">
          {subtitle}
        </p>
      </div>

      {/* Date badge and primary action button matching reference image */}
      <div className="flex items-center gap-3 self-start sm:self-auto">
        <DateBadge dayNumber="24" dayName="Tuesday" monthName="July" />

        {isOwnerOrAdmin ? (
          <Button
            render={
              <Link href="/notice" className="bg-primary hover:bg-primary/90 text-primary-foreground h-10.5 rounded-full px-5 font-semibold shadow-xs" />
            }
          >
            <Plus className="size-4" />
            <span>Post Notice</span>
          </Button>
        ) : (
          <Button
            render={
              <Link href="/routine" className="bg-primary hover:bg-primary/90 text-primary-foreground h-10.5 rounded-full px-5 font-semibold shadow-xs" />
            }
          >
            <span>My Routine</span>
          </Button>
        )}
      </div>
    </section>
  );
}
