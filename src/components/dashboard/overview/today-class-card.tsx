import React from 'react';
import { FlaskConical, Database, Layers, Network } from 'lucide-react';
import { cn } from 'cn';
import { TodayClassCardProps, PastelVariant } from '@/types/dashboard';

// Helper for pastel background and border styles
function getPastelStyles(variant: PastelVariant): string {
  switch (variant) {
    case 'blue':
      return 'bg-pastel-blue text-foreground border-blue-200/60 dark:border-blue-900/50';
    case 'yellow':
      return 'bg-pastel-yellow text-foreground border-amber-200/60 dark:border-amber-900/50';
    case 'pink':
      return 'bg-pastel-pink text-foreground border-pink-200/60 dark:border-pink-900/50';
    case 'green':
      return 'bg-pastel-green text-foreground border-emerald-200/60 dark:border-emerald-900/50';
    default:
      return 'bg-card text-foreground border-border';
  }
}

// Helper for icon based on pastel variant
function getVariantIcon(variant: PastelVariant) {
  switch (variant) {
    case 'blue':
      return FlaskConical;
    case 'yellow':
      return Database;
    case 'pink':
      return Layers;
    case 'green':
      return Network;
  }
}

// Single pastel card matching the 2x2 grid from reference image
export function TodayClassCard({ period }: TodayClassCardProps): React.JSX.Element {
  const Icon = getVariantIcon(period.pastelVariant);
  const colorStyles = getPastelStyles(period.pastelVariant);

  return (
    <article
      className={cn(
        'group relative flex flex-col justify-between gap-3 rounded-2xl border p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs',
        colorStyles
      )}
    >
      {/* Top row: Icon bubble & timing */}
      <div className="flex items-center justify-between">
        <div className="bg-background/80 dark:bg-card/80 flex size-9 items-center justify-center rounded-xl shadow-2xs">
          <Icon className="text-foreground size-4.5" />
        </div>
        <span className="text-muted-foreground text-[11px] font-medium">
          {period.startTime}
        </span>
      </div>

      {/* Course info */}
      <div className="flex flex-col gap-0.5">
        <h3 className="line-clamp-1 text-sm font-bold tracking-tight text-foreground">
          {period.subjectName}
        </h3>
        <p className="text-muted-foreground text-[11px] font-medium">
          {period.subjectCode} · {period.room}
        </p>
      </div>

      {/* Teacher avatar & name */}
      <div className="flex items-center gap-2 pt-1 border-t border-foreground/5">
        <div className="bg-background/90 text-foreground flex size-5.5 items-center justify-center rounded-full text-[10px] font-bold shadow-2xs">
          {period.teacherName.charAt(period.teacherName.indexOf('.') > -1 ? period.teacherName.indexOf('.') + 2 : 0)}
        </div>
        <span className="text-muted-foreground text-[11px] font-medium truncate">
          {period.teacherName}
        </span>
      </div>
    </article>
  );
}
