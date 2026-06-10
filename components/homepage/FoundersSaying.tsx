"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Badge from "../common/Badge";
import Heading from "../common/Heading";
import { TESTIMONIALS_DATA } from "@/helper/helper";
import LiquidGlass from "../common/LiquidGlass";

/* ──────────────────────────────────────────────
   Extra testimonials so both rows have variety
   ────────────────────────────────────────────── */
const EXTRA_TESTIMONIALS = [
    {
        quote: "They brought our brand to life with precision and passion. The attention to every micro-interaction blew us away.",
        name: "Sarah Kim",
        title: "VP of Product, NovaTech",
        image: "/assets/images/webp/client_avatar_1.webp",
    },
    {
        quote: "Our conversion rate jumped 40% within weeks of the new site going live. The ROI is undeniable.",
        name: "James Okafor",
        title: "Co-Founder, Payloop",
        image: "/assets/images/webp/client_avatar_2.webp",
    },
    {
        quote: "Fast delivery, clean code, and a design that makes our competitors jealous. Couldn't ask for more.",
        name: "Priya Mehta",
        title: "Head of Growth, Cloudify",
        image: "/assets/images/webp/client_avatar_3.webp",
    },
    {
        quote: "The team felt like an in-house extension. Every sprint delivered exactly what we envisioned.",
        name: "Lucas Bauer",
        title: "CTO, DataForge",
        image: "/assets/images/webp/client_avatar_4.webp",
    },
];

const ROW_ONE = [...TESTIMONIALS_DATA, ...EXTRA_TESTIMONIALS];
const ROW_TWO = [...EXTRA_TESTIMONIALS, ...TESTIMONIALS_DATA];

/* ──────────────────────────────────────────────
   Star Rating
   ────────────────────────────────────────────── */
const StarRating = () => (
    <div className="flex items-center gap-[3px]">
        {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} width="14" height="13" viewBox="0 0 16 15" fill="#FFAF00">
                <path d="M7.99992 0L9.99992 5.5L15.9999 6L11.4999 10L12.9999 15L7.99992 12.5L2.99992 15L4.49992 10L-7.62939e-05 6L5.99992 5.5L7.99992 0Z" />
            </svg>
        ))}
    </div>
);

/* ──────────────────────────────────────────────
   Single testimonial card — all Tailwind
   ────────────────────────────────────────────── */
interface CardData {
    quote: string;
    name: string;
    title: string;
    image: string;
    angle?: number;
}

const TestimonialCard = ({ quote, name, title, image }: CardData) => (
    <article className="group relative flex-shrink-0 w-[clamp(280px,30vw,380px)] flex flex-col">
        {/* Glass card surface */}
        <div
            className="
                relative z-[1] flex flex-col flex-grow gap-[14px]
                px-6 pt-6 pb-5 rounded-[20px] saturate-[1.4]
                border border-white/[0.07]
                shadow-[0_4px_24px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]
                transition-[border-color,box-shadow] duration-[350ms] ease-in-out card-border after:rounded-[20px] before:rounded-[20px] overflo-hidden
            "
        >
            {/* Quote icon */}
            <svg
                className="text-white/40 duration-300 group-hover:text-(--color-secondary) opacity-70 shrink-0 w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M11 7H7C5.89543 7 5 7.89543 5 9V13C5 14.1046 5.89543 15 7 15H9.5C9.5 16.3807 8.38071 17.5 7 17.5V19.5C9.48528 19.5 11.5 17.4853 11.5 15V9C11.5 7.89543 10.6046 7 9.5 7H11V7ZM19 7H15C13.8954 7 13 7.89543 13 9V13C13 14.1046 13.8954 15 15 15H17.5C17.5 16.3807 16.3807 17.5 15 17.5V19.5C17.4853 19.5 19.5 17.4853 19.5 15V9C19.5 7.89543 18.6046 7 17.5 7H19V7Z"
                    fill="currentColor"
                />
            </svg>

            {/* Quote text */}
            <p className="text-[0.9rem] leading-[1.72] text-white/50 tracking-[0.01em]  mb-auto">
                &ldquo;{quote}&rdquo;
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.055] my-0.5" />

            {/* Author row — mt-auto pins it to the bottom of every card */}
            <div className="flex items-center gap-2.5">

                {/* Avatar */}
                <div className="size-10 rounded-full overflow-hidden border border-[rgba(103,232,249,0.25)] shrink-0">
                    <Image
                        src={image}
                        alt={name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Name + Role */}
                <div className="flex flex-col gap-px min-w-0">
                    <span className="text-[0.88rem] font-semibold text-white/88 truncate">
                        {name}
                    </span>
                    <span className="text-[0.72rem] text-white/40 duration-300 group-hover:text-(--color-secondary) uppercase tracking-[0.06em] font-medium opacity-80 truncate">
                        {title}
                    </span>
                </div>

                {/* Stars */}
                <div className="ml-auto shrink-0">
                    <StarRating />
                </div>
            </div>
        </div>
    </article>
);

/* ──────────────────────────────────────────────
   One infinite marquee row — all Tailwind
   ────────────────────────────────────────────── */
interface MarqueeRowProps {
    items: CardData[];
    reverse?: boolean;
}

const MarqueeRow = ({ items, reverse = false }: MarqueeRowProps) => {
    const trackRef = useRef<HTMLDivElement>(null);

    /* Pause / resume on hover */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const pause = () => (track.style.animationPlayState = "paused");
        const play = () => (track.style.animationPlayState = "running");
        track.addEventListener("mouseenter", pause);
        track.addEventListener("mouseleave", play);
        return () => {
            track.removeEventListener("mouseenter", pause);
            track.removeEventListener("mouseleave", play);
        };
    }, []);

    const loopItems = [...items, ...items];

    return (
        <div className="overflow-hidden w-full flex" aria-hidden="true">
            <div
                ref={trackRef}
                className={`flex gap-5 shrink-0 w-max animate-marquee-scroll ${reverse ? "[animation-direction:reverse]" : ""}`}
            >
                {loopItems.map((item, i) => (
                    <TestimonialCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

/* ──────────────────────────────────────────────
   Main section — all Tailwind
   ────────────────────────────────────────────── */
const FoundersSaying = () => (
    <section className="overflow-hidden py-[clamp(60px,8vw,120px)] relative">

        {/* Section header */}
        <div className="text-center mb-14 md:mb-[72px] flex flex-col items-center gap-4 px-5">
            <Badge>What Our Clients Say</Badge>
            <Heading
                animate
                Tag="h2"
                className="lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center"
            >
                Trusted by Industry Leaders
            </Heading>
            <p className="text-white/45 text-base md:text-lg max-w-[540px] mx-auto leading-relaxed">
                Real words from the founders and teams we&apos;ve partnered with to build exceptional digital products.
            </p>
        </div>

        {/* Marquee stage — edge fades via Tailwind mask utilities */}
        <div className="relative flex flex-col gap-5
            before:pointer-events-none before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[clamp(60px,10vw,160px)] before:z-10
            before:bg-gradient-to-r before:from-black before:to-transparent
            after:pointer-events-none after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[clamp(60px,10vw,160px)] after:z-10
            after:bg-gradient-to-l after:from-black after:to-transparent
        ">
            <MarqueeRow items={ROW_ONE} reverse={false} />
            <MarqueeRow items={ROW_TWO} reverse={true} />
        </div>
    </section>
);

export default FoundersSaying;