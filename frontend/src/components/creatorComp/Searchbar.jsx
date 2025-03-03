import React from 'react';
import { Search } from 'lucide-react';

/**
 * SearchBar component for searching gigs
 * @returns {JSX.Element} SearchBar component
 */
const SearchBar = () => {
  return (
    <div className="relative">
      {/* Search icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search gigs..."
        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default SearchBar;