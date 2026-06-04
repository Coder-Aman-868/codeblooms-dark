"use client"

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Button from '../common/Button'

gsap.registerPlugin(ScrollTrigger)

const servicesData = [
  {
    id: "custom-web",
    title: "Custom Website Development",
    description: "We architect bespoke websites from the ground up — tailored to your user personas, optimized for search engines, and built with clean, scalable code.",
    benefits: ["100% unique brand positioning", "Future-proof architecture", "Seamless API integrations"],
    cta: "Build Your Custom Site"
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page Development",
    description: "Conversion-focused landing pages built with behavioral psychology. We structure content, micro-interactions, and CTAs to guide users toward conversion.",
    benefits: ["Lower acquisition cost", "Higher lead quality", "A/B testing ready"],
    cta: "Optimize Conversions"
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "We leverage React and Next.js to build modular, component-driven interfaces. Separating data from presentation for ultimate speed and flexibility.",
    benefits: ["App-like speed", "Reusable components", "Enhanced dev velocity"],
    cta: "Upgrade Your Frontend"
  },
  {
    id: "redesign",
    title: "Website Redesign",
    description: "A strategic overhaul — we rethink the user experience, update the tech stack, and align the aesthetic with your premium market positioning.",
    benefits: ["Modernized perception", "Improved credibility", "Enterprise-ready"],
    cta: "Revamp Your Brand"
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "A deep-dive technical audit. We optimize image delivery, eliminate render-blocking resources, and implement advanced caching strategies.",
    benefits: ["Near-instant loads", "Higher SEO rankings", "Decreased bounce rates"],
    cta: "Boost Your Speed"
  }
]

const CARD_COUNT = servicesData.length

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0);


  useEffect(() => {
    const section = sectionRef.current
    const stack = stackRef.current
    if (!section || !stack) return

    const cards = gsap.utils.toArray<HTMLElement>('.service-card', stack)
    const totalCards = cards.length

    // On load: first card active, rest stacked behind to the right
    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, {
          transformPerspective: 1200,
          x: '0%',
          rotateY: 0,
          rotateZ: 0,
          z: 0,
          zIndex: totalCards,
        })
      } else {
        gsap.set(card, {
          transformPerspective: 1200,
          x: `${2 + i * 2}%`,
          rotateY: 0,
          rotateZ: 2 + i * 1,
          z: -140 - i * 10,
          zIndex: totalCards - i,
        })
      }
    })

    // Single master timeline driven by one ScrollTrigger — avoids
    // cross-timeline zIndex conflicts that happen with per-step triggers
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline()

      for (let step = 0; step < totalCards - 1; step++) {
        cards.forEach((card, i) => {
          const fromState = getCardState(i, step, totalCards)
          const midState = getCardMidState(i, step, totalCards)
          const toState = getCardState(i, step + 1, totalCards)

          // Each step occupies 1 unit in the master timeline (0.5 + 0.5)
          masterTl.fromTo(card,
            { ...fromState },
            { ...midState, duration: 0.5, ease: 'none' },
            step // all cards in this step start together
          )
          masterTl.to(card,
            { ...toState, duration: 0.5, ease: 'none' },
            step + 0.5
          )

          // Snap zIndex at exactly the 50% mark — only for the two transitioning cards
          if (i === step) {
            // Current card starts on top
            masterTl.set(card, {
              zIndex: totalCards + 2
            }, step)

            // Mid animation, move below next card
            masterTl.set(card, {
              zIndex: totalCards - 1
            }, step + 0.5)

            // After transition, move further back
            masterTl.set(card, {
              zIndex: totalCards - 3
            }, step + 1)
          }

          else if (i === step + 1) {
            // Next card starts below current
            masterTl.set(card, {
              zIndex: totalCards + 1
            }, step)

            // Mid animation, becomes top card
            masterTl.set(card, {
              zIndex: totalCards + 3
            }, step + 0.5)
          }
        })
      }

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `top+=${((totalCards - 1) / totalCards) * 100}% top`,
        scrub: 0.5,
        animation: masterTl,
        snap: {
          snapTo: 1 / (totalCards - 1),
          duration: { min: 0.25, max: 0.6 },
          delay: 0.05,
          ease: 'power1.inOut',
        },
        onUpdate: (self) => {
          const index = Math.round(
            self.progress * (totalCards - 1)
          );

          setActiveCard(index);
        }
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className='relative'
      style={{ height: `${CARD_COUNT * 100}vh` }}
    >
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4 max-w-[800px] mx-auto pt-16 md:pt-24 pb-8 px-5">
        <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-light tracking-tight text-center text-white! bg-transparent!'>
          Our Services
        </Heading>
        <Paragraph animate className='text-center opacity-60 font-light text-lg'>
          Tailored engineering solutions to elevate your digital presence.
        </Paragraph>
      </div>

      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">
        {/* Card Stack */}
        <div
          ref={stackRef}
          className="relative flex-1 w-full flex items-center justify-center"
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="service-card absolute w-[90vw] max-w-[480px] sm:max-w-[520px]"
              style={{
                willChange: 'transform',
              }}
            >
              <div className="rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06] p-6 sm:p-8 flex flex-col gap-5 card-border after:rounded-2xl before:rounded-2xl">
                {/* Card Number */}
                <div className="flex items-center gap-4">
                  <span
                    style={{ backgroundImage: 'linear-gradient(115.42deg,var(--color-secondary) 52.82%,#ffffff80 79.53%)' }}
                    className={`text-[80px] sm:text-[100px] leading-none duration-500 font-bold bg-clip-text text-transparent select-none ${activeCard === index ? "" : "opacity-30"}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight opacity-80 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className={`px-3.5 py-1.5 border  rounded-full text-xs duration-500 ${activeCard === index ? "border-(--color-secondary)/70 text-(--color-secondary)/90 bg-(--color-secondary)/10" : "border-white/[0.06] text-white/40 bg-white/[0.02]"}`}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link href="/start-project">
                    <Button secondary className="!py-3 !px-6 !text-sm group flex item-center">
                      {service.cta} <span className="ml-2 flex opacity-50 group-hover:translate-x-2! group-hover:opacity-100 duration-300">→</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Active indicator dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20 items-center">
            {servicesData.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeCard === i ? "w-6 bg-(--color-secondary)" : "w-1.5 bg-white/50"}`}
                data-index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Calculate the transform state for a card at a given step.
 * step = which card index is currently "active" (centered).
 */
function getCardState(cardIndex: number, activeStep: number, totalCards: number) {
  const offset = cardIndex - activeStep

  if (offset === 0) {
    // Active / centered
    return { x: '0%', rotateY: 0, rotateZ: 0, z: 0 }
  } else if (offset < 0) {
    // Already passed — stacked to the left
    const steps = Math.abs(offset)
    return {
      x: `${-(3 + steps * 8)}%`,
      rotateY: 0,
      rotateZ: -(4 + steps * 2),
      z: -140 - steps * 20,
    }
  } else {
    // Coming up — stacked to the right
    return {
      x: `${3 + offset * 8}%`,
      rotateY: 0,
      rotateZ: 4 + offset * 2,
      z: -140 - offset * 222,
    }
  }
}

/**
 * Mid-transition state (the card swings through a rotated pose).
 */
function getCardMidState(cardIndex: number, activeStep: number, totalCards: number) {
  const offset = cardIndex - activeStep

  if (offset === 0) {
    // Active card is exiting to the left
    return {
      x: '-47%',
      rotateY: -24,
      rotateZ: 0,
      z: -157,
    }
  } else if (offset === 1) {
    // Next card is entering from the right
    return {
      x: '47%',
      rotateY: 24,
      rotateZ: 0,
      z: -156,
    }
  } else {
    // Other cards just interpolate linearly — return their "to" state
    return getCardState(cardIndex, activeStep + 0.5, totalCards)
  }
}

export default Services