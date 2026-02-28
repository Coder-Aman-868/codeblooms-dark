import React from 'react'
import SmoothAnimtionWrapper from './SmoothAnimtionWrapper';

interface Props {
    children: React.ReactNode;
    className?: string;
    ref?: React.RefObject<HTMLParagraphElement>;
    animate?: boolean;
}

const Paragraph = ({ children, className, ref, animate }: Props) => {
    return (
        <>
            {!animate && (
                <p ref={ref} className={`md:text-lg sm:text-base text-sm font-medium text-white ${className}`}>{children}</p>
            )}
            {animate && (
                <SmoothAnimtionWrapper>
                    <p ref={ref} className={`md:text-lg sm:text-base text-sm font-medium text-white ${className}`}>{children}</p>
                </SmoothAnimtionWrapper>
            )}
        </>
    )
}

export default Paragraph