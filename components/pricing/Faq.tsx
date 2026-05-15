"use client"

import React, { useState } from 'react'
import Paragraph from '../common/Paragraph'

const faqData = [
  {
    id: 1,
    question: "Do you work with WordPress or Webflow?",
    answer: "We are strictly a code-first studio. We specialize in React and Next.js because they offer unparalleled performance, security, and scalability that visual builders cannot match for enterprise or high-growth tech brands."
  },
  {
    id: 2,
    question: "What are your payment terms?",
    answer: "Typically, we operate on a 50% upfront deposit to secure your spot in our development schedule, followed by 25% at a major project milestone, and the final 25% prior to deployment."
  },
  {
    id: 3,
    question: "Will I be able to edit the content myself?",
    answer: "Absolutely. For the Growth and Premium tiers, we integrate a modern headless CMS (like Sanity) tailored to your exact data structure. This gives your marketing team complete control over copy and images without touching code."
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer: "Project timelines vary by scope. Starter projects typically take 3-4 weeks, Growth projects 6-8 weeks, and Premium custom applications 10+ weeks. We will provide a crystal clear timeline before kicking off."
  },
  {
    id: 5,
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer flexible post-launch retainer options and maintenance packages to ensure your platform remains secure, up-to-date, and continues to evolve with your business."
  }
]

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section 
      className='py-20 md:py-32 px-5 relative overflow-hidden bg-[#0c0c0e]'
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side: Massive Typography */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="sticky top-32">
              <h2 className="font-serif text-8xl md:text-[140px] lg:text-[160px] xl:text-[200px] leading-[0.8] text-white tracking-tighter">
                FAQ
              </h2>
            </div>
          </div>

          {/* Right Side: Questions List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-col border-t border-white/[0.08]">
              {faqData.map((faq) => (
                <div 
                  key={faq.id}
                  className="border-b border-white/[0.08]"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-8 flex items-center justify-between gap-6 text-left group transition-colors duration-300"
                    aria-expanded={openId === faq.id}
                  >
                    <span 
                      className={`text-lg sm:text-xl font-medium transition-colors duration-300 pr-4 ${
                        openId === faq.id ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}
                      itemProp="name"
                    >
                      {faq.question}
                    </span>
                    
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <span className={`text-xl font-normal leading-none transition-transform duration-500 ${openId === faq.id ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </div>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openId === faq.id ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'
                    }`}
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <Paragraph className="opacity-60 text-[15px] sm:text-[16px] leading-[1.7] pr-12">
                        {faq.answer}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle ambient light to break up full black background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none z-0"></div>
    </section>
  )
}

export default Faq