import React from "react";
import Image from "next/image";
import LogoImage from "../../assets/images/logo.svg";
import MenuIcon from "../../assets/icons/menu_icon.svg"

export default function Navbar() {
  return (
    <div className="bg-black">
        <div className="px-4">
        <div className="py-4 flex items-center justify-between">
            <div className="relative">
                <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
                <LogoImage className="relative w-12 h-12" />
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
                <MenuIcon className="text-white" />
            </div>
            <nav className="hidden sm:flex items-center gap-6">
                <a href="#" className="text-white font-medium text-opacity-60 hover:text-opacity-100 transition">About</a>
                <a href="#" className="text-white font-medium text-opacity-60 hover:text-opacity-100 transition">Features</a>
                <a href="#" className="text-white font-medium text-opacity-60 hover:text-opacity-100 transition">Update</a>
                <a href="#" className="text-white font-medium text-opacity-60 hover:text-opacity-100 transition">Help</a>
                <a href="#" className="text-white font-medium text-opacity-60 hover:text-opacity-100 transition">Customers</a>
                <button className="bg-white py-2 px-4 rounded-lg">Get for Free</button>
            </nav>
        </div>
        </div>
    </div>
  );
}
