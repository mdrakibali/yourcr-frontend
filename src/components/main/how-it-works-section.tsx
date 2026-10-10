import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, HOW_IT_WORKS_ROLE_CARDS } from '@/lib/constants';
import { StepCard } from '@/components/main/step-card';
import { RoleCard } from '@/components/main/role-card';

// Main section component explaining how the platform works
export function HowItWorksSection(): React.JSX.Element {
  return (
    <section
      id="how-it-works"
      className="bg-card relative w-full overflow-hidden py-12 md:py-16 xl:py-20"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Top Section - Steps */}
        <div className="mb-16 flex max-w-2xl flex-col items-start text-left">
          <span className="text-primary mb-2 text-[10px] font-bold tracking-widest uppercase md:text-xs">
            HOW IT WORKS
          </span>
          <h2 className="text-foreground mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">
            Simple steps to get started.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            One account can belong to multiple groups, and you may have
            different permissions in each group.
          </p>
        </div>

        <div className="relative mb-24 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              hasArrow={index < HOW_IT_WORKS_STEPS.length - 1}
            />
          ))}
        </div>

        {/* Bottom Section - Two Role Cards */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {HOW_IT_WORKS_ROLE_CARDS.map((card) => (
            <RoleCard key={card.tag} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
