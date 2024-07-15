import React from 'react'


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
        <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>Everything you need</h2>
        <p className='mt-5 text-center text-xl text-white/70 md:max-w-xl md:mx-auto'>
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
        </p>
        <div className='mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {features.map((feature, index) => (
                <div key={index} className="border border-white/30 px-5 py-10 text-center rounded-xl">
                    <div className='inline-flex justify-center h-14 w-14 bg-white text-black items-center rounded-lg'></div>{/* icons */}
                    <h3 className='text-2xl font-bold mt-6'>{feature.title}</h3>
                    <p className='mt-2 text-white/70'>{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
