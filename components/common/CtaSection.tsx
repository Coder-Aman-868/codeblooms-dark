"use client"

import React, { useState } from 'react'
import SmoothAnimtionWrapper from './SmoothAnimtionWrapper'
import Badge from './Badge';

const CtaSection = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
        }
    };

    return (
        <section className='lg:pb-37.5 md:pb-30 sm:pb-20 pb-15 px-5 relative overflow-x-clip'>
            {/* Background glow effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/4 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-white/3 rounded-full blur-[80px]" />
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-white/3 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-[1036px] mx-auto w-full relative z-10">
                <SmoothAnimtionWrapper className="relative group rounded-3xl overflow-hidden p-[1px]">
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(184,184,184,0.35)_0%,rgba(82,82,82,0)_45%,rgba(184,184,184,0.35)_100%)] rounded-3xl" />

                    {/* Inner card */}
                    <div className="relative flex lg:flex-row flex-col items-center justify-between gap-6 lg:gap-10 px-8 sm:px-10 py-10 sm:py-12 bg-[#101010] rounded-3xl overflow-hidden">

                        {/* Subtle inner glow */}
                        <div className="absolute pointer-events-none top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)]" />
                        <div className="absolute pointer-events-none -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/4 rounded-full blur-[80px]" />

                        {/* LEFT — Heading content */}
                        <div className="flex flex-col lg:items-start items-center gap-3 relative z-10 lg:max-w-[420px] w-full shrink-0">
                            <Badge>Let's Build Together</Badge>

                            <h2 className="bg-[linear-gradient(89.7deg,rgba(255,255,255,0.4)_1.56%,#FFFFFF_23.75%,#FFFFFF_50.16%,rgba(255,255,255,0.4)_97.71%)] bg-clip-text text-transparent lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold leading-[130%] lg:text-left text-center">
                                Ready to Outperform<br className='lg:block hidden' /> Your Competitors?
                            </h2>

                            <p className="md:text-base text-sm font-medium text-white opacity-55 lg:text-left text-center">
                                Let's build a website that reflects the true quality of your software.
                            </p>
                        </div>

                        {/* RIGHT — Email + CTA form */}
                        <div className="relative z-10 w-full lg:max-w-[480px]">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="w-full">
                                    {/* Input with embedded button */}
                                    <div className="relative rounded-full p-[1px] bg-[linear-gradient(115.42deg,rgba(184,184,184,0.35)_0%,rgba(82,82,82,0)_50%,rgba(184,184,184,0.35)_100%)]">
                                        <div className="flex items-center bg-[#171717] rounded-full pr-1.5 overflow-hidden">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your work email"
                                                className="flex-1 bg-transparent text-white placeholder:text-white/30 text-sm font-medium py-4 pl-6 pr-3 outline-none border-none min-w-0"
                                            />
                                            {/* Button inside input */}
                                            <button
                                                type="submit"
                                                className="group relative overflow-hidden shrink-0 rounded-full py-3 px-5 sm:px-6 text-xs sm:text-sm font-medium text-black cursor-pointer transition-all duration-300"
                                            >
                                                <span className="absolute inset-0 pointer-events-none bg-[linear-gradient(137.49deg,#EFEFEF_20.48%,#737272_79.52%)]" />
                                                <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(137.49deg,#737272_20.48%,#EFEFEF_79.52%)]" />
                                                <span className="relative z-10 whitespace-nowrap">Book a Strategy Call</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-white/5 border border-white/10">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M3 9L7 13L15 5" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-[#B8B8B8] text-sm font-medium">
                                        We'll reach out to <span className="text-white">{email}</span> shortly!
                                    </span>
                                </div>
                            )}

                        </div>
                        {/* No spam — absolute bottom right */}
                        {!submitted && (
                            <p className="absolute bottom-4 right-8 text-white/25 text-xs">
                                No spam, ever. Unsubscribe any time.
                            </p>
                        )}

                        {/* Decorative grid lines */}
                        <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.3]"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                                height: '80px',
                                maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                            }}
                        />
                    </div>
                </SmoothAnimtionWrapper>
            </div>
        </section>
    )
}

export default CtaSection
