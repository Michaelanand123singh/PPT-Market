import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  SlidersHorizontal 
} from 'lucide-react';
import PresentationCard from '../components/presentation/PresentationCard';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Catalog = () => {
  // Initial presentations data
  const [presentations, setPresentations] = useState([
    {
      id: 1,
      title: 'Marketing Strategy Masterclass',
      price: 20,
      thumbnail: '/assets/images/default-presentation-thumb.png',
      category: 'Marketing',
      downloads: 1240,
      rating: 4.7,
    },
    {
      id: 2,
      title: 'Business Plan Professional',
      price: 25,
      thumbnail: '/assets/images/default-presentation-thumb.png',
      category: 'Business',
      downloads: 920,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Growth Hacking Techniques',
      price: 18,
      thumbnail: '/assets/images/default-presentation-thumb.png',
      category: 'Technology',
      downloads: 780,
      rating: 4.6,
    },
    {
      id: 4,
      title: 'Educational Leadership Insights',
      price: 22,
      thumbnail: '/assets/images/default-presentation-thumb.png',
      category: 'Education',
      downloads: 650,
      rating: 4.4,
    },
    {
      id: 5,
      title: 'Digital Marketing Trends',
      price: 19,
      thumbnail: '/assets/images/default-presentation-thumb.png',
      category: 'Marketing',
      downloads: 1100,
      rating: 4.8,
    }
  ]);

  // State for filtering and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('downloads');
  const [sortDirection, setSortDirection] = useState('desc');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [minDownloads, setMinDownloads] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Categories for filtering
  const categories = ['All', 'Marketing', 'Business', 'Technology', 'Education'];

  // Advanced filtering and sorting logic
  const filteredAndSortedPresentations = useMemo(() => {
    let result = presentations.filter(presentation => 
      // Search term filter
      (searchTerm === '' || 
       presentation.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      
      // Category filter
      (selectedCategory === null || 
       selectedCategory === 'All' || 
       presentation.category === selectedCategory) &&
      
      // Price range filter
      (presentation.price >= priceRange[0] && 
       presentation.price <= priceRange[1]) &&
      
      // Downloads filter
      (presentation.downloads >= minDownloads) &&
      
      // Rating filter
      (presentation.rating >= minRating)
    );

    // Sorting logic
    return result.sort((a, b) => {
      let comparison = 0;
      switch(sortBy) {
        case 'downloads':
          comparison = a.downloads - b.downloads;
          break;
        case 'rating':
          comparison = a.rating - b.rating;
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
        default:
          comparison = 0;
      }
      return sortDirection === 'desc' ? -comparison : comparison;
    });
  }, [
    presentations, 
    searchTerm, 
    selectedCategory, 
    sortBy, 
    sortDirection,
    priceRange,
    minDownloads,
    minRating
  ]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSortBy('downloads');
    setSortDirection('desc');
    setPriceRange([0, 50]);
    setMinDownloads(0);
    setMinRating(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Presentation Catalog</h1>
          <p className="text-gray-600">
            Explore our extensive collection of professional presentation templates
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden bg-blue-500 text-white p-2 rounded"
        >
          <SlidersHorizontal size={24} />
        </button>
      </div>

      <div className="flex">
        {/* Sidebar Filters - Mobile and Desktop */}
        <div className={`
          fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform
          md:relative md:block md:w-64 md:mr-6
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
          md:translate-x-0
        `}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="md:hidden"
              >
                <X size={24} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                    variant={selectedCategory === (category === 'All' ? null : category) 
                      ? 'primary' 
                      : 'outline'}
                    className="px-3 py-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <div className="flex items-center gap-2">
                <span>$0</span>
                <input 
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="flex-grow"
                />
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Minimum Downloads Filter */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Minimum Downloads</h3>
              <input 
                type="number"
                value={minDownloads}
                onChange={(e) => setMinDownloads(Number(e.target.value))}
                className="w-full border rounded p-2"
                min="0"
              />
            </div>

            {/* Minimum Rating Filter */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Minimum Rating</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={minRating}
                  onChange={(e) => setMinRating(Number(e.target.value))}
                  className="flex-grow"
                />
                <span>{minRating.toFixed(1)}</span>
              </div>
            </div>

            {/* Sorting Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Sort By</h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="downloads">Downloads</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
              <button 
                onClick={() => setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc')}
                className="mt-2 w-full text-blue-600"
              >
                {sortDirection === 'desc' ? 'Descending ▼' : 'Ascending ▲'}
              </button>
            </div>

            {/* Reset Filters */}
            <button 
              onClick={resetFilters}
              className="w-full bg-red-500 text-white p-2 rounded"
            >
              Reset All Filters
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow">
          {/* Search Input */}
          <div className="mb-6">
            <Input
              placeholder="Search presentations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search size={20} />}
              className="w-full"
            />
          </div>

          {/* Results Summary */}
          <div className="mb-4 flex justify-between items-center">
            <div className="text-gray-600 text-sm">
              {filteredAndSortedPresentations.length} presentations found
            </div>
          </div>

          {/* Presentations Grid */}
          {filteredAndSortedPresentations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredAndSortedPresentations.map((presentation) => (
                <PresentationCard
                  key={presentation.id}
                  title={presentation.title}
                  price={presentation.price}
                  thumbnail={presentation.thumbnail}
                  category={presentation.category}
                  downloads={presentation.downloads}
                  rating={presentation.rating}
                  onClick={() => alert(`View details for ${presentation.title}`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-100 rounded-lg">
              <p className="text-gray-600">No presentations found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;