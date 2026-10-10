import React from 'react';
import { Clock, MapPin, Sparkles, Users, BookOpen } from 'lucide-react';
import { NextClassCardProps } from '@/types/dashboard';

// Right column highlight widget: Next Class card + Quick stats
export function NextClassCard({
  nextClass,
  stats,
  isOwnerOrAdmin = true,
}: NextClassCardProps): React.JSX.Element {
  return (
    <div className="flex flex-col gap-3.5">
      {/* Arched gradient highlight card matching reference image aesthetic */}
      <article className="from-grade-start to-grade-end relative flex flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-b p-5 text-white shadow-xs">
        {/* Top badge with icon */}
        <div className="flex items-center justify-between">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xs">
            <Sparkles className="size-5 text-white" />
          </div>
          <span className="rounded-full bg-black/20 px-2.5 py-0.5 text-[11px] font-semibold text-white/90">
            Next Up
          </span>
        </div>

        {/* Next class details */}
        <div className="my-4 flex flex-col gap-1.5">
          <h3 className="line-clamp-1 text-lg font-bold tracking-tight text-white">
            {nextClass ? nextClass.subjectName : 'No more classes today'}
          </h3>
          <div className="flex items-center gap-1.5 text-xs font-medium text-white/80">
            <Clock className="size-3.5" />
            <span>{nextClass ? `${nextClass.startTime} - ${nextClass.endTime}` : 'All done'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/80">
            <MapPin className="size-3.5" />
            <span className="truncate">{nextClass ? nextClass.room : 'Enjoy your day!'}</span>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between border-t border-white/20 pt-3 text-xs font-semibold text-white/90">
          <span>{nextClass?.teacherName || 'Have a good rest'}</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">Active</span>
        </div>
      </article>

      {/* Mini Quick Stats Card (for Owner/Admin & students) */}
      <div className="border-border/60 bg-card flex items-center justify-around rounded-2xl border p-3.5 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-xl">
            <Users className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-xs font-bold leading-tight">
              {stats.totalStudents}
            </span>
            <span className="text-muted-foreground text-[10px]">Students</span>
          </div>
        </div>

        <div className="border-border/60 h-6 border-r" />

        <div className="flex items-center gap-2">
          <div className="bg-pastel-yellow text-foreground flex size-8 items-center justify-center rounded-xl border border-amber-200/40">
            <BookOpen className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-xs font-bold leading-tight">
              {stats.totalSubjects}
            </span>
            <span className="text-muted-foreground text-[10px]">Subjects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
