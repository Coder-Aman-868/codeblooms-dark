import Hero from '@/components/common/Hero'
import Faq from '@/components/pricing/Faq'
import Pricing from '@/components/pricing/Pricing'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero badge='Transparent Investment' heading='Investment in' highlightLabelText='Growth.' para='Premium engineering requires a serious commitment. We offer transparent, scope-defined packages designed to deliver maximum ROI for your stage of growth.' btn1='Get a Custom Quote' btn1Link='/contact' btn2='VCompare Tiers ↓' btn2Link='#' />
            <Pricing />
            <Faq />
        </>
    )
}

export default page