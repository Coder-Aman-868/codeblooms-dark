import FounderStory from '@/components/about/FounderStory'
import OurArsenal from '@/components/about/OurArsenal'
import OurMission from '@/components/about/OurMission'
import PartnerWith from '@/components/about/PartnerWith'
import Hero from '@/components/common/Hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero badge='Expert-Led Studio' heading="We Build the Web's Most" highlightLabelText='Ambitious Startups.' para='CodeBlooms is a premium, expert-led web development studio bridging the gap between top-tier aesthetics and ruthless technical performance.' btn1='Partner With Us' btn1Link='/contact' btn2='Read Our Story ↓' />
            <FounderStory />
            <OurMission />
            <PartnerWith />
            <OurArsenal />
        </div>
    )
}

export default page