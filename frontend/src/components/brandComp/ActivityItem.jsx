import React from 'react';

/**
 * ActivityItem component
 * Displays a single activity item in the recent activities list
 * 
 * @param {Object} props - Component props
 * @param {string} props.avatar - User avatar URL
 * @param {string} props.name - User name
 * @param {string} props.action - Action description
 * @param {string} props.time - Time of activity
 * @param {string} [props.message] - Optional message content
 * @param {Object} [props.actionButton] - Optional action button config
 */
const ActivityItem = ({
  avatar,
  name,
  action,
  time,
  message,
  actionButton
}) => {
  // Get button style based on variant
  const getButtonStyle = (variant) => {
    switch(variant) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'secondary':
        return 'bg-yellow-100 text-yellow-800';
      case 'info':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {name} {action}
          </p>
          {message && (
            <p className="text-sm text-gray-500 truncate">
              "{message}"
            </p>
          )}
          <p className="text-sm text-gray-500">
            {time}
          </p>
        </div>
        {actionButton && (
          <div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getButtonStyle(actionButton.variant)}`}>
              {actionButton.label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;