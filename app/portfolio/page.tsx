import Hero from '@/components/common/Hero'
import Portfolio from '@/components/portfolio/Portfolio'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero badge='Data-Driven Results' heading='Proof is in the' highlightLabelText='Performance.' para='We build digital products that look beautiful and perform ruthlessly. Explore our recent case studies and see the data behind the design.' btn1='Build Your Next Project' btn1Link='/contact' btn2='View Case Studies ↓' btn2Link='#' />
            <Portfolio />
        </div>
    )
}

export default page