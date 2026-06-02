import Badge from './Badge'
import Paragraph from './Paragraph'
import Button from './Button'
import Link from 'next/link'

interface Props {
    badge?: string;
    heading?: string;
    para?: string;
    btn1?: string;
    btn1Link?: string;
    btn2?: string;
    btn2Link?: string;
}

const Hero = ({ badge, heading, para, btn1, btn1Link = "#", btn2, btn2Link = "#" }: Props) => {

    return (
        <div className='min-h-screen flex justify-center relative lg:py-35 sm:py-30 py-23 px-4 overflow-x-clip'>
            <div className="max-w-247 mx-auto flex flex-col sm:gap-6 gap-4 items-center relative z-20 justify-center">
                <Badge>{badge}</Badge>
                <h1 dangerouslySetInnerHTML={{ __html: heading ?? "" }} className='text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold leading-[137%]'></h1>
                <Paragraph className='text-center'>{para}</Paragraph>
                <div className="flex items-center justify-center sm:flex-row flex-col sm:max-w-none max-w-100 w-full sm:gap-5 gap-3 sm:mt-0 mt-4">
                    <Link href={btn1Link}>
                        <Button >{btn1}</Button>
                    </Link>
                    <Link href={btn2Link}>
                        <Button secondary>{btn2}</Button>
                    </Link>
                </div>
            </div>
            {/* <div className="absolute inset-0 pointer-events-none">
                <div className="relative h-full w-full overflow-clip">
                    <div ref={starsBg} className="absolute inset-0 w-full h-full mix-blend-luminosity flex justify-center items-center">
                        <HeroLottie />
                    </div>
                    <div className="absolute lg:top-[70%] md:top-[60%] top-[70%] left-1/2 -translate-x-1/2 xl:w-200 md:w-150 sm:w-86 w-75 lg:h-75.75 md:h-55.75 h-35">
                        <div ref={blurWhiteLayer} className="absolute opacity-0 w-full h-full lg:top-[-25%] top-[20%] left-1/2 -translate-x-1/2">
                            <Image fill priority className='h-full lg:scale-[3] scale-[2]' src={'/assets/images/png/hero-blur-layer.png'} alt='blur layer' />
                        </div>
                        <div ref={circleImage} className="absolute opacity-0 w-full h-full top-[110%] left-1/2 -translate-x-1/2">
                            <Image fill priority className='h-full lg:scale-[3] scale-[2]' src={'/assets/images/png/top-white-border-image.png'} alt='blur layer' />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Hero