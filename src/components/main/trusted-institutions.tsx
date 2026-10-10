import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const institutions = [
  { name: "Canadian University of Bangladesh", logo: "/assets/institutions/CUB.png" },
  { name: "BUET", logo: "/assets/institutions/BUET.png" },
  { name: "University of Dhaka", logo: "/assets/institutions/DU.png" },
  { name: "Jahangirnagar University", logo: "/assets/institutions/JU.png" },
  { name: "Shahjalal University", logo: "/assets/institutions/SUST.png" },
  { name: "BRAC University", logo: "/assets/institutions/brac.png" },
  { name: "AIUB", logo: "/assets/institutions/AIUB.png" },
  { name: "Daffodil International University", logo: "/assets/institutions/DIU.png" },
  { name: "East West University", logo: "/assets/institutions/EWU.png" },
  { name: "IUB", logo: "/assets/institutions/IUB.png" },
  { name: "North South University", logo: "/assets/institutions/NSU.png" },
];

export function TrustedInstitutions() {
  return (
    <section className="w-full bg-muted/40 py-4 md:py-6 lg:py-8">
      <div className="w-full relative z-10 overflow-hidden">
        <p className="text-center text-xs md:text-sm font-semibold tracking-widest text-muted-foreground mb-8 px-4">
          Trusted by students from leading institutions
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
              className="flex items-center group cursor-pointer"
            >
              <div className="flex items-center gap-3 px-8 md:px-12">
                <Image
                  src={inst.logo}
                  alt={`${inst.name} Logo`}
                  width={48}
                  height={48}
                  className="object-contain w-8 h-8 md:w-10 md:h-10 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <span className="text-sm md:text-base  text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {inst.name}
                </span>
              </div>
              {/* Vertical Divider */}
              <div className="w-px h-8 bg-border/60" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
