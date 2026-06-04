import TextReveal from '../animations/TextReveal';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Badge = ({ children, className }: Props) => {
    return (
        <div className={`py-2 px-3 rounded-[999px] badge-box ${className}`}>
            <div className="d-glass-card liquid-glass">
                <div className="d-glass-card-morph"></div>
                <div className="d-glass-card-corner"></div>
                <div className="d-glass-card-border"></div>
            </div>
            <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
                <filter id="liquid-glass">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" seed="5" result="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="40" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
            <TextReveal Tag='p' className='relative after:left-2.5 after:top-1/2 after:-translate-y-1/2 after:absolute after:size-1 after:rounded-2xl after:bg-[#939393] text-sm pl-5 font-medium text-white'>{children}</TextReveal>
        </div>
    )
}

export default Badge