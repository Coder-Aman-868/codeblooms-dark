"use client"

import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Button from '../common/Button'

const pricingData = [
  {
    id: "starter",
    title: "Starter",
    idealFor: "For early startups needing an elite landing page to validate ideas.",
    price: "$5,000",
    prevPrice: "$6,000",
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
    prevPrice: "$15,000",
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
    prevPrice: "Custom",
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

        <div className="flex flex-col gap-6 justify-center items-center">
          {pricingData.map((plan) => (
            <div key={plan.id} className="card-border before:rounded-2xl after:rounded-2xl rounded-2xl backdrop-blur-sm p-8 flex items-center justify-between sm:flex-row flex-col sm:gap-12 gap-8 sm:max-w-[900px] max-w-[400px] w-full">

              {/* <!-- Left: price + button --> */}
              <div className="flex flex-col gap-5 sm:flex-1 max-sm:w-full min-w-[160px]">
                <div>
                  <p className="text-(--color-secondary)/80 text-base line-through sm:mb-8 mb-2">{plan.prevPrice}</p>
                  <div className="flex items-baseline gap-1 sm:mb-6 mb-0">
                    <span className="text-5xl font-bold text-white/90">{plan.price}</span>
                    <span className="text-sm text-(--color-secondary) ml-1">/Month</span>
                  </div>
                </div>
                <Button secondary className='max-w-max border-white/80! hover:border-(--color-secondary)/50!'>Get Started</Button>
              </div>

              {/* <!-- Divider --> */}
              <div className="sm:w-px w-full sm:h-auto h-px bg-(--color-secondary) self-stretch"></div>

              {/* <!-- Right: feature list --> */}
              <div className="flex flex-col gap-3 sm:flex-1 max-sm:w-full">
                {
                  plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="8.25" stroke="var(--color-secondary)" stroke-width="1.2" />
                        <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="var(--color-secondary)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing