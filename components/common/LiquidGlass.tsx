import React from 'react'

const LiquidGlass = ({ shadowColor, className }: { shadowColor?: string, className?: string }) => {
    return (
        <>
            <div className={`absolute inset-0 overflow-hidden select-none touch-none rounded-[32px] transition-transform duration-200 ease-in h-full w-full text-[18px] ${className}`}>
                <div className="absolute inset-0 z-0 rounded-[inherit] backdrop-blur-[2px] [filter:url(#liquid-glass)]"></div>
                <div className="absolute inset-0 z-[1] rounded-[inherit] shadow-[0_4px_4px_rgba(0,0,0,0.15),0_0_12px_rgba(0,0,0,0.08)]"></div>
                <div className={`absolute inset-0 z-[2] rounded-[inherit] shadow-[inset_2px_2px_2px_0_rgba(255,255,255,0.2),inset_-2px_-2px_2px_0_rgba(255,255,255,0.2)] transition-all duration-300 ease-linear group-hover:shadow-[inset_2px_2px_2px_0_var(--color-secondary),inset_-2px_-2px_2px_0_var(--color-secondary)] ${shadowColor}`}></div>
            </div>
            <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
                <filter id="liquid-glass">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" seed="5" result="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="40" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
        </>
    )
}

export default LiquidGlass
