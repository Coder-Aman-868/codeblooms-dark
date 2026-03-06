import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full relative bg-black pt-16 pb-12 sm:pb-16 border-t border-[#202020] overflow-hidden rounded-t-[2.5rem] mt-20">
            <div className="max-w-7xl mx-auto px-5 w-full relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center w-full mb-16 lg:mb-24 gap-8">

                    {/* Language Selector */}
                    <div className="flex items-center gap-2 text-[#919191] text-sm cursor-pointer hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                        <span className="font-medium">EN</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <Link href="#" className="w-11 h-11 rounded-full border border-[#202020] bg-white/5 flex justify-center items-center text-[#B8B8B8] hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" ><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </Link>
                        <Link href="#" className="w-11 h-11 rounded-full border border-[#202020] bg-white/5 flex justify-center items-center text-[#B8B8B8] hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </Link>
                        <Link href="#" className="w-11 h-11 rounded-full border border-[#202020] bg-white/5 flex justify-center items-center text-[#B8B8B8] hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                        </Link>
                        <Link href="#" className="w-11 h-11 rounded-full border border-[#202020] bg-white/5 flex justify-center items-center text-[#B8B8B8] hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </Link>
                        <Link href="#" className="w-11 h-11 rounded-full border border-[#202020] bg-white/5 flex justify-center items-center text-[#B8B8B8] hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.239.54-.959.72-1.559.3z" /></svg>
                        </Link>
                    </div>

                    {/* Copyright text */}
                    <div className="text-sm font-medium text-[#919191]">
                        © 2026 CodeBlooms. All rights reserved.
                    </div>
                </div>

                {/* Large Text */}
                <div className="w-full flex justify-center mt-6">
                    <h2 className="text-[14vw] sm:text-[15.5vw] md:text-[16vw] text-center w-full leading-[0.8] font-bold tracking-tighter bg-[linear-gradient(89.7deg,rgba(255,255,255,0.4)_1.56%,#FFFFFF_23.75%,#FFFFFF_80.16%,rgba(255,255,255,0.3)_97.71%)] text-transparent bg-clip-text">
                        CodeBlooms.
                    </h2>
                </div>
            </div>

            {/* Background Blur Effect */}
            <div className="absolute left-1/2 top-1/2 w-full max-w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none blur-[120px] bg-white rounded-full"></div>
        </footer>
    )
}

export default Footer