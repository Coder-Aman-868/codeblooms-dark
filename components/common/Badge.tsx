import TextReveal from '../animations/TextReveal';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Badge = ({ children, className }: Props) => {
    return (
        <div className={`py-2 px-3 rounded-[999px] badge-box ${className}`}>
            <div className="absolute w-full h-full inset-0 rounded-[999px] blur-lg bg-accent"></div>
            <TextReveal Tag='p' className='relative after:left-2.5 after:top-1/2 after:-translate-y-1/2 after:absolute after:size-1 after:rounded-2xl after:bg-[#939393] text-sm pl-5 font-medium text-white'>{children}</TextReveal>
        </div>
    )
}

export default Badge