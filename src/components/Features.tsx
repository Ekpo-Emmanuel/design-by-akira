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
        title: "Integration Ecosystem",
        description: "Enhance your productivit by connecting with your tools, Keeping your essentials in one place."
    },
    {
        title: "Integration Ecosystem",
        description: "Enhance your productivit by connecting with your tools, Keeping your essentials in one place."
    },
    {
        title: "Integration Ecosystem",
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
        <div className='mt-16 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature, index) => (
                <div key={index} className="border-l border-b border-[#242424] box-border bg-[#151515] px-5 lg:px-10 pt-12 pb-5 lg:pb-8 lg:pt-24 rounded-3xl">
                <h3 className='text-3xl lg:text-4xl font-bold tracking-tighter'>{feature.title}</h3>
                <p className='mt-2 text-white/70 text-base sm:mt-4'>{feature.description}</p>
                <div className='mt-6 inline-flex justify-center h-36 w-full bg-white/10 text-black items-center rounded-[0.75rem] box-border'>
                    {/* icons */}
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}
