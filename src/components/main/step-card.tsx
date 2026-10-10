import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StepCardProps } from "@/types/how-it-works";
import { cn } from "cn";

// Component to display an individual step in the How It Works section
export function StepCard({ step, hasArrow }: StepCardProps): React.JSX.Element {
  return (
    <div className="flex flex-col items-center md:items-start relative group w-full">
      <Image
        src={step.image}
        alt={step.alt}
        width={280}
        height={210}
        className={cn("w-full h-auto object-contain mb-6",step.number!=="01" && "mt-6")}
      />
      
      {/* Subtle arrow pointing to the next step, hidden on mobile */}
      {hasArrow && (
        <div className="hidden md:flex absolute top-25 md:-right-4 lg:-right-6 items-center justify-center translate-x-1/2 -translate-y-1/2 z-20">
          <ArrowRight className="w-5 h-5 text-primary/40 stroke-[1.5]" />
        </div>
      )}

      <div className="flex gap-4 items-start w-full">
        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
          {step.number}
        </div>
        <div className="flex flex-col text-left">
          <h3 className="text-base font-bold text-foreground mb-1.5">{step.title}</h3>
          <p className="text-[13px] text-muted-foreground leading-relaxed pr-2">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
