import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Heros/Hero2";
import LogoTicker from "@/components/LogoTicker";
import { MarqueeDemo } from "@/components/Marquee";
import ProjectShowcase from "@/components/ProjectShowcase";
import TextMarquee from "@/components/TextMarquee";
import WhatWeDo from "@/components/WhatWeDo";
import RecentWorks from "@/components/RecentWorks";
import Cta1 from "@/components/CTAs/Cta1";
import TestimonialContainer from "@/components/Testimonials/TestimonialContainer";

export default function Home() {
  return (
    <div>
      {/* <Banner /> */}
      <Hero2 />
      <WhatWeDo />
      {/* <RecentWorks /> */}
      {/* <Hero /> */}
      <TestimonialContainer />
      <MarqueeDemo />
      {/* <LogoTicker /> */}
      {/* <Features /> */}
      {/* <AboutUs /> */}
      {/* <ProjectShowcase /> */}
      <Cta1 />
    </div>
  );
}
