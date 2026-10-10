import React from 'react';
import Image from 'next/image';
import { AVATARS } from '@/lib/constants';

export function CtaAvatars() {
  return (
    <div className="z-10 mb-8 flex items-center gap-4 md:mb-0">
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <div
            key={i}
            className="border-primary relative h-10 w-10 overflow-hidden rounded-full border-2"
          >
            <Image src={src} alt="Student" fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="text-left">
        <div className="text-primary-foreground text-lg leading-none font-bold">
          2.5K+
        </div>
        <div className="text-primary-foreground/80 text-xs">Happy Students</div>
      </div>
    </div>
  );
}
