import React from 'react';
import { Star } from 'lucide-react';

/**
 * CreatorCard component
 * Displays a creator's information in a card format
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - Creator's name
 * @param {string} props.avatar - Creator's avatar URL
 * @param {number} props.rating - Creator's rating
 * @param {number} props.reviews - Number of reviews
 * @param {string} props.description - Creator's service description
 * @param {number} props.price - Starting price
 * @param {string} props.deliveryTime - Delivery time
 * @param {string} props.portfolioImage - Portfolio image URL
 */
const CreatorCard = ({
  name,
  avatar,
  rating,
  reviews,
  description,
  price,
  deliveryTime,
  portfolioImage
}) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row">
          {/* Creator Portfolio Preview */}
          {portfolioImage && (
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
              <img 
                src={portfolioImage} 
                alt={`${name}'s portfolio`} 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
          
          {/* Creator Info */}
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <img 
                src={avatar} 
                alt={name} 
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-500">{rating} ({reviews})</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{description}</p>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium text-gray-900">From {deliveryTime}</span>
                </div>
                <div className="mt-1 text-lg font-medium text-gray-900">
                  Starting at ${price}
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
  );
};

export default CreatorCard;