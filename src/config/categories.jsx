import { 
  Briefcase, 
  DollarSign, 
  GraduationCap, 
  Smartphone, 
  HeartPulse 
} from 'lucide-react';

const categories = [
  { 
    id: 1, 
    name: 'Marketing', 
    icon: Briefcase,
    description: 'Cutting-edge marketing presentations',
    color: 'bg-blue-100 text-blue-800'
  },
  { 
    id: 2, 
    name: 'Finance', 
    icon: DollarSign,
    description: 'Professional financial analysis templates',
    color: 'bg-green-100 text-green-800'
  },
  { 
    id: 3, 
    name: 'Education', 
    icon: GraduationCap,
    description: 'Engaging educational slide decks',
    color: 'bg-purple-100 text-purple-800'
  },
  { 
    id: 4, 
    name: 'Technology', 
    icon: Smartphone,
    description: 'Innovative tech and startup presentations',
    color: 'bg-indigo-100 text-indigo-800'
  },
  { 
    id: 5, 
    name: 'Health', 
    icon: HeartPulse,
    description: 'Medical and wellness presentation templates',
    color: 'bg-red-100 text-red-800'
  }
];

export default categories;

// Helper function to get category details
export const getCategoryDetails = (categoryName) => {
  return categories.find(cat => cat.name === categoryName) || categories[0];
};