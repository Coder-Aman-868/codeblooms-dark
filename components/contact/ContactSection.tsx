'use client';

import { useState } from 'react';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        description: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('=== CONTACT FORM DATA ===');
        console.log('Full Name:', formData.fullName);
        console.log('Email:', formData.email);
        console.log('Subject:', formData.subject);
        console.log('Description:', formData.description);
        console.log('=== END FORM DATA ===');
        console.log('Full Form Object:', formData);

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form
        setFormData({ fullName: '', email: '', subject: '', description: '' });
    };

    return (
        <section id="contact-form" className="lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip">

            {/* Ambient background glow */}
            <div className="absolute pointer-events-none top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px]" />
            <div className="absolute pointer-events-none bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[120px]" />

            <div className="max-w-[1200px] mx-auto w-full relative z-10">

                {/* Section header */}
                <SmoothAnimtionWrapper>
                    <div className="text-center space-y-4 mb-16 sm:mb-20">
                        <div className="flex items-center justify-center gap-3 text-white/40 mb-4">
                            <span className="h-[1px] w-12 bg-white/10" />
                            <span className="text-xs font-semibold tracking-[0.3em] uppercase">Contact</span>
                            <span className="h-[1px] w-12 bg-white/10" />
                        </div>
                        <Heading Tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
                            Send Us a Message
                        </Heading>
                        <Paragraph className="text-white/50 max-w-xl mx-auto text-lg font-light">
                            We're here to help bring your vision to life. Fill out the form and our team will respond within 24 hours.
                        </Paragraph>
                    </div>
                </SmoothAnimtionWrapper>

                {/* Content grid — Form + 3D Robot */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                    {/* ===== CONTACT INFO SIDE ===== */}
                    <div className="relative w-full lg:sticky lg:top-32 h-full flex flex-col justify-start">
                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                            {/* Gradient ring */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/[0.05] rounded-full blur-[60px] pointer-events-none" />

                            <Heading Tag="h3" className="text-2xl sm:text-3xl font-medium tracking-tight mb-8">
                                Contact Information
                            </Heading>

                            <div className="space-y-10">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white/80 font-medium mb-1 tracking-wide">Email Us</h4>
                                        <p className="text-white/40 font-light mb-1">We typically reply within 24 hours.</p>
                                        <a href="mailto:hello@codeblooms.com" className="text-white/80 hover:text-white transition-colors">hello@codeblooms.com</a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white/80 font-medium mb-1 tracking-wide">Call Us</h4>
                                        <p className="text-white/40 font-light mb-1">Mon-Fri from 8am to 5pm.</p>
                                        <a href="tel:+11234567890" className="text-white/80 hover:text-white transition-colors">+1 (123) 456-7890</a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white/80 font-medium mb-1 tracking-wide">Visit Us</h4>
                                        <p className="text-white/40 font-light mb-1">Come say hello at our office HQ.</p>
                                        <p className="text-white/80">123 Innovation Drive<br />Tech City, TC 10010<br />United States</p>
                                    </div>
                                </div>

                                <hr className="border-white/10" />

                                {/* Social Links */}
                                <div>
                                    <h4 className="text-white/50 text-sm font-medium mb-4 tracking-wide uppercase">Follow Us</h4>
                                    <div className="flex gap-4">
                                        {/* Twitter */}
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/50 hover:text-white">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        {/* LinkedIn */}
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/50 hover:text-white">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        {/* GitHub */}
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/50 hover:text-white">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== FORM SIDE ===== */}
                    <div className="relative">
                        {/* Subtle ambient glow */}
                        <div className="absolute pointer-events-none top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px]" />

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-10 animate-fadeIn">

                                {/* Full Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                                    <Input
                                        type="text"
                                        id="contact-name"
                                        name="fullName"
                                        label="Full Name"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                        placeholder="John Doe"
                                    />
                                    <Input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        label="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Subject */}
                                <Input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    label="Subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                    placeholder="How can we help?"
                                />

                                {/* Description */}
                                <Textarea
                                    id="contact-description"
                                    name="description"
                                    label="Description"
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                    rows={5}
                                    placeholder="Tell us more about your inquiry..."
                                />

                                {/* Contact info row */}
                                <div className="flex flex-wrap gap-6 sm:gap-10 pt-2 text-white/30 text-sm font-light">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        <span>hello@codeblooms.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Response within 24h</span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-start pt-4">
                                    <Button
                                        type="submit"
                                        className={`px-10 py-4 text-base font-medium rounded-full bg-white text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-white/90'}`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Send Message
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                </svg>
                                            </span>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            /* Success state */
                            <div className="relative z-10 max-w-2xl py-16 sm:py-24 text-center flex flex-col items-center animate-fadeIn">
                                <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
                                    <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <Heading Tag="h3" className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
                                    Message Sent Successfully
                                </Heading>
                                <Paragraph className="text-white/50 text-base sm:text-lg mb-12 font-light">
                                    Thank you for reaching out! We've received your message and our team will get back to you within 24 hours.
                                </Paragraph>
                                <Button
                                    secondary
                                    type="button"
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
