"use client";

import { Project } from "@/lib/fetchSheet";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react";

export default function Projects({ projects }: { projects: Project[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="projects" className="py-32 bg-card/40 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-6">
          <span className="text-secondary text-sm font-black uppercase tracking-[0.4em]">Selected Works</span>
          <h2 className="font-headline text-6xl md:text-8xl font-bold text-primary tracking-tighter">
            Portfolio <br /> Showcase
          </h2>
          <div className="w-24 h-2 bg-secondary rounded-full" />
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto px-6 md:px-12 pb-24 scroll-smooth scroll-hide snap-x snap-mandatory"
      >
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-[90vw] md:w-[700px] bg-background rounded-[3.5rem] border border-border/40 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] snap-center group overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-primary/20"
          >
            <div className="relative h-80 md:h-[500px] w-full overflow-hidden">
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint="project visual dashboard"
              />
              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center gap-8 backdrop-blur-[2px]">
                <div className="flex gap-6">
                  <a 
                    href={project.demo_link} 
                    target="_blank" 
                    className="bg-white text-primary p-6 rounded-full hover:bg-secondary hover:text-white transition-all transform hover:scale-110 shadow-2xl"
                  >
                    <ExternalLink size={32} />
                  </a>
                  <a 
                    href={project.github_link} 
                    target="_blank" 
                    className="bg-white text-primary p-6 rounded-full hover:bg-secondary hover:text-white transition-all transform hover:scale-110 shadow-2xl"
                  >
                    <Github size={32} />
                  </a>
                </div>
                <div className="text-center">
                  <p className="text-white font-headline text-2xl font-black tracking-tight">Project Details</p>
                  <div className="w-8 h-1 bg-secondary mx-auto mt-2 rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="p-12 space-y-8">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <span className="text-secondary font-headline font-black text-xs tracking-[0.3em] uppercase">
                    {project.tech_stack}
                  </span>
                  <h3 className="font-headline text-4xl md:text-5xl font-black text-primary leading-none tracking-tighter">
                    {project.title}
                  </h3>
                </div>
                <div className="text-primary/10 font-headline text-7xl font-black select-none">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
              </div>
              
              <p className="text-foreground/60 font-body text-xl line-clamp-2 leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.highlights.split(',').map((h, i) => (
                  <span key={i} className="bg-muted/50 text-primary/60 px-5 py-2 rounded-full text-xs font-black border border-border/30 tracking-wider">
                    {h.trim().toUpperCase()}
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