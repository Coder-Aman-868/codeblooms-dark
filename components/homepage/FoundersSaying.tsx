"use client";
import React, { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Icons from '../common/Icons';
import Badge from '../common/Badge';
import Heading from '../common/Heading';

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    {
        quote: "Working together was a seamless experience. The designs were beautiful and user-focused, and our website traffic improved noticeably.",
        name: "Thoms Alva",
        title: "Ceo Of Bingo",
        image: "/assets/images/png/client_avatar_1.png",
        angle: 5,
    },
    {
        quote: "The team delivered beyond expectations. Their attention to detail and creative vision transformed our entire digital presence.",
        name: "David Chen",
        title: "Ceo Of Bingo",
        image: "/assets/images/png/client_avatar_2.png",
        angle: -7,
    },
    {
        quote: "Exceptional collaboration from start to finish. The final product exceeded all our benchmarks and delighted our users.",
        name: "Elena Rodriguez",
        title: "Ceo Of Bingo",
        image: "/assets/images/png/client_avatar_3.png",
        angle: -6,
    },
    {
        quote: "Professional, creative, and incredibly responsive. They turned our vague ideas into a stunning reality that drives results.",
        name: "Marcus Johnson",
        title: "Ceo Of Bingo",
        image: "/assets/images/png/client_avatar_4.png",
        angle: 9,
    },
]

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
    <div className="testimonial-stars">
        <span className="testimonial-stars-label">5.0</span>
        <div className="testimonial-stars-icons">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="18" height="17" viewBox="0 0 16 15" fill="#FFAF00" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99992 0L9.99992 5.5L15.9999 6L11.4999 10L12.9999 15L7.99992 12.5L2.99992 15L4.49992 10L-7.62939e-05 6L5.99992 5.5L7.99992 0Z" />
                </svg>
            ))}
        </div>
    </div>
)

const FoundersSaying = () => {
    const total = testimonials.length;
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
        cards.forEach((card, i) => {
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
            <div className="testimonial-container">

                {/* Section Header */}
                <div className="testimonial-header">
                    <Badge>What Our Clients Say</Badge>
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center'>Trusted by Industry Leaders</Heading>
                </div>

                {/* Card Slider */}
                <div className="testimonial-cards">
                    {testimonials.map((testimonial, index) => {
                        const radioId = `testimonial-radio-${index + 1}`;
                        const prevIndex = index === 0 ? total : index;
                        const nextIndex = index === total - 1 ? 1 : index + 2;

                        return (
                            <React.Fragment key={index}>
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
                                    <div className="testimonial-card-img-wrapper">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={400}
                                            height={400}
                                            loading='lazy'
                                            className="testimonial-card-img"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className="testimonial-card-data">
                                        <span className="testimonial-card-num slide-fade-up">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>

                                        {/* Big quote icon */}
                                        <svg className="testimonial-quote-icon slide-fade-up text-(--color-secondary)!" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 7H7C5.89543 7 5 7.89543 5 9V13C5 14.1046 5.89543 15 7 15H9.5C9.5 16.3807 8.38071 17.5 7 17.5V19.5C9.48528 19.5 11.5 17.4853 11.5 15V9C11.5 7.89543 10.6046 7 9.5 7H11V7ZM19 7H15C13.8954 7 13 7.89543 13 9V13C13 14.1046 13.8954 15 15 15H17.5C17.5 16.3807 16.3807 17.5 15 17.5V19.5C17.4853 19.5 19.5 17.4853 19.5 15V9C19.5 7.89543 18.6046 7 17.5 7H19V7Z" fill="currentColor" />
                                        </svg>

                                        {/* Quote — word-by-word reveal */}
                                        <p className="testimonial-card-quote">
                                            <SplitWords>{testimonial.quote}</SplitWords>
                                        </p>

                                        <div className="testimonial-card-divider slide-fade-up"></div>

                                        <div className="testimonial-card-author slide-fade-up">
                                            <div className="testimonial-card-author-info">
                                                {/* Name — char-by-char reveal */}
                                                <h3 className="testimonial-card-name">
                                                    <SplitText>{testimonial.name}</SplitText>
                                                </h3>
                                                <p className="testimonial-card-title slide-fade-up">{testimonial.title}</p>
                                            </div>
                                            <StarRating />
                                        </div>

                                        <footer className="testimonial-card-footer slide-fade-up">
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