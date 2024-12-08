import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ 
  isVisible, 
  onClose, 
  children, 
  title,
  size = 'md' 
}) => {
  if (!isVisible) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className={`
        bg-white 
        rounded-lg 
        shadow-2xl 
        relative 
        w-full 
        ${sizeClasses[size]} 
        mx-4
      `}>
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <button
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={onClose}
            >
              <X size={24} />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;