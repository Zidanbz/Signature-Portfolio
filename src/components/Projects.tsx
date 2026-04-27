
"use client";

import { Project } from "@/lib/fetchSheet";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ projects }: { projects: Project[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || projects.length <= 1) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // Auto-slide logic: advance by one card width approximately
        const nextScroll = scrollLeft >= maxScroll - 50 ? 0 : scrollLeft + 400;
        
        scrollRef.current.scrollTo({
          left: nextScroll,
          behavior: "smooth"
        });
      }
    }, 3000); // 3 seconds interval as requested

    return () => clearInterval(interval);
  }, [isHovered, projects.length]);

  return (
    <section id="projects" className="py-24 bg-card/30 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="space-y-4">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary">
            Portofolio Unggulan
          </h2>
          <div className="w-24 h-1.5 bg-secondary rounded-full" />
          <p className="text-muted-foreground max-w-2xl text-xl font-body leading-relaxed">
            Kurasi proyek pilihan yang merepresentasikan dedikasi saya terhadap kualitas, inovasi, dan estetika visual.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container with Snap and Auto-slide */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-16 scroll-smooth scroll-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-[85vw] md:w-[650px] bg-background rounded-[2.5rem] border border-border/50 shadow-2xl snap-center group overflow-hidden transition-all duration-500 hover:border-primary/20"
          >
            <div className="relative h-72 md:h-[450px] w-full overflow-hidden">
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="project visual dashboard"
              />
              {/* Overlay with links */}
              <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6">
                <div className="flex gap-4">
                  <a 
                    href={project.demo_link} 
                    target="_blank" 
                    className="bg-white text-primary p-5 rounded-full hover:bg-secondary hover:text-white transition-all transform hover:scale-110 shadow-lg"
                  >
                    <ExternalLink size={28} />
                  </a>
                  <a 
                    href={project.github_link} 
                    target="_blank" 
                    className="bg-white text-primary p-5 rounded-full hover:bg-secondary hover:text-white transition-all transform hover:scale-110 shadow-lg"
                  >
                    <Github size={28} />
                  </a>
                </div>
                <p className="text-white font-headline text-xl font-semibold">Lihat Detail Proyek</p>
              </div>
            </div>
            
            <div className="p-10 space-y-6">
              <div className="space-y-2">
                <span className="text-accent font-headline font-bold text-sm tracking-widest uppercase">
                  {project.tech_stack}
                </span>
                <h3 className="font-headline text-3xl font-bold text-primary leading-tight">
                  {project.title}
                </h3>
              </div>
              <p className="text-foreground/80 font-body text-lg line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.highlights.split(',').map((h, i) => (
                  <span key={i} className="bg-muted text-primary/70 px-4 py-1.5 rounded-full text-sm font-medium border border-border/50">
                    {h.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
