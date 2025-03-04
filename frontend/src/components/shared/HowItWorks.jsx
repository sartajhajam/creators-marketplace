import React, { memo } from 'react';
import { UserCircle, Briefcase, Rocket } from 'lucide-react';

/**
 * HowItWorks Component
 * 
 * This component explains the process of using the platform.
 * It includes:
 * - Section title and description
 * - Step-by-step process with icons
 * - Brief explanations for each step
 * 
 * Optimized with React.memo to prevent unnecessary re-renders
 */
function HowItWorks() {
  // Steps data
  const steps = [
    {
      id: 1,
      title: 'Create Your Profile',
      description: 'Sign up and showcase your creative portfolio to potential clients',
      icon: <UserCircle className="w-10 h-10" />
    },
    {
      id: 2,
      title: 'Connect with Brands',
      description: 'Get discovered by brands looking for your unique creative skills',
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      id: 3,
      title: 'Start Creating',
      description: 'Collaborate on exciting projects and grow your creative career',
      icon: <Rocket className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-4 text-gray-600">Simple steps to start your creative journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {steps.map(step => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}

// Extracted Step Card component for better performance
const StepCard = memo(({ step }) => {
  StepCard.displayName = 'StepCard';
  return (
    <div className="text-center">
      <div className="mx-auto bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
        {step.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
});

export default memo(HowItWorks);