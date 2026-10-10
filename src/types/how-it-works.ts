import React from 'react';

// Represents a step in the how it works section
export interface StepItem {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

// Represents a role card for different user types
export interface RoleCardItem {
  tag: string;
  title: string;
  items: string[];
  image: string;
  alt: string;
}

// Props for the StepCard component
export interface StepCardProps {
  step: StepItem;
  hasArrow?: boolean;
}

// Props for the RoleCard component
export interface RoleCardProps {
  card: RoleCardItem;
}
