"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TestimonialSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 md:py-16 xl:py-20 bg-background relative overflow-hidden">

      
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
              <div 
                key={idx} 
                className="break-inside-avoid mb-4 md:mb-6 bg-card border border-border/40 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
              >
                {testimonial.company && (
                  <div className="flex items-center gap-2.5 mb-4 text-foreground font-semibold text-[15px]">
                    {testimonial.companyLogo?.startsWith("/") ? (
                      <div className="relative w-5 h-5 shrink-0">
                        <Image
                          src={testimonial.companyLogo}
                          alt={testimonial.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-4 h-4 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                    )}
                    <span className="truncate">{testimonial.company}</span>
                  </div>
                )}
                
                <p className="text-muted-foreground leading-relaxed grow text-[13px] md:text-[14px]">
                  {testimonial.text}
                </p>
                
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-muted">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-semibold text-foreground truncate">
                      {testimonial.author}
                    </span>
                    <span className="text-[11px] text-muted-foreground truncate">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Overlay when Collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-background to-transparent flex items-end justify-center pb-2">
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

