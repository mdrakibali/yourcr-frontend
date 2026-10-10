'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

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
      <div className="relative z-50 m-4 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
