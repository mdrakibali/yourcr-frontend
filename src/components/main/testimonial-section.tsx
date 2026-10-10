'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TestimonialCard } from './testimonial-card';

export function TestimonialSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="testimonial"
      className="bg-card relative overflow-hidden py-12 md:py-16 xl:py-20"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-16 flex max-w-2xl flex-col items-start text-left">
          <span className="text-primary mb-2 text-[10px] font-bold tracking-widest uppercase md:text-xs">
            TESTIMONIALS
          </span>
          <h2 className="text-foreground mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">
            Loved by users across the country.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            See what our community has to say about their experience.
          </p>
        </div>

        <div
          className={cn(
            'relative transition-all duration-700 ease-in-out',
            !isExpanded ? 'max-h-125 overflow-hidden' : ''
          )}
        >
          <div className="mx-auto max-w-6xl columns-1 gap-6 md:columns-2 lg:columns-3">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Fade Overlay when Collapsed */}
          {!isExpanded && (
            <div className="from-card absolute right-0 bottom-0 left-0 flex h-48 items-end justify-center bg-linear-to-t to-transparent pb-2">
              <Button
                onClick={() => setIsExpanded(true)}
                variant="outline"
                size="sm"
                className="bg-background hover:bg-muted text-primary border-primary/20 rounded-md transition-all hover:scale-105"
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
              className="bg-background hover:bg-muted text-primary border-primary/20 rounded-md transition-all hover:scale-105"
            >
              Show less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
