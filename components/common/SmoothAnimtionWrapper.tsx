"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SmoothAnimtionWrapperProps {
    children: React.ReactNode
    className?: string
}


export default function SmoothAnimtionWrapper({ children, className }: SmoothAnimtionWrapperProps) {
    const sectionRef = useRef(null)

    useEffect(() => {
        const el = sectionRef.current

        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 50,
                stagger: 0.1,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "circ",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    once: true
                },
            }
        )
    }, [])

    return (
        <div
            ref={sectionRef}
            className={`${className}`}
        >
            {children}
        </div>
    )
}