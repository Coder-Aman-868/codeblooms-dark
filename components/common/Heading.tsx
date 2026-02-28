import React from 'react'

interface Props {
    children: React.ReactNode;
    Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string;
    ref?: React.RefObject<HTMLHeadingElement>;
    dangerouslySetInnerHTML?: { __html: string };
}

const Heading = ({ children, Tag = 'h2', className, ref, dangerouslySetInnerHTML }: Props) => {
    return (
        <Tag ref={ref} dangerouslySetInnerHTML={dangerouslySetInnerHTML} className={`bg-[linear-gradient(90deg,_#FFFFFF_30%,_#B1B1B1_91.16%)] bg-clip-text text-transparent ${className}`}>{children}</Tag>
    )
}

export default Heading