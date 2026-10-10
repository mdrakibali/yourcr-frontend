"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative z-50 w-full max-w-md bg-white rounded-xl shadow-xl p-6 m-4">
        {title && (
          <h2 className="text-xl font-bold mb-4">{title}</h2>
        )}
        {children}
      </div>
    </div>
  );
}

