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
        <button ref={ref} type={type} onClick={onClick} className={`rounded-[999px] cursor-pointer group relative overflow-hidden py-4 px-5.5 text-base font-medium  leading-none transition-all duration-300 ease-in-out ${secondary ? "border border-white/8 bg-white/5 hover:bg-(--color-secondary)/2 hover:border-(--color-secondary)/50 backdrop-blur-[22px] text-[#B8B8B8] hover:text-(--color-secondary)/70" : "mix-blend-difference! bg-(--color-secondary) hover:bg-(--color-secondary)/20 hover:text-(--color-secondary) border border-transparent hover:border-(--color-secondary)"} ${className}`}>
            {children}
        </button>
    )
}

export default Button