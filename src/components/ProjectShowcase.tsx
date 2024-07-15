import React from 'react'
import Image from 'next/image'

export default function ProjectShowcase() {
  return (
    <div className="bg-gradient-to-b from-black to-[#5D2CA8] text-white py-[72px] sm:py-24">
        <div className="container">
            <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>Intuitive Interface</h2>
            <p className='mt-5 text-center text-lg text-white/70 md:max-w-xl md:mx-auto'>
                Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
            </p>
            <div className='mt-14 flex justify-center'>
                <img 
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f474fb202132135.6680f834de432.png"
                    alt="photo"
                    className='rounded-2xl'
                />
            </div>
        </div>
    </div>
  )
}
