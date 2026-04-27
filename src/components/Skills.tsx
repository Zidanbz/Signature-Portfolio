"use client";

import { Skill } from "@/lib/fetchSheet";
import Image from "next/image";

export default function SkillsMarquee({ skills }: { skills: Skill[] }) {
  const doubleSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="py-32 bg-background overflow-hidden border-y border-primary/5">
      <div className="text-center mb-20 space-y-4">
        <h3 className="font-headline text-xs uppercase tracking-[0.6em] text-primary/30 font-black">
          Specialized Skillset
        </h3>
        <div className="w-12 h-1 bg-secondary/30 mx-auto rounded-full" />
      </div>
      
      <div className="relative group">
        <div className="animate-marquee flex items-center gap-32 py-12">
          {doubleSkills.map((skill, i) => (
            <div 
              key={i} 
              className="flex items-center gap-10 group/item grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-default px-6 py-4 rounded-[2rem] hover:bg-card/50"
            >
              <div className="relative w-20 h-20 transform transition-all duration-500 group-hover/item:scale-110 group-hover/item:-rotate-6">
                <Image
                  src={skill.logo_url}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-headline text-4xl font-black text-primary/20 group-hover/item:text-primary whitespace-nowrap tracking-tighter transition-all">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Elegant Gradient Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}