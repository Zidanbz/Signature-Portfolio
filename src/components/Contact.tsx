import { Profile } from "@/lib/fetchSheet";
import { Mail, Linkedin, Instagram, Phone, ArrowUpRight } from "lucide-react";

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="pt-40 pb-16 px-6 md:px-12 bg-primary text-white overflow-hidden relative">
      {/* Background Graphic Decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-headline text-[40vw] font-black leading-none whitespace-nowrap text-stroke-white italic rotate-[-10deg]">
          CONNECT
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center">
          
          <div className="space-y-14">
            <div className="space-y-8">
              <span className="text-secondary text-sm font-black uppercase tracking-[0.6em] inline-block animate-pulse">Get in touch</span>
              <h2 className="font-headline text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter">
                Let&apos;s build <br /> <span className="text-secondary italic">impact</span> <br /> together.
              </h2>
              <p className="text-white/60 text-2xl md:text-3xl leading-relaxed max-w-xl font-body font-light italic">
                I am always open to meaningful design collaborations and technical challenges that push boundaries.
              </p>
            </div>
            
            <a 
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-8 text-4xl md:text-6xl font-headline font-black text-white hover:text-secondary transition-all group relative"
            >
              <span className="relative z-10">{profile.email}</span>
              <ArrowUpRight className="w-16 h-16 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 text-secondary" />
              <div className="absolute -bottom-4 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ContactLink 
              icon={<Linkedin className="w-8 h-8" />} 
              label="LinkedIn" 
              value="Professional Network" 
              href={profile.linkedin} 
            />
            <ContactLink 
              icon={<Phone className="w-8 h-8" />} 
              label="WhatsApp" 
              value="Direct Message" 
              href={profile.whatsapp} 
            />
            <ContactLink 
              icon={<Instagram className="w-8 h-8" />} 
              label="Instagram" 
              value="Visual Feed" 
              href={profile.instagram} 
            />
            <ContactLink 
              icon={<Mail className="w-8 h-8" />} 
              label="Email" 
              value="Inquiry Box" 
              href={`mailto:${profile.email}`} 
            />
          </div>
        </div>

        <div className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 text-white/30 font-headline font-bold text-xs tracking-[0.4em] uppercase">
          <p className="hover:text-white/60 transition-colors">&copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-secondary transition-all">Terms</a>
            <a href="#" className="hover:text-secondary transition-all">Privacy</a>
            <a href="#" className="hover:text-secondary transition-all">Design System</a>
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
      className="bg-white/5 hover:bg-white p-12 rounded-[3.5rem] border border-white/10 transition-all duration-700 group flex flex-col justify-between h-72 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] group overflow-hidden relative"
    >
      {/* Hover Background Blobs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-[3] transition-transform duration-700" />
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="p-5 bg-secondary/20 rounded-[1.5rem] text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-110">
          {icon}
        </div>
        <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-primary transition-all duration-500" />
      </div>
      <div className="relative z-10">
        <span className="font-headline font-black text-3xl block text-white group-hover:text-primary transition-colors">{label}</span>
        <p className="text-white/30 group-hover:text-primary/60 transition-colors mt-2 font-headline text-[10px] font-black uppercase tracking-[0.2em]">{value}</p>
      </div>
    </a>
  );
}