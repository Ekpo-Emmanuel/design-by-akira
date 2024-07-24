import localfont from "next/font/local";
import clsx from "clsx";
import Mouse from "@/components/SVG/Mouse";
import Link from "next/link";


const dragon = localfont({
  src: [
    {
      path: "../../../src/assets/fonts/dragon/Dragon-Angled-BF64b9feda497ca.woff",
    },
  ],
  variable: "--font-dragon",
});

export default function Hero2() {
  return (
    <header
      className="header-digital center-content  d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage:
          'url("https://cdn.prod.website-files.com/6699127e096d9b4737ef1160/66991a01fb620d93a3c1cad3_Background.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="h-full sm:flex sm:flex-col sm:items-center sm:justify-center py-32 bg-[linear-gradient(to_bottom,transparent,transparent,black)] text-white px-8">
        <div className="mt-10">
          <h1
            className={clsx(
              "relative antialiased text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] md:font-bold font-medium uppercase"
            )}
          >
            World class Designs,
            <br />
            right at your
            <br />
            fingertips
          </h1>
          <Link href="/contact-us">
            <button  className="mt-10 text-black text-center text-[15px] font-semibold uppercase rounded-full bg-white px-[30px] py-[17px] transition hover:bg-[#1F1F1F] hover:text-white hover:font-bold">
              Get started  
            </button>
          </Link>
          <div className="mt-20 flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">  
            <Mouse />
          </div>
        </div>
      </div>
    </header>
  );
}
