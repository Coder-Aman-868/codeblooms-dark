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
import Link from 'next/link'

interface Props {
    badge?: string;
    heading?: string;
    para?: string;
    btn1?: string;
    btn1Link?: string;
    btn2?: string;
    btn2Link?: string;
}

const Hero = ({ badge, heading, para, btn1, btn1Link = "#", btn2, btn2Link = "#" }: Props) => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        lottieRef.current?.setSpeed(0.5);
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
        <div className='lg:min-h-screen flex justify-center relative lg:pt-25.5 sm:pt-30 pt-25 lg:pb-75 md:pb-50 sm:pb-35 pb-45 px-4 overflow-x-clip'>
            <div ref={containerRef} className="max-w-247 mx-auto flex flex-col sm:gap-6 gap-4 items-center relative z-20 justify-center">
                <Badge ref={badgeRef} className={`opacity-0`}>{badge}</Badge>
                <h1 ref={headingRef} dangerouslySetInnerHTML={{ __html: heading ?? "" }} className='bg-[linear-gradient(89.7deg,rgba(255,255,255,0.4)_1.56%,#FFFFFF_23.75%,#FFFFFF_50.16%,rgba(255,255,255,0.4)_97.71%)] bg-clip-text text-transparent lg:text-6xl md:text-5xl sm:text-4xl text-3xl opacity-0 text-center font-bold leading-[137%]'></h1>
                <Paragraph ref={paraRef} className='opacity-0 text-center'>{para}</Paragraph>
                <div className="flex items-center justify-center sm:flex-row flex-col sm:max-w-none max-w-100 w-full sm:gap-5 gap-3 sm:mt-0 mt-4">
                    <Link href={btn1Link}>
                        <Button className='opacity-0' ref={btn1Ref}>{btn1}</Button>
                    </Link>
                    <Link href={btn2Link}>
                        <Button className='opacity-0' ref={btn2Ref} secondary>{btn2}</Button>
                    </Link>
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
                    <div className="absolute lg:top-[70%] md:top-[60%] top-[70%] left-1/2 -translate-x-1/2 xl:w-200 md:w-150 sm:w-86 w-75 lg:h-75.75 md:h-55.75 h-35">
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