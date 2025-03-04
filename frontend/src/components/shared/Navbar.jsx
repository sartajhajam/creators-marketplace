import React, { useState } from 'react';
import { Menu, X, Search, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Navbar Component
 * 
 * This component renders the navigation bar for the creators marketplace.
 * It includes:
 * - Logo
 * - Navigation links
 * - Search functionality
 * - Authentication buttons
 * - Mobile responsive menu
 */
function Navbar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the current value of the search input
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle navigation to the login page
  const handleLogin = () => {
    navigate('/login');
  };

  // Function to handle navigation to the signup page
  const handleSignUp = () => {
    navigate('/signup');
  };

  // Function to handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchQuery.trim()) { // Check if the search query is not empty
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Navigate to the search results page with the query
      setSearchQuery(''); // Clear the search input after submission
    }
  };

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-900">
            Creators Marketplace
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Explore
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Categories
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            For Brands
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About Us
          </a>
        </div>

        {/* Search and Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="relative"> {/* Form to handle search input */}
            <input
              type="text"
              placeholder="Search creators..." // Placeholder text for the search input
              value={searchQuery} // Controlled input value tied to state
              onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
              className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button type="submit" className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search size={20} className="text-gray-400" /> {/* Search icon inside the input */}
            </button>
          </form>

          {/* Login Button */}
          <button 
            onClick={handleLogin}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            style={{ cursor: 'pointer' }}
          >
            <LogIn size={18} className="mr-2" />
            Log In
          </button>
          
          {/* Sign Up Button */}
          <button 
            onClick={handleSignUp}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            style={{ cursor: 'pointer' }}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-2 border-t border-gray-200">
          <div className="flex flex-col space-y-3 pt-2 pb-3">
            <a href="#" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Explore
            </a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Categories
            </a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              For Brands
            </a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              About Us
            </a>
          </div>
          
          {/* Mobile Search */}
          <div className="px-3 py-2">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <Search size={18} className="text-gray-500" />
              <input 
                type="text" 
                placeholder="Search creators..." 
                className="ml-2 w-full focus:outline-none"
              />
            </div>
          </div>
          
          {/* Mobile Auth Buttons */}
          <div className="mt-3 px-3 space-y-2">
            <button 
              onClick={handleLogin}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              style={{ cursor: 'pointer' }}
            >
              <LogIn size={18} className="mr-2" />
              Log In
            </button>
            <button 
              onClick={handleSignUp}
              className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              style={{ cursor: 'pointer' }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;