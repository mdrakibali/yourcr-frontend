import React from "react";
import { CtaButton } from "./cta-button";
import { CtaAvatars } from "./cta-avatars";

export function CtaSection() {
  return (
    <section className="py-12 md:py-16 xl:py-20 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative bg-primary rounded-4xl md:rounded-[3rem] p-8 md:p-16 lg:p-20 text-center flex flex-col items-center justify-center">
          
          {/* Subtitle */}
          <span className="text-yellow-400 font-bold tracking-wide mb-4">
            Join With Us
          </span>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground max-w-3xl leading-tight mb-8">
            Step Into A New Era Of Interactive And Immersive Learning
          </h2>
          
          <CtaAvatars />
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
