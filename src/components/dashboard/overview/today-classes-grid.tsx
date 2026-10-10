import React from 'react';
import { TodayClassCard } from '@/components/dashboard/overview/today-class-card';
import { TodayClassesGridProps } from '@/types/dashboard';

// 2x2 Grid container for today's courses matching reference image
export function TodayClassesGrid({
  classes,
}: TodayClassesGridProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {classes.slice(0, 4).map((period) => (
        <TodayClassCard key={period.id} period={period} />
      ))}
    </div>
  );
}
