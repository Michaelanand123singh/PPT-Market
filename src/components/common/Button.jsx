import React from 'react';

const Button = ({ 
  onClick, 
  children, 
  className = '', 
  type = 'button',
  variant = 'primary',
  disabled = false,
  leftIcon,
  rightIcon
}) => {
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        px-4 
        py-2 
        rounded-md 
        flex 
        items-center 
        justify-center 
        gap-2 
        transition-all 
        duration-300 
        ${variantStyles[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;