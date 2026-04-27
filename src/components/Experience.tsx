import { Experience } from "@/lib/fetchSheet";
import Image from "next/image";

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="py-40 px-6 md:px-12 bg-background relative">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center space-y-6">
          <span className="text-secondary text-sm font-black uppercase tracking-[0.5em]">The Journey</span>
          <h2 className="font-headline text-6xl md:text-8xl font-bold text-primary tracking-tighter">Career Roadmap</h2>
          <div className="w-24 h-2 bg-secondary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-white/40 backdrop-blur-sm p-12 rounded-[3.5rem] border border-border/50 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700 group flex flex-col gap-10 relative overflow-hidden"
            >
              <span className="absolute top-8 right-12 font-headline text-[12rem] font-black text-primary/[0.02] select-none pointer-events-none group-hover:text-secondary/[0.05] transition-all duration-700 leading-none">
                {(idx + 1).toString().padStart(2, '0')}
              </span>

              <div className="flex items-center gap-8 relative z-10">
                <div className="relative w-28 h-28 rounded-[2.5rem] overflow-hidden border border-border/60 group-hover:border-secondary/40 transition-all duration-700 bg-white p-4 shadow-inner">
                  <Image
                    src={exp.image_url}
                    alt={exp.title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint="company logo"
                  />
                </div>
                <div>
                  <h3 className="font-headline text-3xl font-black text-primary group-hover:text-secondary transition-colors leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-secondary font-black tracking-[0.2em] text-[10px] uppercase mt-1">
                    {exp.role}
                  </p>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <p className="text-foreground/70 text-2xl leading-relaxed font-body font-light italic opacity-80 group-hover:opacity-100 transition-opacity">
                  &ldquo;{exp.description}&rdquo;
                </p>
                <div className="flex items-center gap-4 text-primary/30 font-black text-xs tracking-widest uppercase">
                  <div className="w-8 h-[2px] bg-primary/10 group-hover:w-16 group-hover:bg-secondary/40 transition-all duration-700" />
                  Milestone Completed
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}