import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    required?: boolean;
    optional?: boolean;
    error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, required, optional, error, className = '', ...props }, ref) => {
        return (
            <div className="space-y-2.5">
                {label && (
                    <label htmlFor={props.id} className="block text-sm font-medium text-white/70">
                        {label}{' '}
                        {required && <span className="text-white/50">*</span>}
                        {optional && <span className="text-white/40">(optional)</span>}
                    </label>
                )}
                <textarea
                    ref={ref}
                    required={required}
                    className={`w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl px-5 py-3.5 text-white placeholder-white/30 outline-none transition-all focus:bg-white/10 hover:border-white/20 resize-none ${error ? 'border-red-500/50' : ''} ${className}`}
                    {...props}
                />
                {error && <p className="text-sm text-red-400">{error}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;
