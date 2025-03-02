import React from 'react';

/**
 * OrderItem component for displaying order information
 * @param {Object} props - Component props
 * @param {string} props.orderIcon - URL to order icon/image
 * @param {string} props.title - Order title
 * @param {string} props.dueDate - Due date for the order
 * @param {string} props.status - Order status (in_progress, revision, completed, cancelled)
 * @returns {JSX.Element} OrderItem component
 */
const OrderItem = ({
  orderIcon,
  title,
  dueDate,
  status
}) => {
  /**
   * Get status badge based on order status
   * @returns {JSX.Element} Status badge
   */
  const getStatusBadge = () => {
    switch (status) {
      case 'in_progress':
        return (
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
            In Progress
          </span>
        );
      case 'revision':
        return (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
            Revision
          </span>
        );
      case 'completed':
        return (
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
      {/* Order information */}
      <div className="flex items-center space-x-3">
        <img 
          src={orderIcon} 
          alt={title}
          className="w-10 h-10 object-cover rounded-md"
        />
        <div>
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">Due in {dueDate}</p>
        </div>
      </div>
      
      {/* Status badge */}
      <div>
        {getStatusBadge()}
      </div>
    </div>
  );
};

export default OrderItem;