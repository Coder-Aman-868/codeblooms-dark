import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='px-5 lg:pt-12.5 sm:pt-8 pt-5 fixed top-0 w-full z-50 left-0'>
            <div className="max-w-205 mx-auto p-1 pl-3.5 rounded-full border border-[#202020] flex justify-between items-center w-full bg-white/5 backdrop-blur-lg">
                <Link href={'/'} className='bg-[linear-gradient(180deg,#E7E7E7_0%,#646464_100%)] text-transparent bg-clip-text text-lg leading-none font-medium text-nowrap'>Code Blooms</Link>
                <div className="flex justify-center gap-6.5 items-center leading-none text-[#B8B8B8] text-base max-lg:hidden">
                    <Link href={"/services"}>Services</Link>
                    <Link href={"/projects"}>Projects</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact-us"}>Contact Us</Link>
                </div>
                <Button secondary className='leading-none! text-base! px-5! py-4!'>Get Started</Button>
            </div>
        </div>
    )
}

export default Navbar