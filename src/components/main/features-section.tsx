import React from "react";
import { FEATURES } from "@/lib/constants";
import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  return (
    <section id="feature" className="w-full py-12 md:py-16 xl:py-20 bg-background relative overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        {/* Header - Left Aligned to match reference */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-10">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase mb-2">
            KEY FEATURES
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-3">
            Everything you need, in one place.
          </h2>
          <p className="text-sm text-muted-foreground">
            Stay organized, informed and on track throughout your semester.
          </p>
        </div>

        {/* Features Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
