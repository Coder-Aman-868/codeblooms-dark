import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    ref?: React.RefObject<HTMLDivElement> | undefined;
}

const Badge = ({ children, className, style, ref }: Props) => {
    return (
        <div ref={ref} style={style} className={`py-2 px-3 rounded-[999px] badge-box ${className}`}>
            <p className='relative after:left-2.5 after:top-1/2 after:-translate-y-1/2 after:absolute after:size-1 after:rounded-2xl after:bg-[#939393] text-sm pl-5 font-medium bg-[linear-gradient(90deg,#919191_8.68%,#FFFFFF_23.34%,#FFFFFF_30.29%,#919191_38.33%)] bg-clip-text text-transparent'>{children}</p>
        </div>
    )
}

export default Badge