"use client"

import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Button from '../common/Button'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const servicesData = [
  {
    id: "custom-web",
    title: "Custom Website Development",
    problem: "Off-the-shelf templates limit your brand identity and weigh down your site with unnecessary code, hurting both your SEO and user experience.",
    solution: "We architect bespoke websites from the ground up. Tailored exactly to your user personas, heavily optimized for search engines, and built with maintainable, clean code.",
    benefits: [
      "100% unique brand positioning",
      "Future-proof, scalable architecture",
      "Seamless third-party API integrations"
    ],
    cta: "Build Your Custom Site"
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page Development",
    problem: "You have an incredible software product, but your landing page fails to convert visitors into free trials or booked demos due to poor messaging hierarchy and friction.",
    solution: "Conversion-focused landing pages built with behavioral psychology in mind. We structure content, micro-interactions, and CTAs to guide the user naturally toward conversion.",
    benefits: [
      "Lower Customer Acquisition Cost (CAC)",
      "Higher lead quality and volume",
      "A/B testing ready structures"
    ],
    cta: "Optimize Your Conversions"
  },
  {
    id: "frontend-dev",
    title: "Frontend Development (React / Next.js)",
    problem: "Your current frontend is a monolithic mess. It takes developers weeks to ship simple changes, and the UI feels clunky to the end user.",
    solution: "We leverage React and Next.js to build modular, component-driven user interfaces. This headless approach separates your data from your presentation layer for ultimate speed and flexibility.",
    benefits: [
      "App-like transitions and speed",
      "Reusable UI component libraries",
      "Enhanced developer velocity for your internal team"
    ],
    cta: "Upgrade Your Frontend"
  },
  {
    id: "redesign",
    title: "Website Redesign",
    problem: "Your brand has outgrown your website. It looks dated, doesn't reflect your current enterprise offering, and is embarrassing to share with investors.",
    solution: "A strategic overhaul. We don't just change colors; we rethink the user experience, update the tech stack, and align the aesthetic with your premium market positioning.",
    benefits: [
      "Modernized brand perception",
      "Improved trust and credibility",
      "Better alignment with enterprise buyers"
    ],
    cta: "Revamp Your Brand"
  },
  {
    id: "performance",
    title: "Performance Optimization",
    problem: "Slow load times are killing your conversion rates. Google is penalizing your search rankings because your Core Web Vitals are failing.",
    solution: "A deep-dive technical audit and refactor. We optimize image delivery, eliminate render-blocking resources, implement advanced caching strategies, and minimize main-thread work.",
    benefits: [
      "Near-instant page loads",
      "Higher organic search rankings (SEO)",
      "Decreased bounce rates"
    ],
    cta: "Boost Your Speed"
  }
]

const Services = () => {
  return (
    <div className='py-20 md:py-28 lg:py-32 px-5 relative overflow-x-clip border-t border-white/5'>
      <div className="max-w-[1036px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-4 max-w-[800px] mx-auto pb-16 md:pb-24">
          <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-light tracking-tight text-center text-white! bg-transparent!'>
            Our <span className='font-normal border-b border-white/20 pb-1'>Services</span>
          </Heading>
          <Paragraph animate className='text-center opacity-60 font-light text-lg'>
            Tailored engineering solutions to elevate your digital presence and drive measurable results.
          </Paragraph>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] sm:left-[39px] top-8 bottom-8 w-[1px] bg-white/10"></div>

          <div className="flex flex-col gap-12 sm:gap-20">
            {servicesData.map((service, index) => (
              <SmoothAnimtionWrapper key={service.id} className="relative group flex items-start w-full">
                
                {/* Timeline Dot */}
                <div className="relative flex-none w-[30px] sm:w-[80px] h-full flex flex-col items-center pt-2.5">
                    {/* Glowing Dot */}
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-black flex items-center justify-center relative z-10 transition-all duration-700 group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-700"></div>
                    </div>
                </div>

                {/* Content Container */}
                <div id={service.id} className="flex-1 ml-4 sm:ml-8 relative">
                  {/* Subtle hover glow behind content */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[120%] bg-gradient-to-r from-white/5 to-transparent blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full"></div>

                  <div className="flex flex-col gap-6 relative z-10 pb-6 sm:pb-8 border-b border-white/0 group-hover:border-white/10 transition-colors duration-700">
                    
                    {/* Title */}
                    <Heading Tag='h3' className='text-2xl sm:text-4xl font-light tracking-wide text-white! bg-transparent!'>
                      {service.title}
                    </Heading>

                    {/* Problem / Solution Grid */}
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mt-2">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-semibold tracking-widest text-white/30 uppercase">The Problem</span>
                        <Paragraph className="opacity-60 font-light leading-relaxed !text-sm sm:!text-base group-hover:opacity-80 transition-opacity duration-500">
                            {service.problem}
                        </Paragraph>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-semibold tracking-widest text-[#B8B8B8] uppercase">Our Solution</span>
                        <Paragraph className="opacity-60 font-light leading-relaxed !text-sm sm:!text-base group-hover:opacity-90 transition-opacity duration-500">
                            {service.solution}
                        </Paragraph>
                      </div>
                    </div>

                    {/* Benefits Tags */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                      {service.benefits.map((benefit, idx) => (
                        <span key={idx} className="px-5 py-2.5 border border-white/5 rounded-full text-xs sm:text-sm font-light text-white/40 group-hover:border-white/20 group-hover:text-white/80 transition-all duration-500 bg-black shadow-[0_4px_20px_rgba(255,255,255,0.02)]">
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <Link href="/start-project">
                        <Button secondary className="py-3 px-8 !text-sm border-white/10 hover:border-white/30 rounded-full group">
                          {service.cta} <span className="ml-2 font-normal opacity-50 group-hover:opacity-100 transition-opacity">→</span>
                        </Button>
                      </Link>
                    </div>

                  </div>
                </div>
              </SmoothAnimtionWrapper>
            ))}
          </div>
        </div>

      </div>

      {/* Subtle Minimal Background Glow */}
      <div className="bg-white/5 blur-[150px] w-full max-w-[800px] h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    </div>
  )
}

export default Services