import { Navbar } from '@/components/layout/navbar';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar/>
      <main className="flex-1 overflow-y-auto pt-24">{children}</main>
      {/* TODO: Add Main Footer here */}
    </div>
  );
}
