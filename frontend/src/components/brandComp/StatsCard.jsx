import React from 'react';

/**
 * StatsCard component
 * Displays a statistic with icon and optional growth indicator
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string|number} props.value - Main statistic value
 * @param {number} [props.percentageChange] - Optional percentage change
 * @param {string} [props.additionalInfo] - Optional additional information
 */
const StatsCard = ({ 
  title, 
  icon, 
  value, 
  percentageChange, 
  additionalInfo 
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">{value}</div>
                  {percentageChange && (
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <span>↑ {percentageChange}% from last month</span>
                    </div>
                  )}
                  {additionalInfo && (
                    <div className="ml-2 text-sm text-gray-500">
                      {additionalInfo}
                    </div>
                  )}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;