import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* TODO: Add Main Navbar here */}
      <main className="flex-1">{children}</main>
      {/* TODO: Add Main Footer here */}
    </div>
  );
}
