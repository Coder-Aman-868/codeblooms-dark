import Link from 'next/link'
import React from 'react'
import Icons from '../common/Icons'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'
import Button from '../common/Button'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Image from 'next/image'

const WorkNeedle = () => {
    return (
        <div className='lg:pb-37.5 md:pb-30 sm:pb-20 pb-15 px-5 relative overflow-x-clip'>
            <div className="max-w-[1036px] mx-auto w-full flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10">
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>Work that Moves the Needle.</Heading>
                    <Paragraph animate className='text-center opacity-80'>We don't just write code. We build digital assets designed to lower customer acquisition costs and increase conversions.</Paragraph>
                </div>
                <div className="flex sm:flex-row flex-col gap-4 items-stretch w-full">
                    <div className="flex flex-col gap-4 w-full h lg:h-[747px] md:h-[calc(747px_-10vw)] sm:h-[calc(747px_-20vw)] h-[700px]">
                        <SmoothAnimtionWrapper className="relative p-3.75 bg-white/12 border sm:h-[55%] h-full backdrop-blur-[22px] border-white/12 rounded-xl">
                            <div className="relative rounded-lg overflow-clip h-full">
                                <Image width={300} height={300} loading='lazy' className='z-0 absolute inset-0 w-full h-full object-cover' src="/assets/images/png/work-needle-cards-bg-image.png" alt="bg-image" />
                                <Image width={300} height={300} loading='lazy' className='absolute left-1/2 -translate-x-1/2 top-[42px] rounded-xl w-[80%]' src="/assets/images/png/project-img-1.png" alt="project-image" />
                                <Link aria-label="View Project" className='z-10 size-9.5 rounded-4xl border border-white/12 bg-[#171717] flex justify-center items-center absolute bottom-[15px] left-[15px]' href={"#"}>
                                    <Icons className='rotate-135' icon='arrowIcon' />
                                </Link>
                            </div>
                        </SmoothAnimtionWrapper>
                        <SmoothAnimtionWrapper className="relative p-3.75 bg-white/12 border sm:h-[43%] h-full backdrop-blur-[22px] border-white/12 rounded-xl">
                            <div className="relative rounded-lg overflow-clip h-full">
                                <Image width={300} height={300} loading='lazy' className='z-0 absolute inset-0 w-full h-full object-cover' src="/assets/images/png/work-needle-small-cards-bg-image.png" alt="bg-image" />
                                <Image width={300} height={300} loading='lazy' className='absolute left-1/2 -translate-x-1/2 top-[42px] rounded-xl w-[80%]' src="/assets/images/png/project-img-3.png" alt="project-image" />
                                <Link aria-label="View Project" className='z-10 size-9.5 rounded-4xl border border-white/12 bg-[#171717] flex justify-center items-center absolute bottom-[15px] left-[15px]' href={"#"}>
                                    <Icons className='rotate-135' icon='arrowIcon' />
                                </Link>
                            </div>
                        </SmoothAnimtionWrapper>
                    </div>
                    <div className="flex flex-col gap-4 w-full h lg:h-[747px] md:h-[calc(747px_-10vw)] sm:h-[calc(747px_-20vw)] h-[700px]">
                        <SmoothAnimtionWrapper className="relative p-3.75 bg-white/12 border sm:h-[43%] h-full backdrop-blur-[22px] border-white/12 rounded-xl">
                            <div className="relative rounded-lg overflow-clip h-full">
                                <Image width={300} height={300} loading='lazy' className='z-0 absolute inset-0 w-full h-full object-cover' src="/assets/images/png/work-needle-small-cards-bg-image.png" alt="bg-image" />
                                <Image width={300} height={300} loading='lazy' className='absolute left-1/2 -translate-x-1/2 top-[42px] rounded-xl w-[80%]' src="/assets/images/png/project-img-2.png" alt="project-image" />
                                <Link aria-label="View Project" className='z-10 size-9.5 rounded-4xl border border-white/12 bg-[#171717] flex justify-center items-center absolute bottom-[15px] left-[15px]' href={"#"}>
                                    <Icons className='rotate-135' icon='arrowIcon' />
                                </Link>
                            </div>
                        </SmoothAnimtionWrapper>
                        <SmoothAnimtionWrapper className="relative p-3.75 bg-white/12 border sm:h-[55%] h-full backdrop-blur-[22px] border-white/12 rounded-xl">
                            <div className="relative rounded-lg overflow-clip h-full">
                                <Image width={300} height={300} loading='lazy' className='z-0 absolute inset-0 w-full h-full object-cover' src="/assets/images/png/work-needle-cards-bg-image.png" alt="bg-image" />
                                <Image width={300} height={300} loading='lazy' className='absolute left-1/2 -translate-x-1/2 top-[42px] rounded-xl w-[80%]' src="/assets/images/png/project-img-4.png" alt="project-image" />
                                <Link aria-label="View Project" className='z-10 size-9.5 rounded-4xl border border-white/12 bg-[#171717] flex justify-center items-center absolute bottom-[15px] left-[15px]' href={"#"}>
                                    <Icons className='rotate-135' icon='arrowIcon' />
                                </Link>
                            </div>
                        </SmoothAnimtionWrapper>
                    </div>
                </div>
                <Button secondary>View Full Portfolio</Button>
            </div>
        </div>
    )
}

export default WorkNeedle