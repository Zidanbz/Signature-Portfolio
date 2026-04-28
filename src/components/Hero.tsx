"use client";

import { Profile } from "@/lib/fetchSheet";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { resolveAssetPath } from "@/lib/asset-path";

export default function Hero({ profile }: { profile: Profile }) {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 z-0 scale-110">
        <Image
          src={resolveAssetPath(profile.photo, "https://picsum.photos/seed/elevate-hero/1920/1080")}
          alt="Hero Background"
          fill
          className="object-cover blur-[2px]"
          priority
          data-ai-hint="hero background workspace"
        />
        {/* Refined Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/70 via-black/20 to-background" />
      </div>

      {/* Content strictly centered */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl">
        <span className="inline-block mb-6 px-4 py-1.5 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-md bg-white/5 animate-pulse">
          Open for Collaboration
        </span>
        <h1 className="font-headline text-6xl md:text-[10rem] font-black mb-8 tracking-tighter leading-[0.85] drop-shadow-2xl">
          {profile.name.split(' ').map((word, i) => (
            <span key={i} className="block last:text-secondary">{word}</span>
          ))}
        </h1>
        <p className="font-body text-xl md:text-3xl text-white/80 mb-14 leading-relaxed font-light tracking-wide max-w-3xl mx-auto italic drop-shadow-lg">
          {profile.title}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            onClick={scrollToAbout}
            className="bg-primary hover:bg-primary/90 text-white px-14 py-8 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 group"
          >
            Explore Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a href="#contact" className="text-white font-headline font-bold text-lg hover:text-secondary transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce flex flex-col items-center gap-3">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-black">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
