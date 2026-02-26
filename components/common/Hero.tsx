"use client"

import React, { useEffect, useRef, useState } from 'react'
import Badge from './Badge'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Button from './Button'
import Image from 'next/image'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import starsRain from "./../../public/assets/lotties/starsRain.json";
import gsap from 'gsap'

const Hero = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        lottieRef.current?.setSpeed(0.5);
    }, []);

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

    const circleImage = useRef<HTMLDivElement | null | any>(null);
    const blurWhiteLayer = useRef<HTMLDivElement | null | any>(null);
    const starsBg = useRef<HTMLDivElement | null | any>(null);
    const containerRef = useRef<HTMLDivElement | null | any>(null);
    const badgeRef = useRef<HTMLDivElement | null | any>(null);
    const headingRef = useRef<HTMLHeadingElement | null | any>(null);
    const paraRef = useRef<HTMLParagraphElement | null | any>(null);
    const btn1Ref = useRef<HTMLButtonElement | null | any>(null);
    const btn2Ref = useRef<HTMLButtonElement | null | any>(null);

    useEffect(() => {
        setTimeout(() => {
            if (!containerRef.current) return;

            const tl = gsap.timeline({ delay: 0.3 });

            // Initial state
            gsap.set(
                [
                    badgeRef.current,
                    headingRef.current,
                    paraRef.current,
                    btn1Ref.current,
                    btn2Ref.current,
                ],
                {
                    opacity: 0,
                }
            );

            gsap.set([badgeRef.current, headingRef.current, paraRef.current], {
                y: 40,
                filter: "blur(10px)",
            });

            gsap.set(btn1Ref.current, { x: -60 });
            gsap.set(btn2Ref.current, { x: 60 });

            // Timeline animation
            tl.to(badgeRef.current, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
            })
                .to(
                    headingRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.9,
                        ease: "power3.out",
                    },
                    "-=0.5"
                )
                .to(
                    paraRef.current,
                    {
                        opacity: 0.64,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.6"
                )
                .to(
                    btn1Ref.current,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .to(
                    btn2Ref.current,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.7"
                );
        }, 300);
    }, []);


    useEffect(() => {
        if (!circleImage.current || !blurWhiteLayer.current) return;

        const tl = gsap.timeline();

        gsap.set([circleImage.current, blurWhiteLayer.current], {
            opacity: 0,
            y: 30,
        });
        gsap.set([blurWhiteLayer.current], {
            opacity: 0,
            y: 50,
        });
        gsap.set([starsBg.current], {
            opacity: 0,
        });

        tl.to(circleImage.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.inOut",
        });

        tl.to(
            blurWhiteLayer.current,
            {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power3.inOut",
            }, 0.5
        );
        tl.to(
            starsBg.current,
            {
                opacity: 1,
                duration: 1,
                ease: "power3.inOut",
            }
        );

    }, []);
    return (
        <div className='min-h-screen flex justify-center relative lg:pt-25.5 pt-10 lg:pb-75 md:pb-30 pb-25 px-4'>
            <div ref={containerRef} className="max-w-247 mx-auto flex flex-col sm:gap-6 gap-4 items-center relative z-20 justify-center">
                <Badge ref={badgeRef} style={{ ["--dynamic-gradient" as any]: `linear-gradient(${count}.03deg, rgba(255,255,255,0.5) 0.02%, rgba(153,153,153,0) 50.18%)` }} className={`opacity-0`}>Premium Web Development Studio</Badge>
                <Heading ref={headingRef} Tag='h1' className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl opacity-0 text-center font-bold leading-[137%]'>Building High-Performance <br /> Sites for SaaS & Tech.</Heading>
                <Paragraph ref={paraRef} className='opacity-0 text-center'>Stop losing users to slow load times and generic templates. CodeBlooms designs and develops custom, lightning-fast digital experiences using Next.js and React to scale your MRR and turn visitors into loyal users.</Paragraph>
                <div className="flex items-stretch justify-center sm:flex-row flex-col sm:max-w-none max-w-100 w-full sm:gap-5 gap-3 sm:mt-0 mt-4">
                    <Button className='opacity-0' ref={btn1Ref}>Start Your Project</Button>
                    <Button className='opacity-0' ref={btn2Ref} secondary>View Our Work</Button>
                </div>
                {/* <p className='text-white'>{count}</p> */}
            </div>
            <div className="absolute inset-0 pointer-events-none">
                <div className="relative h-full w-full overflow-clip">
                    <div ref={starsBg} className="absolute inset-0 w-full h-full mix-blend-luminosity flex justify-center items-center">
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={starsRain}
                            loop
                            autoplay
                            className="min-w-300 w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute sm:top-[70%] top-[80%] left-1/2 -translate-x-1/2 xl:w-200 md:w-150 sm:w-86 w-75 lg:h-75.75 md:h-55.75 h-35">
                        <div ref={blurWhiteLayer} className="absolute opacity-0 w-full h-full lg:top-[-25%] top-[20%] left-1/2 -translate-x-1/2">
                            <Image fill className='h-full lg:scale-[3] scale-[2]' src={'/assets/images/png/hero-blur-layer.png'} alt='blur layer' />
                        </div>
                        <div ref={circleImage} className="absolute opacity-0 w-full h-full top-[110%] left-1/2 -translate-x-1/2">
                            <Image fill className='h-full lg:scale-[3] scale-[2]' src={'/assets/images/png/top-white-border-image.png'} alt='blur layer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero