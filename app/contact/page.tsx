import Hero from '@/components/common/Hero'
import ContactSection from '@/components/contact/ContactSection'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero badge="We&apos;d Love to Hear From You" heading='Get In Touch' para='Have a question, feedback, or just want to say hello? Drop us a message and we&apos;ll get back to you within 24 hours.' btn1='Send a Message' btn1Link='#contact-form' btn2='View Our Work' btn2Link='/portfolio' />
            <ContactSection />
        </>
    )
}

export default page