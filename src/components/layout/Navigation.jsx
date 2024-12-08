import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Star, 
  Tag, 
  Zap 
} from 'lucide-react';

const Navigation = () => (
  <nav className="bg-white shadow-sm border-b">
    <div className="container mx-auto px-4 py-3">
      <div className="flex justify-center space-x-6 md:space-x-10">
        <Link 
          to="/new-arrivals" 
          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <Zap 
            size={20} 
            className="mr-2 text-gray-500 group-hover:text-blue-600 transition-colors" 
          />
          New Arrivals
        </Link>
        
        <Link 
          to="/best-sellers" 
          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <Star 
            size={20} 
            className="mr-2 text-gray-500 group-hover:text-blue-600 transition-colors" 
          />
          Best Sellers
        </Link>
        
        <Link 
          to="/trending" 
          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <TrendingUp 
            size={20} 
            className="mr-2 text-gray-500 group-hover:text-blue-600 transition-colors" 
          />
          Trending
        </Link>
        
        <Link 
          to="/discounts" 
          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <Tag 
            size={20} 
            className="mr-2 text-gray-500 group-hover:text-blue-600 transition-colors" 
          />
          Discounts
        </Link>
      </div>
    </div>
  </nav>
);

export default Navigation;