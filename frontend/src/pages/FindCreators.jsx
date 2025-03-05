import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';

/**
 * FindCreators component
 * Allows brands to search and filter creators based on various criteria
 */
const FindCreators = () => {
  // State for filters
  const [filters, setFilters] = useState({
    budget: { min: '', max: '' },
    deliveryTime: 'Any',
    expertise: []
  });

  // Mock creators data (would come from API in real app)
  const [creators] = useState([
    {
      id: 'creator1',
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.9,
      reviews: 256,
      description: 'I will design a modern and responsive website',
      price: 99,
      deliveryTime: '3 days',
      portfolio: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 'creator2',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.8,
      reviews: 189,
      description: 'I will create a professional logo design',
      price: 79,
      deliveryTime: '2 days',
      portfolio: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 'creator3',
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.9,
      reviews: 324,
      description: 'I will design your mobile app UI/UX',
      price: 149,
      deliveryTime: '4 days',
      portfolio: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ]);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Handle expertise checkbox changes
  const handleExpertiseChange = (expertise) => {
    setFilters(prev => {
      const updatedExpertise = prev.expertise.includes(expertise)
        ? prev.expertise.filter(item => item !== expertise)
        : [...prev.expertise, expertise];
      
      return {
        ...prev,
        expertise: updatedExpertise
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation - Same as in BrandDashboard */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="ml-2 text-xl font-bold">LOGO</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Find Creators
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Active Offers
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Messages
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <span>Send Offer</span>
              </button>
              <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search creators by skills, expertise..."
              />
            </div>
          </div>

          {/* Filters and Results */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters */}
            <div className="w-full md:w-64 bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Creator Filters</h3>
              
              {/* Budget Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Budget</h4>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Min"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={filters.budget.min}
                    onChange={(e) => handleFilterChange('budget', { ...filters.budget, min: e.target.value })}
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="text"
                    placeholder="Max"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={filters.budget.max}
                    onChange={(e) => handleFilterChange('budget', { ...filters.budget, max: e.target.value })}
                  />
                </div>
              </div>
              
              {/* Delivery Time Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Delivery Time</h4>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={filters.deliveryTime}
                  onChange={(e) => handleFilterChange('deliveryTime', e.target.value)}
                >
                  <option value="Any">Any</option>
                  <option value="1 day">Up to 1 day</option>
                  <option value="3 days">Up to 3 days</option>
                  <option value="7 days">Up to 7 days</option>
                  <option value="14 days">Up to 14 days</option>
                </select>
              </div>
              
              {/* Expertise Filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Expertise</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="design"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        checked={filters.expertise.includes('Design')}
                        onChange={() => handleExpertiseChange('Design')}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="design" className="font-medium text-gray-700">Design</label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="marketing"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        checked={filters.expertise.includes('Marketing')}
                        onChange={() => handleExpertiseChange('Marketing')}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="marketing" className="font-medium text-gray-700">Marketing</label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="content"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        checked={filters.expertise.includes('Content Creation')}
                        onChange={() => handleExpertiseChange('Content Creation')}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="content" className="font-medium text-gray-700">Content Creation</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Creator Results */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-6">
                {creators.map((creator) => (
                  <div key={creator.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row">
                        {/* Creator Portfolio Preview */}
                        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                          <img 
                            src={creator.portfolio} 
                            alt={`${creator.name}'s portfolio`} 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        
                        {/* Creator Info */}
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <img 
                              src={creator.avatar} 
                              alt={creator.name} 
                              className="h-10 w-10 rounded-full mr-3"
                            />
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{creator.name}</h3>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400" />
                                <span className="ml-1 text-sm text-gray-500">{creator.rating} ({creator.reviews})</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{creator.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center text-sm text-gray-500">
                                <span className="font-medium text-gray-900">From {creator.deliveryTime}</span>
                              </div>
                              <div className="mt-1 text-lg font-medium text-gray-900">
                                Starting at ${creator.price}
                              </div>
                            </div>
                            
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Send Offer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCreators;