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
import TextReveal from "@/components/About Us/TextReveal";

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
      <TextReveal text="Discover the power of exceptional design with Design by Akira, where creativity meets innovation. Our team of expert designers is dedicated to transforming your vision into stunning visual experiences that captivate and engage. Partner with us to elevate your brand and stand out in a crowded market with designs that leave a lasting impression." />
      {/* <LogoTicker /> */}
      {/* <Features /> */}
      {/* <AboutUs /> */}
      {/* <ProjectShowcase /> */}
      <Cta1 />
    </div>
  );
}
