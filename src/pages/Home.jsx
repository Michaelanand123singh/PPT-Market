import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileTextIcon, SearchIcon, StarIcon, ShoppingCartIcon, CheckIcon } from 'lucide-react';

const PresentationCard = ({ title, price, thumbnail, category, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button 
              onClick={onClick}
              className="bg-white text-blue-600 px-4 py-2 rounded-full flex items-center hover:bg-blue-50"
            >
              <ShoppingCartIcon className="w-5 h-5 mr-2" />
              Quick View
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="text-green-600 font-semibold">${price}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FileTextIcon className="w-4 h-4 mr-2" />
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const featuredPresentations = [
    { 
      id: 1, 
      title: 'Marketing Strategy', 
      price: 20, 
      thumbnail: '/assets/images/marketing-strategy.jpg',
      category: 'Business',
      description: 'Comprehensive marketing strategy template for modern businesses.'
    },
    { 
      id: 2, 
      title: 'Business Plan', 
      price: 25, 
      thumbnail: '/assets/images/business-plan.jpg',
      category: 'Entrepreneurship',
      description: 'Detailed business plan framework for startup founders.'
    },
    { 
      id: 3, 
      title: 'Sales Pitch Deck', 
      price: 30, 
      thumbnail: '/assets/images/sales-pitch.jpg',
      category: 'Sales',
      description: 'Professional sales pitch presentation template.'
    }
  ];

  const filteredPresentations = featuredPresentations.filter(presentation => 
    presentation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    presentation.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Presentations, Simplified</h1>
          <p className="text-xl mb-8">High-quality, ready-to-use presentation templates for businesses and professionals</p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text"
              placeholder="Search presentations by title or category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <StarIcon className="mx-auto mb-4 w-12 h-12 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Professionally designed templates created by industry experts</p>
          </div>
          <div className="text-center">
            <CheckIcon className="mx-auto mb-4 w-12 h-12 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
            <p className="text-gray-600">Fully editable templates that match your brand style</p>
          </div>
          <div className="text-center">
            <FileTextIcon className="mx-auto mb-4 w-12 h-12 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
            <p className="text-gray-600">Receive your presentation immediately after purchase</p>
          </div>
        </div>
      </div>

      {/* Featured Presentations */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Presentations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPresentations.length > 0 ? (
            filteredPresentations.map((presentation) => (
              <PresentationCard
                key={presentation.id}
                title={presentation.title}
                price={presentation.price}
                thumbnail={presentation.thumbnail}
                category={presentation.category}
                onClick={() => alert(`View details for ${presentation.title}`)}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No presentations found matching your search
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Presentations?</h2>
          <p className="text-xl mb-8">Browse our extensive collection of professional presentation templates</p>
          <Link 
            to="/catalog" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;