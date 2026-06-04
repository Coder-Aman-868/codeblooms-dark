'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'

const NAV_LINKS = [
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
]

type UnderlinePos = { left: number; width: number }

const LERP_FACTOR = 0.3
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const Navbar = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    // ── Desktop lerp underline refs ───────────────────────────────────────────
    const navRef = useRef<HTMLDivElement>(null)
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
    const underlineRef = useRef<HTMLSpanElement>(null)
    const targetRef = useRef<UnderlinePos | null>(null)
    const currentRef = useRef<UnderlinePos>({ left: 0, width: 0 })
    const rafRef = useRef<number | null>(null)
    const isFirstRender = useRef(true)
    const activePosRef = useRef<UnderlinePos | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    // Close mobile menu & restore scroll on route change
    useEffect(() => { setMenuOpen(false) }, [pathname])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    // ── rAF lerp loop ─────────────────────────────────────────────────────────
    const startLoop = () => {
        if (rafRef.current !== null) return
        const tick = () => {
            const target = targetRef.current
            const el = underlineRef.current
            if (!target || !el) { rafRef.current = null; return }

            currentRef.current.left = lerp(currentRef.current.left, target.left, LERP_FACTOR)
            currentRef.current.width = lerp(currentRef.current.width, target.width, LERP_FACTOR)

            el.style.transform = `translateX(${currentRef.current.left}px)`
            el.style.width = `${currentRef.current.width}px`

            const settled =
                Math.abs(currentRef.current.left - target.left) < 0.1 &&
                Math.abs(currentRef.current.width - target.width) < 0.1

            rafRef.current = settled ? null : requestAnimationFrame(tick)
        }
        rafRef.current = requestAnimationFrame(tick)
    }

    const setTarget = (pos: UnderlinePos | null) => {
        if (!pos) { targetRef.current = null; setIsVisible(false); return }
        if (isFirstRender.current) { currentRef.current = { ...pos }; isFirstRender.current = false }
        targetRef.current = pos
        setIsVisible(true)
        startLoop()
    }

    // ── Active route ──────────────────────────────────────────────────────────
    useEffect(() => {
        const nav = navRef.current
        if (!nav) return

        const activeIndex = NAV_LINKS.findIndex(
            ({ href }) => pathname === href || pathname.startsWith(href + '/')
        )
        const activeLink = linkRefs.current[activeIndex]

        if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect()
            const navRect = nav.getBoundingClientRect()
            const pos = { left: linkRect.left - navRect.left, width: linkRect.width }
            activePosRef.current = pos
            setTarget(pos)
        } else {
            activePosRef.current = null
            setTarget(null)
        }

        return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
    }, [pathname])

    // ── Hover handlers ────────────────────────────────────────────────────────
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const nav = navRef.current
        if (!nav) return
        const linkRect = e.currentTarget.getBoundingClientRect()
        const navRect = nav.getBoundingClientRect()
        setTarget({ left: linkRect.left - navRect.left, width: linkRect.width })
    }
    const handleMouseLeave = () => setTarget(activePosRef.current)


    return (
        <>
            {/* ── Top bar ───────────────────────────────────────────────────── */}
            <div className='px-5 lg:pt-12.5 sm:pt-8 pt-5 fixed top-0 w-full z-50 left-0'>
                <div className="max-w-205 mx-auto p-1 pl-3.5 rounded-full border border-transparent flex justify-between items-center w-full bg-white/5 relative">
                    <div className="d-glass-card liquid-glass">
                        <div className="d-glass-card-morph"></div>
                        <div className="d-glass-card-corner"></div>
                        <div className="d-glass-card-border"></div>
                    </div>
                    <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
                        <filter id="liquid-glass">
                            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" seed="5" result="turbulence" />
                            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="40" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                    </svg>
                    {/* Logo */}
                    <Link
                        href='/'
                        style={{
                            backgroundImage: pathname === '/'
                                ? 'linear-gradient(180deg, var(--color-secondary) 0%, #646464 100%)'
                                : 'linear-gradient(180deg, #E7E7E7 0%, #646464 100%)'
                        }}
                        className={`text-transparent bg-clip-text text-lg z-10 relative leading-none font-medium text-nowrap`}
                    >
                        Code Blooms
                    </Link>

                    {/* Desktop links */}
                    <div
                        ref={navRef}
                        className="relative flex justify-center gap-6.5 items-center leading-none text-base max-lg:hidden z-10"
                        onMouseLeave={handleMouseLeave}
                    >
                        {NAV_LINKS.map(({ href, label }, i) => {
                            const isActive = pathname === href || pathname.startsWith(href + '/')
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    ref={(el) => { linkRefs.current[i] = el }}
                                    onMouseEnter={handleMouseEnter}
                                    className={`py-1 transition-colors duration-200 hover:text-(--color-secondary) ${isActive ? 'text-(--color-secondary)' : 'text-white/70'}`}
                                >
                                    {label}
                                </Link>
                            )
                        })}

                        {/* Lerp underline */}
                        <span
                            ref={underlineRef}
                            className="pointer-events-none absolute bottom-0 h-px bg-(--color-secondary) rounded-full"
                            style={{
                                left: 0,
                                width: `${currentRef.current.width}px`,
                                transform: `translateX(${currentRef.current.left}px)`,
                                opacity: isVisible ? 1 : 0,
                                transition: 'opacity 200ms ease',
                            }}
                        />
                    </div>

                    {/* Right: CTA + hamburger */}
                    <div className="flex items-center gap-2.5 relative z-10">
                        <Link href='/start-project' className="max-sm:hidden">
                            <Button secondary className='leading-none! text-base! px-5! py-4!'>Get Started</Button>
                        </Link>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setMenuOpen(v => !v)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-full border border-[#202020] bg-white/5 backdrop-blur-lg shrink-0 cursor-pointer"
                        >
                            <span
                                className="block h-px w-[17px] bg-white rounded-full origin-center"
                                style={{
                                    transition: 'transform 320ms cubic-bezier(0.4,0,0.2,1)',
                                    transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none',
                                }}
                            />
                            <span
                                className="block h-px bg-white rounded-full origin-center"
                                style={{
                                    width: menuOpen ? '17px' : '11px',
                                    transition: 'transform 320ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease, width 300ms cubic-bezier(0.4,0,0.2,1)',
                                    opacity: menuOpen ? 0 : 1,
                                    transform: menuOpen ? 'scaleX(0)' : 'none',
                                }}
                            />
                            <span
                                className="block h-px w-[17px] bg-white rounded-full origin-center"
                                style={{
                                    transition: 'transform 320ms cubic-bezier(0.4,0,0.2,1)',
                                    transform: menuOpen ? 'translateY(-9px) rotate(-45deg)' : 'none',
                                }}
                            />
                        </button>
                    </div>

                </div>
            </div>

            {/* ── Mobile overlay ────────────────────────────────────────────── */}
            <div
                className="lg:hidden fixed inset-0 z-40 flex flex-col"
                style={{
                    pointerEvents: menuOpen ? 'all' : 'none',
                    backgroundColor: 'rgba(5,5,5,0.94)',
                    backdropFilter: 'blur(28px)',
                    WebkitBackdropFilter: 'blur(28px)',
                    opacity: menuOpen ? 1 : 0,
                    transition: 'opacity 380ms cubic-bezier(0.4,0,0.2,1)',
                }}
            >
                {/* Subtle dot-grid texture */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                    }}
                />

                {/* Glow accent — top-right */}
                <div
                    className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />

                {/* Nav links */}
                <nav className="relative flex flex-col justify-center flex-1 px-7 sm:px-10 gap-0 mt-16">
                    {NAV_LINKS.map(({ href, label }, i) => {
                        const isActive = pathname === href || pathname.startsWith(href + '/')
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="group flex items-center gap-5 py-4 border-b border-white/[0.05] w-full"
                                style={{
                                    opacity: menuOpen ? 1 : 0,
                                    transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                    transition: `opacity 450ms ease ${100 + i * 65}ms, transform 450ms cubic-bezier(0.16,1,0.3,1) ${100 + i * 65}ms`,
                                }}
                            >
                                {/* Index */}
                                <span className="text-[10px] text-[#333] font-mono leading-none tabular-nums w-4 shrink-0 mt-1">
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                                {/* Label */}
                                <div
                                    className="text-[2.6rem] sm:text-6xl font-medium leading-none tracking-tight"
                                    style={{
                                        background: 'linear-gradient(160deg, #ffffff 0%, #888888 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        transition: 'background 300ms ease',
                                        opacity: isActive ? 1 : 0.3,
                                    }}
                                >
                                    {label}
                                </div>

                                {/* Arrow — appears on hover */}
                                <span
                                    className="ml-auto text-[#2a2a2a] text-xl leading-none opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1"
                                    style={{ transition: 'opacity 200ms ease, transform 200ms ease' }}
                                >
                                    →
                                </span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Bottom CTA */}
                <div
                    className="relative px-7 sm:px-10 pb-10 sm:pb-14"
                    style={{
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                        transition: `opacity 450ms ease ${100 + NAV_LINKS.length * 65 + 50}ms, transform 450ms cubic-bezier(0.16,1,0.3,1) ${100 + NAV_LINKS.length * 65 + 50}ms`,
                    }}
                >
                    <Link href='/start-project' onClick={() => setMenuOpen(false)} className="block">
                        <Button secondary className='w-full! justify-center! leading-none! text-base! px-5! py-4!'>
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar