'use client';
import { useState } from 'react';
import Button from '../common/Button';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Dropdown from '../common/Dropdown';

const ProjectBrief = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        currentWebsite: '',
        services: [] as string[],
        budget: '',
        timeline: '',
        projectDetails: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/start-projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!res.ok) {
                alert('somthing went wrong')
            } else {
                setIsSubmitting(false);
                // Reset form
                setFormData({
                    name: '', company: '', email: '', currentWebsite: '', services: [], budget: '', timeline: '', projectDetails: ''
                });
            }
        } catch (error) {
            console.error('Error submitting project brief:', error);
            // Optionally, you could set an error state here to display a message to the user
            setIsSubmitted(false);
        }
    };

    const handleCheckboxChange = (service: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            services: checked
                ? [...prev.services, service]
                : prev.services.filter(s => s !== service)
        }));
    };

    const services = [
        "SaaS Landing Page",
        "Custom Multi-page Website",
        "Frontend Web App (React)",
        "Performance Optimization",
        "CMS Migration",
        "Website Redesign"
    ];

    return (
        <section className="px-5 relative overflow-x-clip">
            <div className="max-w-[800px] mx-auto w-full relative z-10">

                {/* Clean, minimalistic form container without heavy backgrounds */}
                <div className="relative">

                    {/* Subtle ambient light behind form */}
                    <div className="absolute pointer-events-none top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-12 animate-fadeIn">

                            {/* Header Area */}
                            <div className="text-center space-y-4 mb-10">
                                <Heading animate Tag="h2" className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
                                    Start a Project
                                </Heading>
                                <Paragraph className="text-white/60 max-w-xl mx-auto text-lg">
                                    Fill out the brief below to get started. We'll get back to you within 24 hours.
                                </Paragraph>
                            </div>

                            {/* 1. The Basics */}
                            <div className="space-y-8">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-white/40">
                                        <span className="text-xs font-semibold tracking-[0.3em] uppercase">01</span>
                                        <span className="h-[1px] w-12 bg-white/10"></span>
                                    </div>
                                    <Heading Tag='h3' className='text-3xl sm:text-4xl font-light tracking-tight text-white! bg-transparent!'>
                                        The Basics
                                    </Heading>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                    <Input
                                        type="text"
                                        id="proj-name"
                                        name="name"
                                        label="Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        placeholder="John Doe"
                                    />
                                    <Input
                                        type="text"
                                        id="proj-company"
                                        name="company"
                                        label="Company"
                                        required
                                        value={formData.company}
                                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                        placeholder="Acme Corp"
                                    />
                                    <Input
                                        type="email"
                                        id="proj-email"
                                        name="email"
                                        label="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        placeholder="john@example.com"
                                    />
                                    <Input
                                        type="url"
                                        id="proj-url"
                                        name="url"
                                        label="Current Website"
                                        optional
                                        value={formData.currentWebsite}
                                        onChange={(e) => setFormData(prev => ({ ...prev, currentWebsite: e.target.value }))}
                                        placeholder="https://yourwebsite.com"
                                    />
                                </div>
                            </div>

                            {/* 2. Services Needed */}
                            <div className="space-y-8">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-white/40">
                                        <span className="text-xs font-semibold tracking-[0.3em] uppercase">02</span>
                                        <span className="h-[1px] w-12 bg-white/10"></span>
                                    </div>
                                    <Heading Tag='h3' className='text-3xl sm:text-4xl font-light tracking-tight text-white! bg-transparent!'>
                                        Services
                                    </Heading>
                                </div>

                                <Paragraph className="text-white/50 !text-sm sm:!text-base">
                                    Select all that apply to your project scope.
                                </Paragraph>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
                                    {services.map((service) => (
                                        <label
                                            key={service}
                                            className="relative flex items-center cursor-pointer group"
                                        >
                                            <input
                                                type="checkbox"
                                                name="services"
                                                value={service}
                                                checked={formData.services.includes(service)}
                                                onChange={(e) => handleCheckboxChange(service, e.target.checked)}
                                                className="peer sr-only"
                                            />
                                            <div className="w-full flex items-center justify-between py-4 border-b border-white/10 transition-all duration-500 group-hover:border-white/30 group-has-[:checked]:border-white/80">

                                                <span className="text-base font-light text-white/50 group-has-[:checked]:text-white group-hover:text-white/80 transition-colors duration-500">
                                                    {service}
                                                </span>

                                                {/* Minimalistic Indicator Dot */}
                                                <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white/20 group-has-[:checked]:border-white/0 group-hover:border-white/40 transition-all duration-500 overflow-hidden bg-transparent group-has-[:checked]:bg-white shadow-[0_0_0_0_rgba(255,255,255,0)] group-has-[:checked]:shadow-[0_0_12px_rgba(255,255,255,0.7)]">
                                                    <svg
                                                        className="w-3 h-3 text-black opacity-0 scale-50 group-has-[:checked]:opacity-100 group-has-[:checked]:scale-100 transition-all duration-500 ease-out"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={3}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>

                                                {/* Glow Line Bottom */}
                                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-has-[:checked]:w-full opacity-0 group-has-[:checked]:opacity-100">
                                                    <div className="absolute inset-0 bg-white blur-[3px] opacity-80"></div>
                                                    <div className="absolute inset-0 bg-white blur-[6px] opacity-40"></div>
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* 3. Budget & Timeline */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                                {/* Budget */}
                                <div className="space-y-8">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3 text-white/40">
                                            <span className="text-xs font-semibold tracking-[0.3em] uppercase">03</span>
                                            <span className="h-[1px] w-12 bg-white/10"></span>
                                        </div>
                                        <Heading Tag='h3' className='text-3xl sm:text-4xl font-light tracking-tight text-white! bg-transparent!'>
                                            Budget
                                        </Heading>
                                    </div>

                                    <Dropdown
                                        id="proj-budget"
                                        name="budget"
                                        label="Estimated Budget"
                                        required
                                        value={formData.budget}
                                        onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                                        placeholder="Select range..."
                                        options={[
                                            { value: '', label: 'Select range...' },
                                            { value: 'i_am_not_sure', label: 'I am not sure' },
                                            { value: 'price_5000_10000', label: '$5,000 - $10,000' },
                                            { value: 'price_10000_25000', label: '$10,000 - $25,000' },
                                            { value: 'price_25000_50000', label: '$25,000 - $50,000' },
                                            { value: 'price_50000_plus', label: '$50,000+' }
                                        ]}
                                    />
                                </div>

                                {/* Timeline */}
                                <div className="space-y-8">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3 text-white/40">
                                            <span className="text-xs font-semibold tracking-[0.3em] uppercase">04</span>
                                            <span className="h-[1px] w-12 bg-white/10"></span>
                                        </div>
                                        <Heading Tag='h3' className='text-3xl sm:text-4xl font-light tracking-tight text-white! bg-transparent!'>
                                            Timeline
                                        </Heading>
                                    </div>

                                    <Dropdown
                                        id="proj-timeline"
                                        name="timeline"
                                        label="Target Timeline"
                                        required
                                        value={formData.timeline}
                                        onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                                        placeholder="Select timeline..."
                                        options={[
                                            { value: '', label: 'Select timeline...' },
                                            { value: 'timeline_asap', label: 'ASAP (1-2 weeks)' },
                                            { value: 'timeline_1_2_months', label: '1-2 months' },
                                            { value: 'timeline_2_3_months', label: '2-3 months' },
                                            { value: 'timeline_3_plus_months', label: '3+ months' },
                                            { value: 'timeline_flexible', label: 'Flexible' }
                                        ]}
                                    />
                                </div>
                            </div>

                            {/* 5. Project Details */}
                            <div className="space-y-8 pt-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-white/40">
                                        <span className="text-xs font-semibold tracking-[0.3em] uppercase">05</span>
                                        <span className="h-[1px] w-12 bg-white/10"></span>
                                    </div>
                                    <Heading Tag='h3' className='text-3xl sm:text-4xl font-light tracking-tight text-white! bg-transparent!'>
                                        Project Details
                                    </Heading>
                                </div>

                                <Textarea
                                    id="proj-details"
                                    name="details"
                                    label="Tell us about your project"
                                    required
                                    value={formData.projectDetails}
                                    onChange={(e) => setFormData(prev => ({ ...prev, projectDetails: e.target.value }))}
                                    rows={4}
                                    placeholder="Describe your vision, goals, target audience..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-8">
                                <Button
                                    type="submit"
                                    className={`px-10 py-4 text-base font-medium rounded-full bg-white text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-white/90'}`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Submit Request'
                                    )}
                                </Button>
                            </div>

                        </form>
                    ) : (
                        <div className="relative z-10 max-w-2xl mx-auto py-16 sm:py-24 text-center flex flex-col items-center animate-fadeIn">
                            <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
                                <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <Heading Tag="h3" className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
                                Request Successfully Sent
                            </Heading>
                            <Paragraph className="text-white/50 text-base sm:text-lg mb-12 font-light">
                                Thank you for sharing your vision. We've received your brief and our team will get back to you within 24 hours.
                            </Paragraph>
                            <Button
                                secondary
                                type="button"
                                onClick={() => setIsSubmitted(false)}
                            >
                                Return & Close
                            </Button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ProjectBrief;