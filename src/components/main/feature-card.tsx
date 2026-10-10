import React from 'react';
import { FeatureCardProps } from '@/types/feature';

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="group bg-card relative flex cursor-pointer items-start gap-3 rounded-xl p-4 transition-all duration-300 md:p-5">
      <div className="bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300">
        <Icon className="text-primary h-4 w-4 stroke-2" />
      </div>

      <div className="flex flex-col pt-0.5">
        <h3 className="text-foreground mb-1 text-sm font-semibold">
          {feature.title}
        </h3>
        <p className="text-muted-foreground pr-2 text-[13px] leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
