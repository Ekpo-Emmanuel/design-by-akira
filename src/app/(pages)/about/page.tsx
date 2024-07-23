import React from 'react'
import Banner from '@/components/Heros/Banner'
import AboutUs from '@/components/About Us/AboutUs'
import Stats from '@/components/About Us/Stats'
import Cta1 from '@/components/CTAs/Cta1'

export default function page() {
  return (
    <div>
      <Banner main="About" sub="us" />
      <AboutUs />
      <Stats />
      <Cta1 />
    </div>
  )
}
