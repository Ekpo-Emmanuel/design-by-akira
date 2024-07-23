import React from "react";

export default function Cta1() {
  return (
    <div className="bg-[linear-gradient(to_bottom,black,#100E15,#1F1F1F)] text-white py-[72px] sm:py-24">
      <div className="px-[5%] lg:px-12 mx-auto max-w-7xl">
        <div className="sm:mt-20 text-center">
          <p className="text-6xl sm:text-[calc(5.2rem+1.5vw)] tracking-tighter">
            <span className="font-semibold">LET'S </span> 
            <span>/ </span> 
            <span className="font-semibold text-white/70">WORK.</span>
          </p>
          <button className="mt-5 text-black text-center text-[15px] font-semibold uppercase rounded-full bg-white px-[30px] py-[17px] transition hover:bg-[#1F1F1F] hover:text-white hover:font-bold">
            Get a custom proposal
          </button>
        </div>
      </div>
    </div>
  );
}
