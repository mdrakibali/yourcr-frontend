import React from "react";
import { CtaAvatars } from "./cta-avatars";

export function CtaSection() {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 xl:pt-20 xl:pb-40 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="relative bg-primary rounded-3xl p-8 md:p-16 text-center flex flex-col items-center justify-center">
          {/* Subtitle */}
          <span className="text-brand-orange font-bold tracking-wide mb-4">
            Join With Us
          </span>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground max-w-xl leading-tight mb-8">
            Step Into A New Era Of Interactive And Immersive Learning
          </h2>
          <CtaAvatars />
        </div>
      </div>
    </section>
  );
}
