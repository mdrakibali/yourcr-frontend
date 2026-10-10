import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { RoleCardProps } from '@/types/how-it-works';

// Component to display the role-specific benefits card
export function RoleCard({ card }: RoleCardProps): React.JSX.Element {
  return (
    <div className="bg-background grid min-h-87.5 grid-cols-1 items-center overflow-hidden rounded-3xl md:grid-cols-2">
      {/* Content */}
      <div className="z-10 flex flex-col justify-center p-8">
        <span className="text-primary mb-2 text-[10px] font-bold tracking-widest uppercase">
          {card.tag}
        </span>
        <h3 className="text-foreground mb-6 text-2xl font-bold text-balance">
          {card.title}
        </h3>
        <ul className="flex flex-col gap-3">
          {card.items.map((item, i) => (
            <li
              key={i}
              className="text-muted-foreground flex items-center gap-3 text-sm"
            >
              <CheckCircle2 className="text-primary h-4 w-4 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Image Container - Full Bleed */}
      <div className="relative flex h-50 w-full items-center justify-center overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-bottom-right"
        />
      </div>
    </div>
  );
}
