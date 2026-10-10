import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { TRUSTED_INSTITUTIONS } from '@/lib/constants';

export function TrustedInstitutions() {
  return (
    <section className="bg-card w-full py-4 md:py-6 lg:py-8">
      <div className="relative z-10 w-full overflow-hidden">
        <p className="text-muted-foreground mb-8 px-4 text-center text-xs font-semibold tracking-widest md:text-sm">
          Trusted by students from leading institutions
        </p>
        <Marquee
          gradient={false}
          speed={40}
          autoFill={true}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {TRUSTED_INSTITUTIONS.map((inst, index) => (
            <div
              key={`${inst.name}-${index}`}
              className="group flex cursor-pointer items-center"
            >
              <div className="flex items-center gap-3 px-8 md:px-12">
                <Image
                  src={inst.logo}
                  alt={`${inst.name} Logo`}
                  width={48}
                  height={48}
                  className="h-8 w-8 object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 md:h-10 md:w-10"
                />
                <span className="text-muted-foreground group-hover:text-foreground text-sm whitespace-nowrap transition-colors md:text-base">
                  {inst.name}
                </span>
              </div>
              {/* Vertical Divider */}
              <div className="bg-border/60 h-8 w-px" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
