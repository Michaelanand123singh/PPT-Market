import React, { useState } from 'react';
import {
  Flame,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  X
} from 'lucide-react';

// Custom Dialog Component
const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-xl z-60 relative max-w-2xl w-full mx-4">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

// Custom Button Component
const Button = ({ children, variant = 'default', onClick, className = '' }) => {
  const baseStyles = "px-4 py-2 rounded-md transition-all duration-300 flex items-center justify-center";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Trending = () => {
  const [selectedPresentation, setSelectedPresentation] = useState(null);

  const trendingData = [
    {
      name: 'AI Revolution 2024',
      category: 'Technology',
      ratings: 4.9,
      views: 8500,
      updated: '1 day ago',
      description: 'Explore the cutting-edge trends in artificial intelligence with this sleek presentation template.',
      tags: ['AI', 'Technology', 'Innovation']
    },
    {
      name: 'Marketing Trends 2024',
      category: 'Marketing',
      ratings: 4.7,
      views: 6200,
      updated: '3 days ago',
      description: 'Discover the latest marketing trends and strategies with this data-driven template.',
      tags: ['Marketing', 'Trends', 'Growth']
    },
    {
      name: 'Effective Leadership',
      category: 'Business',
      ratings: 4.8,
      views: 5400,
      updated: '2 days ago',
      description: 'Master leadership principles with this modern and engaging template.',
      tags: ['Leadership', 'Business', 'Strategy']
    },
    {
      name: 'HealthTech Innovations',
      category: 'Health',
      ratings: 4.6,
      views: 4500,
      updated: '5 days ago',
      description: 'Dive into the future of healthcare and technology with this innovative template.',
      tags: ['HealthTech', 'Innovation', 'Wellness']
    }
  ];

  const handlePresentationClick = (presentation) => {
    setSelectedPresentation(presentation);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Trending <span className="block text-yellow-300">Presentations & Templates</span>
          </h1>
          <p className="text-xl text-red-100 mb-8">
            Discover the most popular presentations, top-rated templates, and audience-favorite content.
          </p>
          <Button>
            Browse All <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      {/* Trending Presentations */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Trending Now
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingData.map((presentation) => (
            <div 
              key={presentation.name} 
              className="rounded-lg border bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handlePresentationClick(presentation)}
            >
              <div className="p-6 bg-gradient-to-r from-red-100 to-red-200">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {presentation.name}
                  </h3>
                  <Flame className="text-yellow-400" size={24} />
                </div>
                <p className="text-sm text-gray-600 mb-4">{presentation.category}</p>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Star className="text-yellow-400" size={20} />
                  <span>{presentation.ratings}</span>
                  <Clock size={20} />
                  <span>{presentation.updated}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{presentation.description}</p>
                <div className="flex flex-wrap gap-2">
                  {presentation.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Presentation Details Dialog */}
      <Dialog 
        open={!!selectedPresentation} 
        onClose={() => setSelectedPresentation(null)}
      >
        {selectedPresentation && (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {selectedPresentation.name}
            </h2>
            <p className="text-gray-600 mb-4">{selectedPresentation.description}</p>
            <div className="flex space-x-4 mb-6">
              <span className="bg-gray-100 px-4 py-2 rounded-md">
                Category: <strong>{selectedPresentation.category}</strong>
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-md">
                Views: <strong>{selectedPresentation.views}</strong>
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-md">
                Rating: <strong>{selectedPresentation.ratings}</strong>
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPresentation.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Trending;
