'use client'
import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "../../assets/images/logo.png";
import { Plus, X } from 'lucide-react'; 
import Link from "next/link";

export default function Navbar1() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="justify-center w-full fixed top-0 z-50">  
      <div className="px-4">
        <div className="py-4 flex items-center justify-between lg:px-12 max-w-[90rem] mx-auto ">
          <Link href="/" className="relative">
            <Image
              src={LogoImage}
              alt="Design By Akira Logo"
              className="relative w-24 h-auto"
            />
          </Link>
          <div
            className="border border-white transition hover:bg-black/20 cursor-pointer text-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-full md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={25} /> : <Plus size={25} />} {/* Toggle icon */}
          </div>
          <nav className={`sm:flex items-center gap-6 ${isMobileMenuOpen ? 'fixed flex flex-col top-20 left-1/2 -translate-x-1/2 bg-black rounded-3xl w-[92%] py-[30px] ' : 'hidden'} sm:block`}>
            <Link
              href="/"
              className="text-white uppercase text-[15px] font-semibold hover:text-opacity-100 transition"
              onClick={handleCloseMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white uppercase text-[15px] font-semibold hover:text-opacity-100 transition"
              onClick={handleCloseMenu}
            >
              About
            </Link>
            {/* <Link
              href="#"
              className="text-white uppercase text-[15px] font-semibold hover:text-opacity-100 transition"
              onClick={handleCloseMenu}
            >
              Works
            </Link> */}
            {/* <Link
              href="#"
              className="text-white uppercase text-[15px] font-semibold hover:text-opacity-100 transition"
              onClick={handleCloseMenu}
            >
              Faqs
            </Link> */}
            <Link
              href="/contact-us"
              className="text-black text-center text-[15px] font-semibold uppercase rounded-full bg-white px-[30px] py-[17px] transition hover:bg-[#1F1F1F] hover:text-white"
              onClick={handleCloseMenu}
            >
              Get started
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
