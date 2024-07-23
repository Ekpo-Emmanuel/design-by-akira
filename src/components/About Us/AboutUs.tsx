import React from "react";

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
        <p className="relative text-[25px] md:text-[22px] font-semibold text-center tracking-tighter leading-[35px] lg:w-1/2 lg:mx-auto">
          FORGE X, THE CREATIVE MINDS BEHIND AGENCY, NOTICED A GAP IN THE WORLD
          — A VOID OF ARTISTIC EXPRESSION, A MONOTONOUS BRANDING LANDSCAPE, AND
          A SIGNIFICANT NEED FOR ORIGINALITY AND ELEGANCE. DRAWING ON THEIR
          BACKGROUND IN INDIE FILM, THEY EAGERLY EMBRACED THE CHALLENGE TO
          INFUSE CREATIVITY WITH A BOLD, PROACTIVE SPIRIT.
          <br />
          <br />
          THEY CHAMPION THE ART OF STORYTELLING IN EVERY PROJECT. TODAY, THIS
          PRINCIPLE DRIVES AGENCĒ AS A BEACON OF INNOVATION AND DISTINCTIVENESS
          IN A WORLD HUNGRY FOR ITS MAGIC. ‍
        </p>
        <div className="flex justify-center">
          <button className="mt-10 text-black mx-auto w-fit text-center text-[16px] font-medium uppercase rounded-full bg-white px-[30px] py-[16px] transition hover:bg-[#1F1F1F] hover:text-white hover:font-bold">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
}
