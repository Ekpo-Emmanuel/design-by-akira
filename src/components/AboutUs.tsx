import React from "react";
import localfont from "next/font/local";
import clsx from "clsx";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const dragon = localfont({
  src: [
    {
      path: "../../src/assets/fonts/dragon/Dragon-Angled-BF64b9feda497ca.woff",
    },
  ],
  variable: "--font-dragon",
});

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-black to-[#5D2CA8] text-white py-[72px] sm:py-24">
      <div className="container">
        <div>
          <h2
            className={clsx(
              "md:text-center text-6xl md:text-7xl font-bold",
              dragon.className
            )}
          >
            We’re Award-Winning
            <span className="font-extralight"> Development</span> Agencies
          </h2>
          <p className="mt-5 md:text-center text-lg md:text-xl text-white md:max-w-xl md:mx-auto tracking-tight">
            If you ask our clients what it’s like working with 36, they’ll talk
            about whether real success. We love building brands it's crafting a
            stunning brand iden how much we care about their success.
          </p>
        </div>
        <div className="mt-10 py-10 flex flex-col gap-10 items-center justify-center backdrop-blur-xl border-l border-b border-[#7d5fab] bg-white bg-opacity-10 rounded-2xl">
            <div className="flex flex-col items-center justiy-center text-center">
                <h1 className="font-bold text-5xl">+5</h1>
                <p className="mt-2 uppercase font-bold md:text-center text-lg md:text-xl text-white/70 md:max-w-xl md:mx-auto tracking-tight">
                    years of experience
                </p>
            </div>
            <div className="flex flex-col items-center justiy-center text-center">
                <h1 className="font-bold text-5xl">50K</h1>
                <p className="mt-2 uppercase font-bold md:text-center text-lg md:text-xl text-white/70 md:max-w-xl md:mx-auto tracking-tight">
                    Successful Projects
                </p>
            </div>
        </div>
        <div className="mt-10">
            <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                    <RiVerifiedBadgeFill size={25} />
                    <span className="font-medium text-lg md:text-xl">Your Site Will Be More Visible And Accessible We Are Creative</span>
                </li>
                <li className="flex items-start gap-3">
                    <RiVerifiedBadgeFill size={25} />
                    <span className="font-medium text-lg md:text-xl">Optimizing Your Web Pages To Improve Ranking Brands Taken</span>
                </li>
                <li className="flex items-start gap-3">
                    <RiVerifiedBadgeFill size={25} />
                    <span className="font-medium text-lg md:text-xl">Increase Your Sales With High-Quality SEO Services Like</span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
