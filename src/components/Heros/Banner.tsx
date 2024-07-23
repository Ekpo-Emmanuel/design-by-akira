import React from 'react'
import clsx from "clsx";
import Mouse from "@/components/SVG/Mouse";

interface bannerProps {
    main: string;
    sub: string;
}

export default function Banner(props:bannerProps) {
  return (
    <header
      className="header-digital center-content  d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage:
          'url("https://cdn.prod.website-files.com/6699127e096d9b4737ef1160/66991a01fb620d93a3c1cad3_Background.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-20 sm:py-32 md:py-40 bg-[linear-gradient(to_bottom,#100E15,transparent,black)] text-white px-8">
      <div className="mt-10">
          <h1
            className={clsx(
              "relative antialiased text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-medium uppercase"
            )}
          >
            {props.main}
            <span className="text-white/60"> {props.sub}</span>
          </h1>
          <div className="mt-10 md:mt-20 flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">  
            <Mouse />
          </div>
        </div>
      </div>
    </header>
  )
}
