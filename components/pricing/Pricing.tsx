"use client"
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Button from '../common/Button'
import { PRICING_DATA } from '@/helper/helper'
import Badge from '../common/Badge'

gsap.registerPlugin(ScrollTrigger)

const CARD_COUNT = PRICING_DATA.length

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const stack = stackRef.current
    if (!section || !stack) return

    const cards = gsap.utils.toArray<HTMLElement>('.pricing-card', stack)
    const totalCards = cards.length

    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, {
          transformPerspective: 1200,
          y: '0%',
          rotateX: 0,
          rotateZ: 0,
          z: 0,
          zIndex: totalCards,
        })
      } else {
        gsap.set(card, {
          transformPerspective: 1200,
          y: `${2 + i * 2}%`,
          rotateX: 0,
          rotateZ: 2 + i * 1,
          z: -140 - i * 10,
          zIndex: totalCards - i,
        })
      }
    })

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline()

      for (let step = 0; step < totalCards - 1; step++) {
        cards.forEach((card, i) => {
          const fromState = getCardState(i, step, totalCards)
          const midState = getCardMidState(i, step, totalCards)
          const toState = getCardState(i, step + 1, totalCards)

          masterTl.fromTo(card,
            { ...fromState },
            { ...midState, duration: 0.5, ease: 'none' },
            step
          )
          masterTl.to(card,
            { ...toState, duration: 0.5, ease: 'none' },
            step + 0.5
          )

          if (i === step) {
            masterTl.set(card, { zIndex: totalCards + 2 }, step)
            masterTl.set(card, { zIndex: totalCards - 1 }, step + 0.5)
            masterTl.set(card, { zIndex: totalCards - 3 }, step + 1)
          } else if (i === step + 1) {
            masterTl.set(card, { zIndex: totalCards + 1 }, step)
            masterTl.set(card, { zIndex: totalCards + 3 }, step + 0.5)
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
          const index = Math.round(self.progress * (totalCards - 1))
          setActiveCard(index)
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
      <div className="flex flex-col justify-center items-center gap-4 max-w-[600px] mx-auto">
        <Heading animate Tag='h2' className='text-3xl md:text-5xl font-medium text-center text-white! bg-transparent!'>
          Pricing Plans
        </Heading>
        <Paragraph animate className='text-center opacity-60 text-sm md:text-base'>
          Transparent pricing for high-performance web experiences. Choose a plan that fits your growth stage.
        </Paragraph>
      </div>

      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">
        <div ref={stackRef} className="relative flex-1 w-full flex items-center justify-center">
          {PRICING_DATA.map((plan, index) => (
            <div
              key={plan.id}
              className="pricing-card absolute w-[90vw] max-w-[400px] sm:max-w-[900px]"
              style={{ willChange: 'transform' }}
            >
              <div className={`card-border before:rounded-2xl after:rounded-2xl rounded-2xl bg-[#0a0a0a]/10 backdrop-blur-sm p-8 flex items-center justify-between sm:flex-row flex-col sm:gap-12 gap-8 w-full transition-all duration-500 ${activeCard === index ? "after:opacity-100! before:opacity-0!" : "after:opacity-0! before:opacity-100!"}`}>
                {/* <!-- Left: price + button --> */}
                <div className="flex flex-col gap-5 sm:flex-1 max-sm:w-full min-w-[160px]">
                  <div>
                    <div className="flex justify-between items-center sm:mb-8 mb-2">
                      <p className="text-(--color-secondary)/80 text-base line-through">{plan.prevPrice}</p>
                      <Badge>{plan.title}</Badge>
                    </div>
                    <div className="flex items-baseline gap-1 sm:mb-6 mb-0">
                      <span className="text-5xl font-bold text-white/90">{plan.price}</span>
                      <span className="text-sm text-(--color-secondary) ml-1">/Month</span>
                    </div>
                  </div>
                  <Button secondary className='max-w-max border-white/80! hover:border-(--color-secondary)/50!'>Get Started</Button>
                </div>

                {/* <!-- Divider --> */}
                <div className="sm:w-px w-full sm:h-auto h-px bg-(--color-secondary) self-stretch opacity-20"></div>

                {/* <!-- Right: feature list --> */}
                <div className="flex flex-col gap-3 sm:flex-1 max-sm:w-full">
                  {
                    plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="8.25" stroke="var(--color-secondary)" strokeWidth="1.2" />
                          <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="var(--color-secondary)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))}

          {/* Active indicator dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20 items-center">
            {PRICING_DATA.map((_, i) => (
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

function getCardState(cardIndex: number, activeStep: number, totalCards: number) {
  const offset = cardIndex - activeStep

  if (offset === 0) {
    return { y: '0%', rotateX: 0, rotateZ: 0, z: 0 }
  } else if (offset < 0) {
    const steps = Math.abs(offset)
    return {
      y: `${-(3 + steps * 8)}%`,
      rotateX: 0,
      rotateZ: -(4 + steps * 2),
      z: -140 - steps * 20,
    }
  } else {
    return {
      y: `${3 + offset * 8}%`,
      rotateX: 0,
      rotateZ: 4 + offset * 2,
      z: -140 - offset * 222,
    }
  }
}

function getCardMidState(cardIndex: number, activeStep: number, totalCards: number) {
  const offset = cardIndex - activeStep

  if (offset === 0) {
    return { y: '-47%', rotateX: 24, rotateZ: 0, z: -157 }
  } else if (offset === 1) {
    return { y: '47%', rotateX: -24, rotateZ: 0, z: -156 }
  } else {
    return getCardState(cardIndex, activeStep + 0.5, totalCards)
  }
}

export default Pricing