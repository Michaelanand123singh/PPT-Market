import React from 'react';

const Spinner = ({ 
  size = 'medium', 
  color = 'blue', 
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'border-blue-600 border-t-transparent',
    gray: 'border-gray-600 border-t-transparent',
    white: 'border-white border-t-transparent'
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`
          ${sizeClasses[size]} 
          ${colorClasses[color]} 
          border-4 
          rounded-full 
          animate-spin 
          ${className}
        `}
      ></div>
    </div>
  );
};

export default Spinner;