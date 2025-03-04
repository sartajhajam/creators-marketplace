import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * OfferCard component
 * Displays an offer with its details and status
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Offer title
 * @param {string} props.description - Offer description
 * @param {string} props.creatorName - Creator name
 * @param {string} props.creatorAvatar - Creator avatar URL
 * @param {number} props.amount - Offer amount
 * @param {string} props.status - Current status (pending, in_progress, revision, completed)
 * @param {string} props.dueDate - Due date string
 * @param {Array} props.deliverables - Array of deliverable objects
 */
const OfferCard = ({
  title,
  description,
  creatorName,
  creatorAvatar,
  amount,
  status,
  dueDate,
  deliverables = []
}) => {
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate days remaining
  const getDaysRemaining = (dueDateString) => {
    const today = new Date();
    const due = new Date(dueDateString);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get status badge
  const getStatusBadge = (statusType) => {
    switch(statusType) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            Pending
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Clock className="h-3 w-3 mr-1" />
            In Progress
          </span>
        );
      case 'revision':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            Revision
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {getStatusBadge(status)}
        </div>
      </div>
      <div className="px-6 py-5">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 mb-4 md:mb-0 md:pr-6">
            <p className="text-gray-700 mb-4">{description}</p>
            
            {/* Deliverables */}
            {deliverables.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Deliverables</h4>
                <ul className="space-y-2">
                  {deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-center">
                      <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${
                        deliverable.completed ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        {deliverable.completed ? (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        ) : (
                          <Clock className="h-3 w-3 text-gray-400" />
                        )}
                      </div>
                      <span className={`ml-2 text-sm ${
                        deliverable.completed ? 'text-gray-500 line-through' : 'text-gray-700'
                      }`}>
                        {deliverable.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
            <div className="flex items-center mb-4">
              <img 
                src={creatorAvatar} 
                alt={creatorName} 
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-900">Creator</h4>
                <p className="text-sm text-gray-700">{creatorName}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900">Amount</h4>
              <p className="text-sm text-gray-700">${amount.toLocaleString()}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900">Due Date</h4>
              <p className="text-sm text-gray-700">{formatDate(dueDate)}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Days Left</h4>
              <p className={`text-sm ${
                getDaysRemaining(dueDate) < 3 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700'
              }`}>
                {getDaysRemaining(dueDate)} days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;