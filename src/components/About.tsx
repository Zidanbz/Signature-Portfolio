import { Profile } from "@/lib/fetchSheet";
import Image from "next/image";

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* Text Column - Span 7 */}
          <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="font-headline text-6xl md:text-8xl font-bold text-primary leading-[0.9] tracking-tighter">
                Crafting <br /> Digital <br /> <span className="text-secondary italic">Experiences.</span>
              </h2>
              <div className="w-40 h-2.5 bg-secondary rounded-full" />
            </div>
            
            <p className="font-body text-2xl md:text-3xl leading-relaxed text-foreground/70 font-light max-w-2xl">
              {profile.description}
            </p>
            
            <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 gap-12 border-t border-primary/10">
              <div className="space-y-2">
                <h4 className="font-headline text-5xl font-black text-primary">05+</h4>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-black">Years Exp</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline text-5xl font-black text-primary">60+</h4>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-black">Projects</p>
              </div>
              <div className="space-y-2 hidden sm:block">
                <h4 className="font-headline text-5xl font-black text-primary">15+</h4>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-black">Global Clients</p>
              </div>
            </div>
          </div>

          {/* Image Column - Span 5 */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Complex decorative layers */}
              <div className="absolute -inset-8 border-2 border-secondary/20 rounded-[4rem] -z-10 translate-x-8 translate-y-8" />
              <div className="absolute -inset-4 border-2 border-primary/5 rounded-[4rem] -z-10 -translate-x-4 -translate-y-4" />
              
              <div className="relative h-full w-full overflow-hidden rounded-[3.5rem] shadow-[0_48px_80px_-20px_rgba(0,0,0,0.15)] group">
                <Image
                  src={profile.photo_url}
                  alt={profile.name}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  data-ai-hint="professional portrait"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-border/50 hidden md:block animate-bounce-slow">
                <div className="font-headline text-4xl font-black text-secondary">A+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Design Quality</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}