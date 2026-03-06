"use client";
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const ethosData = [
    {
        title: "Our Mission",
        description: "To empower visionary tech founders by providing world-class, conversion-engineered digital platforms that accelerate growth and dominate markets."
    },
    {
        title: "Our Vision",
        description: "To be the definitive technical partner for the next generation of unicorn SaaS companies, setting the gold standard for modern web performance."
    },
    {
        title: "Core Values",
        values: [
            { label: "Performance First:", text: "Speed is a feature." },
            { label: "Radical Transparency:", text: "No black-box development." },
            { label: "Pixel-Perfect Precision:", text: "Detail obsession." }
        ]
    }
]

const OurMission = () => {
    return (
        <section className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip'>
            <div className="max-w-[1036px] mx-auto w-full">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
                    {ethosData.map((ethos, index) => (
                        <SmoothAnimtionWrapper key={index} className="relative group rounded-2xl overflow-hidden p-[1px] h-full flex flex-col">
                            {/* Gradient Border Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] opacity-100 transition-opacity duration-500"></div>

                            {/* Inner Card Content */}
                            <div className="relative flex flex-col h-full gap-4 p-6 sm:p-8 bg-[#171717] rounded-2xl overflow-hidden">
                                <div className="absolute pointer-events-none -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>

                                <Heading Tag='h3' className='text-xl sm:text-2xl font-medium text-white! bg-transparent! relative z-10 !text-left'>
                                    {ethos.title}
                                </Heading>

                                {ethos.description && (
                                    <Paragraph className="opacity-70 relative z-10 !text-left !text-sm sm:!text-base leading-relaxed">
                                        {ethos.description}
                                    </Paragraph>
                                )}

                                {ethos.values && (
                                    <ul className="flex flex-col gap-3 relative z-10">
                                        {ethos.values.map((value, idx) => (
                                            <li key={idx} className="flex flex-col gap-1">
                                                <span className="text-white font-semibold text-sm sm:text-base">{value.label}</span>
                                                <Paragraph className="opacity-70 !text-left !text-sm">
                                                    {value.text}
                                                </Paragraph>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </SmoothAnimtionWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurMission