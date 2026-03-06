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
    <div className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip'>
      <div className="max-w-[1036px] mx-auto w-full">
        <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10 md:pb-15">
          <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
            Our <span className='bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>Services</span>
          </Heading>
          <Paragraph animate className='text-center opacity-80'>
            Tailored solutions to elevate your digital presence and drive measurable results.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <SmoothAnimtionWrapper key={service.id} className="relative group rounded-2xl overflow-hidden p-[1px]">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] opacity-100 transition-opacity duration-500"></div>

              {/* Inner Card Content */}
              <div id={service.id} className="relative flex flex-col gap-6 p-6 sm:p-8 lg:p-10 bg-[#171717] rounded-2xl overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute pointer-events-none -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>

                {/* Title */}
                <Heading Tag='h3' className='text-2xl sm:text-3xl font-medium text-white! bg-transparent! relative z-10'>
                  {service.title}
                </Heading>

                {/* Problem & Solution */}
                <div className="flex flex-col gap-4 relative z-10">
                  <div>
                    <Paragraph className="!text-base font-semibold mb-2">The Problem:</Paragraph>
                    <Paragraph className="opacity-70 !text-sm sm:!text-base">{service.problem}</Paragraph>
                  </div>
                  <div>
                    <Paragraph className="!text-base font-semibold mb-2">The Solution:</Paragraph>
                    <Paragraph className="opacity-70 !text-sm sm:!text-base">{service.solution}</Paragraph>
                  </div>
                </div>

                {/* Benefits */}
                <div className="relative z-10">
                  <Paragraph className="!text-base font-semibold mb-3">Key Benefits:</Paragraph>
                  <ul className="flex flex-col gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white/50 mt-1">•</span>
                        <Paragraph className="opacity-70 !text-sm sm:!text-base flex-1">{benefit}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 mt-2">
                  <Link href="/start-project">
                    <Button className="w-full sm:w-auto">
                      {service.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </SmoothAnimtionWrapper>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="bg-[#EAFFFF] opacity-60 blur-[200px] w-[415px] h-[129px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  )
}

export default Services