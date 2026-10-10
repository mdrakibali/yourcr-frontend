import React from 'react';
import { CtaAvatars } from './cta-avatars';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="bg-background relative w-full overflow-hidden py-12 md:py-16">
      <div className="relative z-10 container mx-auto px-4">
        {/* Main CTA Card */}
        <div className="bg-primary relative flex flex-col items-center justify-center rounded-3xl p-8 text-center md:p-12">
          {/* Subtitle Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Ready to get started?
            </span>
          </div>

          {/* Title */}
          <h2 className="text-primary-foreground mb-8 max-w-xl text-2xl leading-tight font-semibold md:text-3xl">
            Take Control of Your Class Updates and Schedules Today
          </h2>
          <CtaAvatars />

          {/* Action Buttons */}
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Button
              size="default"
              variant="default"
              className="border-card w-full rounded-md border px-6 font-semibold sm:w-auto"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
