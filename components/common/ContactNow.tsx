'use client'
import { useEffect, useRef, useState } from "react"
import Icons from "./Icons"

export default function ContactNow() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


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
            className={` fixed z-100 bottom-6 left-1/2 -translate-x-1/2 group duration-300 ease-in ${visible ? "opacity-100" : "opacity-0 translate-y-5 pointer-events-none"} `}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ ["--back-gradient" as any]: `linear-gradient(${count}.03deg, rgba(255,255,255,0.5) 0.02%, rgba(153,153,153,0) 80.18%)` }} className="bg-black py-4 pl-6 pr-4 cursor-pointer rounded-full shadow-md transition-all back-to-top-button flex justify-center items-center gap-1">
                <p className="text-lg leading-[100%] bg-[linear-gradient(180deg,#bababa_0%,#706f6f70_101.16%)] bg-clip-text text-transparent">Contact Now</p>
                <Icons className="rotate-135" icon="arrowIcon" />
            </div>
        </button>
    )
}