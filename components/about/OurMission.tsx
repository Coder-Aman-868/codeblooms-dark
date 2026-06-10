import { ETHOS_DATA } from '@/helper/helper'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const OurMission = () => {
    return (
        <section className='py-20 md:py-28 lg:py-32 px-5 relative overflow-x-clip border-t border-white/5'>
            <div className="max-w-[1036px] mx-auto w-full">
                <SmoothAnimtionWrapper className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 sm:gap-12">
                    {ETHOS_DATA.map((ethos, index) => (
                        <div key={index} className="relative group pt-8 flex flex-col h-full border-t border-white/10 transition-all duration-700 hover:border-white/30">
                            {/* Top Glow on hover */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-(--color-secondary) opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>
                            {/* Soft inner glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[80px] bg-white/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full gap-5">
                                <Heading Tag='h3' className='text-2xl sm:text-3xl font-light text-white! bg-transparent! relative z-10 !text-left tracking-wide'>
                                    {ethos.title}
                                </Heading>

                                {ethos.description && (
                                    <Paragraph className="opacity-60 relative z-10 !text-left !text-sm sm:!text-base font-light leading-relaxed group-hover:opacity-80 transition-opacity duration-500">
                                        {ethos.description}
                                    </Paragraph>
                                )}

                                {ethos.values && (
                                    <ul className="flex flex-col gap-5 relative z-10 mt-2">
                                        {ethos.values.map((value, idx) => (
                                            <li key={idx} className="flex flex-col gap-1.5 border-l border-white/10 pl-4 group-hover:border-(--color-secondary)/20 transition-colors duration-500">
                                                <span className="text-white/80 font-medium tracking-wide text-sm uppercase">{value.label}</span>
                                                <Paragraph className="opacity-50 !text-left !text-sm font-light">
                                                    {value.text}
                                                </Paragraph>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </SmoothAnimtionWrapper>
            </div>
        </section>
    )
}

export default OurMission