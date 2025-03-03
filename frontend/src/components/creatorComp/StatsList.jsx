import React from 'react';

/**
 * StatsList component for displaying a list of statistics
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of stat items
 * @param {string} props.items[].label - Stat label
 * @param {string|number} props.items[].value - Stat value
 * @returns {JSX.Element} StatsList component
 */
const StatsList = ({ items }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-semibold text-gray-800">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsList;