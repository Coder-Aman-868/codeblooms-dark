import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const FounderStory = () => {
    return (
        <section className='px-5 relative overflow-x-clip'>
            <div className="max-w-[1036px] mx-auto w-full">
                <div className="flex flex-col gap-6 sm:gap-8">
                    <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-light text-center tracking-tight text-white! bg-transparent!'>
                        The Story Behind the Studio
                    </Heading>

                    <div className="flex flex-col gap-6 max-w-[900px] mx-auto mt-4">
                        <Paragraph animate className='text-center opacity-70 font-light leading-relaxed text-lg sm:text-xl'>
                            CodeBlooms was founded on a singular observation: brilliant SaaS products were failing because their marketing websites felt cheap, loaded slowly, and confused users.
                        </Paragraph>

                        <Paragraph animate className='text-center opacity-70 font-light leading-relaxed text-lg sm:text-xl'>
                            As a specialized, expert-led studio, CodeBlooms operates without the bloat of traditional agencies. You don't get passed off to junior developers or endless account managers. You work directly with a senior technical partner who understands both high-level business strategy and deep-level React/Next.js engineering. We build websites that act as your most relentless, high-performing asset.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderStory