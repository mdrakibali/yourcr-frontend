import React from 'react';
import { FEATURES } from '@/lib/constants';
import { FeatureCard } from './feature-card';

export function FeaturesSection() {
  return (
    <section
      id="feature"
      className="bg-background relative w-full overflow-hidden py-12 md:py-16 xl:py-20"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header - Left Aligned to match reference */}
        <div className="mb-10 flex max-w-3xl flex-col items-start text-left">
          <span className="text-primary mb-2 text-[10px] font-bold tracking-widest uppercase md:text-xs">
            KEY FEATURES
          </span>
          <h2 className="text-foreground mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">
            Everything you need, in one place.
          </h2>
          <p className="text-muted-foreground text-sm">
            Stay organized, informed and on track throughout your semester.
          </p>
        </div>

        {/* Features Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
