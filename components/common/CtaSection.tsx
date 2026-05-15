"use client"

import React, { useState } from 'react'
import SmoothAnimtionWrapper from './SmoothAnimtionWrapper'
import Badge from './Badge';
import Button from './Button';

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
        <section className='relative py-14 sm:py-22 lg:py-30 overflow-hidden'>
            {/* Modern architectural background grids & glows */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-[100%] blur-[120px]" />

                {/* Minimal grid */}
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
                    }}
                />
            </div>

            <div className="max-w-[1000px] mx-auto px-5 relative z-10">
                <SmoothAnimtionWrapper className="w-full flex flex-col items-center text-center">

                    <Badge>Let's Build Together</Badge>

                    <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight text-white mb-2">
                        Ready to Outperform <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/70 to-white/30 italic font-light">
                            Your Competitors?
                        </span>
                    </h2>

                    <p className="mt-8 text-base md:text-xl text-[#B8B8B8] max-w-2xl font-medium">
                        Let's build a website that reflects the true quality of your software. Drop your email below to book a strategy call.
                    </p>

                    <div className="mt-12 lg:mt-16 w-full max-w-md mx-auto">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="relative group">
                                {/* Elegant border glow on focus */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur-md opacity-0 group-focus-within:opacity-100 transition duration-500" />

                                <div className="relative flex items-center bg-[#111] backdrop-blur-xl border border-white/10 rounded-full p-1.5 focus-within:border-white/30 focus-within:bg-[#161616] transition-all overflow-hidden">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@company.com"
                                        className="flex-1 bg-transparent text-white placeholder:text-white/30 text-base py-4 pl-6 pr-4 outline-none border-none min-w-0"
                                    />
                                    <Button
                                        type="submit"
                                    // className="relative shrink-0 flex items-center justify-center rounded-full bg-white text-black py-4 px-8 text-sm font-semibold hover:bg-zinc-200 active:scale-[0.97] transition-all"
                                    >
                                        Start Now
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="flex items-center justify-center gap-4 py-5 px-8 rounded-full bg-[#111] border border-white/10 text-white animate-in zoom-in-95 duration-500">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="font-medium text-sm sm:text-base">
                                    We'll reach out to <span className="text-white/60">{email}</span> shortly!
                                </span>
                            </div>
                        )}

                        {!submitted && (
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/40 text-sm font-medium">
                                <span className="flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    No commitment
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Free consultation
                                </span>
                            </div>
                        )}
                    </div>
                </SmoothAnimtionWrapper>
            </div>
        </section>
    )
}

export default CtaSection
