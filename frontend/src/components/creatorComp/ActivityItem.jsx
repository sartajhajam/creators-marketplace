import React from 'react';

/**
 * ActivityItem component for displaying user activities
 * @param {Object} props - Component props
 * @param {string} props.avatar - URL to user's avatar
 * @param {string} props.name - User's name
 * @param {string} props.action - Action description
 * @param {string} props.time - Time of the activity
 * @param {string} [props.message] - Optional message content
 * @param {Object} [props.actionButton] - Optional action button
 * @param {string} props.actionButton.label - Button label
 * @param {string} props.actionButton.variant - Button variant (primary, secondary, success, info)
 * @returns {JSX.Element} ActivityItem component
 */
const ActivityItem = ({
  avatar,
  name,
  action,
  time,
  message,
  actionButton
}) => {
  /**
   * Get CSS classes for button based on variant
   * @param {string} variant - Button variant
   * @returns {string} CSS classes
   */
  const getButtonClasses = (variant) => {
    switch (variant) {
      case 'primary':
        return 'bg-indigo-100 text-indigo-700';
      case 'secondary':
        return 'bg-gray-100 text-gray-700';
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'info':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex items-start space-x-3 py-4">
      {/* User avatar */}
      <img 
        src={avatar} 
        alt={name} 
        className="w-10 h-10 rounded-full object-cover"
      />
      
      <div className="flex-1">
        {/* Activity header with user name, action, and optional button */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-900">
              <span className="font-semibold">{name}</span> {action}
            </p>
            <p className="text-xs text-gray-500 mt-1">{time}</p>
          </div>
          
          {/* Action button if provided */}
          {actionButton && (
            <button 
              className={`px-3 py-1 rounded-full text-xs font-medium ${getButtonClasses(actionButton.variant)}`}
            >
              {actionButton.label}
            </button>
          )}
        </div>
        
        {/* Optional message */}
        {message && (
          <p className="text-sm text-gray-600 mt-2 italic">"{message}"</p>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;