import React from 'react';
import { Search } from 'lucide-react';

const Input = ({ 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  className = '', 
  icon,
  error,
  disabled = false
}) => (
  <div className="relative w-full">
    {icon && (
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
    )}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        w-full 
        px-3 
        py-2 
        border 
        rounded-md 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        transition-all 
        duration-300
        ${icon ? 'pl-10' : ''}
        ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
        ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        ${className}
      `}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">{error}</p>
    )}
  </div>
);

export default Input;