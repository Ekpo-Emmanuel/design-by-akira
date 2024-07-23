import React from "react";

export default function Stats() {
    const stats = [
        { name: "310+", desc: "project completed" },
        { name: "16", desc: "Years of experience" },
        { name: "103", desc: "Awards" },
    ]
  return (
    <div className="relative bg-black">
      <div className="px-4 py-32 md:px-12 max-w-7xl mx-auto text-white">
        <h1 className="relative text-[25px] sm:text-[28px] md:text-[22px] font-semibold text-center tracking-tighter leading-[35px] max-w-md mx-auto">
          WE'VE ANALYZED THE DATA AND HAVE COMPELLING STATISTICS TO SHARE
        </h1>
        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-0 items-center justify-center text-center">
                    <h1 className="text-[70px] sm:text-[107px] font-medium tracking-tighter">{stat.name}</h1>
                    <span className="text-[18px] font-semibold uppercase leading-[0] tracking-tighter">{stat.desc}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
