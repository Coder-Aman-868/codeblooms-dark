"use client";
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const featuresData = [
    {
        title: "Business-First Engineering",
        description: "We don't write code in a vacuum. Every technical decision—from framework choice to animation logic—is tied directly to your MRR, lead generation, and user retention goals."
    },
    {
        title: "Modern, Scalable Architecture",
        description: "Say goodbye to bloated legacy builders. We utilize the modern JAMstack, ensuring your site is secure, infinitely scalable, and incredibly fast worldwide."
    },
    {
        title: "Seamless Founder Experience",
        description: "We speak startup. We understand burn rates, funding rounds, and the need for rapid iterations. Our communication is asynchronous, clear, and focused on momentum."
    }
]

const PartnerWith = () => {
    return (
        <section className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip'>
            <div className="max-w-[1036px] mx-auto w-full">
                <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10 md:pb-15">
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
                        Why Partner With <span className='bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>CodeBlooms?</span>
                    </Heading>
                    <Paragraph animate className='text-center opacity-80'>
                        We are not a traditional agency. We are an extension of your product team.
                    </Paragraph>
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
                    {featuresData.map((feature, index) => (
                        <SmoothAnimtionWrapper key={index} className="relative group rounded-2xl overflow-hidden p-[1px] h-full flex flex-col">
                            {/* Gradient Border Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] opacity-100 transition-opacity duration-500"></div>

                            {/* Inner Card Content */}
                            <div className="relative flex flex-col h-full gap-4 p-6 sm:p-8 bg-[#171717] rounded-2xl overflow-hidden">
                                <div className="absolute pointer-events-none -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>

                                <Heading Tag='h3' className='text-xl sm:text-2xl font-medium text-white! bg-transparent! relative z-10 !text-left'>
                                    {feature.title}
                                </Heading>

                                <Paragraph className="opacity-70 relative z-10 !text-left !text-sm sm:!text-base leading-relaxed">
                                    {feature.description}
                                </Paragraph>
                            </div>
                        </SmoothAnimtionWrapper>
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="bg-[#EAFFFF] opacity-60 blur-[200px] w-[415px] h-[129px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </section>
    )
}

export default PartnerWith