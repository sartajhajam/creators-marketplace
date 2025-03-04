import React, { memo } from 'react';

/**
 * CallToAction Component
 * 
 * This component displays a call-to-action section to encourage users to join the platform.
 * It includes:
 * - Compelling headline
 * - Descriptive text
 * - CTA button
 * - Background design elements
 * 
 * Optimized with React.memo to prevent unnecessary re-renders
 */
function CallToAction() {
  return (
    <section className="py-16 my-12 relative">
      <div className="bg-gray-50 rounded-xl p-8 md:p-12 relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <div className="absolute top-10 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
          <div className="absolute top-40 right-40 w-12 h-12 bg-yellow-100 rounded-full opacity-50"></div>
        </div>
        
        <div className="max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to start your creative journey?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our community of creators and brands making amazing things happen. Get started today and turn your creative passion into success.
          </p>
          <button className="mt-8 px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default memo(CallToAction);