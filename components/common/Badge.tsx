import TextReveal from '../animations/TextReveal';
import LiquidGlass from './LiquidGlass';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Badge = ({ children, className }: Props) => {
    return (
        <div className={`py-2 px-3 rounded-[999px] relative ${className}`}>
            <LiquidGlass />
            <TextReveal Tag='p' className='relative after:left-1.75 after:top-1/2 after:-translate-y-1/2 after:absolute after:size-1 after:rounded-2xl after:bg-[#939393] text-sm pl-5 font-medium text-white'>{children}</TextReveal>
        </div>
    )
}

export default Badge