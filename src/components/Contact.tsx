
import { Profile } from "@/lib/fetchSheet";
import { Mail, Linkedin, Instagram, Phone, ArrowUpRight } from "lucide-react";

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="pt-32 pb-12 px-6 md:px-12 bg-primary text-white overflow-hidden relative">
      {/* Background Graphic Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-headline text-[30vw] font-black leading-none whitespace-nowrap">
          LET&apos;S COLLABORATE
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight">
                Mari bangun <br /> <span className="text-secondary">karya hebat</span> bersama.
              </h2>
              <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-xl font-body font-light">
                Selalu terbuka untuk kolaborasi desain yang bermakna dan tantangan teknis yang menarik. Hubungi saya sekarang.
              </p>
            </div>
            
            <a 
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-4 text-3xl md:text-5xl font-headline font-bold text-white hover:text-secondary transition-colors group border-b-2 border-white/20 pb-4"
            >
              {profile.email}
              <ArrowUpRight className="w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 self-end">
            <ContactLink 
              icon={<Linkedin className="w-6 h-6" />} 
              label="LinkedIn" 
              value="Professional Profile" 
              href={profile.linkedin} 
            />
            <ContactLink 
              icon={<Phone className="w-6 h-6" />} 
              label="WhatsApp" 
              value="Direct Chat" 
              href={profile.whatsapp} 
            />
            <ContactLink 
              icon={<Instagram className="w-6 h-6" />} 
              label="Instagram" 
              value="Personal Creative" 
              href={profile.instagram} 
            />
            <ContactLink 
              icon={<Mail className="w-6 h-6" />} 
              label="Contact Form" 
              value="Say Hello" 
              href={`mailto:${profile.email}`} 
            />
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-white/40 font-body text-sm tracking-widest uppercase font-bold">
          <p>&copy; {new Date().getFullYear()} {profile.name}. Elevate Folio Template.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      className="bg-white/5 hover:bg-white/10 p-8 rounded-[2rem] border border-white/10 transition-all group flex flex-col justify-between h-full hover:border-secondary/30"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="p-4 bg-secondary/20 rounded-2xl text-secondary group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" />
      </div>
      <div>
        <span className="font-headline font-bold text-xl block text-white/90 group-hover:text-white">{label}</span>
        <p className="text-white/40 group-hover:text-white/60 transition-colors mt-1 font-body text-sm font-bold uppercase tracking-wider">{value}</p>
      </div>
    </a>
  );
}
