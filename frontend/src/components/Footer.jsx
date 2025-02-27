import React, { memo } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

/**
 * Footer Component
 * 
 * This component renders the footer section of the website.
 * It includes:
 * - Logo and company information
 * - Navigation links organized by categories
 * - Social media links
 * - Copyright information
 * 
 * Optimized with React.memo to prevent unnecessary re-renders
 */
function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">CreatorsHub</h3>
          <p className="text-gray-600 mb-4">
            Connecting creative talent with brands looking for innovative solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* For Creators */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">For Creators</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">How to Join</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Creator Resources</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Success Stories</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
          </ul>
        </div>
        
        {/* For Brands */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">For Brands</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Find Creators</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Enterprise Solutions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Brand Resources</a></li>
          </ul>
        </div>
        
        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-center">
          © {new Date().getFullYear()} Creators Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);