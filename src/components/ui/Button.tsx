'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'subtle';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 border border-slate-900 shadow-2xs',
  secondary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 border border-indigo-600 shadow-2xs',
  outline: 'bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100 border border-slate-200/80 shadow-2xs',
  subtle: 'bg-slate-100 text-slate-800 hover:bg-slate-200/80 active:bg-slate-200 border border-slate-200/60',
  ghost: 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 border border-transparent',
  danger: 'bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 border border-rose-600 shadow-2xs',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-2.5 py-1.5 gap-1.5 rounded-md',
  md: 'text-xs font-semibold px-3.5 py-2 gap-2 rounded-lg',
  lg: 'text-sm font-semibold px-4 py-2.5 gap-2.5 rounded-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'outline',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`inline-flex items-center justify-center font-medium transition-all select-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
