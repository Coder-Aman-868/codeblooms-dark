import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

const HowItWorks = () => {
  return (
    <section className='lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip'>
      <div className="max-w-[1036px] mx-auto w-full relative z-10">

        {/* Header Section */}
        <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10">
          <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>
            How We Work
          </Heading>
          <Paragraph animate className='text-center opacity-80'>
            From the first kickoff call to post-launch support, our process is designed for transparency and momentum. We define scopes clearly, hit our deadlines, and deliver code that works.
          </Paragraph>
        </div>

        {/* Pricing Teaser Card */}
        <div className="relative group rounded-2xl overflow-hidden p-[1px]">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] opacity-100"></div>

          {/* Inner Card Content */}
          <div className="relative bg-[#171717] rounded-2xl p-[32px]! sm:p-10! lg:p-12!">
            {/* Glow Effects */}
            <div className="absolute pointer-events-none -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>
            <div className="absolute pointer-events-none -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <Heading Tag='h3' className='text-2xl sm:text-3xl font-medium text-white! bg-transparent!'>
                Transparent Investment
              </Heading>

              <Paragraph className='opacity-70 max-w-[700px]'>
                Premium quality doesn't mean unpredictable billing. We offer clear, productized pricing tiers tailored to the stage of your startup, starting at $5,000.
              </Paragraph>

              <Button className="mt-2">
                View Pricing Tiers
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;