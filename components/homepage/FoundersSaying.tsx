"use client";
import React from 'react'
import Image from 'next/image'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'
import Button from '../common/Button'
import Icons from '../common/Icons'
import Badge from '../common/Badge';

const testimonials = [
    {
        quote: "Working together was a seamless experience. The designs were beautiful and user-focused, and our website traffic improved noticeably.",
        name: "Thoms alva",
        title: "Ceo Of bingo",
        image: "/assets/images/png/client_avatar_1.png"
    },
    {
        quote: "Working together was a seamless experience. The designs were beautiful and user-focused, and our website traffic improved noticeably.",
        name: "David Chen",
        title: "Ceo Of bingo",
        image: "/assets/images/png/client_avatar_2.png"
    },
    {
        quote: "Working together was a seamless experience. The designs were beautiful and user-focused, and our website traffic improved noticeably.",
        name: "Elena Rodriguez",
        title: "Ceo Of bingo",
        image: "/assets/images/png/client_avatar_3.png"
    },
    {
        quote: "Working together was a seamless experience. The designs were beautiful and user-focused, and our website traffic improved noticeably.",
        name: "Marcus Johnson",
        title: "Ceo Of bingo",
        image: "/assets/images/png/client_avatar_4.png"
    },
]

const StarRating = () => (
    <div className="flex items-center gap-2">
        <span className="text-white/90 text-sm font-medium">5.0</span>
        <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="15" viewBox="0 0 16 15" fill="#FFAF00" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99992 0L9.99992 5.5L15.9999 6L11.4999 10L12.9999 15L7.99992 12.5L2.99992 15L4.49992 10L-7.62939e-05 6L5.99992 5.5L7.99992 0Z" />
                </svg>
            ))}
        </div>
    </div>
)

const FoundersSaying = () => {
    return (
        <div className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip bg-[#030303]'>
            <div className="max-w-[1240px] mx-auto w-full flex lg:flex-row flex-col gap-12 lg:gap-16 items-start">

                {/* Left Side (Sticky Content) */}
                <div className="w-full lg:w-[45%] flex flex-col gap-10 lg:sticky top-32">
                    <div className="flex flex-col gap-5">
                        {/* Badge */}
                        <Badge className='max-w-max'>Testimonial</Badge>

                        {/* Heading & Subtitle */}
                        <div className="flex flex-col gap-3">
                            <Heading animate Tag='h2' className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-semibold text-white! max-w-max bg-transparent! !text-left'>
                                Our <span className='bg-[linear-gradient(115.42deg,_#8a8a8a_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>Client Say</span>
                            </Heading>
                            <Paragraph animate className='opacity-60 !text-left text-[15px] sm:text-[16px]'>
                                Real words from people I've worked with.
                            </Paragraph>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
                        <div className="flex flex-col items-center justify-center bg-[#171717] rounded-xl p-4 sm:p-5 border border-white/5">
                            <h4 className="text-2xl sm:text-[28px] font-medium text-white mb-2">10k+</h4>
                            <p className="text-[11px] sm:text-[12.5px] text-white/40 text-center font-medium">Happy Client's</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-[#171717] rounded-xl p-4 sm:p-5 border border-white/5">
                            <h4 className="text-2xl sm:text-[28px] font-medium text-white mb-2">999+</h4>
                            <p className="text-[11px] sm:text-[12.5px] text-white/40 text-center font-medium">Website's Created</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-[#171717] rounded-xl p-4 sm:p-5 border border-white/5">
                            <h4 className="text-2xl sm:text-[28px] font-medium text-white mb-2">4.5</h4>
                            <p className="text-[11px] sm:text-[12.5px] text-white/40 text-center font-medium">Average Rating</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                        <Button secondary className="!py-3.5 !px-7 !text-[13.5px]">Our Project's</Button>
                        <Button className="!py-3.5 !px-7 !text-[13.5px]">Contact Now</Button>
                    </div>
                </div>

                {/* Right Side (Scrollable List) */}
                <div className="w-full lg:w-[50%] flex flex-col gap-5 ml-auto lg:mt-[193px]">
                    {testimonials.map((testimonial, index) => (
                        <SmoothAnimtionWrapper key={index} className="flex flex-col bg-[#0A0A0A] border border-white/5 hover:bg-[#121212] transition-colors duration-500 rounded-3xl p-6 sm:p-8 gap-6">

                            {/* Profile Header */}
                            <div className="flex items-center gap-5">
                                <div className="relative size-[65px] rounded-xl overflow-hidden shrink-0">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                        sizes="65px"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[20px] sm:text-[22px] font-medium text-white tracking-wide">{testimonial.name}</h4>
                                    <p className="text-[14px] text-white/50">{testimonial.title}</p>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className="h-[1px] w-full bg-white/5"></div>

                            {/* Ratings & Content */}
                            <div className="flex flex-col gap-4 mt-1">
                                <StarRating />
                                <Paragraph className="text-white/60 leading-relaxed text-[14px] sm:text-[15px] !text-left">
                                    {testimonial.quote}
                                </Paragraph>
                            </div>
                        </SmoothAnimtionWrapper>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default FoundersSaying