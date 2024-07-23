import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen relative bg-black flex items-center justify-center text-white">
      <div>
        <h1 className="text-[25px] sm:text-[28px] md:text-[22px] font-semibold text-center tracking-tighter leading-[35px] max-w-md mx-auto">
          OOPS, IT LOOKS LIKE YOU'VE TAKEN A WRONG TURN. LET'S GET YOU BACK ON
          TRACK.
        </h1>
        <div className="flex justify-center">
          <Link href="/" className="mt-10 text-black text-center text-[15px] font-semibold uppercase rounded-full bg-white px-[30px] py-[17px] transition hover:bg-[#1F1F1F] hover:text-white hover:font-bold">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
