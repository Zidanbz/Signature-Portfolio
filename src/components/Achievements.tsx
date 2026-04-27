
"use client";

import { Achievement } from "@/lib/fetchSheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Globe, Medal } from "lucide-react";

export default function Achievements({ achievements }: { achievements: Achievement[] }) {
  const conferences = achievements.filter(a => a.category === 'Conference');
  const competitions = achievements.filter(a => a.category === 'Competition');

  return (
    <section className="py-24 px-6 md:px-12 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary">Pencapaian</h2>
          <div className="w-20 h-1.5 bg-secondary rounded-full mx-auto" />
          <p className="text-muted-foreground text-xl italic font-body max-w-2xl mx-auto leading-relaxed">
            Pengakuan internasional dan kontribusi intelektual dalam ekosistem desain dan teknologi global.
          </p>
        </div>

        <Tabs defaultValue="conference" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-16 bg-background/80 backdrop-blur-sm p-1.5 h-16 rounded-[1.5rem] shadow-sm border border-border/50 max-w-md mx-auto">
            <TabsTrigger value="conference" className="rounded-[1rem] text-lg font-headline font-bold data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
              <Globe className="mr-3 w-5 h-5" /> Conference
            </TabsTrigger>
            <TabsTrigger value="competition" className="rounded-[1rem] text-lg font-headline font-bold data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
              <Trophy className="mr-3 w-5 h-5" /> Competition
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conference" className="space-y-6 focus-visible:outline-none">
            <div className="grid gap-6">
              {conferences.map((item, i) => (
                <AchievementCard key={i} item={item} icon={<Globe className="w-8 h-8 text-secondary" />} />
              ))}
              {conferences.length === 0 && <p className="text-center text-muted-foreground py-10">Belum ada data konferensi.</p>}
            </div>
          </TabsContent>

          <TabsContent value="competition" className="space-y-6 focus-visible:outline-none">
            <div className="grid gap-6">
              {competitions.map((item, i) => (
                <AchievementCard key={i} item={item} icon={<Medal className="w-8 h-8 text-secondary" />} />
              ))}
              {competitions.length === 0 && <p className="text-center text-muted-foreground py-10">Belum ada data kompetisi.</p>}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function AchievementCard({ item, icon }: { item: Achievement, icon: React.ReactNode }) {
  return (
    <div className="bg-background p-8 md:p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl hover:translate-x-3 transition-all duration-500 flex items-center group">
      <div className="mr-8 hidden sm:flex items-center justify-center p-6 bg-secondary/10 rounded-[1.5rem] group-hover:bg-secondary transition-colors duration-500">
        <div className="group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary group-hover:text-secondary transition-colors">{item.title}</h3>
        <p className="text-foreground/70 text-lg leading-relaxed font-body italic">&ldquo;{item.description}&rdquo;</p>
      </div>
      <div className="text-6xl md:text-7xl ml-8 select-none filter group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0">
        {item.country_flag}
      </div>
    </div>
  );
}
