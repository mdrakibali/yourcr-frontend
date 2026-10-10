import Navbar from '@/components/layout/navbar';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <main className="flex-1">{children}</main>
      {/* TODO: Add Main Footer here */}
    </div>
  );
}
