import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { HomeContact } from "@/components/home/HomeContact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <AboutSection />
      <StatsSection />
      <PortfolioPreview />
      <HomeContact />
    </main>
  );
}
