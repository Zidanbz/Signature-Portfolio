
import { Experience } from "@/lib/fetchSheet";
import Image from "next/image";

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary">Jejak Karir</h2>
          <div className="w-20 h-1.5 bg-secondary rounded-full mx-auto" />
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-body">Perjalanan profesional dan kontribusi saya di berbagai ekosistem teknologi.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-card/50 p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group flex flex-col md:flex-row gap-8 relative overflow-hidden"
            >
              {/* Massive background number as requested */}
              <span className="absolute -top-4 -right-2 font-headline text-9xl font-black text-primary/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors">
                {(idx + 1).toString().padStart(2, '0')}
              </span>

              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-2 border-border group-hover:border-secondary transition-colors duration-500 bg-white shadow-inner">
                  <Image
                    src={exp.image_url}
                    alt={exp.title}
                    fill
                    className="object-cover p-2"
                    data-ai-hint="company logo"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4 relative z-10">
                <div className="space-y-1">
                  <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-bold tracking-wider text-sm uppercase">
                    {exp.role}
                  </p>
                </div>
                <p className="text-foreground/70 text-lg leading-relaxed font-body italic">
                  &ldquo;{exp.description}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
