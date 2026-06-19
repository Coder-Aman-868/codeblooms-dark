'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { METHODOLOGY_STEPS } from '@/helper/helper'

const AUTO_CYCLE_INTERVAL = 5000 // 5 seconds
const RESUME_DELAY = 10000 // 10 seconds after manual interaction

const Methodology = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [progressKey, setProgressKey] = useState(0) // forces animation restart
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const cycleToNext = useCallback(() => {
        setActiveIndex(prev => (prev + 1) % METHODOLOGY_STEPS.length)
        setProgressKey(prev => prev + 1)
    }, [])

    // Auto-cycle effect
    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(cycleToNext, AUTO_CYCLE_INTERVAL)
        return () => clearInterval(interval)
    }, [isPaused, cycleToNext])

    const handleManualClick = (index: number) => {
        // Clear any existing resume timer
        if (resumeTimerRef.current) {
            clearTimeout(resumeTimerRef.current)
        }

        setActiveIndex(index)
        setProgressKey(prev => prev + 1)
        setIsPaused(true)

        // Resume auto-cycle after delay
        resumeTimerRef.current = setTimeout(() => {
            setIsPaused(false)
        }, RESUME_DELAY)
    }

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (resumeTimerRef.current) {
                clearTimeout(resumeTimerRef.current)
            }
        }
    }, [])

    return (
        <div className='lg:pb-37.5 md:pb-30 sm:pb-20 pb-15 px-5 relative overflow-x-clip'>
            <div className="max-w-[1036px] mx-auto w-full flex flex-col justify-center items-center gap-6">
                {/* Section Header */}
                <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10">
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
                        The Clear Orbit Methodology
                    </Heading>
                    <Paragraph animate className='text-center opacity-80'>
                        Explore how we&apos;ve helped tech founders transform their digital presence and dominate their niches.
                    </Paragraph>
                </div>

                {/* Split Layout: Dropdowns Left, Image Right */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-stretch">
                    {/* Left Column — Accordion Dropdowns */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-3">
                        {METHODOLOGY_STEPS.map((step, index) => {
                            const isActive = index === activeIndex
                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group ${isActive
                                        ? 'bg-black card-border before:rounded-2xl after:rounded-2xl'
                                        : 'bg-white/[0.03] hover:bg-white/[0.06]'
                                        }`}
                                    onClick={() => handleManualClick(index)}
                                >
                                    {/* Progress bar for active item */}
                                    {isActive && (
                                        <div className="absolute top-0 left-0 h-[2px] w-full z-20">
                                            <div
                                                key={progressKey}
                                                className="h-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)]/40"
                                                style={{
                                                    animation: isPaused
                                                        ? 'none'
                                                        : `methodology-progress ${AUTO_CYCLE_INTERVAL}ms linear forwards`,
                                                    width: isPaused ? '100%' : undefined,
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Dropdown Header */}
                                    <div className="flex items-center justify-between p-5 sm:p-6">
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={`text-sm font-semibold tracking-wider transition-colors duration-300 ${isActive ? 'text-[var(--color-secondary)]' : 'text-white/40'
                                                    }`}
                                            >
                                                {step.number}
                                            </span>
                                            <h3
                                                className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/70'
                                                    }`}
                                            >
                                                {step.title}
                                            </h3>
                                        </div>

                                        {/* Chevron */}
                                        <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`transition-colors duration-300 ${isActive ? 'text-[var(--color-secondary)]' : 'text-white/40'}`}
                                            >
                                                <path
                                                    d="M5 7.5L10 12.5L15 7.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Expandable Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                                            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right Column — Image */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden card-border before:rounded-2xl after:rounded-2xl bg-black">
                            {/* Image placeholder container */}
                            {METHODOLOGY_STEPS.map((step, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${index === activeIndex
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-95'
                                        }`}
                                >
                                    {/* Placeholder visual */}
                                    <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                                        {/* Decorative icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                                            <svg
                                                width="28"
                                                height="28"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-[var(--color-secondary)]/60"
                                            >
                                                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                                                <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M3 16L8.29 11.75C8.69 11.44 9.24 11.46 9.62 11.8L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M13 14.5L15.29 12.75C15.69 12.44 16.24 12.46 16.62 12.8L21 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-white/30 text-sm font-medium">
                                                {step.title}
                                            </p>
                                            <p className="text-white/15 text-xs">
                                                Image placeholder — Replace with actual image
                                            </p>
                                        </div>

                                        {/* Step number watermark */}
                                        <span
                                            className="absolute bottom-6 right-6 text-7xl sm:text-8xl font-bold leading-none opacity-[0.04] select-none pointer-events-none"
                                            style={{
                                                backgroundImage: 'linear-gradient(115.42deg, var(--color-secondary) 52.82%, #ffffff80 79.53%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            {step.number}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Ambient glow */}
                            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none opacity-[0.03]"
                                style={{
                                    background: 'radial-gradient(ellipse at center, var(--color-secondary), transparent 70%)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Methodology