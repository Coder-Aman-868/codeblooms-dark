import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    required?: boolean; 
    optional?: boolean;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, required, optional, error, className = '', placeholder, ...props }, ref) => {
        return (
            <div className="relative group pt-6 pb-2 w-full">
                <input
                    ref={ref}
                    required={required}
                    placeholder={placeholder || " "}
                    className={`peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:placeholder-white/20 outline-none transition-all duration-300
                        focus:border-white/0 hover:border-white/50 
                        ${error ? 'border-red-500/50 focus:border-red-500' : ''} ${className}`}
                    {...props}
                />

                <label
                    htmlFor={props.id}
                    className={`absolute left-0 top-8 text-white/50 text-base transition-all duration-300 pointer-events-none origin-left
                    peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50
                    peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/90
                    peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-white/90
                    group-hover:peer-placeholder-shown:text-white/70
                    ${error ? '!text-red-400' : ''}`}
                >
                    {label || placeholder}
                    {required && <span className="text-red-400/70 ml-1.5">*</span>}
                    {optional && <span className="text-white/30 ml-1.5 text-xs font-light tracking-wide">(optional)</span>}
                </label>

                {error && <p className="text-xs text-red-500 mt-1 absolute -bottom-3 left-0">{error}</p>}

                {/* Premium Glow effect on focus */}
                <div className="absolute bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-500 ease-out peer-focus:w-full">
                    <div className="absolute inset-0 bg-white blur-[4px] opacity-80"></div>
                    <div className="absolute inset-0 bg-white blur-[8px] opacity-40"></div>
                </div>
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
