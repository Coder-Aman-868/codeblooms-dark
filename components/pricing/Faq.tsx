"use client"

import React, { useState } from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

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
  }
]

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section 
      className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-hidden'
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10 md:pb-15">
          <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
            Frequently Asked <span className='bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>Questions</span>
          </Heading>
        </div>

        {/* FAQ Items */}
        <div className="max-w-[900px] mx-auto flex flex-col gap-4">
          {faqData.map((faq) => (
            <SmoothAnimtionWrapper 
              key={faq.id}
              className="relative group rounded-2xl overflow-hidden p-[1px]"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] transition-opacity duration-300 group-hover:bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.5)_0%,_rgba(82,82,82,0.2)_50%,_rgba(184,184,184,0.5)_100%)]"></div>

              {/* FAQ Item Content */}
              <div 
                className="relative bg-[#171717] rounded-2xl overflow-hidden"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                {/* Glow Effect */}
                <div className="absolute pointer-events-none -top-20 -right-20 w-60 h-60 rounded-full blur-3xl bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>

                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="relative z-10 w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 transition-all duration-300"
                  aria-expanded={openId === faq.id}
                >
                  <Heading Tag='h3' className='text-xl sm:text-2xl font-medium text-white! bg-transparent! flex-1'>
                    {faq.question}
                  </Heading>
                  
                  {/* Toggle Icon */}
                  <span 
                    className={`text-white/70 text-2xl transition-transform duration-300 flex-shrink-0 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div 
                  className={`relative z-10 overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                    <Paragraph className="opacity-70 !text-base">
                      {faq.answer}
                    </Paragraph>
                  </div>
                </div>
              </div>
            </SmoothAnimtionWrapper>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="bg-[#EAFFFF] opacity-60 blur-[200px] w-[415px] h-[129px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    </section>
  )
}

export default Faq