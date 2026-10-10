import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const institutions = [
  // Round/Shield logos (square aspect ratios)
  { name: "Canadian University", logo: "/assets/institutions/CUB.png", width: 110, height: 70 },
  { name: "BUET", logo: "/assets/institutions/BUET.png", width: 110, height: 70 },
  { name: "DU", logo: "/assets/institutions/DU.png", width: 110, height: 70 },
  { name: "JU", logo: "/assets/institutions/JU.png", width: 110, height: 70 },
  { name: "SUST", logo: "/assets/institutions/SUST.png", width: 110, height: 70 },
  // Horizontal/Text logos (wide aspect ratios)
  { name: "BRAC", logo: "/assets/institutions/brac.png", width: 110, height: 70 },
  { name: "AIUB", logo: "/assets/institutions/AIUB.png", width: 110, height: 70 },
  { name: "DIU", logo: "/assets/institutions/DIU.png", width: 110, height: 70 },
  { name: "EWU", logo: "/assets/institutions/EWU.png", width: 110, height: 70 },
  { name: "IUB", logo: "/assets/institutions/IUB.png", width: 110, height: 70 },
  { name: "NSU", logo: "/assets/institutions/NSU.png", width: 110, height: 70 },
];

export function TrustedInstitutions() {
  return (
    <section className="w-full bg-muted/40 py-4 md:py-6 lg:py-8">
      <div className="w-full relative z-10 overflow-hidden">
        <p className="text-center text-xs md:text-sm font-semibold tracking-widest text-muted-foreground mb-6 px-4">
          Trusted by students across leading institutions
        </p>
        <Marquee 
          gradient={false} 
          speed={40} 
          autoFill={true}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {institutions.map((inst, index) => (
            <div 
              key={`${inst.name}-${index}`} 
              className="flex justify-center items-center mx-6 md:mx-10 h-20"
            >
              <Image
                src={inst.logo}
                alt={`${inst.name} Logo`}
                width={inst.width}
                height={inst.height}
                style={{ width: inst.width, height: inst.height }}
                className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

