import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const AVATARS = [
  "https://i.pravatar.cc/150?u=1",
  "https://i.pravatar.cc/150?u=2",
  "https://i.pravatar.cc/150?u=3",
  "https://i.pravatar.cc/150?u=4",
  "https://i.pravatar.cc/150?u=5",
];

export function CtaSection() {
  return (
    <section className="py-12 md:py-16 xl:py-20 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative bg-primary rounded-4xl md:rounded-[3rem] p-8 md:p-16 lg:p-20 text-center flex flex-col items-center justify-center">
          
          {/* Subtitle */}
          <span className="text-yellow-400 font-bold tracking-wide mb-4">
            Join With Us
          </span>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground max-w-3xl leading-tight mb-8">
            Step Into A New Era Of Interactive And Immersive Learning
          </h2>
          
          {/* Avatars & Student Count */}
          <div className="flex items-center gap-4 z-10 mb-8 md:mb-0">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden relative">
                  <Image src={src} alt="Student" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-primary-foreground font-bold text-lg leading-none">2.5K+</div>
              <div className="text-primary-foreground/80 text-xs">Happy Students</div>
            </div>
          </div>
          
          {/* Floating Elements - Hidden on small screens, visible on lg+ */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Left Image Group */}
            <div className="absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 w-[220px] h-[220px]">
              {/* Yellow Square */}
              <div className="absolute right-0 top-0 w-20 h-20 bg-amber-400 rounded-2xl" />
              {/* Main Image */}
              <div className="absolute left-0 bottom-8 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-primary">
                <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop" alt="Student studying" fill className="object-cover" />
              </div>
              {/* Small Image */}
              <div className="absolute right-4 bottom-0 w-24 h-24 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-primary">
                <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Student smiling" fill className="object-cover" />
              </div>
            </div>

            {/* Right Image Group */}
            <div className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 w-[220px] h-[220px]">
              {/* Yellow Square */}
              <div className="absolute left-0 top-0 w-20 h-20 bg-amber-400 rounded-2xl" />
              {/* Main Image */}
              <div className="absolute right-0 bottom-8 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-primary">
                <Image src="https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?q=80&w=300&auto=format&fit=crop" alt="Student working" fill className="object-cover" />
              </div>
              {/* Small Image */}
              <div className="absolute left-4 bottom-0 w-24 h-24 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-primary">
                <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="Guy smiling" fill className="object-cover" />
              </div>
            </div>
          </div>
          
          {/* Bottom Cutout & Circular Button */}
          {/* The extra bg-primary circle to create the "dip" */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full -z-0" />
          
          {/* The actual Contact Us Button inside the dip */}
          <a 
            href="#contact" 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] md:translate-y-[45%] w-24 h-24 md:w-32 md:h-32 rounded-full border border-primary-foreground/30 flex flex-col items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors z-10 group"
          >
            {/* Circular Text SVG */}
            <div className="absolute inset-2 animate-[spin_10s_linear_infinite] group-hover:animate-none">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[10px] md:text-xs font-bold uppercase tracking-widest" fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%">
                    Contact Us • Contact Us •
                  </textPath>
                </text>
              </svg>
            </div>
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </a>

        </div>
      </div>
    </section>
  );
}
