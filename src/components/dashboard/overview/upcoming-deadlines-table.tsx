'use client';

import React, { useState } from 'react';
import { Search, SlidersHorizontal, FileText, ArrowUpDown, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { UpcomingDeadlinesTableProps, AssignmentItem } from '@/types/dashboard';

// Upcoming assignments & exam deadlines table matching reference image
export function UpcomingDeadlinesTable({
  assignments,
  exams,
}: UpcomingDeadlinesTableProps): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Assignment' | 'Lab Report'>('All');

  // Filter items based on search and type
  const filteredAssignments = assignments.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subjectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || item.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="bg-card border-border/60 flex flex-col gap-4 rounded-3xl border p-5 shadow-xs transition-colors">
      {/* Header toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-foreground text-base font-bold tracking-tight">
            Upcoming Assignment
          </h2>
          <p className="text-muted-foreground text-xs">
            Never miss your class deadlines
          </p>
        </div>

        {/* Search input & filter controls matching reference image */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-3.5 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-muted/40 hover:bg-muted/60 focus:bg-background border-border/60 focus:border-primary focus:ring-primary/20 h-9 w-44 rounded-full border pr-3 pl-8 text-xs transition-all outline-none focus:ring-2 sm:w-56"
            />
          </div>

          <button
            type="button"
            aria-label="Filter assignments"
            onClick={() => setActiveFilter(activeFilter === 'All' ? 'Assignment' : 'All')}
            className="border-border/60 hover:bg-muted/60 flex size-9 items-center justify-center rounded-full border transition-colors"
          >
            <SlidersHorizontal className="text-muted-foreground size-4" />
          </button>
        </div>
      </div>

      {/* Table view matching reference image */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/40 text-[11px] font-semibold text-muted-foreground">
              <th className="py-2.5 pr-4 font-medium">
                <span className="flex items-center gap-1">Assignments <ArrowUpDown className="size-3" /></span>
              </th>
              <th className="py-2.5 px-4 font-medium">
                <span className="flex items-center gap-1">Due date <ArrowUpDown className="size-3" /></span>
              </th>
              <th className="py-2.5 px-4 font-medium">
                <span className="flex items-center gap-1">Grade <ArrowUpDown className="size-3" /></span>
              </th>
              <th className="py-2.5 px-4 font-medium">
                <span className="flex items-center gap-1">Instructor <ArrowUpDown className="size-3" /></span>
              </th>
              <th className="py-2.5 px-4 font-medium">
                <span className="flex items-center gap-1">Status <ArrowUpDown className="size-3" /></span>
              </th>
              <th className="py-2.5 pl-4 text-right font-medium">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30 text-xs">
            {filteredAssignments.map((item) => (
              <tr key={item.id} className="group hover:bg-muted/30 transition-colors">
                {/* Title & Subject */}
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex size-8.5 shrink-0 items-center justify-center rounded-xl">
                      <FileText className="size-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-semibold line-clamp-1">
                        {item.title}
                      </span>
                      <span className="text-muted-foreground text-[11px]">
                        {item.subjectName}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Due date */}
                <td className="py-3.5 px-4 text-foreground/80 font-medium whitespace-nowrap">
                  {item.dueDate}
                </td>

                {/* Grade */}
                <td className="py-3.5 px-4 font-semibold text-foreground/90">
                  {item.grade || '—'}
                </td>

                {/* Instructor */}
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-muted text-foreground flex size-5.5 items-center justify-center rounded-full text-[10px] font-bold">
                      {item.instructorName.charAt(item.instructorName.indexOf('.') > -1 ? item.instructorName.indexOf('.') + 2 : 0)}
                    </div>
                    <span className="text-muted-foreground text-xs font-medium truncate max-w-[120px]">
                      {item.instructorName}
                    </span>
                  </div>
                </td>

                {/* Status Badge */}
                <td className="py-3.5 px-4">
                  <Badge variant={item.status.toLowerCase() as 'late' | 'submitted' | 'pending'}>
                    {item.status}
                  </Badge>
                </td>

                {/* View Details Action */}
                <td className="py-3.5 pl-4 text-right">
                  <button
                    type="button"
                    className="border-border/60 hover:bg-muted text-foreground/80 hover:text-foreground inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors"
                  >
                    <span>View Details</span>
                    <ExternalLink className="size-3 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
