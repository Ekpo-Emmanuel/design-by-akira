import localfont from "next/font/local";
import clsx from "clsx";
import Marquee from "react-fast-marquee";

const dragon = localfont({
    src: [
      {
        path: "../../src/assets/fonts/dragon/Dragon-Angled-BF64b9feda497ca.woff",
      },
    ],
    variable: "--font-dragon",
  });

export default function TextMarquee() {
  return (
    <div className="mt-10">
      <Marquee 
      pauseOnHover={false}
      pauseOnClick={false}
      className={clsx(
        "text-[10rem] tracking-[4px] font-bold",
        dragon.className
      )}
      >
            ARKETING _ EDESIGNER _ WEB DEVELOPMENT _ CHEMICATION
        </Marquee>
    </div>
  )
}
