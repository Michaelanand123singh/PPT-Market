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
      thumbnail: '/catalog/Marketing_strategy.jpg',
      category: 'Marketing',
      downloads: 1240,
      rating: 4.7,
    },
    {
      id: 2,
      title: 'Business Plan Professional',
      price: 25,
      thumbnail: '/catalog/business plan.jpg',
      category: 'Business',
      downloads: 920,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Growth Hacking Techniques',
      price: 18,
      thumbnail: '/catalog/Growth.jpg',
      category: 'Technology',
      downloads: 780,
      rating: 4.6,
    },
    {
      id: 4,
      title: 'Educational Leadership Insights',
      price: 22,
      thumbnail: '/catalog/Edu_Leadership.jpg',
      category: 'Education',
      downloads: 650,
      rating: 4.4,
    },
    {
      id: 5,
      title: 'Digital Marketing Trends',
      price: 19,
      thumbnail: '/catalog/Digital Marketing.jpg',
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
    <div 
      className="
        min-h-screen 
        bg-gradient-to-br 
        from-blue-50 
        to-blue-100 
        py-12 
        px-4 
        relative 
        overflow-hidden
      "
    >
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="
              absolute 
              bg-blue-200/30 
              rounded-full 
              animate-blob 
              blur-xl
            "
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header with Gradient Animation */}
        <div className="mb-12 text-center">
          <h1 
            className="
              text-5xl 
              font-extrabold 
              mb-4 
              bg-clip-text 
              text-transparent 
              bg-gradient-to-r 
              from-blue-600 
              to-blue-900
              animate-gradient-x
            "
          >
            Presentation Catalog
          </h1>
          <p 
            className="
              text-xl 
              text-blue-800 
              max-w-2xl 
              mx-auto 
              opacity-80
              animate-fade-in
            "
          >
            Discover premium presentation templates that transform your ideas into compelling stories
          </p>
        </div>

        <div className="flex">
          {/* Sidebar Filters */}
          <div className={`
            fixed inset-y-0 right-0 w-64 
            bg-white/80 
            backdrop-blur-lg 
            shadow-2xl 
            z-50 
            transform 
            transition-transform
            md:relative 
            md:block 
            md:w-64 
            md:mr-6
            rounded-2xl
            ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0
          `}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900">Filters</h2>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="md:hidden text-blue-600 hover:text-blue-800"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-blue-900">Categories</h3>
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
                <h3 className="font-semibold mb-2 text-blue-900">Price Range</h3>
                <div className="flex items-center gap-2">
                  <span className="text-blue-800">$0</span>
                  <input 
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="flex-grow accent-blue-600"
                  />
                  <span className="text-blue-800">${priceRange[1]}</span>
                </div>
              </div>

              {/* Minimum Downloads Filter */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-blue-900">Minimum Downloads</h3>
                <input 
                  type="number"
                  value={minDownloads}
                  onChange={(e) => setMinDownloads(Number(e.target.value))}
                  className="
                    w-full 
                    border 
                    border-blue-200 
                    rounded 
                    p-2 
                    focus:border-blue-500 
                    text-blue-800
                  "
                  min="0"
                />
              </div>

              {/* Minimum Rating Filter */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-blue-900">Minimum Rating</h3>
                <div className="flex items-center gap-2">
                  <input 
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    className="flex-grow accent-blue-600"
                  />
                  <span className="text-blue-800">{minRating.toFixed(1)}</span>
                </div>
              </div>

              {/* Sorting Options */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-blue-900">Sort By</h3>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="
                    w-full 
                    border 
                    border-blue-200 
                    rounded 
                    p-2 
                    text-blue-800 
                    focus:border-blue-500
                  "
                >
                  <option value="downloads">Downloads</option>
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                </select>
                <button 
                  onClick={() => setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc')}
                  className="
                    mt-2 
                    w-full 
                    text-blue-600 
                    hover:bg-blue-100 
                    rounded 
                    p-2
                  "
                >
                  {sortDirection === 'desc' ? 'Descending ▼' : 'Ascending ▲'}
                </button>
              </div>

              {/* Reset Filters */}
              <button 
                onClick={resetFilters}
                className="
                  w-full 
                  bg-gradient-to-r 
                  from-red-500 
                  to-red-700 
                  text-white 
                  p-2 
                  rounded 
                  hover:from-red-600 
                  hover:to-red-800
                "
              >
                Reset All Filters
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow">
            {/* Search Input */}
            <div className="mb-8">
              <Input
                placeholder="Search presentations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search size={20} className="text-blue-600" />}
                className="
                  w-full 
                  bg-white/70 
                  backdrop-blur-lg 
                  border-blue-200 
                  focus:border-blue-500 
                  shadow-lg
                "
              />
            </div>

            {/* Results Summary */}
            <div className="mb-6 flex justify-between items-center">
              <div className="text-blue-800 text-sm font-medium">
                {filteredAndSortedPresentations.length} presentations found
              </div>
            </div>

            {/* Presentations Grid */}
            {filteredAndSortedPresentations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {filteredAndSortedPresentations.map((presentation) => (
                  <div 
                    key={presentation.id}
                    className="
                      transform 
                      transition-all 
                      duration-500 
                      hover:-translate-y-4 
                      hover:scale-105 
                      hover:shadow-2xl
                    "
                  >
                    <PresentationCard
                      title={presentation.title}
                      price={presentation.price}
                      thumbnail={presentation.thumbnail}
                      category={presentation.category}
                      downloads={presentation.downloads}
                      rating={presentation.rating}
                      onClick={() => alert(`View details for ${presentation.title}`)}
                      className="
                        bg-white/80 
                        backdrop-blur-lg 
                        border 
                        border-blue-100 
                        rounded-2xl 
                        shadow-lg
                      "
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/50 backdrop-blur-lg rounded-2xl">
                <p className="text-blue-800 text-xl">No presentations found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="
          fixed 
          bottom-6 
          right-6 
          md:hidden 
          bg-gradient-to-r 
          from-blue-500 
          to-blue-700 
          text-white 
          p-4 
          rounded-full 
          shadow-2xl 
          z-50 
          animate-bounce
        "
      >
        <SlidersHorizontal size={24} />
      </button>
    </div>
  );
};

export default Catalog;