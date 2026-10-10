import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { RoleCardProps } from "@/types/how-it-works";

// Component to display the role-specific benefits card
export function RoleCard({ card }: RoleCardProps): React.JSX.Element {
  return (
    <div className="bg-card border border-border/70 rounded-3xl grid grid-cols-1 md:grid-cols-2 min-h-[350px] md:min-h-[400px] overflow-hidden group items-stretch relative">
      
      {/* Content */}
      <div className="flex flex-col p-8 md:p-10 justify-center z-10">
        <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
          {card.tag}
        </span>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-balance">
          {card.title}
        </h3>
        <ul className="flex flex-col gap-3">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Image Container */}
      <div className="relative w-full h-62.5 md:h-full flex items-end justify-end">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover md:object-contain object-bottom md:object-bottom-right scale-100 md:scale-125 md:origin-bottom-right group-hover:scale-105 md:group-hover:scale-150 transition-transform duration-700"
        />
      </div>
      
    </div>
  );
}
