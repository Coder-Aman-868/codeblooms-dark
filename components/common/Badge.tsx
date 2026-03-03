'use client'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    ref?: React.RefObject<HTMLDivElement> | undefined;
}

const Badge = ({ children, className, ref }: Props) => {

    const [count, setCount] = useState<number>(90);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        const startValue = 90;
        const midValue = 270;
        const endValue = 450;

        const duration1 = 2500; // 2.5s
        const duration2 = 2000; // 1s slow finish

        let startTime: number | null = null;

        const easeInOut = (t: number): number => {
            return t < 0.5
                ? 2 * t * t
                : 1 - Math.pow(-2 * t + 2, 2) / 2;
        };

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress <= duration1) {
                const t = progress / duration1;
                const eased = easeInOut(t);
                const value = startValue + (midValue - startValue) * eased;
                setCount(Math.floor(value));
            }
            else if (progress <= duration1 + duration2) {
                const t = (progress - duration1) / duration2;
                const eased = easeInOut(t);
                const value = midValue + (endValue - midValue) * eased;
                setCount(Math.floor(value));
            }
            else {
                // Restart cycle
                startTime = timestamp;
            }

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    return (
        <div style={{ ["--dynamic-gradient" as any]: `linear-gradient(${count}.03deg, rgba(255,255,255,0.5) 0.02%, rgba(153,153,153,0) 50.18%)` }} ref={ref} className={`py-2 px-3 rounded-[999px] badge-box ${className}`}>
            <p className='relative after:left-2.5 after:top-1/2 after:-translate-y-1/2 after:absolute after:size-1 after:rounded-2xl after:bg-[#939393] text-sm pl-5 font-medium bg-[linear-gradient(90deg,#919191_8.68%,#FFFFFF_23.34%,#FFFFFF_30.29%,#919191_38.33%)] bg-clip-text text-transparent'>{children}</p>
        </div>
    )
}

export default Badge