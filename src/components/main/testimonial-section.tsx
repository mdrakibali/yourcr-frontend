import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background blurs using project's pastel colors */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pastel-blue rounded-full mix-blend-multiply filter blur-[120px] opacity-70 pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pastel-pink rounded-full mix-blend-multiply filter blur-[120px] opacity-70 pointer-events-none transform translate-x-1/4 translate-y-1/4" />
      
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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid mb-4 md:mb-6 bg-card border border-border/40 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {testimonial.company && (
                <div className="flex items-center gap-2 mb-4 text-foreground font-semibold text-[15px]">
                  {/* Pseudo logo using project primary color */}
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {testimonial.companyLogo}
                </div>
              )}
              
              <p className="text-muted-foreground leading-relaxed flex-grow text-[13px] md:text-[14px]">
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
      </div>
    </section>
  );
}

