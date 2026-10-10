import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
export function HeroSection() {
  return (
    <section className="relative pt-10 pb-10">
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Built for CRs & Students
          </span>
        </div>
        {/* Heading */}
        <h1 className="max-w-3xl text-2xl md:text-3xl xl:text-5xl font-semibold tracking-tight text-foreground mb-4 leading-tight">
         Simplify Class Management  <br className="hidden sm:block" />
          <span className="text-brand-orange">with Your CR</span>
        </h1>
        {/* Sub-heading */}
        <p className="max-w-2xl text-base text-muted-foreground mb-8 leading-relaxed">
          The ultimate platform for CRs and students. Share important announcements, track routines, and organize resources in one place—no more scrolling through endless group chats.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button className="px-6 font-semibold w-full sm:w-auto">
            Get Started
          </Button>
          <Button 
            variant="ghost" 
            className="px-4 font-semibold hover:bg-transparent hover:text-primary group border border-border text-primary w-full sm:w-auto"
          >
            <Play className="w-3 h-3 ml-0.5 fill-current" />
            How It Works
          </Button>
        </div>

        {/* Dashboard Mockup Image */}
        <div className="w-full max-w-4xl mx-auto mt-12 sm:mt-16 relative">
          <div className="relative rounded-xl sm:rounded-2xl border border-border/50 shadow-2xl overflow-hidden bg-muted">
             <Image
                src="/assets/hero-mockup.png"
                alt="Your CR Dashboard Mockup"
                width={1200}
                height={500}
                priority
                className="w-full h-auto object-contain"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
