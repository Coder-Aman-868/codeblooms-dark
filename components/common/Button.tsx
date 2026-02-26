import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    secondary?: boolean;
    ref?: React.RefObject<HTMLButtonElement>;
}

const Button = ({ children, className, secondary = false, ref }: Props) => {
    return (
        <button ref={ref} className={`rounded-[999px] cursor-pointer group relative overflow-hidden md:py-6 py-4 sm:px-10 px-5.5 text-base font-medium  leading-none ${secondary ? "border border-white/8 bg-white/5 backdrop-blur-[22px] text-[#B8B8B8]" : "text-black bg-[linear-gradient(137.49deg,#EFEFEF_20.48%,#737272_79.52%)] hover:bg-[linear-gradient(137.49deg,#737272_20.48%,#EFEFEF_79.52%)]"} ${className}`}>
            {!secondary && (
                <>
                    <span className="absolute inset-0 pointer-events-none bg-[linear-gradient(137.49deg,#EFEFEF_20.48%,#737272_79.52%)]"></span>
                    <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(137.49deg,#737272_20.48%,#EFEFEF_79.52%)]"></span>
                </>
            )}

            <span className='relative z-10'>{children}</span>
        </button>
    )
}

export default Button