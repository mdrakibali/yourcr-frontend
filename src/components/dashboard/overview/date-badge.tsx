import React from 'react';
import { DateBadgeProps } from '@/types/dashboard';

// Rounded date badge matching reference image top right
export function DateBadge({
  dayNumber,
  dayName,
  monthName,
}: DateBadgeProps): React.JSX.Element {
  return (
    <div className="bg-card border-border/50 flex items-center gap-3 rounded-2xl border px-3.5 py-2 shadow-xs transition-colors">
      <span className="text-foreground text-xl font-bold tracking-tight">
        {dayNumber}
      </span>
      <div className="flex flex-col text-left">
        <span className="text-foreground text-xs font-semibold leading-tight">
          {dayName}
        </span>
        <span className="text-muted-foreground text-[11px] leading-tight">
          {monthName}
        </span>
      </div>
    </div>
  );
}
