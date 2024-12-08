import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ 
  placeholder = 'Search presentations...', 
  onSearch, 
  className = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="text-gray-400" size={20} />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="
          w-full 
          pl-10 
          pr-10 
          py-2 
          border 
          border-gray-300 
          rounded-md 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500
        "
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <X className="text-gray-400 hover:text-gray-600" size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;