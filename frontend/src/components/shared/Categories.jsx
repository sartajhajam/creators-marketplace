import React, { memo } from 'react';
import { Camera, PenTool, Video, FileText } from 'lucide-react';

/**
 * Categories Component
 * 
 * This component displays the different creative categories available on the platform.
 * It includes:
 * - Section title and description
 * - Category cards with icons
 * - Creator count for each category
 * 
 * Optimized with React.memo to prevent unnecessary re-renders
 */
function Categories() {
  // Categories data
  const categories = [
    {
      id: 1,
      name: 'Photography',
      count: 1234,
      icon: <Camera className="w-8 h-8" />
    },
    {
      id: 2,
      name: 'Graphic Design',
      count: 2156,
      icon: <PenTool className="w-8 h-8" />
    },
    {
      id: 3,
      name: 'Video Production',
      count: 987,
      icon: <Video className="w-8 h-8" />
    },
    {
      id: 4,
      name: 'Content Writing',
      count: 1567,
      icon: <FileText className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Creative Categories</h2>
        <p className="mt-4 text-gray-600">Find the perfect creator for your project</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

// Extracted Category Card component for better performance
const CategoryCard = memo(({ category }) => {
  CategoryCard.displayName = 'CategoryCard';
  return (
    <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <div className="mx-auto bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {category.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
      <p className="text-gray-600">{category.count.toLocaleString()} Creators</p>
    </div>
  );
});

export default memo(Categories);