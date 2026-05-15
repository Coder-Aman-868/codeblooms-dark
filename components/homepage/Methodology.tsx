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
                        <SmoothAnimtionWrapper key={index} className="relative group rounded-2xl overflow-hidden  h-full flex flex-col">
                            {/* Inner Card Content */}
                            <div className="relative flex flex-col h-full gap-4 p-6 sm:p-8 pb-12! rounded-2xl overflow-hidden card-border before:rounded-2xl">
                                <div className="h-10.75 w-[80%] absolute -top-20 left-1/2 -translate-x-1/2 bg-white blur-[40px] opacity-0 scale-20 duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
                                {/* <div className="h-6.75 w-[95%] absolute top-0 left-1/2 -translate-x-1/2 bg-white blur-[30px] scale-95 opacity-0 translate-y-6  group-hover:translate-y-0 duration-800 ease-out will-change-transform"></div> */}
                                <span className="absolute sm:-bottom-5 sm:-right-1 -bottom-4 -right-1.75 leading-none text-8xl sm:text-9xl font-bold bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent opacity-40">{step.number}</span>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 relative z-10">
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