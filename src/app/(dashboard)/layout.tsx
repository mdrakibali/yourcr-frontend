import React, { ReactNode } from 'react';
import { AppSidebar } from '@/components/dashboard/shell/app-sidebar';
import { AppHeader } from '@/components/dashboard/shell/app-header';

interface DashboardLayoutProps {
  children: ReactNode;
}

// Global server layout for authenticated dashboard routes
export default function DashboardLayout({ children }: DashboardLayoutProps): React.JSX.Element {
  return (
    <div className="bg-background flex min-h-screen">
      {/* Slim sidebar navigation rail */}
      <AppSidebar />

      {/* Main app container */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top header bar */}
        <AppHeader />

        {/* Dashboard page content canvas */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-6 md:space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
