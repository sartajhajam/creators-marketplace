import React, { useState } from 'react';
import { BarChart, CheckCircle, DollarSign, Star, Search, Bell } from 'lucide-react';
import BrandNavbar from '../components/brand/BrandNavbar';
import StatsCard from '../components/brand/StatsCard';
import ActivityItem from '../components/brand/ActivityItem';
import CreatorCard from '../components/brand/CreatorCard';

const BrandDashboard = () => {
  // Mock data state
  const [dashboardData] = useState({
    stats: {
      activeOffers: 8,
      totalSpent: 12450,
      completionRate: 95,
      averageRating: 4.7,
      offerGrowth: 15,
      spendingGrowth: 8,
      completionGrowth: 3,
      reviewCount: 32
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <BrandNavbar />
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          {/* Add dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;