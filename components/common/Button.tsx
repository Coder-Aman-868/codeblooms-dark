import React from 'react'
import LiquidGlass from './LiquidGlass'

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
            <LiquidGlass />
            <span className='relative z-10 flex items-center justify-center text-center'>{children}</span>
        </button>
    )
}

export default Button