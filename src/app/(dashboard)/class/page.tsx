import React from 'react';
import { Building2 } from 'lucide-react';

export default function ClassPage(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-2xl">
          <Building2 className="size-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Class & Sections</h1>
          <p className="text-xs text-muted-foreground">Classroom allocations, batch shifts, and lab rooms</p>
        </div>
      </div>
      <div className="bg-card border-border/60 rounded-3xl border p-8 text-center text-muted-foreground text-sm">
        Class section & room details will be loaded here in PR 5.
      </div>
    </div>
  );
}
