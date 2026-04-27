import { fetchPortfolioData } from "@/lib/fetchSheet";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ExperienceSection from "@/components/Experience";
import Achievements from "@/components/Achievements";
import SkillsMarquee from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default async function Home() {
  const data = await fetchPortfolioData();

  if (!data) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-background gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-xl font-headline font-bold text-primary">Menyiapkan Portfolio...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen selection:bg-secondary selection:text-white">
      {/* Navigation - Minimal fixed on top with blur */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
        <div className="font-headline text-2xl md:text-3xl font-black text-white pointer-events-auto cursor-default tracking-tighter mix-blend-difference">
          {data.profile.name.toUpperCase()}
        </div>
        <div className="hidden md:flex gap-12 pointer-events-auto bg-black/10 backdrop-blur-md px-10 py-4 rounded-full border border-white/10">
          {['About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-white/80 font-headline font-bold text-sm uppercase tracking-widest hover:text-secondary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <Hero profile={data.profile} />
      
      <About profile={data.profile} />
      
      <SkillsMarquee skills={data.skills} />
      
      <Projects projects={data.projects} />
      
      <ExperienceSection experiences={data.experiences} />
      
      <Achievements achievements={data.achievements} />
      
      <Certifications certifications={data.certifications} />
      
      <Contact profile={data.profile} />
    </main>
  );
}