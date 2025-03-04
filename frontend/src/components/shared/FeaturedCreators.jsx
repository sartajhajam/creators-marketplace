import React, { memo } from 'react';
import { Star } from 'lucide-react';

/**
 * FeaturedCreators Component
 * 
 * This component displays a section showcasing featured creators.
 * It includes:
 * - Section title and description
 * - Creator cards with profile information
 * - Ratings and project completion stats
 * 
 * Optimized with React.memo to prevent unnecessary re-renders
 */
function FeaturedCreators() {
  // Sample creator data
  const creators = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Digital Artist & Illustrator',
      rating: 4.9,
      reviews: 127,
      projectsCompleted: 98,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Motion Designer',
      rating: 4.8,
      reviews: 93,
      projectsCompleted: 76,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      title: 'Brand Strategist',
      rating: 4.9,
      reviews: 156,
      projectsCompleted: 134,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-xl my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Featured Creators</h2>
        <p className="mt-4 text-gray-600">Discover top talent across various creative fields</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {creators.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </section>
  );
}

// Extracted Creator Card component for better performance
const CreatorCard = memo(({ creator }) => {
  CreatorCard.displayName = 'CreatorCard';
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <img 
            src={creator.image} 
            alt={creator.name} 
            className="w-16 h-16 rounded-full object-cover mr-4"
            loading="lazy"
          />
          <div>
            <h3 className="font-bold text-lg">{creator.name}</h3>
            <p className="text-gray-600 text-sm">{creator.title}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-800">{creator.rating}</span>
            <span className="ml-1 text-gray-500">({creator.reviews} reviews)</span>
          </div>
          <div className="mt-2 flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">{creator.projectsCompleted} Projects Completed</span>
          </div>
        </div>
        
        <button className="mt-6 w-full py-2 border border-gray-300 rounded-md text-gray-800 font-medium hover:bg-gray-50 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
});

export default memo(FeaturedCreators);