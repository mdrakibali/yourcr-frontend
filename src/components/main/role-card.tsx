import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { RoleCardProps } from "@/types/how-it-works";

// Component to display the role-specific benefits card
export function RoleCard({ card }: RoleCardProps): React.JSX.Element {
  return (
    <div className="bg-card border border-border/70 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group">
      <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
        {card.tag}
      </span>
      <h3 className="text-2xl font-bold text-foreground mb-6 text-balance">
        {card.title}
      </h3>
      <ul className="flex flex-col gap-3 mb-16 z-10">
        {card.items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="absolute right-2 bottom-2 md:right-8 md:bottom-8 w-1/2 max-w-[240px] pointer-events-none">
        <Image
          src={card.image}
          alt={card.alt}
          width={240}
          height={180}
          className="w-full h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-500 rounded-lg"
        />
      </div>
    </div>
  );
}

