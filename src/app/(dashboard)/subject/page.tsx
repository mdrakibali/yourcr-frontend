import React from 'react';
import { BookOpen } from 'lucide-react';

export default function SubjectPage(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-2xl">
          <BookOpen className="size-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Semester Subjects</h1>
          <p className="text-xs text-muted-foreground">Course codes, credits, and learning resources</p>
        </div>
      </div>
      <div className="bg-card border-border/60 rounded-3xl border p-8 text-center text-muted-foreground text-sm">
        Semester courses and subjects directory will be loaded here in PR 6.
      </div>
    </div>
  );
}
