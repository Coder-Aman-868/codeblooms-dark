"use client"

import Image from 'next/image'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const caseStudiesData = [
  {
    id: "finflow",
    title: "FinFlow: Scaling an AI FinTech SaaS",
    image: "/images/cs-finflow.jpg",
    challenge: "FinFlow had a highly complex AI product but a marketing site built on a sluggish template. Users were confused by the value proposition, and mobile bounce rates were over 75%.",
    strategy: "We tore down the existing structure to create a hyper-focused, single-path-to-conversion landing page environment. We prioritized explaining the \"Aha!\" moment of the software through interactive, data-driven animations.",
    execution: "Built completely from scratch using Next.js for SSR SEO benefits, Tailwind CSS for rapid styling, and Framer Motion for the complex scroll-triggered financial chart animations.",
    results: [
      { metric: "215%", label: "Increase in Trial Sign-ups" },
      { metric: "98/100", label: "Lighthouse Performance Score" },
      { metric: "-45%", label: "Reduction in Bounce Rate" }
    ]
  },
  {
    id: "nexus",
    title: "Nexus: AI Startup Web App Frontend",
    image: "/images/cs-nexus.jpg",
    challenge: "Nexus needed to launch their MVP ahead of their Series A funding round. Their backend API was ready, but they lacked a cohesive, premium frontend that would impress tier-1 venture capitalists.",
    strategy: "We implemented a headless architecture, decoupling the frontend to allow for rapid iteration. We focused on a dark-mode, high-contrast aesthetic that screamed \"future of work\".",
    execution: "Utilized React with TypeScript for type safety and fewer runtime errors. Integrated complex data visualization libraries to render their AI insights beautifully in real-time.",
    results: [
      { metric: "4 Weeks", label: "from Kickoff to MVP Launch" },
      { metric: "Zero", label: "Frontend Downtime during scale" },
      { metric: "$12M", label: "Series A Successfully Raised" }
    ]
  },
  {
    id: "lumina",
    title: "Lumina: Headless E-commerce Migration",
    image: "/images/cs-lumina.jpg",
    challenge: "Lumina, a tech-hardware brand, was losing sales due to terrible site latency on mobile devices. Their traditional CMS architecture couldn't handle traffic spikes during product drops.",
    strategy: "Transition the entire e-commerce experience to a Jamstack architecture. By pre-rendering product pages and serving them via a CDN, we eliminated database bottlenecks.",
    execution: "Implemented Next.js (SSG), connected to Shopify via their Storefront API. Used Sanity CMS for rich marketing content management independent of the e-commerce engine.",
    results: [
      { metric: "3x", label: "Faster Page Load Speeds" },
      { metric: "28%", label: "Increase in Mobile Conversion Rate" },
      { metric: "Flawless", label: "performance during 100k+ visitor spike" }
    ]
  }
]

const Portfolio = () => {
  return (
    <div className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip'>
      <div className="max-w-[1036px] mx-auto w-full">
        <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10 md:pb-15">
          <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
            Case <span className='bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>Studies</span>
          </Heading>
          <Paragraph animate className='text-center opacity-80'>
            Real results from real projects. See how we've helped companies scale their digital presence.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {caseStudiesData.map((study, index) => (
            <SmoothAnimtionWrapper key={study.id} className="relative group rounded-2xl overflow-hidden p-[1px]">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] opacity-100 transition-opacity duration-500"></div>

              {/* Inner Card Content */}
              <div id={study.id} className="relative flex flex-col bg-[#171717] rounded-2xl overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute pointer-events-none -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>

                {/* Image Section */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    width={1036}
                    height={583}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-6 relative z-10">
                  {/* Title */}
                  <Heading Tag='h3' className='text-2xl sm:text-3xl lg:text-4xl font-medium text-white! bg-transparent!'>
                    {study.title}
                  </Heading>

                  {/* Challenge, Strategy, Execution */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <Heading Tag='h4' className="!text-lg font-semibold mb-2 text-white! bg-transparent!">
                        The Challenge
                      </Heading>
                      <Paragraph className="opacity-70 !text-sm sm:!text-base">
                        {study.challenge}
                      </Paragraph>
                    </div>

                    <div>
                      <Heading Tag='h4' className="!text-lg font-semibold mb-2 text-white! bg-transparent!">
                        The Strategy
                      </Heading>
                      <Paragraph className="opacity-70 !text-sm sm:!text-base">
                        {study.strategy}
                      </Paragraph>
                    </div>

                    <div>
                      <Heading Tag='h4' className="!text-lg font-semibold mb-2 text-white! bg-transparent!">
                        Execution & Technologies
                      </Heading>
                      <Paragraph className="opacity-70 !text-sm sm:!text-base">
                        {study.execution}
                      </Paragraph>
                    </div>
                  </div>

                  {/* Results Section */}
                  <div className="mt-4">
                    <Heading Tag='h4' className="!text-lg font-semibold mb-4 text-white! bg-transparent!">
                      The Results
                    </Heading>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:gap-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-white/5 border border-white/10">
                          <Heading Tag='h5' className='text-2xl sm:text-3xl font-bold text-white! bg-transparent! mb-1'>
                            {result.metric}
                          </Heading>
                          <Paragraph className="opacity-70 !text-xs sm:!text-sm">
                            {result.label}
                          </Paragraph>
                        </div>
                      ))}
                    </div>
                  </div>
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

export default Portfolio