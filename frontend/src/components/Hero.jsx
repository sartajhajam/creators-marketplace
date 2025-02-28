import React from 'react';

/**
 * Hero Component
 * 
 * This component displays the main hero section of the marketplace.
 * It includes:
 * - Main headline
 * - Subheadline
 * - Call-to-action buttons
 * - Hero image
 */
function Hero() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Connect Brands with Creative Talent
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of creators and brands making meaningful connections and creating amazing projects together on our platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
              Join as Creator
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
              Find Creator
            </button>
          </div>
        </div>
        
        {/* Right Column - Hero Image */}
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Creators collaborating" 
            className="rounded-lg shadow-lg max-w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;