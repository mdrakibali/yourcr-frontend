import React from "react";
import { 
  CalendarDays, 
  ClipboardList, 
  BookOpenCheck, 
  BellRing, 
  Library, 
  Users 
} from "lucide-react";

const features = [
  {
    title: "Class Routine",
    description: "Know what class comes next and where it takes place.",
    icon: CalendarDays,
  },
  {
    title: "Exam Schedule",
    description: "Keep upcoming exams and their details together.",
    icon: ClipboardList,
  },
  {
    title: "Assignments",
    description: "Stay aware of coursework and approaching deadlines.",
    icon: BookOpenCheck,
  },
  {
    title: "Notices",
    description: "Find announcements without searching through chat groups.",
    icon: BellRing,
  },
  {
    title: "Subjects & Resources",
    description: "Keep semester learning materials organized.",
    icon: Library,
  },
  {
    title: "Group Management",
    description: "Help CRs coordinate semester information with members.",
    icon: Users,
  },
];

export function FeaturesSection() {
  return (
    <section id="feature" className="w-full py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        {/* Header - Left Aligned to match reference */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-10">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase mb-2">
            KEY FEATURES
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-3">
            Everything you need, in one place.
          </h2>
          <p className="text-sm text-muted-foreground">
            Stay organized, informed and on track throughout your semester.
          </p>
        </div>

        {/* Features Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group relative flex items-start gap-3 p-4 md:p-5 bg-card border border-border/70 rounded-xl hover:border-primary/40 transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-4 h-4 text-primary stroke-[2]" />
                </div>
                
                <div className="flex flex-col pt-0.5">
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed pr-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
