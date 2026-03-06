import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    required?: boolean;
    optional?: boolean;
    error?: string;
    children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, required, optional, error, className = '', children, ...props }, ref) => {
        return (
            <div className="space-y-2.5">
                {label && (
                    <label htmlFor={props.id} className="block text-sm font-medium text-white/70">
                        {label}{' '}
                        {required && <span className="text-white/50">*</span>}
                        {optional && <span className="text-white/40">(optional)</span>}
                    </label>
                )}
                <div className="relative">
                    <select
                        ref={ref}
                        required={required}
                        className={`w-full appearance-none bg-white/5 border border-white/10 focus:border-white/30 rounded-xl px-5 py-3.5 text-white outline-none transition-all focus:bg-white/10 hover:border-white/20 cursor-pointer ${error ? 'border-red-500/50' : ''} ${className}`}
                        {...props}
                    >
                        {children}
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
                {error && <p className="text-sm text-red-400">{error}</p>}
            </div>
        );
    }
);

Select.displayName = 'Select';

export default Select;
