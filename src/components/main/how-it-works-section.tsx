import React from "react";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS, HOW_IT_WORKS_ROLE_CARDS } from "@/lib/constants";
import { StepCard } from "@/components/main/step-card";
import { RoleCard } from "@/components/main/role-card";

// Main section component explaining how the platform works
export function HowItWorksSection(): React.JSX.Element {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-16 xl:py-20 bg-card relative overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        {/* Top Section - Steps */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-16">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase mb-2">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-3">
            Simple steps to get started.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            One account can belong to multiple groups, and you may have different permissions in each group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 mb-24 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <StepCard 
              key={step.number} 
              step={step} 
              hasArrow={index < HOW_IT_WORKS_STEPS.length - 1} 
            />
          ))}
        </div>

        {/* Bottom Section - Two Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {HOW_IT_WORKS_ROLE_CARDS.map((card) => (
            <RoleCard key={card.tag} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
