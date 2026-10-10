import React from "react";
import { CtaAvatars } from "./cta-avatars";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className=" w-full py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="relative bg-primary rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-6">
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Ready to get started?
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground max-w-xl leading-tight mb-8">
            Take Control of Your Class Updates and Schedules Today
          </h2>
          <CtaAvatars />
          
          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button 
              size="default" 
              variant="default"
              className="w-full sm:w-auto font-semibold rounded-md px-6 border border-card"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
