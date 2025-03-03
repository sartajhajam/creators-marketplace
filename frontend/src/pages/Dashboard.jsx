import React, { useState } from 'react';
import { BarChart, CheckCircle, DollarSign, Star } from 'lucide-react';

// Components
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import StatsCard from '../components/StatsCard';
import SectionHeader from '../components/SectionHeader';
import ActivityItem from '../components/ActivityItem';
import OrderItem from '../components/OrderItem';
import GigCard from '../components/GigCard';
import StatsList from '../components/StatsList';

// Hooks and Services
import useFetch from '../hooks/useFetch';
import { dashboardService, orderService, gigService } from '../services/api';
import { useAuth } from '../context/AuthContext';


// Dashboard 


/**
 * Dashboard page component
 * @returns {JSX.Element} Dashboard page
 */
const Dashboard = () => {
  const { user } = useAuth();
  
  // Fetch dashboard data using custom hook
  const { 
    data: stats, 
    loading: statsLoading 
  } = useFetch(() => dashboardService.getStats());
  
  const { 
    data: activities, 
    loading: activitiesLoading 
  } = useFetch(() => dashboardService.getActivities());
  
  const { 
    data: activeOrders, 
    loading: ordersLoading 
  } = useFetch(() => orderService.getActiveOrders());
  
  const { 
    data: recommendedGigs, 
    loading: gigsLoading 
  } = useFetch(() => gigService.getRecommendedGigs());
  
  const { 
    data: quickStats, 
    loading: quickStatsLoading 
  } = useFetch(() => dashboardService.getQuickStats());

  // Mock data for initial render (will be replaced by API data)
  const [mockData] = useState({
    stats: {
      activeGigs: 12,
      totalEarnings: 8392,
      completionRate: 98,
      averageRating: 4.9,
      gigGrowth: 8,
      earningsGrowth: 12,
      completionGrowth: 2,
      reviewCount: 142
    },
    activities: [
      {
        id: '1',
        userId: 'user1',
        userName: 'John Cooper',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        action: 'placed an order for Logo Design',
        timestamp: '2023-06-10T10:30:00Z',
        timeAgo: '2 hours ago'
      },
      {
        id: '2',
        userId: 'user2',
        userName: 'Emma Wilson',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        action: 'left a 5-star review',
        message: 'Amazing work! Exactly what I was looking for.',
        timestamp: '2023-06-10T07:15:00Z',
        timeAgo: '5 hours ago'
      },
      {
        id: '3',
        userId: 'user3',
        userName: 'Michael Brown',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        action: 'sent you a message',
        message: 'Hi, I\'m interested in your branding package...',
        timestamp: '2023-06-09T14:45:00Z',
        timeAgo: 'Yesterday'
      }
    ],
    orders: [
      {
        id: 'order1',
        title: 'Logo Design for Tech Startup',
        icon: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        dueDate: '2 days',
        status: 'in_progress',
        clientId: 'client1',
        clientName: 'TechCorp',
        amount: 350
      },
      {
        id: 'order2',
        title: 'Business Card Design',
        icon: 'https://images.unsplash.com/photo-1598532213005-76f745254959?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        dueDate: '5 days',
        status: 'revision',
        clientId: 'client2',
        clientName: 'Smith & Co',
        amount: 150
      }
    ],
    recommendedGigs: [
      {
        id: 'gig1',
        title: 'Website UI Design',
        description: 'Professional website UI design with modern aesthetics',
        price: 299,
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'Web Design',
        tags: ['UI', 'UX', 'Website']
      },
      {
        id: 'gig2',
        title: 'Social Media Marketing',
        description: 'Comprehensive social media marketing strategy',
        price: 199,
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        category: 'Marketing',
        tags: ['Social Media', 'Marketing', 'Strategy']
      }
    ],
    quickStats: {
      responseRate: 98,
      onTimeDelivery: 100,
      orderCompletion: 96
    }
  });

  // Use real data when available, otherwise use mock data
  const displayStats = stats || mockData.stats;
  const displayActivities = activities || mockData.activities;
  const displayOrders = activeOrders || mockData.orders;
  const displayGigs = recommendedGigs || mockData.recommendedGigs;
  const displayQuickStats = quickStats || mockData.quickStats;

  // Show loading state if user is not loaded yet
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        user={{
          name: user.name,
          role: user.role,
          avatar: user.avatar
        }} 
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="p-6 border-b border-gray-200 bg-white">
          <SearchBar />
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard 
              title="Active Gigs" 
              value={displayStats.activeGigs} 
              icon={<BarChart size={24} />}
              percentageChange={displayStats.gigGrowth}
            />
            <StatsCard 
              title="Total Earnings" 
              value={`$${displayStats.totalEarnings.toLocaleString()}`} 
              icon={<DollarSign size={24} />}
              percentageChange={displayStats.earningsGrowth}
            />
            <StatsCard 
              title="Completion Rate" 
              value={`${displayStats.completionRate}%`} 
              icon={<CheckCircle size={24} />}
              percentageChange={displayStats.completionGrowth}
            />
            <StatsCard 
              title="Average Rating" 
              value={displayStats.averageRating} 
              icon={<Star size={24} />}
              additionalInfo={`From ${displayStats.reviewCount} reviews`}
            />
          </div>

          {/* Recent Activities and Recommended Gigs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <SectionHeader 
                title="Recent Activities" 
                actionLink={{ label: "View all", url: "/activities" }}
              />
              <div className="divide-y divide-gray-100">
                {displayActivities.map((activity) => (
                  <ActivityItem 
                    key={activity.id}
                    avatar={activity.userAvatar}
                    name={activity.userName}
                    action={activity.action}
                    time={activity.timeAgo}
                    message={activity.message}
                    actionButton={
                      activity.action.includes('order') 
                        ? { label: 'New Order', variant: 'success' } 
                        : activity.action.includes('review') 
                          ? { label: 'Review', variant: 'secondary' }
                          : activity.action.includes('message')
                            ? { label: 'Message', variant: 'info' }
                            : undefined
                    }
                  />
                ))}
              </div>
            </div>

            {/* Recommended Gigs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <SectionHeader title="Recommended Gigs" />
              <div className="space-y-4">
                {displayGigs.map((gig) => (
                  <GigCard 
                    key={gig.id}
                    title={gig.title}
                    price={`$${gig.price}`}
                    image={gig.image}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Active Orders and Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Active Orders */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <SectionHeader 
                title="Active Orders" 
                actionLink={{ label: "View all", url: "/orders" }}
              />
              <div>
                {displayOrders.map((order) => (
                  <OrderItem 
                    key={order.id}
                    orderIcon={order.icon}
                    title={order.title}
                    dueDate={order.dueDate}
                    status={order.status}
                  />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <StatsList 
                items={[
                  { label: 'Response Rate', value: `${displayQuickStats.responseRate}%` },
                  { label: 'On-time Delivery', value: `${displayQuickStats.onTimeDelivery}%` },
                  { label: 'Order Completion', value: `${displayQuickStats.orderCompletion}%` }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;