import React from "react";
import { TestimonailMarquee } from "./TestimonailMarquee";
import Link from "next/link";

export default function TestimonialContainer() {
  return (
    <div className="bg-[linear-gradient(to_bottom,black,#100E15,#1F1F1F,#1F1F1F,black)] text-white py-[72px] sm:py-24">
      <div className="pt-20 px-8 md:pt-32  max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-10">
          <p className="text-[30px] leading-[35px] sm:text-[50px] sm:leading-[60px] uppercase tracking-tighter max-w-lg">
            /<span className="font-semibold">FEEDBACK FROM OUR CLIENTS</span>
          </p>
          <img
            src="https://cdn.prod.website-files.com/6699127e096d9b4737ef1160/6699127e096d9b4737ef1211_icons8-arrow-down.svg"
            alt="arrow down"
            className="size-32 mt-4"
          />
        </div>
      </div>
      <div className="pt-20">
        <TestimonailMarquee />
      </div>
      <Link href="/contact-us">
        <button className="mt-10 text-black text-center text-[15px] font-semibold uppercase rounded-full bg-white px-[30px] py-[17px] transition hover:bg-[#1F1F1F] hover:text-white hover:font-bold">
          Work with us
        </button>
      </Link>
    </div>
  );
}
