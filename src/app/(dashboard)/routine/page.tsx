import React from 'react';
import { Calendar } from 'lucide-react';

export default function RoutinePage(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-2xl">
          <Calendar className="size-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Class Routine</h1>
          <p className="text-xs text-muted-foreground">Weekly academic timetable & exam schedule</p>
        </div>
      </div>
      <div className="bg-card border-border/60 rounded-3xl border p-8 text-center text-muted-foreground text-sm">
        Full weekly routine schedule view will be loaded here in PR 5.
      </div>
    </div>
  );
}
