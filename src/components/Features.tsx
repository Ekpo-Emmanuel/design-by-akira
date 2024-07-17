import React from 'react'
import localfont from "next/font/local";
import clsx from "clsx";

const dragon = localfont({ 
  src: [{
    path: "../../src/assets/fonts/dragon/Dragon-Angled-BF64b9feda497ca.woff"
  }],
  variable: "--font-dragon" 
});


const features = [
    {
        title: "DESIGN",
        description: "Enhance your productivit by connecting with your tools, Keeping your essentials in one place."
    },
    {
        title: "BRANDING",
        description: "Enhance your productivit by connecting with your tools, Keeping your essentials in one place."
    },
    {
        title: "MARKETING",
        description: "Enhance your productivit by connecting with your tools, Keeping your essentials in one place."
    },
]

export default function Features() {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className={clsx("md:text-center text-6xl md:text-7xl font-bold", dragon.className)}>Everything You Need</h2>
        <p className='mt-5 md:text-center text-md md:text-xl text-white/70 md:max-w-xl md:mx-auto'>
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
        </p>
        <div className='mt-20 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center justiy-center ">
                <div className='inline-flex justify-center size-12  bg-white/10 text-black items-center rounded-[0.75rem] box-border'>
                    {/* icons */}
                </div>
                <h3 className='mt-6 text-3xl lg:text-4xl text-center font-bold tracking-tighter'>{feature.title}</h3>
                <p className='mt-2 text-white/70 text-center text-base sm:mt-4'>{feature.description}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}
