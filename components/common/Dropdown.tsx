'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownProps {
    id?: string;
    name?: string;
    label?: string;
    required?: boolean;
    optional?: boolean;
    value: string;
    onChange: (value: string) => void;
    options: DropdownOption[];
    placeholder?: string;
    error?: string;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    id,
    name,
    label,
    required,
    optional,
    value,
    onChange,
    options,
    placeholder = 'Select an option...',
    error,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);
    const hasValue = value !== '';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className="relative group pt-6 pb-2 w-full">
            {/* Hidden input for form validation */}
            <input
                type="text"
                id={id}
                name={name}
                value={value}
                onChange={() => {}}
                required={required}
                className="sr-only"
                tabIndex={-1}
            />

            {/* Custom Dropdown Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`peer w-full flex items-center justify-between bg-transparent border-b border-white/20 px-0 py-2 text-white outline-none transition-all duration-300 hover:border-white/50 ${isOpen ? '!border-white/0' : ''} ${error ? 'border-red-500/50' : ''} ${className}`}
            >
                <span className={hasValue ? 'text-white' : 'text-transparent'}>
                    {hasValue ? selectedOption?.label : placeholder}
                </span>
                <svg 
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            {/* Dynamic Label / Placeholder */}
            <label 
                htmlFor={id} 
                className={`absolute left-0 transition-all duration-300 pointer-events-none origin-left
                ${hasValue || isOpen ? 'top-0 text-sm text-white/90' : 'top-8 text-base text-white/50 group-hover:text-white/70'}
                ${error ? '!text-red-400' : ''}`}
            >
                {label || placeholder}
                {required && <span className="text-red-400/70 ml-1.5">*</span>}
                {optional && <span className="text-white/30 ml-1.5 text-xs font-light tracking-wide">(optional)</span>}
            </label>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(255,255,255,0.05)] overflow-hidden animate-fadeIn">
                    <div className="max-h-[280px] overflow-y-auto custom-scrollbar flex flex-col p-1">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleSelect(option.value)}
                                disabled={option.value === ''}
                                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                                    option.value === value
                                        ? 'bg-white/15 text-white font-medium'
                                        : option.value === ''
                                        ? 'text-white/30 cursor-not-allowed hidden'
                                        : 'text-white/60 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {error && <p className="text-xs text-red-500 mt-1 absolute -bottom-3 left-0">{error}</p>}
            
            {/* Premium Glow effect on open state */}
            <div className={`absolute bottom-2 left-0 h-[1px] bg-white transition-all duration-500 ease-out ${isOpen ? 'w-full' : 'w-0'}`}>
                <div className="absolute inset-0 bg-white blur-[4px] opacity-80"></div>
                <div className="absolute inset-0 bg-white blur-[8px] opacity-40"></div>
            </div>
        </div>
    );
};

export default Dropdown;
