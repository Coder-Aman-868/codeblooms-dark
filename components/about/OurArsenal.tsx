"use client";
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const techStackData = [
    {
        category: "Frontend:",
        technologies: "React, Next.js, TypeScript"
    },
    {
        category: "Styling:",
        technologies: "Tailwind CSS, Framer Motion"
    },
    {
        category: "CMS / Backend:",
        technologies: "Sanity, Strapi, Supabase"
    },
    {
        category: "Hosting & CI/CD:",
        technologies: "Vercel, AWS"
    }
]

const OurArsenal = () => {
    return (
        <section className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip bg-[#030303]'>
            <div className="max-w-[1036px] mx-auto w-full">
                <SmoothAnimtionWrapper className="flex flex-col gap-8 sm:gap-10">
                    <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto">
                        <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
                            Our Arsenal of <span className='bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>Choice</span>
                        </Heading>
                        <Paragraph animate className='text-center opacity-80 leading-relaxed'>
                            We specialize in a focused, high-end technology stack. We don't try to be everything to everyone; we master the tools that deliver the best results for modern tech brands.
                        </Paragraph>
                    </div>

                    <div className="relative group rounded-2xl overflow-hidden p-[1px] max-w-[700px] mx-auto w-full">
                        {/* Gradient Border Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] opacity-100 transition-opacity duration-500"></div>

                        {/* Inner Card Content */}
                        <div className="relative flex flex-col gap-5 p-6 sm:p-8 lg:p-10 bg-[#171717] rounded-2xl overflow-hidden">
                            <div className="absolute pointer-events-none -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>

                            <ul className="flex flex-col gap-4 relative z-10">
                                {techStackData.map((tech, index) => (
                                    <li key={index} className="flex flex-col sm:flex-row sm:items-start gap-2">
                                        <span className="text-white font-semibold text-base sm:text-lg min-w-fit">{tech.category}</span>
                                        <Paragraph className="opacity-70 !text-left !text-sm sm:!text-base">
                                            {tech.technologies}
                                        </Paragraph>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </SmoothAnimtionWrapper>
            </div>
        </section>
    )
}

export default OurArsenal