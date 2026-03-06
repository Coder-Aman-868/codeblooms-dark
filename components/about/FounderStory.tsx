import React from 'react'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const FounderStory = () => {
  return (
      <section className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip bg-[#030303]'>
            <div className="max-w-[1036px] mx-auto w-full">
                <SmoothAnimtionWrapper className="flex flex-col gap-6 sm:gap-8">
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
                        The Story Behind <span className='bg-[linear-gradient(115.42deg,_#B8B8B8_52.82%,_#525252_79.53%)] bg-clip-text text-transparent'>the Studio</span>
                    </Heading>
                    
                    <div className="flex flex-col gap-5 max-w-[900px] mx-auto">
                        <Paragraph animate className='text-center opacity-80 leading-relaxed'>
                            CodeBlooms was founded on a singular observation: brilliant SaaS products were failing because their marketing websites felt cheap, loaded slowly, and confused users.
                        </Paragraph>
                        
                        <Paragraph animate className='text-center opacity-80 leading-relaxed'>
                            As a specialized, expert-led studio, CodeBlooms operates without the bloat of traditional agencies. You don't get passed off to junior developers or endless account managers. You work directly with a senior technical partner who understands both high-level business strategy and deep-level React/Next.js engineering. We build websites that act as your most relentless, high-performing asset.
                        </Paragraph>
                    </div>
                </SmoothAnimtionWrapper>
            </div>
        </section>
  )
}

export default FounderStory