import React, { ReactNode } from 'react'
import TextReveal from '../animations/TextReveal';
import HighlightLabel from './HighlightLabel';

interface Props {
    children: ReactNode;
    Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string;
    ref?: React.RefObject<HTMLHeadingElement>;
    dangerouslySetInnerHTML?: { __html: string };
    animate?: boolean;
}

const Heading = ({ children, Tag = 'h2', className, ref, dangerouslySetInnerHTML, animate }: Props) => {
    const baseClass = `text-white/95 ${className}`;
    if (animate) {
        // Ensure children is treated as a string before calling .split
        const text = typeof children === 'string' ? children : String(children || '');
        const words = text.split(' ');
        
        return (
            <TextReveal Tag={Tag} className={baseClass}>
                {words.slice(0, -1).join(' ')} <HighlightLabel className='text-(--color-secondary)'>{words.slice(-1)}</HighlightLabel>
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