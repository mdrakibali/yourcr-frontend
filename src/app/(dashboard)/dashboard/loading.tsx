import React from 'react';

// Loading skeleton loader matching dashboard layout
export default function DashboardLoading(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-6 animate-pulse md:gap-8">
      {/* Banner Skeleton */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="bg-muted h-8 w-64 rounded-xl" />
          <div className="bg-muted/60 h-4 w-96 rounded-lg" />
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-muted h-10.5 w-32 rounded-2xl" />
          <div className="bg-muted h-10.5 w-32 rounded-full" />
        </div>
      </div>

      {/* 3-Column Middle Grid Skeleton */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Left: 2x2 Course Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-muted/50 h-36 rounded-2xl p-4 flex flex-col justify-between" />
          ))}
        </div>

        {/* Center: Class Schedule Timeline */}
        <div className="bg-muted/40 h-76 rounded-3xl p-5 lg:col-span-5" />

        {/* Right: Next Up Card */}
        <div className="bg-muted/50 h-76 rounded-3xl p-5 lg:col-span-3" />
      </div>

      {/* Bottom Table Skeleton */}
      <div className="bg-muted/40 h-64 rounded-3xl p-5" />
    </div>
  );
}
