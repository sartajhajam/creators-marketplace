import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

/**
 * StatsCard component for displaying statistics with trend indicators
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Main value to display
 * @param {React.ReactNode} props.icon - Icon to display
 * @param {number} [props.percentageChange] - Percentage change to show trend
 * @param {string} [props.timeFrame="last month"] - Time frame for the trend
 * @param {string} [props.additionalInfo] - Additional information to display
 * @returns {JSX.Element} StatsCard component
 */
const StatsCard = ({ 
  title, 
  value, 
  icon, 
  percentageChange, 
  timeFrame = "last month",
  additionalInfo
}) => {
  // Determine if the percentage change is positive
  const isPositive = percentageChange && percentageChange > 0;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      {/* Card header with title and icon */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-500 font-medium">{title}</h3>
        <div className="text-gray-700">
          {icon}
        </div>
      </div>
      
      {/* Card content with value and trend */}
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-gray-800">{value}</span>
        
        {/* Show trend if percentageChange is provided */}
        {percentageChange !== undefined && (
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp size={16} className="text-green-500 mr-1" />
            ) : (
              <TrendingDown size={16} className="text-red-500 mr-1" />
            )}
            <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{percentageChange}% from {timeFrame}
            </span>
          </div>
        )}
        
        {/* Show additional info if provided */}
        {additionalInfo && (
          <span className="text-sm text-gray-500 mt-1">{additionalInfo}</span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;