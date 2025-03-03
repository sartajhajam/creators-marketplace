import React from 'react';
import { Home, Search, MessageSquare, ListOrdered, Settings, LogOut, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Sidebar component for navigation
 * @param {Object} props - Component props
 * @param {Object} props.user - User profile information
 * @param {string} props.user.name - User's name
 * @param {string} props.user.role - User's role
 * @param {string} props.user.avatar - URL to user's avatar image
 * @param {Function} props.logout - Function to log out the user
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = ({ user, logout }) => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center text-white">
          <Home size={24} />
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 flex items-center space-x-3 border-b border-gray-200 pb-6">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>

      {/* Create Gig Button */}
      <div className="p-4">
        <button className="w-full bg-black text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
          <Plus size={18} />
          <span>Create a Gig</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium">
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/gigs" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium">
              <Search size={20} />
              <span>Find Gigs</span>
            </Link>
          </li>
          <li>
            <Link to="/messages" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium">
              <MessageSquare size={20} />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium">
              <ListOrdered size={20} />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button 
          onClick={logout} 
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium w-full"
          style={{ cursor: 'pointer' }}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;