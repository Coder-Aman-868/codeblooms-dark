import React from 'react'
import SmoothAnimtionWrapper from './SmoothAnimtionWrapper';

interface Props {
    children: React.ReactNode;
    Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string;
    ref?: React.RefObject<HTMLHeadingElement>;
    dangerouslySetInnerHTML?: { __html: string };
    animate?: boolean;
}

const Heading = ({ children, Tag = 'h2', className, ref, dangerouslySetInnerHTML, animate }: Props) => {
    return (
        <>
            {!animate && (
                <Tag ref={ref} dangerouslySetInnerHTML={dangerouslySetInnerHTML} className={`bg-[linear-gradient(90deg,#FFFFFF_30%,#B1B1B1_91.16%)] bg-clip-text text-transparent ${className}`}>{children}</Tag>

            )}
            {animate && (
                <SmoothAnimtionWrapper>
                    <Tag ref={ref} dangerouslySetInnerHTML={dangerouslySetInnerHTML} className={`bg-[linear-gradient(90deg,#FFFFFF_30%,#B1B1B1_91.16%)] bg-clip-text text-transparent ${className}`}>{children}</Tag>
                </SmoothAnimtionWrapper>
            )}
        </>
    )
}

export default Heading