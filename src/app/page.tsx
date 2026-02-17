import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { HomeContact } from "@/components/home/HomeContact";
import { CyberSpirals } from "@/components/ui/CyberSpirals";
import { ScrollGridBackground } from "@/components/ui/ScrollGridBackground";
import { TechStack } from "@/components/home/TechStack";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

function SectionSeparator() {
  return <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0" />;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative bg-transparent selection:bg-primary/20">
      <ScrollGridBackground />
      {/* Kept CyberSpirals as an additional layer for specific scroll effects if needed, or remove if too cluttered. 
          User asked for scroll animation, ScrollGridBackground handles the ambient part. 
          CyberSpirals handles the "spiral" specific effect. Keeping both might be intense but user asked for "nice background animation".
      */}
      <CyberSpirals />

      <Hero />
      <TechStack />
      <SectionSeparator />
      <Features />
      <SectionSeparator />
      <AboutSection />
      <SectionSeparator />
      {/* <StatsSection /> */}
      <SectionSeparator />
      <PortfolioPreview />
      <SectionSeparator />
      <HomeContact />
      <ScrollToTop />
    </main>
  );
}
