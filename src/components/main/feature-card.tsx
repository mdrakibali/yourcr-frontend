import React from "react";
import { FeatureCardProps } from "@/types/feature";

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;
  
  return (
    <div className="group relative flex items-start gap-3 p-4 md:p-5 bg-card rounded-xl transition-all duration-300 cursor-pointer">
      <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
        <Icon className="w-4 h-4 text-primary stroke-2" />
      </div>
      
      <div className="flex flex-col pt-0.5">
        <h3 className="text-sm font-semibold text-foreground mb-1">
          {feature.title}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed pr-2">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
