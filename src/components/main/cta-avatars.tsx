import React from "react";
import Image from "next/image";
import { AVATARS } from "@/lib/constants";

export function CtaAvatars() {
  return (
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
  );
}

