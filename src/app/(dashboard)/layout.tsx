import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* TODO: Add Dashboard Sidebar here */}
      <div className="flex flex-1 flex-col">
        {/* TODO: Add Dashboard Header here */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-muted/20">
          {children}
        </main>
      </div>
    </div>
  );
}
