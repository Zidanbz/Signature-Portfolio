
import { Certification } from "@/lib/fetchSheet";
import Image from "next/image";

export default function Certifications({ certifications }: { certifications: Certification[] }) {
  return (
    <section className="py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary">Sertifikasi</h2>
          <div className="w-20 h-1.5 bg-secondary rounded-full" />
          <p className="text-muted-foreground text-xl max-w-2xl font-body">Validasi keahlian teknis dan pembelajaran berkelanjutan dalam standar industri global.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-card/30 rounded-[2.5rem] overflow-hidden border border-border/50 shadow-sm group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-64 w-full bg-white flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={cert.image_url}
                    alt={cert.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint="certification badge"
                  />
                </div>
              </div>
              <div className="p-10 space-y-3 bg-white/50 backdrop-blur-sm border-t border-border/50">
                <span className="text-accent text-xs font-black uppercase tracking-widest">{cert.issuer}</span>
                <h3 className="font-headline text-2xl font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
