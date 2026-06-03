interface HighlightLabelProps {
    children: React.ReactNode
    className?: string
}

export default function HighlightLabel({
    children,
    className = '',
}: HighlightLabelProps) {
    return (
        <span
            className={`relative w-fit mx-auto text-white/90 bg-(--color-secondary)/10 inline-block border border-(--color-secondary) px-2 font-machina pt-[.06rem] ${className}`}
        >
            {children}

            <span className="absolute aspect-square h-1 bg-white z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
            <span className="absolute aspect-square h-1 bg-white z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2" />
            <span className="absolute aspect-square h-1 bg-white z-10 bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
            <span className="absolute aspect-square h-1 bg-white z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        </span>
    )
}