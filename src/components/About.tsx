
import { Profile } from "@/lib/fetchSheet";
import Image from "next/image";

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Column - Span 7 */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-tight">
                Tentang Saya
              </h2>
              <div className="w-32 h-2 bg-secondary rounded-full" />
            </div>
            
            <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
              {profile.description}
            </p>
            
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-10 border-t border-border/50">
              <div className="space-y-1">
                <h4 className="font-headline text-4xl font-bold text-primary">5+</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Tahun Pengalaman</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline text-4xl font-bold text-primary">50+</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Proyek Selesai</p>
              </div>
              <div className="space-y-1 hidden sm:block">
                <h4 className="font-headline text-4xl font-bold text-primary">12+</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Klien Global</p>
              </div>
            </div>
          </div>

          {/* Image Column - Span 5 */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              {/* Styled border decoration */}
              <div className="absolute -inset-4 border border-secondary/30 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
              <div className="absolute -inset-4 border border-primary/10 rounded-[3rem] -z-10 -translate-x-2 -translate-y-2" />
              
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                <Image
                  src={profile.photo_url}
                  alt={profile.name}
                  fill
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  data-ai-hint="professional portrait"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
