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
                y: 30,
                filter: "blur(20px)",
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                    // markers: true,
                },
            }
        )
    }, [])

    return (
        <div
            ref={sectionRef}
            className={`opacity-0 ${className}`}
        >
            {children}
        </div>
    )
}