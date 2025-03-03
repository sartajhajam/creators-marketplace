import React from 'react';

/**
 * GigCard component for displaying gig information
 * @param {Object} props - Component props
 * @param {string} props.title - Gig title
 * @param {string} props.price - Formatted price (e.g., "$299")
 * @param {string} props.image - URL to gig image
 * @returns {JSX.Element} GigCard component
 */
const GigCard = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Gig image */}
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gig details */}
      <div className="p-4">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">Starting at {price}</p>
      </div>
    </div>
  );
};

export default GigCard;