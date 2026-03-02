import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

// Mendefinisikan tipe varian dan ukuran tombol
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Kumpulan class dasar yang selalu ada
    const baseClasses =
      'inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none active:scale-95';

    // Konfigurasi class berdasarkan Varian
    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 focus:ring-indigo-500',
      secondary:
        'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white focus:ring-slate-500',
      outline:
        'border-2 border-slate-200 hover:border-indigo-500 dark:border-slate-700 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:ring-indigo-500',
      ghost:
        'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 focus:ring-slate-500',
      danger:
        'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25 focus:ring-red-500',
    };

    // Konfigurasi class berdasarkan Ukuran
    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      icon: 'p-3',
    };

    // Menggabungkan semua class
    const combinedClasses = `
      ${baseClasses}
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim();

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {/* State Loading */}
        {isLoading && (
          <Loader2 className={`animate-spin ${children ? 'mr-2' : ''} w-5 h-5`} />
        )}

        {/* Ikon Kiri */}
        {!isLoading && leftIcon && (
          <span className={`${children ? 'mr-2' : ''}`}>{leftIcon}</span>
        )}

        {/* Teks Tombol */}
        {children}

        {/* Ikon Kanan */}
        {!isLoading && rightIcon && (
          <span className={`${children ? 'ml-2' : ''}`}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;