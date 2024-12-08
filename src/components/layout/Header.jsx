import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  ShoppingCart, 
  User, 
  X 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
          PPT Market
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/catalog" className="text-gray-700 hover:text-blue-600 transition-colors">Catalog</Link>
          <Link to="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">Categories</Link>
          <Link to="/trending" className="text-gray-700 hover:text-blue-600 transition-colors">Trending</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600">
            <Search size={20} />
          </button>
          <Link to="/cart" className="text-gray-700 hover:text-blue-600 relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
          <Link 
            to="/login" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-3">
              <Link to="/catalog" className="text-gray-700 hover:text-blue-600">Catalog</Link>
              <Link to="/categories" className="text-gray-700 hover:text-blue-600">Categories</Link>
              <Link to="/trending" className="text-gray-700 hover:text-blue-600">Trending</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              
              <div className="border-t pt-3 mt-3 space-y-3">
                <Link 
                  to="/login" 
                  className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Login
                </Link>
                <Link 
                  to="/cart" 
                  className="block text-center text-gray-700 hover:text-blue-600"
                >
                  Cart (0)
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;