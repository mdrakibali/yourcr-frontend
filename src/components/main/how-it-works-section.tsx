import React from "react";
import { 
  Building2, 
  Search, 
  Users, 
  UserPlus, 
  Laptop, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="w-full py-16 bg-muted/20 relative overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        
        {/* Top Section - Steps */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-16">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase mb-2">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-3">
            Simple steps to get started.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            One account can belong to multiple groups, and you may have different permissions in each group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 mb-24 relative">
          
          {/* Arrow Connectors (Desktop only) */}
          <div className="hidden md:block absolute top-28 left-[25%] w-[16%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="hidden md:block absolute top-28 right-[25%] w-[16%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="hidden md:block absolute top-[104px] left-[33%] text-primary/40">
             <ArrowRight className="w-4 h-4" />
          </div>
          <div className="hidden md:block absolute top-[104px] right-[33%] text-primary/40">
             <ArrowRight className="w-4 h-4" />
          </div>

          {/* Step 1 */}
          <div className="flex flex-col items-center md:items-start relative group">
            {/* Visual */}
            <div className="w-full aspect-[4/3] max-w-[280px] mx-auto md:mx-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl flex flex-col items-center justify-center p-6 mb-8 relative border border-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
              {/* Fake Institution Search UI */}
              <Building2 className="w-12 h-12 text-primary/40 mb-4" />
              <div className="w-full bg-background rounded-full h-10 shadow-sm border border-border flex items-center px-4 gap-2 z-10 group-hover:scale-105 transition-transform duration-500">
                <Search className="w-4 h-4 text-muted-foreground" />
                <div className="h-2 w-24 bg-muted rounded-full" />
              </div>
            </div>
            {/* Content */}
            <div className="flex gap-4 items-start w-full max-w-[280px] mx-auto md:mx-0">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
                01
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-base font-bold text-foreground mb-1.5">Find or select your institution</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Choose your university, college or polytechnic from the list.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center md:items-start relative group">
            {/* Visual */}
            <div className="w-full aspect-[4/3] max-w-[280px] mx-auto md:mx-0 bg-gradient-to-br from-brand-orange/5 to-primary/10 rounded-2xl flex flex-col items-center justify-center p-6 mb-8 relative border border-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
              {/* Fake Group Join UI */}
              <div className="w-full bg-background rounded-xl shadow-sm border border-border p-4 z-10 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Users className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="h-2 w-16 bg-muted rounded-full" />
                    <div className="h-1.5 w-10 bg-muted/50 rounded-full" />
                  </div>
                </div>
                <button className="w-full h-8 bg-primary text-primary-foreground rounded-lg text-xs font-semibold flex items-center justify-center gap-2">
                  <UserPlus className="w-3 h-3" /> Join Group
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="flex gap-4 items-start w-full max-w-[280px] mx-auto md:mx-0">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
                02
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-base font-bold text-foreground mb-1.5">Create or join a group</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Start a new group or join an existing one with an invite link.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center md:items-start relative group">
            {/* Visual */}
            <div className="w-full aspect-[4/3] max-w-[280px] mx-auto md:mx-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex flex-col items-end justify-end p-6 pb-0 mb-8 relative border border-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
              {/* Fake Laptop UI */}
              <div className="w-[110%] h-[80%] bg-background rounded-t-xl shadow-md border-x border-t border-border z-10 p-2 group-hover:translate-y-2 transition-transform duration-500">
                <div className="w-full h-full bg-muted/30 rounded-md border border-border/50 flex flex-col">
                  <div className="w-full h-4 border-b border-border/50 flex items-center px-2 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  </div>
                  <div className="flex-1 p-2 flex gap-2">
                    <div className="w-1/4 h-full bg-background rounded-sm border border-border/30" />
                    <div className="w-3/4 h-full flex flex-col gap-2">
                      <div className="w-full h-8 bg-background rounded-sm border border-border/30" />
                      <div className="w-full flex-1 bg-background rounded-sm border border-border/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="flex gap-4 items-start w-full max-w-[280px] mx-auto md:mx-0">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
                03
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-base font-bold text-foreground mb-1.5">Manage your semester</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  View your classes, exams, assignments, notices and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Two Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* CR Card */}
          <div className="bg-gradient-to-br from-card to-muted/20 border border-border/70 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
              FOR CLASS REPRESENTATIVES
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-balance">
              Manage your group, lead with ease.
            </h3>
            <ul className="flex flex-col gap-3 mb-10 z-10">
              {["Organize academic information", "Publish notices", "Manage schedules and assignments", "Coordinate group members"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            {/* Abstract Graphic */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 rounded-tl-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative mt-auto pt-8 self-end md:self-center lg:self-end w-full max-w-[280px]">
              <div className="w-full aspect-[4/3] bg-background rounded-t-xl border-t border-x border-border shadow-xl p-3 flex flex-col gap-2 z-10 relative">
                 <div className="w-full h-8 bg-muted rounded-md" />
                 <div className="flex gap-2 w-full flex-1">
                   <div className="w-1/3 h-full bg-primary/10 rounded-md" />
                   <div className="w-2/3 h-full bg-muted/50 rounded-md" />
                 </div>
              </div>
            </div>
          </div>

          {/* Student Card */}
          <div className="bg-gradient-to-br from-card to-muted/20 border border-border/70 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
              FOR STUDENTS
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-balance">
              Stay informed, stay ahead.
            </h3>
            <ul className="flex flex-col gap-3 mb-10 z-10">
              {["Check the next class", "Find exam dates", "Track upcoming deadlines", "Read important notices and access resources"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            {/* Abstract Graphic */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-orange/5 rounded-tl-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative mt-auto pt-8 self-end md:self-center lg:self-end w-full max-w-[280px]">
              <div className="w-full aspect-[4/3] bg-background rounded-t-xl border-t border-x border-border shadow-xl p-3 flex flex-col gap-2 z-10 relative">
                 <div className="flex gap-2 w-full h-full">
                   <div className="w-full h-full bg-muted/30 rounded-md p-2 flex flex-col gap-2">
                     <div className="w-full h-3 bg-brand-orange/20 rounded-full w-3/4" />
                     <div className="w-full h-2 bg-muted rounded-full" />
                     <div className="w-full h-2 bg-muted rounded-full" />
                     <div className="w-full h-2 bg-muted rounded-full w-1/2" />
                   </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

