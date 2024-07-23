import React from 'react'
import Banner from '@/components/Heros/Banner'
import ContactForm from '@/components/Forms/ContactForm'
import Cta1 from '@/components/CTAs/Cta1'


export default function page() {
  return (
    <div>
      <Banner main="Stay in" sub="touch" />
      <ContactForm />
      <Cta1 />
    </div>
  )
}
