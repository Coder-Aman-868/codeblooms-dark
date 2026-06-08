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
    return (
        <button
            onClick={scrollToTop}
            className={` fixed bottom-6 z-100 right-6 group duration-300 ease-in ${isVisible ? "opacity-100" : "opacity-0 translate-y-5 pointer-events-none"} `}>
            <div className="bg-black py-2 pl-4 pr-2 cursor-pointer rounded-full shadow-md transition-all back-to-top-button flex justify-center items-center gap-1">
                <p className="text-xs leading-[100%] mb-0.5 bg-[linear-gradient(180deg,#bababa_0%,#706f6f70_101.16%)] bg-clip-text text-transparent">Scroll Up</p>
                <Icons className="rotate-90" icon="arrowIcon" />
            </div>
        </button>
    )
}

export default BackToTop