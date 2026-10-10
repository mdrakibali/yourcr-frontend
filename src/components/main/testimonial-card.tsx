import React from 'react';
import Image from 'next/image';
import { TestimonialCardProps } from '@/types/testimonial';

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-background mb-4 flex cursor-pointer break-inside-avoid flex-col rounded-xl p-4 transition-all duration-300 md:mb-6 md:p-5">
      {testimonial.company && (
        <div className="text-foreground mb-4 flex items-center gap-2.5 text-[15px] font-semibold">
          {testimonial.companyLogo?.startsWith('/') ? (
            <div className="relative h-5 w-5 shrink-0">
              <Image
                src={testimonial.companyLogo}
                alt={testimonial.company}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="bg-primary/20 text-primary flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-full">
              <div className="bg-primary h-2 w-2 rounded-full" />
            </div>
          )}
          <span className="truncate">{testimonial.company}</span>
        </div>
      )}

      <p className="text-muted-foreground grow text-[13px] leading-relaxed md:text-[14px]">
        {testimonial.text}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="bg-muted relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-[13px] font-semibold">
            {testimonial.author}
          </span>
          <span className="text-muted-foreground truncate text-[11px]">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
}
