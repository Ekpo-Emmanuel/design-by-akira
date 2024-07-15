import React from 'react'
import Link from 'next/link'

export default function ByAkira() {
  return (
    <div className='fixed bottom-5 right-5'>
      <div className='bg-white text-black py-1 px-3 rounded-lg'>
        <Link 
            href="https://www.akiramediamarketing.com" 
            target='_blank' 
            className='font-medium flex gap-1 items-center cursor-pointer'
        >
            <img 
                src='https://akira-studios.vercel.app/assets/images/logo_dark.png'
                className='filter invert size-5'
            />
            <span className='font-bold tracking-tighter text-sm'>Made by Akira</span>
        </Link>
      </div>
    </div>
  )
}
