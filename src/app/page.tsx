import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import { MarqueeDemo } from "@/components/Marquee";
import Navbar from "@/components/Navbar/Navbar";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <div>
      {/* <Banner /> */}
      <Navbar />
      <Hero />
      <MarqueeDemo />
      {/* <LogoTicker /> */}
      <Features />
      <ProjectShowcase />
    </div>
  );
}
