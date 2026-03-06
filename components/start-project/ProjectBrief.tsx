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
        url: '',
        services: [] as string[],
        budget: '',
        timeline: '',
        details: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('=== PROJECT BRIEF FORM DATA ===');
        console.log('Name:', formData.name);
        console.log('Company:', formData.company);
        console.log('Email:', formData.email);
        console.log('Website URL:', formData.url);
        console.log('Services:', formData.services);
        console.log('Budget:', formData.budget);
        console.log('Timeline:', formData.timeline);
        console.log('Project Details:', formData.details);
        console.log('=== END FORM DATA ===');
        console.log('Full Form Object:', formData);
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
        <section className="lg:py-37.5 md:py-30 sm:py-20 py-15 px-5 relative overflow-x-clip">
            <div className="max-w-[1036px] mx-auto w-full relative z-10">
                
                {/* Main Form Card with Gradient Border */}
                <div className="relative group rounded-2xl overflow-hidden p-[1px]">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-[linear-gradient(115.42deg,_rgba(184,184,184,0.3)_0%,_rgba(82,82,82,0)_50%,_rgba(184,184,184,0.3)_100%)] opacity-100"></div>

                    {/* Inner Card Content */}
                    <div className="relative bg-[#171717] rounded-2xl p-6 sm:p-8 lg:p-12">
                        {/* Glow Effect */}
                        <div className="absolute pointer-events-none -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute pointer-events-none -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-10 sm:space-y-12">

                            {/* 1. The Basics */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-base font-medium text-white flex-shrink-0">1</span>
                                    <Heading Tag='h3' className='text-2xl sm:text-3xl font-medium text-white! bg-transparent!'>
                                        The Basics
                                    </Heading>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
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
                                        label="Company / Startup Name"
                                        required
                                        value={formData.company}
                                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                        placeholder="Acme Corp"
                                    />
                                    <Input
                                        type="email"
                                        id="proj-email"
                                        name="email"
                                        label="Work Email"
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
                                        value={formData.url}
                                        onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                                        placeholder="https://yourwebsite.com"
                                    />
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            {/* 2. Services Needed */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-base font-medium text-white flex-shrink-0">2</span>
                                    <Heading Tag='h3' className='text-2xl sm:text-3xl font-medium text-white! bg-transparent!'>
                                        What do you need help with?
                                    </Heading>
                                </div>

                                <Paragraph className="opacity-70 !text-sm sm:!text-base">
                                    Select all services that apply to your project.
                                </Paragraph>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                            <div className="w-full flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 peer-checked:bg-white/10 peer-checked:border-white/30 transition-all hover:bg-white/[0.07] hover:border-white/20">
                                                <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded border border-white/30 peer-checked:bg-white group-has-[:checked]:bg-white group-has-[:checked]:border-white transition-colors">
                                                    <svg className="w-3.5 h-3.5 text-black opacity-0 group-has-[:checked]:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{service}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            {/* 3. Budget & Timeline */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
                                {/* Budget */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-base font-medium text-white flex-shrink-0">3</span>
                                        <Heading Tag='h3' className='text-2xl sm:text-3xl font-medium text-white! bg-transparent!'>
                                            Estimated Budget
                                        </Heading>
                                    </div>
                                    <Paragraph className="opacity-70 !text-sm sm:!text-base">
                                        Helps us recommend the most efficient architecture and approach.
                                    </Paragraph>

                                    <Dropdown
                                        id="proj-budget"
                                        name="budget"
                                        required
                                        value={formData.budget}
                                        onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                                        placeholder="Select a range..."
                                        options={[
                                            { value: '', label: 'Select a range...' },
                                            { value: '5k-10k', label: '$5,000 - $10,000 (Starter)' },
                                            { value: '10k-25k', label: '$10,000 - $25,000 (Growth)' },
                                            { value: '25k-50k', label: '$25,000 - $50,000 (Premium)' },
                                            { value: '50k+', label: '$50,000+ (Enterprise)' }
                                        ]}
                                    />
                                </div>

                                {/* Timeline */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-base font-medium text-white flex-shrink-0">4</span>
                                        <Heading Tag='h3' className='text-2xl sm:text-3xl font-medium text-white! bg-transparent!'>
                                            Target Timeline
                                        </Heading>
                                    </div>
                                    <Paragraph className="opacity-70 !text-sm sm:!text-base">
                                        When are you looking to launch your project?
                                    </Paragraph>

                                    <Dropdown
                                        id="proj-timeline"
                                        name="timeline"
                                        required
                                        value={formData.timeline}
                                        onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                                        placeholder="Select a timeline..."
                                        options={[
                                            { value: '', label: 'Select a timeline...' },
                                            { value: 'asap', label: 'ASAP (1-2 weeks)' },
                                            { value: '1-2months', label: '1-2 months' },
                                            { value: '2-3months', label: '2-3 months' },
                                            { value: '3+months', label: '3+ months' },
                                            { value: 'flexible', label: 'Flexible' }
                                        ]}
                                    />
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            {/* 5. Project Details */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-base font-medium text-white flex-shrink-0">5</span>
                                    <Heading Tag='h3' className='text-2xl sm:text-3xl font-medium text-white! bg-transparent!'>
                                        Tell us about your project
                                    </Heading>
                                </div>

                                <Paragraph className="opacity-70 !text-sm sm:!text-base">
                                    Share your vision, goals, target audience, and any specific requirements or challenges.
                                </Paragraph>

                                <Textarea
                                    id="proj-details"
                                    name="details"
                                    label="Project Details"
                                    required
                                    value={formData.details}
                                    onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                                    rows={6}
                                    placeholder="Describe your project, goals, target audience, and any specific requirements..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4">
                                <Button 
                                    // type="submit"
                                    className="px-8 py-4 text-base font-medium"
                                >
                                    Submit Project Brief
                                </Button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectBrief;