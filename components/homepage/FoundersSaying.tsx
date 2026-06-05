"use client";
import React, { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Icons from '../common/Icons';
import Badge from '../common/Badge';
import Heading from '../common/Heading';
import { TESTIMONIALS_DATA } from '@/helper/helper';

gsap.registerPlugin(ScrollTrigger)

/** Split text into per-character spans wrapped in overflow-hidden containers */
const SplitText = ({ children, className }: { children: string; className?: string }) => {
    return (
        <span className={className}>
            {children.split('').map((ch, i) => (
                <span
                    key={i}
                    style={{
                        display: 'inline-block',
                        overflow: 'hidden',
                        verticalAlign: 'bottom',
                        ...(ch === ' ' ? { whiteSpace: 'pre' as const } : {}),
                    }}
                >
                    <span
                        className="slide-tr-char"
                        style={{
                            display: 'inline-block',
                            willChange: 'transform',
                        }}
                    >
                        {ch}
                    </span>
                </span>
            ))}
        </span>
    )
}

/** Split text into per-word spans for quote text */
const SplitWords = ({ children, className }: { children: string; className?: string }) => {
    const words = children.split(' ')
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span
                    key={i}
                    style={{
                        display: 'inline-block',
                        overflow: 'hidden',
                        marginRight: '0.3em',
                        verticalAlign: 'bottom',
                    }}
                >
                    <span
                        className="slide-tr-word"
                        style={{
                            display: 'inline-block',
                            willChange: 'transform',
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </span>
    )
}

const StarRating = () => (
    <div className="flex items-center gap-2">
        <span className="text-white/85 text-[0.9rem] font-semibold">5.0</span>
        <div className="flex items-center gap-[3px]">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="18" height="17" viewBox="0 0 16 15" fill="#FFAF00" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99992 0L9.99992 5.5L15.9999 6L11.4999 10L12.9999 15L7.99992 12.5L2.99992 15L4.49992 10L-7.62939e-05 6L5.99992 5.5L7.99992 0Z" />
                </svg>
            ))}
        </div>
    </div>
)

const FoundersSaying = () => {
    const total = TESTIMONIALS_DATA.length;
    const sectionRef = useRef<HTMLElement>(null);
    const hasAnimatedOnce = useRef(false);

    const animateCard = useCallback((cardEl: Element) => {
        const chars = cardEl.querySelectorAll('.slide-tr-char');
        const words = cardEl.querySelectorAll('.slide-tr-word');
        const fadeEls = cardEl.querySelectorAll('.slide-fade-up');

        // Kill any running animations on these elements
        gsap.killTweensOf([...Array.from(chars), ...Array.from(words), ...Array.from(fadeEls)]);

        // Reset all
        gsap.set(chars, { y: '110%' });
        gsap.set(words, { y: '110%' });
        gsap.set(fadeEls, { y: 20, opacity: 0 });

        const tl = gsap.timeline({ delay: 0.35 });

        // 1) Chars reveal (name)
        if (chars.length) {
            tl.to(chars, {
                y: '0%',
                duration: 0.5,
                stagger: 0.025,
                ease: 'power3.out',
            }, 0);
        }

        // 2) Words reveal (quote) — slightly delayed
        if (words.length) {
            tl.to(words, {
                y: '0%',
                duration: 0.45,
                stagger: 0.03,
                ease: 'power3.out',
            }, 0.1);
        }

        // 3) Fade-up elements (title, stars, divider, footer)
        if (fadeEls.length) {
            tl.to(fadeEls, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power2.out',
            }, 0.25);
        }
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const radios = section.querySelectorAll<HTMLInputElement>('.testimonial-radio');
        const cards = section.querySelectorAll('.testimonial-card');

        // Reset non-active cards chars/words to hidden
        cards.forEach((card) => {
            const chars = card.querySelectorAll('.slide-tr-char');
            const words = card.querySelectorAll('.slide-tr-word');
            const fadeEls = card.querySelectorAll('.slide-fade-up');
            gsap.set(chars, { y: '110%' });
            gsap.set(words, { y: '110%' });
            gsap.set(fadeEls, { y: 20, opacity: 0 });
        });

        // Animate the first card on scroll into view
        ScrollTrigger.create({
            trigger: section,
            start: 'top 75%',
            once: true,
            onEnter: () => {
                const checkedRadio = section.querySelector<HTMLInputElement>('.testimonial-radio:checked');
                if (checkedRadio) {
                    const activeCard = checkedRadio.nextElementSibling;
                    if (activeCard) {
                        hasAnimatedOnce.current = true;
                        animateCard(activeCard);
                    }
                }
            },
        });

        // Listen for radio changes
        const handleChange = (e: Event) => {
            const radio = e.target as HTMLInputElement;
            if (!radio.checked) return;
            const card = radio.nextElementSibling;
            if (card) animateCard(card);
        };

        radios.forEach(radio => radio.addEventListener('change', handleChange));

        return () => {
            radios.forEach(radio => radio.removeEventListener('change', handleChange));
        };
    }, [animateCard]);

    return (
        <section className='md:px-10 px-5' ref={sectionRef}>
            {/* Container */}
            <div className="max-w-[1140px] mx-auto w-full">

                {/* Section Header */}
                <div className="text-center mb-[60px] md:mb-[80px] flex flex-col items-center gap-4">
                    <Badge>What Our Clients Say</Badge>
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center'>Trusted by Industry Leaders</Heading>
                </div>

                {/* Card Slider — CSS custom props must stay on this element */}
                <div className="testimonial-cards">
                    {TESTIMONIALS_DATA.map((testimonial, index) => {
                        const radioId = `testimonial-radio-${index + 1}`;
                        const prevIndex = index === 0 ? total : index;
                        const nextIndex = index === total - 1 ? 1 : index + 2;

                        return (
                            <React.Fragment key={index}>
                                {/* Hidden radio — JS queries by class name, keep it */}
                                <input
                                    type="radio"
                                    id={radioId}
                                    name="testimonial-card"
                                    className="testimonial-radio"
                                    defaultChecked={index === 0}
                                />
                                <article
                                    className="testimonial-card"
                                    style={{ '--angle': `${testimonial.angle}deg` } as React.CSSProperties}
                                >
                                    {/* Image Side */}
                                    <div
                                        className="
                                            w-[var(--img-w)] h-[var(--img-w)] aspect-square
                                            [rotate:var(--angle,0deg)]
                                            rounded-[20px] border-2 border-white/10
                                            overflow-hidden origin-center
                                            shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_80px_rgba(255,255,255,0.02)]
                                            justify-self-center md:justify-self-start
                                        "
                                    >
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={400}
                                            height={400}
                                            loading='lazy'
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div
                                        className="
                                            flex flex-col gap-3
                                            items-center md:items-start
                                            opacity-[var(--data-opacity,0)]
                                            pointer-events-[var(--card-events,none)]
                                            transition-opacity duration-300 ease-in-out
                                        "
                                    >
                                        {/* Counter */}
                                        <span className="text-xs text-white/25 font-semibold tracking-[0.2em] tabular-nums">
                                            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                                        </span>

                                        {/* Big quote icon */}
                                        <svg className="text-(--color-secondary)! shrink-0" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 7H7C5.89543 7 5 7.89543 5 9V13C5 14.1046 5.89543 15 7 15H9.5C9.5 16.3807 8.38071 17.5 7 17.5V19.5C9.48528 19.5 11.5 17.4853 11.5 15V9C11.5 7.89543 10.6046 7 9.5 7H11V7ZM19 7H15C13.8954 7 13 7.89543 13 9V13C13 14.1046 13.8954 15 15 15H17.5C17.5 16.3807 16.3807 17.5 15 17.5V19.5C17.4853 19.5 19.5 17.4853 19.5 15V9C19.5 7.89543 18.6046 7 17.5 7H19V7Z" fill="currentColor" />
                                        </svg>

                                        {/* Quote — word-by-word reveal */}
                                        <p className="text-[1.05rem] md:text-[1.1rem] lg:text-[1.2rem] leading-[1.75] text-white/60 text-center md:text-left max-w-[520px] md:max-w-none">
                                            <SplitWords>{testimonial.quote}</SplitWords>
                                        </p>

                                        {/* Divider */}
                                        <div className="slide-fade-up w-full h-px bg-white/[0.06] my-[0.4rem]"></div>

                                        {/* Author row */}
                                        <div className="slide-fade-up flex items-center justify-between w-full gap-4 flex-wrap max-md:flex-col max-md:items-center max-md:text-center">
                                            <div className="flex flex-col gap-[2px]">
                                                {/* Name — char-by-char reveal */}
                                                <h3 className="text-xl md:text-[1.4rem] font-semibold text-white tracking-[0.01em]">
                                                    <SplitText>{testimonial.name}</SplitText>
                                                </h3>
                                                <p className="slide-fade-up text-[0.85rem] text-white/35 font-normal uppercase tracking-[0.04em] opacity-90! text-(--color-secondary)!">
                                                    {testimonial.title}
                                                </p>
                                            </div>
                                            <StarRating />
                                        </div>

                                        {/* Prev / Next footer */}
                                        <footer className="flex gap-3 mt-2" style={{ justifyContent: 'var(--cards-footer-justify, center)' }}>
                                            <label htmlFor={`testimonial-radio-${prevIndex}`} aria-label="Previous" className="cursor-pointer duration-400 ease-in size-12 bg-black slider-buttons rounded-4xl flex justify-center items-center">
                                                <Icons icon='arrowIcon' />
                                            </label>
                                            <label htmlFor={`testimonial-radio-${nextIndex}`} aria-label="Next" className="cursor-pointer duration-400 ease-in flex justify-center items-center size-12 bg-black slider-buttons before:rotate-180 after:rotate-180 rounded-4xl">
                                                <Icons className='rotate-180' icon='arrowIcon' />
                                            </label>
                                        </footer>
                                    </div>
                                </article>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default FoundersSaying