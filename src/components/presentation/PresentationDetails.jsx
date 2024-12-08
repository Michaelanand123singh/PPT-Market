import React from 'react';
import { 
  Download, 
  Star, 
  FileSpreadsheet, 
  Layers,
  Clock 
} from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import Button from './Button';

const PresentationDetail = ({ 
  title, 
  description, 
  price, 
  category, 
  slides,
  duration,
  downloads,
  rating
}) => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    {/* Header Section */}
    <div className="mb-6">
      <CategoryBadge category={category} />
      <h1 className="text-3xl font-bold mt-3 text-gray-900">{title}</h1>
      
      {/* Quick Stats */}
      <div className="flex items-center space-x-4 mt-3 text-gray-600">
        <div className="flex items-center gap-2">
          <Layers size={18} className="text-blue-600" />
          <span>{slides} Slides</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-blue-600" />
          <span>{duration} mins</span>
        </div>
        <div className="flex items-center gap-2">
          <Download size={18} className="text-blue-600" />
          <span>{downloads} downloads</span>
        </div>
        <div className="flex items-center gap-2">
          <Star size={18} className="text-yellow-500 fill-current" />
          <span>{rating.toFixed(1)} Rating</span>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Description</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>

    {/* Price and Actions */}
    <div className="flex items-center justify-between border-t pt-6">
      <div>
        <span className="text-2xl font-bold text-blue-600">${price}</span>
        <p className="text-gray-500 text-sm">Instant Digital Download</p>
      </div>
      <div className="flex space-x-4">
        <Button variant="outline">Preview</Button>
        <Button>
          <FileSpreadsheet size={16} />
          Buy Now
        </Button>
      </div>
    </div>
  </div>
);

export default PresentationDetail;