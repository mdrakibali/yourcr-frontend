import React from "react";
import Image from "next/image";
import { TestimonialCardProps } from "@/types/testimonial";

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="break-inside-avoid mb-4 md:mb-6 bg-background rounded-xl p-4 md:p-5 transition-all duration-300 flex flex-col cursor-pointer">
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
  );
}
