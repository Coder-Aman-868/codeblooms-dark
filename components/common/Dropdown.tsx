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
        <div className="space-y-2.5">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-white/70">
                    {label}{' '}
                    {required && <span className="text-white/50">*</span>}
                    {optional && <span className="text-white/40">(optional)</span>}
                </label>
            )}
            
            <div ref={dropdownRef} className="relative">
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
                    className={`w-full flex items-center justify-between bg-white/5 border border-white/10 focus:border-white/30 rounded-xl px-5 py-3.5 text-white outline-none transition-all hover:bg-white/10 hover:border-white/20 ${isOpen ? 'bg-white/10 border-white/30' : ''} ${error ? 'border-red-500/50' : ''} ${className}`}
                >
                    <span className={selectedOption ? 'text-white' : 'text-white/30'}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <svg 
                        className={`w-5 h-5 text-white/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden animate-fadeIn">
                        <div className="max-h-[280px] overflow-y-auto custom-scrollbar">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    disabled={option.value === ''}
                                    className={`w-full text-left px-5 py-3 transition-all ${
                                        option.value === value
                                            ? 'bg-white/10 text-white'
                                            : option.value === ''
                                            ? 'text-white/30 cursor-not-allowed'
                                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
    );
};

export default Dropdown;
