"use client";

import React from "react";
import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-right.svg";
import Hand1 from "../assets/images/hand1.png";
import Hand2 from "../assets/images/hand2.png";

export default function Hero() {
  return (
    <div className="relative text-white py-[72px] sm:py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="border py-1 px-2 rounded-lg border-white/30 inline-flex gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#F87BFF,#FFDD9B,#C2F0B1,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Verson 2.0 is here
            </span>
            <div className="flex items-center gap-1">
              <span>Read more</span>
              <ArrowIcon className="size-5 text-white" />
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex relative mt-8 ">
            <h1 className="bg-[linear-gradient(to_bottom,white,rgba(0,0,0,0))] text-transparent bg-clip-text [-webkit-background-clip:text] text-7xl sm:text-9xl font-medium sm:font-bold tracking-tighter text-center inline-flex">
              One Task
              <br />
              at a Time
            </h1>
            <Image
              src={Hand1}
              className="hidden sm:inline absolute right-[476px] top-[108px]"
              height="200"
              width="200"
              alt="Hand1"
            />
            <Image
              src={Hand2}
              className="hidden sm:inline absolute top-[56px] left-[498px]"
              height="200"
              width="200"
              alt="Hand2"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-md sm:text-xl tracking-tight mt-8 max-w-md text-white/80">
            Seamaless design subscriptions, No hiring, no micromanagenent, no hassle
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get Started
          </button> */}
          <button className="bg-white text-black font-medium py-3 px-5 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 hover:shadow-purple-500/50">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
