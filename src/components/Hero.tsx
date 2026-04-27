
"use client";

import { Profile } from "@/lib/fetchSheet";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero({ profile }: { profile: Profile }) {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <Image
          src={profile.photo_url || "https://picsum.photos/seed/elevate-hero/1920/1080"}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          data-ai-hint="hero background workspace"
        />
        {/* Dark Gradient Overlay as specified */}
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      </div>

      {/* Content strictly centered */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <h1 className="font-headline text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
          {profile.name}
        </h1>
        <p className="font-body text-xl md:text-3xl text-white/90 mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto italic">
          {profile.title}
        </p>
        <Button 
          onClick={scrollToAbout}
          className="bg-primary hover:bg-primary/90 text-white px-12 py-8 rounded-full text-xl font-medium transition-all transform hover:scale-105 shadow-xl border border-white/20"
        >
          Let&apos;s Started
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
        <ChevronDown className="text-white/40 w-8 h-8" />
      </div>
    </section>
  );
}
