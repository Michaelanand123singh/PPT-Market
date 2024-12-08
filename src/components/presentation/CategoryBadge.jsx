import React from 'react';
import { 
  Layers, 
  Briefcase, 
  PieChart, 
  Smartphone, 
  Globe, 
  Book 
} from 'lucide-react';

const CategoryIcons = {
  'Business': Briefcase,
  'Technology': Smartphone,
  'Marketing': PieChart,
  'Education': Book,
  'Design': Layers,
  'Global': Globe
};

const CategoryBadge = ({ category, clickable = false }) => {
  const Icon = CategoryIcons[category] || Layers;

  return (
    <span 
      className={`
        inline-flex 
        items-center 
        gap-2 
        px-3 
        py-1 
        rounded-full 
        text-sm 
        font-medium 
        bg-blue-100 
        text-blue-800
        ${clickable ? 'cursor-pointer hover:bg-blue-200 transition-colors' : ''}
      `}
    >
      <Icon size={16} className="text-blue-600" />
      {category}
    </span>
  );
};

export default CategoryBadge;