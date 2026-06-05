import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    secondary?: boolean;
    ref?: React.RefObject<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, className, secondary = false, ref, type = "button", onClick }: Props) => {
    return (
        <button ref={ref} type={type} onClick={onClick} className={`rounded-[999px] cursor-pointer group relative overflow-hidden py-4 px-5.5 text-base font-medium  leading-none transition-all duration-300 ease-in-out ${secondary ? "text-[#B8B8B8] hover:text-(--color-secondary)/70" : "mix-blend-difference! bg-(--color-secondary) hover:bg-transparent hover:text-(--color-secondary)"} ${className}`}>
            <div className="d-glass-card liquid-glass">
                <div className="d-glass-card-morph"></div>
                <div className="d-glass-card-corner"></div>
                <div className="d-glass-card-border"></div>
            </div>
            <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
                <filter id="liquid-glass">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" seed="5" result="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="40" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
            <span className='relative z-10 flex items-center justify-center text-center'>{children}</span>
        </button>
    )
}

export default Button