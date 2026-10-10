"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="testimonial" className="py-12 md:py-16 xl:py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start text-left max-w-2xl mb-16">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-3">
            Loved by users across the country.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            See what our community has to say about their experience.
          </p>
        </div>

        <div className={cn("relative transition-all duration-700 ease-in-out", !isExpanded ? "max-h-125 overflow-hidden" : "")}>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Fade Overlay when Collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-card to-transparent flex items-end justify-center pb-2">
              <Button 
                onClick={() => setIsExpanded(true)} 
                variant="outline" 
                size="sm"
                className="rounded-md  bg-background hover:bg-muted text-primary border-primary/20 transition-all hover:scale-105"
              >
                Show all reviews
              </Button>
            </div>
          )}
        </div>

        {/* Show Less Button when Expanded */}
        {isExpanded && (
          <div className="mt-10 flex justify-center">
            <Button 
              onClick={() => setIsExpanded(false)} 
              variant="outline" 
              size="sm"
              className="rounded-md  bg-background hover:bg-muted text-primary border-primary/20 transition-all hover:scale-105"
            >
              Show less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

