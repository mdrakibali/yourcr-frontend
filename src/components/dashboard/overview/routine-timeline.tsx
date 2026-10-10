'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Laptop, Database, Coffee, Network } from 'lucide-react';
import { RoutineTimelineProps } from '@/types/dashboard';

const HOURS = [
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
];

// Interactive horizontal schedule timeline card matching reference image
export function RoutineTimeline({
  classes,
}: RoutineTimelineProps): React.JSX.Element {
  const [isHide, setIsHide] = useState(false);

  return (
    <article className="bg-card border-border/60 relative flex flex-col justify-between rounded-3xl border p-5 shadow-xs transition-colors">
      {/* Header with Hide toggle */}
      <div className="flex items-center justify-between pb-4">
        <div>
          <h2 className="text-foreground text-base font-bold tracking-tight">
            Class Schedule
          </h2>
          <p className="text-muted-foreground text-xs">Never miss your class</p>
        </div>

        <button
          type="button"
          onClick={() => setIsHide(!isHide)}
          className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors"
        >
          {isHide ? (
            <EyeOff className="size-3.5" />
          ) : (
            <Eye className="size-3.5" />
          )}
          <span>{isHide ? 'Show' : 'Hide'}</span>
        </button>
      </div>

      {!isHide && (
        <div className="relative mt-2 overflow-x-auto pb-2">
          {/* Timeline canvas with min-width to ensure horizontal proportion */}
          <div className="relative h-38 min-w-140">
            {/* Vertical dashed grid lines */}
            <div className="absolute inset-0 flex justify-between px-2">
              {HOURS.map((hour, idx) => (
                <div
                  key={hour}
                  className={`flex h-full flex-col items-center justify-between ${
                    idx === 3
                      ? 'border-primary/50 border-r-2 border-dashed'
                      : 'border-border/40 border-r border-dashed'
                  }`}
                >
                  <span />
                  <span
                    className={`text-[10px] font-semibold select-none ${
                      idx === 3
                        ? 'text-primary font-bold'
                        : 'text-muted-foreground/70'
                    }`}
                  >
                    {hour}
                  </span>
                </div>
              ))}
            </div>

            {/* Class Pill 1: Algorithms (10am - 11:30am) */}
            <div className="text-foreground absolute top-14 left-[14%] flex items-center gap-2 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 shadow-2xs">
              <Laptop className="size-3.5 text-amber-600" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] leading-tight font-bold">
                  Algorithms
                </span>
                <span className="text-muted-foreground text-[9px] leading-tight">
                  1h 30m · Lab 4
                </span>
              </div>
            </div>

            {/* Class Pill 2: Active Highlighted Blue Pill with pointer (DBMS Lab at 12pm) */}
            <div className="bg-primary text-primary-foreground absolute top-4 left-[34%] z-10 flex flex-col items-center">
              <div className="flex items-center gap-2 rounded-2xl px-3.5 py-1.5 shadow-sm">
                <Database className="size-3.5" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] leading-tight font-bold">
                    DBMS Lab
                  </span>
                  <span className="text-primary-foreground/80 text-[9px] leading-tight">
                    1h 30m · Room 402
                  </span>
                </div>
              </div>
              {/* Downward pointer stem to 12pm marker */}
              <div className="border-primary h-6 border-r-2 border-dashed" />
              <div className="bg-primary ring-card size-2 rounded-full ring-2" />
            </div>

            {/* Break Indicator: 1pm - 1:30pm */}
            <div className="border-border/60 bg-muted/40 absolute top-18 left-[52%] flex items-center gap-1.5 rounded-full border px-2.5 py-1">
              <Coffee className="text-muted-foreground size-3" />
              <span className="text-muted-foreground text-[10px] font-medium">
                Break · 30m
              </span>
            </div>

            {/* Class Pill 3: Computer Networks (2pm - 3:30pm) */}
            <div className="bg-primary/5 border-primary/20 text-foreground absolute top-12 left-[64%] flex items-center gap-2 rounded-2xl border px-3 py-1.5 shadow-2xs">
              <Network className="text-primary size-3.5" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] leading-tight font-bold">
                  Networks
                </span>
                <span className="text-muted-foreground text-[9px] leading-tight">
                  1h 30m · NetLab
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
