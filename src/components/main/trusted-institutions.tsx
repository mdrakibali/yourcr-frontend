import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const institutions = [
  // Round/Shield logos (square aspect ratios)
  { name: "CUB", logo: "/assets/institutions/CUB.png", width: 120, height: 80 },
  { name: "BUET", logo: "/assets/institutions/BUET.png", width: 130, height: 80 },
  { name: "DU", logo: "/assets/institutions/DU.png", width: 120, height: 80 },
  { name: "JU", logo: "/assets/institutions/JU.png", width: 120, height: 80 },
  { name: "SUST", logo: "/assets/institutions/SUST.png", width: 120, height: 80 },
  // Horizontal/Text logos (wide aspect ratios)
  { name: "BRAC", logo: "/assets/institutions/brac.png", width: 120, height: 80 },
  { name: "AIUB", logo: "/assets/institutions/AIUB.png", width: 120, height: 80 },
  { name: "DIU", logo: "/assets/institutions/DIU.png", width: 120, height: 80 },
  { name: "EWU", logo: "/assets/institutions/EWU.png", width: 120, height: 80 },
  { name: "IUB", logo: "/assets/institutions/IUB.png", width: 120, height: 80 },
  { name: "NSU", logo: "/assets/institutions/NSU.png", width: 120, height: 80 },
];

export function TrustedInstitutions() {
  return (
    <section className="w-full bg-background py-6 md:py-10 lg:py-12">
      <div className="w-full relative z-10 overflow-hidden">
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
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

