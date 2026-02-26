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
        <Tag ref={ref} dangerouslySetInnerHTML={dangerouslySetInnerHTML} className={`bg-[linear-gradient(89.7deg,rgba(255,255,255,0.4)_1.56%,#FFFFFF_23.75%,#FFFFFF_50.16%,rgba(255,255,255,0.4)_97.71%)] bg-clip-text text-transparent ${className}`}>{children}</Tag>
    )
}

export default Heading