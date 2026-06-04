"use client"

import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const pricingData = [
  {
    id: "starter",
    title: "Starter",
    idealFor: "For early startups needing an elite landing page to validate ideas.",
    price: "$5,000",
    features: [
      "High-converting single-page architecture",
      "Custom UI/UX Design (No templates)",
      "Next.js & Tailwind CSS development",
      "Lead capture form integration",
      "Basic on-page SEO setup"
    ],
    timeline: "3-4 Weeks",
    tier: "starter",
    highlighted: false,
    colorTheme: "blue"
  },
  {
    id: "growth",
    title: "Growth",
    idealFor: "For scaling SaaS companies needing a robust marketing site to drive MRR.",
    price: "$12,000",
    features: [
      "Up to 8-page custom architecture",
      "Premium animations & interactions",
      "Headless CMS integration",
      "Blog / Resource center setup",
      "Advanced technical SEO & schema",
      "Core Web Vitals guarantee"
    ],
    timeline: "6-8 Weeks",
    tier: "growth",
    highlighted: true,
    badge: "POPULAR",
    colorTheme: "white"
  },
  {
    id: "premium",
    title: "Premium",
    idealFor: "For established tech brands requiring custom web apps or major migrations.",
    price: "Custom",
    features: [
      "Unlimited pages / App views",
      "Complex API integrations",
      "User authentication & UI",
      "E-commerce / Headless Shopify",
      "Dedicated QA & testing",
      "Post-launch retainer options"
    ],
    timeline: "10+ Weeks",
    tier: "premium",
    highlighted: false,
    colorTheme: "green"
  }
]

const Pricing = () => {
  return (
    <div className='py-20 md:py-32 px-5 relative overflow-hidden'>
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="flex flex-col justify-center items-center gap-4 max-w-[600px] mx-auto pb-12 md:pb-16">
          <Heading animate Tag='h2' className='text-3xl md:text-5xl font-medium text-center text-white! bg-transparent!'>
            Pricing Plans
          </Heading>
          <Paragraph animate className='text-center opacity-60 text-sm md:text-base'>
            Transparent pricing for high-performance web experiences. Choose a plan that fits your growth stage.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingData.map((plan) => (
            <SmoothAnimtionWrapper key={plan.id} className="h-full">
              <div
                className={`relative flex flex-col h-[100%] p-8 md:p-10 rounded-[28px] bg-[#0c0c0e] border border-white/5 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.05),_0px_20px_40px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-[inset_0px_1px_1px_rgba(255,255,255,0.08),_0px_30px_50px_rgba(0,0,0,0.6)]`}
              >
                {/* Decorative subtle noise/texture overlay could go here, but omitted for clean tailwind */}

                {/* Top-left colored glow */}
                <div className={`absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[100px] opacity-[0.15] pointer-events-none transition-opacity duration-500 ${plan.colorTheme === 'blue' ? 'bg-blue-500' : plan.colorTheme === 'white' ? 'bg-white' : 'bg-emerald-500'
                  }`}></div>

                {/* Top-right geometric circle decorator */}
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-white/[0.03] opacity-50 pointer-events-none flex items-center justify-center">
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent absolute"></div>
                </div>

                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-8 right-8 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#18181b] border border-white/5 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1),_0_2px_10px_rgba(0,0,0,0.5)]">
                    <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-[10px] font-bold text-white/80 tracking-widest leading-none mt-[1px]">{plan.badge}</span>
                  </div>
                )}

                <div className="relative z-10 flex-grow flex flex-col">
                  {/* 3D Icon Box */}
                  <div className="w-11 h-11 rounded-[10px] relative shadow-[inset_0px_1px_2px_rgba(255,255,255,0.5),_0px_6px_15px_rgba(0,0,0,0.5)] mb-8 overflow-hidden">
                    <div className="absolute inset-px rounded-[10px] bg-gradient-to-b from-white/20 to-transparent z-10"></div>
                    <div className={`absolute inset-0 z-0 ${plan.colorTheme === 'blue' ? 'bg-gradient-to-b from-blue-300 to-[#1d4ed8]' :
                        plan.colorTheme === 'white' ? 'bg-gradient-to-b from-white to-[#9ca3af]' :
                          'bg-gradient-to-b from-emerald-300 to-[#047857]'
                      } opacity-90`}></div>
                    <div className="absolute inset-0 shadow-[inset_0_-2px_6px_rgba(0,0,0,0.4)] rounded-[10px] z-20 pointer-events-none"></div>
                  </div>

                  <Heading Tag='h3' className='text-[22px] font-medium text-white! bg-transparent! mb-5'>
                    {plan.title === 'Premium' ? 'Advance Plan' : `${plan.title} Plan`}
                  </Heading>

                  <div className="mb-6 flex items-baseline gap-1">
                    <Heading Tag='h4' className={`${plan.price === 'Custom' ? 'text-[40px]' : 'text-[54px]'} font-medium text-white! bg-transparent! tracking-[-0.02em] leading-none`}>
                      {plan.price}
                    </Heading>
                    {plan.price !== "Custom" && <span className="text-white/40 text-[15px] font-medium ml-1">/starting</span>}
                  </div>

                  <Paragraph className="opacity-40 !text-[15px] leading-[1.6] mb-8 min-h-[72px]">
                    {plan.idealFor}
                  </Paragraph>

                  {/* Button */}
                  <div className="mb-0">
                    <Link href={`/start-project?tier=${plan.tier}`} className="block">
                      <button className={`w-full py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 relative overflow-hidden ${plan.highlighted
                          ? 'bg-gradient-to-b from-[#f5f5f5] to-[#d4d4d4] text-black shadow-[inset_0px_1px_1px_rgba(255,255,255,1),_0_2px_15px_rgba(255,255,255,0.1)] hover:to-[#e5e5e5]'
                          : 'bg-[#212123] text-white/90 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.08),_0_4px_12px_rgba(0,0,0,0.3)] border border-white/[0.04] hover:bg-[#2a2a2d] hover:text-white'
                        }`}>
                        {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                      </button>
                    </Link>
                  </div>

                  {/* Divider line for features */}
                  <div className="flex items-center gap-4 my-8">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                    <span className="text-[10px] text-white/30 font-bold tracking-[0.15em] uppercase">Stand out features</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
                  </div>

                  <div className="flex-grow">
                    <ul className="flex flex-col gap-[18px]">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3.5">
                          <div className="mt-[3px] flex-shrink-0 text-white/[0.25]">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <Paragraph className="opacity-60 !text-[15px] leading-snug">{feature}</Paragraph>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Embedded Timeline */}
                  {plan.timeline && (
                    <div className="mt-8 pt-6 border-t border-white/[0.05]">
                      <Paragraph className="text-[13px] text-white/40">
                        Estimated Timeline: <span className="text-white/70 font-medium">{plan.timeline}</span>
                      </Paragraph>
                    </div>
                  )}

                </div>
              </div>
            </SmoothAnimtionWrapper>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing