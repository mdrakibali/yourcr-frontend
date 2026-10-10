import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1">
        {children}
        <Footer />
      </main>
    </div>
  );
}
