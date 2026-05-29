import React from 'react'
import TextReveal from '../animations/TextReveal';

interface Props {
    children: React.ReactNode;
    Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string;
    ref?: React.RefObject<HTMLHeadingElement>;
    dangerouslySetInnerHTML?: { __html: string };
    animate?: boolean;
}

const Heading = ({ children, Tag = 'h2', className, ref, dangerouslySetInnerHTML, animate }: Props) => {
    const baseClass = `bg-[linear-gradient(90deg,#FFFFFF_30%,#B1B1B1_91.16%)] bg-clip-text text-transparent ${className}`;

    if (animate) {
        return (
            <TextReveal Tag={Tag} className={baseClass}>
                {children}
            </TextReveal>
        );
    }

    return (
        <Tag
            ref={ref}
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}
            className={baseClass}
        >
            {children}
        </Tag>
    );
}

export default Heading