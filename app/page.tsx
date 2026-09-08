import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import QuoteCard from "@/components/QuoteCard";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased relative">
      {/* Subtle Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-5 sm:px-6">
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Contact />

        {/* Randomized & Shuffleable Quotes */}
        <QuoteCard />

        <Footer />
      </main>

      {/* Interactive Command Palette & Floating Contact Pill */}
      <CommandPalette />
    </div>
  );
}
