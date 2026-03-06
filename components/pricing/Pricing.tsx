"use client"

import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Button from '../common/Button'
import Badge from '../common/Badge'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const pricingData = [
  {
    id: "starter",
    title: "Starter",
    idealFor: "Ideal for: Pre-seed startups needing an elite landing page to validate ideas or capture early leads.",
    price: "Starting at $5,000",
    features: [
      "High-converting single-page architecture",
      "Custom UI/UX Design (No templates)",
      "Next.js & Tailwind CSS development",
      "Lead capture form integration",
      "Basic on-page SEO setup"
    ],
    timeline: "3-4 Weeks",
    tier: "starter",
    highlighted: false
  },
  {
    id: "growth",
    title: "Growth",
    idealFor: "Ideal for: Seed/Series A SaaS companies needing a robust marketing site to scale MRR.",
    price: "Starting at $12,000",
    features: [
      "Up to 8-page custom architecture",
      "Premium animations & micro-interactions",
      "Headless CMS integration (Sanity/Strapi)",
      "Blog / Resource center setup",
      "Advanced technical SEO & schema",
      "Core Web Vitals guarantee"
    ],
    timeline: "6-8 Weeks",
    tier: "growth",
    highlighted: true,
    badge: "Most Popular"
  },
  {
    id: "premium",
    title: "Premium",
    idealFor: "Ideal for: Established tech brands requiring complex web apps, custom dashboards, or major migrations.",
    price: "Custom Quote",
    features: [
      "Unlimited pages / App views",
      "Complex API & 3rd-party integrations",
      "User authentication & dashboard UI",
      "E-commerce / Headless Shopify",
      "Dedicated QA & comprehensive testing",
      "Post-launch retainer options"
    ],
    timeline: "10+ Weeks",
    tier: "premium",
    highlighted: false
  }
]

const Pricing = () => {
  return (
    <div className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip'>
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10 md:pb-15">
          <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
            Pricing <span className='bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>Tiers</span>
          </Heading>
          <Paragraph animate className='text-center opacity-80'>
            Choose the plan that fits your growth stage and business needs.
          </Paragraph>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {pricingData.map((plan) => (
            <SmoothAnimtionWrapper 
              key={plan.id} 
              className={`relative group rounded-2xl overflow-hidden p-[1px] ${plan.highlighted ? 'lg:scale-105' : ''}`}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                plan.highlighted 
                  ? 'bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.5)_0%,_rgba(82,82,82,0.2)_50%,_rgba(184,184,184,0.5)_100%)]' 
                  : 'bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)]'
              }`}></div>

              {/* Inner Card Content */}
              <div 
                id={plan.id} 
                className={`relative flex flex-col h-full p-6 sm:p-8 rounded-2xl overflow-hidden ${
                  plan.highlighted ? 'bg-[#1A1A1A]' : 'bg-[#171717]'
                }`}
              >
                {/* Glow Effect */}
                <div className={`absolute pointer-events-none -top-20 -right-20 w-60 h-60 rounded-full blur-3xl transition-colors duration-500 ${
                  plan.highlighted ? 'bg-white/10' : 'bg-white/5 group-hover:bg-white/10'
                }`}></div>

                {/* Badge for highlighted plan */}
                {plan.badge && (
                  <div className="relative z-10 mb-4 flex justify-center">
                    <Badge>{plan.badge}</Badge>
                  </div>
                )}

                {/* Title */}
                <Heading Tag='h3' className='text-2xl sm:text-3xl font-medium text-white! bg-transparent! relative z-10 text-center mb-4'>
                  {plan.title}
                </Heading>

                {/* Ideal For */}
                <Paragraph className="opacity-70 !text-sm text-center mb-6 relative z-10">
                  {plan.idealFor}
                </Paragraph>

                {/* Price */}
                <div className="relative z-10 text-center mb-8">
                  <Heading Tag='h4' className='text-3xl sm:text-4xl font-bold text-white! bg-transparent!'>
                    {plan.price}
                  </Heading>
                </div>

                {/* Features List */}
                <div className="relative z-10 flex-grow mb-6">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-white/50 mt-1 text-lg">✓</span>
                        <Paragraph className="opacity-70 !text-sm flex-1">{feature}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="relative z-10 mb-6">
                  <Paragraph className="!text-sm text-center opacity-80">
                    <span className="font-semibold">Timeline:</span> {plan.timeline}
                  </Paragraph>
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <Link href={`/start-project?tier=${plan.tier}`} className="block">
                    <Button secondary={!plan.highlighted} className="w-full">
                      Select {plan.title}
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

export default Pricing