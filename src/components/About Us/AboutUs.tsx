import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="relative bg-black">
      <div className="px-4 py-32 md:px-12 max-w-7xl mx-auto text-white">
        <img
          src="./images/services/design.webp"
          className="absolute top-24 lg:left-32 lg:top-32 left-10 size-20 lg:size-24"
        />
        <img
          src="./images/services/figma.webp"
          className="absolute bottom-20 right-10 lg:right-32 size-20 lg:size-24"
        />
        <p className="relative text-[25px] md:text-[22px] font-semibold text-center tracking-tighter leading-[35px] lg:w-1/2 lg:mx-auto uppercase">
          Design by akira, identified a significant gap in the digital landscape—a lack of artistic expression, monotonous branding, and a pressing need for originality and elegance. With a rich background in indie film, they eagerly embraced the challenge to infuse creativity with a bold, proactive spirit.
          <br />
          <br />
          Here, we champion the art of storytelling in every project. This principle drives us as a beacon of innovation and distinctiveness in a world hungry for our magic. Our expertise spans web design, SEO, and digital strategy, ensuring that each project not only stands out but also performs exceptionally well.
        </p>
        <div className="flex justify-center">
          <Link href="/contact-us" className="mt-10 text-black mx-auto w-fit text-center text-[16px] font-medium uppercase rounded-full bg-white px-[30px] py-[16px] transition hover:bg-[#1F1F1F] hover:text-white hover:font-bold">
            Join us
          </Link>
        </div>
      </div>
    </div>
  );
}
