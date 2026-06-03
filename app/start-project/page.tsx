import Hero from '@/components/common/Hero'
import ProjectBrief from '@/components/start-project/ProjectBrief'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero badge='Now Accepting New Projects' heading='Initiate Your' highlightLabelText='Project.' para='To provide you with the most accurate strategy and pricing, please provide some details about your goals. This takes about 2 minutes.' btn1='Fill Out Project Brief' btn1Link='/start-project' btn2='View Pricing Tiers' btn2Link='/pricing' />
            <ProjectBrief />
        </>
    )
}

export default page