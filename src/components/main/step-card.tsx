import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { StepCardProps } from '@/types/how-it-works';
import { cn } from 'cn';

// Component to display an individual step in the How It Works section
export function StepCard({ step, hasArrow }: StepCardProps): React.JSX.Element {
  return (
    <div className="group relative flex w-full flex-col items-center md:items-start">
      <Image
        src={step.image}
        alt={step.alt}
        width={280}
        height={210}
        className={cn(
          'mb-6 h-auto w-full object-contain',
          step.number !== '01' && 'mt-6'
        )}
      />

      {/* Subtle arrow pointing to the next step, hidden on mobile */}
      {hasArrow && (
        <div className="absolute top-25 z-20 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center md:-right-4 md:flex lg:-right-6">
          <ArrowRight className="text-primary/40 h-5 w-5 stroke-[1.5]" />
        </div>
      )}

      <div className="flex w-full items-start gap-4">
        <div className="bg-primary text-primary-foreground mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
          {step.number}
        </div>
        <div className="flex flex-col text-left">
          <h3 className="text-foreground mb-1.5 text-base font-bold">
            {step.title}
          </h3>
          <p className="text-muted-foreground pr-2 text-[13px] leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
