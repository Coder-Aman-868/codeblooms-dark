import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const methodologySteps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your target audience, business goals, and current bottlenecks. We define the technical architecture and user journey before a single line of code is written."
    },
    {
        number: "02",
        title: "High-Fidelity Prototyping",
        description: "We transform strategic insights into interactive wireframes and premium UI/UX designs, ensuring perfect alignment with your brand's DNA and conversion goals."
    },
    {
        number: "03",
        title: "Agile Development",
        description: "This is where the magic happens. We build your site using modern, scalable frameworks (Next.js/React). You get weekly progress updates and staging links to see your product come to life."
    },
    {
        number: "04",
        title: "QA, Optimization & Launch",
        description: "Rigorous cross-browser testing, accessibility audits, and Core Web Vitals optimization. We ensure a flawless deployment that search engines love and users trust."
    }
]

const Methodology = () => {
    return (
        <div className='lg:pb-37.5 md:pb-30 sm:pb-20 pb-15 px-5 relative overflow-x-clip'>
            <div className="max-w-[1036px] mx-auto w-full flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10">
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
                        The <span className='bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>CodeBlooms Methodology</span>
                    </Heading>
                    <Paragraph animate className='text-center opacity-80'>
                        Explore how we’ve helped tech founders transform their digital presence and dominate their niches.
                    </Paragraph>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 w-full">
                    {methodologySteps.map((step, index) => (
                        <SmoothAnimtionWrapper key={index} className="relative group rounded-2xl overflow-hidden p-[1px] h-full flex flex-col">
                            {/* Gradient Border Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] opacity-100 transition-opacity duration-500"></div>

                            {/* Inner Card Content */}
                            <div className="relative flex flex-col h-full gap-4 p-6 sm:p-8 bg-[#171717] rounded-2xl overflow-hidden">
                                <div className="absolute pointer-events-none -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 relative z-10">
                                    <span className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent opacity-80">{step.number}</span>
                                    <h3 className="text-xl sm:text-2xl font-medium text-white">{step.title}</h3>
                                </div>
                                <Paragraph className="opacity-70 relative z-10 !text-left">
                                    {step.description}
                                </Paragraph>
                            </div>
                        </SmoothAnimtionWrapper>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Methodology