import React from 'react';
import { OverviewBanner } from '@/components/dashboard/overview/overview-banner';
import { TodayClassesGrid } from '@/components/dashboard/overview/today-classes-grid';
import { RoutineTimeline } from '@/components/dashboard/overview/routine-timeline';
import { NextClassCard } from '@/components/dashboard/overview/next-class-card';
import { UpcomingDeadlinesTable } from '@/components/dashboard/overview/upcoming-deadlines-table';
import { getDashboardOverview } from '@/lib/mock-data/dashboard';

// Server component page for Main Dashboard Overview
export default async function DashboardPage(): Promise<React.JSX.Element> {
  // Fetch overview data with simulated latency
  const data = await getDashboardOverview('group-diu-cse-4a');

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Top Banner: Greeting, Date & Action button */}
      <OverviewBanner
        userName="Tanvir Ahmed"
        subtitle="Let's start the day with smile! · CSE 4th Semester (Section A)"
        isOwnerOrAdmin={true}
      />

      {/* Middle Section: 3-column responsive grid matching reference image */}
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Left Column: 2x2 Pastel Course Cards */}
        <div className="lg:col-span-4">
          <TodayClassesGrid classes={data.todayClasses} />
        </div>

        {/* Center Column: Interactive Class Schedule Timeline */}
        <div className="lg:col-span-5">
          <RoutineTimeline classes={data.todayClasses} />
        </div>

        {/* Right Column: Next Up Card & Quick Stats */}
        <div className="lg:col-span-3">
          <NextClassCard
            nextClass={data.nextClass}
            stats={data.stats}
            isOwnerOrAdmin={true}
          />
        </div>
      </section>

      {/* Bottom Section: Upcoming Assignment & Exam Deadlines Table */}
      <UpcomingDeadlinesTable
        assignments={data.upcomingAssignments}
        exams={data.upcomingExams}
      />
    </div>
  );
}
