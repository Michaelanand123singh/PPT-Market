import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Download 
} from 'lucide-react';
import CategoryBadge from './CategoryBadge';

const PresentationCard = ({ 
  title = 'Untitled Presentation', 
  price = 0, 
  thumbnail = '/assets/images/default-presentation-thumb.png', 
  category = 'Uncategorized',
  downloads = 0,
  rating = 0,
  onClick = () => {}
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  // Format price with two decimal places
  const formattedPrice = price.toFixed(2);

  // Format large download numbers
  const formatDownloads = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div 
      className="
        group 
        border 
        border-gray-200 
        rounded-lg 
        overflow-hidden 
        shadow-md 
        hover:shadow-xl 
        transition-all 
        duration-300 
        bg-white
        cursor-pointer
      "
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="
            w-full 
            h-48 
            object-cover 
            group-hover:scale-105 
            transition-transform 
            duration-300
          " 
        />
        <button 
          onClick={toggleWishlist}
          aria-label="Add to Wishlist"
          className="
            absolute 
            top-3 
            right-3 
            bg-white 
            rounded-full 
            p-2 
            shadow-md 
            hover:bg-gray-100
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <Heart 
            size={20} 
            className={`
              ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-500'}
              transition-colors
            `} 
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <CategoryBadge category={category} />
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg mb-2 line-clamp-2" title={title}>
          {title}
        </h3>

        {/* Stats */}
        <div className="flex justify-between items-center text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Download size={16} className="text-blue-600" />
            <span className="text-sm">{formatDownloads(downloads)} downloads</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${formattedPrice}</span>
          <button
            aria-label="Buy Presentation"
            className="
              flex 
              items-center 
              gap-2 
              bg-blue-600 
              text-white 
              px-4 
              py-2 
              rounded 
              hover:bg-blue-700 
              transition-colors
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
            "
          >
            <ShoppingCart size={16} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;