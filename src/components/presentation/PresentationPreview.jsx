import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize 
} from 'lucide-react';

const PresentationPreview = ({ 
  title, 
  previewImages,
  totalSlides 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % previewImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? previewImages.length - 1 : prev - 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div 
      className={`
        relative 
        bg-gray-100 
        rounded-lg 
        overflow-hidden 
        ${isFullscreen 
          ? 'fixed inset-0 z-50 w-full h-full' 
          : 'max-w-4xl mx-auto'}
      `}
    >
      {/* Title */}
      <div className="p-4 bg-white shadow-sm flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">
          Slide {currentImageIndex + 1} of {totalSlides}
        </p>
      </div>

      {/* Image Preview */}
      <div className="relative">
        <img 
          src={previewImages[currentImageIndex]} 
          alt={`${title} Preview Slide ${currentImageIndex + 1}`} 
          className="w-full h-auto object-contain"
        />

        {/* Navigation Buttons */}
        <button 
          onClick={prevImage}
          className="
            absolute 
            left-4 
            top-1/2 
            -translate-y-1/2 
            bg-white/50 
            rounded-full 
            p-2 
            hover:bg-white/75
          "
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={nextImage}
          className="
            absolute 
            right-4 
            top-1/2 
            -translate-y-1/2 
            bg-white/50 
            rounded-full 
            p-2 
            hover:bg-white/75
          "
        >
          <ChevronRight />
        </button>

        {/* Fullscreen Toggle */}
        <button 
          onClick={toggleFullscreen}
          className="
            absolute 
            top-4 
            right-4 
            bg-white/50 
            rounded-full 
            p-2 
            hover:bg-white/75
          "
        >
          {isFullscreen ? <Minimize /> : <Maximize />}
        </button>
      </div>
    </div>
  );
};

export default PresentationPreview;