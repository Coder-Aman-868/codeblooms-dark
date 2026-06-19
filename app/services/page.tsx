import Hero from '@/components/common/Hero'
import Services from '@/components/services/Services'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero badge='Speed And Performance' heading='Services Engineered' highlightLabelText='for Scale.' para='From rapid SaaS landing pages to complex headless frontend architectures, we deliver high-fidelity digital products that demand attention and drive revenue.' btn1='Start Your Build' btn1Link='/contact' btn2='Explore Services ↓' btn2Link='#' />
      <Services />
    </>
  )
}

export default page