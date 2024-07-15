import React from "react";
import Image from "next/image";

export default function LogoTicker() {
  const brand =
    "https://www.akiramediamarketing.com/assets/images/brands/remix.png";
  const brandImages = Array(5).fill(brand);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted By the world's most innovative companies</h2>
        <div className="overflow-hidden mt-9 relative
        before:content-[''] before:absolute before:h-full before:w-5 before:left-0  before:top-0  before:bg-[linear-gradient(to_right,#000,#000,rgb(0,0,0,0))] 
        after:content-[''] after:absolute after:h-full after:w-5  after:right-0  after:top-0  after:bg-[linear-gradient(to_right,rgb(0,0,0,0),#000)]">
            <div className="flex items-center justify-center gap-16">
                {brandImages.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt="brand" 
                        height={200} 
                        width={200} 
                        className="flex-none h-8 w-auto opacity-30"
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
