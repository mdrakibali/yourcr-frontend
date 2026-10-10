import React from "react";
import { ArrowUpRight } from "lucide-react";

export function CtaButton() {
  return (
    <>
      {/* The extra bg-primary circle to create the "dip" */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full z-0" />
      
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
    </>
  );
}

