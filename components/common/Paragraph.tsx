import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    ref?: React.RefObject<HTMLParagraphElement>;
}

const Paragraph = ({ children, className, ref }: Props) => {
    return (
        <p ref={ref} className={`md:text-lg sm:text-base text-sm font-medium text-white ${className}`}>{children}</p>
    )
}

export default Paragraph