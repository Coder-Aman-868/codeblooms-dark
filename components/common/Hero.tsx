import Badge from './Badge'
import Paragraph from './Paragraph'
import Button from './Button'
import Link from 'next/link'
import HighlightLabel from './HighlightLabel';
import SideRays from '../SideRays';
import Icons from './Icons';

interface Props {
    badge?: string;
    heading?: string;
    para?: string;
    btn1?: string;
    btn1Link?: string;
    btn2?: string;
    btn2Link?: string;
    highlightLabelText?: string;
    headingClassName?: string;
}

const Hero = ({ badge, heading, para, btn1, highlightLabelText, headingClassName, btn1Link = "#", btn2, btn2Link = "#" }: Props) => {

    return (
        <div className='min-h-screen flex justify-center relative lg:py-35 sm:py-30 py-23 px-4'>
            {/* <div className="fixed w-screen h-screen inset-0 z-100">
                
            </div> */}
            <div className="bg-(--color-secondary)/50 w-[50vw] h-[30vh] absolute left-1/2 top-1/2 -translate-1/2 blur-[300px] rounded-full "></div>
            <div className="max-w-247 mx-auto flex flex-col sm:gap-6 gap-4 items-center relative justify-center">
                <Badge>{badge}</Badge>
                <h1 className={`text-white/95 lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-medium leading-[137%] mx-auto ${headingClassName}`}>{heading} <HighlightLabel>{highlightLabelText}</HighlightLabel></h1>
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
        </div >
    )
}

export default Hero