import { TECH_STACK_DATA } from '@/helper/helper'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'

const OurArsenal = () => {
    return (
        <section className='py-20 md:py-28 lg:py-32 px-5 relative overflow-x-clip border-t border-white/5'>
            <div className="max-w-[800px] mx-auto w-full">
                <div className="flex flex-col gap-12 sm:gap-16">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-light tracking-tight text-center text-white! bg-transparent!'>
                            Our Arsenal of Choice
                        </Heading>
                        <Paragraph animate className='text-center opacity-60 font-light text-lg'>
                            We specialize in a focused, high-end technology stack. We don't try to be everything to everyone; we master the tools that deliver the best results for modern tech brands.
                        </Paragraph>
                    </div>

                    <SmoothAnimtionWrapper className="relative w-full flex flex-col border-t border-white/10">
                        {TECH_STACK_DATA.map((tech, index) => (
                            <div key={index} className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 border-b border-white/10 transition-colors duration-500 hover:border-white/30">
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>

                                <span className="text-white/50 font-light text-lg sm:text-xl group-hover:text-white/80 transition-colors duration-500">{tech.category}</span>
                                <span className="text-white font-medium text-lg sm:text-xl text-left sm:text-right mt-1 sm:mt-0 tracking-wide">{tech.technologies}</span>
                            </div>
                        ))}
                    </SmoothAnimtionWrapper>
                </div>
            </div>
        </section>
    )
}

export default OurArsenal