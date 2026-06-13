import { FEATURES_DATA } from '@/helper/helper'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const PartnerWith = () => {
    return (
        <section className='py-20 md:py-28 lg:py-32 px-5 relative overflow-x-clip border-t border-white/5'>
            <div className="max-w-[1036px] mx-auto w-full">
                <div className="flex flex-col justify-center items-center gap-4 max-w-[800px] mx-auto pb-16 md:pb-20">
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-light text-center tracking-tight text-white! bg-transparent!'>
                        Why Partner With Clear Orbit?
                    </Heading>
                    <Paragraph animate className='text-center opacity-60 font-light text-lg'>
                        We are not a traditional agency. We are an extension of your product team.
                    </Paragraph>
                </div>

                <SmoothAnimtionWrapper className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 sm:gap-16">
                    {FEATURES_DATA.map((feature, index) => (
                        <div key={index} className="relative group pl-6 sm:pl-8 flex flex-col h-full border-l border-white/10 transition-all duration-700 hover:(--color-secondary)/30">
                            {/* Left Glow on hover */}
                            <div className="absolute top-0 left-0 w-[1px] h-full bg-(--color-secondary) opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>
                            {/* Soft inner glow */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60px] h-3/4 bg-white/5 blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full gap-5">
                                <Heading Tag='h3' className='text-2xl sm:text-3xl font-light tracking-wide text-white! bg-transparent! relative z-10 !text-left'>
                                    {feature.title}
                                </Heading>

                                <Paragraph className="opacity-60 font-light relative z-10 !text-left !text-sm sm:!text-base leading-relaxed group-hover:opacity-80 transition-opacity duration-500">
                                    {feature.description}
                                </Paragraph>
                            </div>
                        </div>
                    ))}
                </SmoothAnimtionWrapper>
            </div>

            {/* Subtle Minimal Background Glow */}
            <div className="bg-white/5 blur-[150px] w-full max-w-[800px] h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        </section>
    )
}

export default PartnerWith