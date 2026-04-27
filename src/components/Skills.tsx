
"use client";

import { Skill } from "@/lib/fetchSheet";
import Image from "next/image";

export default function SkillsMarquee({ skills }: { skills: Skill[] }) {
  // Duplicate skills several times to ensure smooth infinite loop for all screen sizes
  const doubleSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="py-24 bg-card/10 overflow-hidden border-y border-border/50">
      <div className="text-center mb-16">
        <h3 className="font-headline text-sm uppercase tracking-[0.4em] text-primary/50 font-black">
          Core Technologies & Creative Tools
        </h3>
      </div>
      
      <div className="relative group">
        <div className="animate-marquee flex items-center gap-20 py-10">
          {doubleSkills.map((skill, i) => (
            <div 
              key={i} 
              className="flex items-center gap-6 group/item grayscale hover:grayscale-0 transition-all duration-500 cursor-default px-4"
            >
              <div className="relative w-16 h-16 transform transition-transform group-hover/item:scale-110">
                <Image
                  src={skill.logo_url}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-headline text-2xl font-bold text-primary/40 group-hover/item:text-primary whitespace-nowrap tracking-tight transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Elegant Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
