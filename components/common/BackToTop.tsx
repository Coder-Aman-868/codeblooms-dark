'use client'

import { useEffect, useRef, useState } from "react"
import Icons from "./Icons"

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const [count, setCount] = useState<number>(180)

    const frameRef = useRef<number | null>(null)
    const currentValueRef = useRef<number>(180)
    const isLockedRef = useRef<boolean>(false)

    const duration = 1200

    const easeInOut = (t: number): number => {
        return t < 0.5
            ? 2 * t * t
            : 1 - Math.pow(-2 * t + 2, 2) / 2
    }

    const animateValue = (
        end: number,
        onComplete?: () => void
    ) => {
        const start = currentValueRef.current
        let startTime: number | null = null

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const t = Math.min(progress / duration, 1)

            const eased = easeInOut(t)
            const value = start + (end - start) * eased

            currentValueRef.current = value
            setCount(Math.floor(value))

            if (t < 1) {
                frameRef.current = requestAnimationFrame(animate)
            } else {
                if (onComplete) onComplete()
            }
        }

        frameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => {
        if (isLockedRef.current) return
        animateValue(360)
    }

    const handleMouseLeave = () => {
        if (isLockedRef.current) return

        isLockedRef.current = true

        animateValue(540, () => {
            currentValueRef.current = 180
            setCount(180)
            isLockedRef.current = false
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={` fixed bottom-6 z-100 right-6 group duration-300 ease-in ${isVisible ? "opacity-100" : "opacity-0 translate-y-5 pointer-events-none"} `}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ ["--back-gradient" as any]: `linear-gradient(${count}.03deg, var(--color-secondary) 0.02%, rgba(153,153,153,0) 80.18%)` }} className="bg-black py-2 pl-4 pr-2 cursor-pointer rounded-full shadow-md transition-all back-to-top-button flex justify-center items-center gap-1">
                <p className="text-xs leading-[100%] mb-0.5 bg-[linear-gradient(180deg,#bababa_0%,#706f6f70_101.16%)] bg-clip-text text-transparent">Scroll Up</p>
                <Icons className="rotate-90" icon="arrowIcon" />
            </div>
        </button>
    )
}

export default BackToTop