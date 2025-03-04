"use client"

import { useState } from "react"
import { Search, Bell, Send, MoreHorizontal, Eye } from "lucide-react"
import { useAuth } from "../context/AuthContext"

/**
 * BrandDashboard Component
 *
 * Main dashboard for brands to find creators, manage campaigns, and view analytics
 * This component includes:
 * - Navigation header with search and notifications
 * - Creator filters (budget, delivery time, expertise)
 * - Creator listings with portfolio and details
 * - Campaign management section
 * - Analytics overview
 */
const BrandDashboard = () => {
  // Get auth context for user information
  const { user } = useAuth()

  // State for filters
  const [minBudget, setMinBudget] = useState("")
  const [maxBudget, setMaxBudget] = useState("")
  const [deliveryTime, setDeliveryTime] = useState("any")
  const [expertise, setExpertise] = useState({
    design: false,
    marketing: false,
    content: false,
  })
  const [searchQuery, setSearchQuery] = useState("")

  // State for creators data
  const [creators, setCreators] = useState([
    {
      id: 1,
      name: "John Smith",
      rating: 4.9,
      reviews: 256,
      description: "I will design a modern and responsive website",
      days: 3,
      price: 99,
      image: "/placeholder.svg",
      portfolioImage: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 4.8,
      reviews: 189,
      description: "I will create a professional logo design",
      days: 2,
      price: 79,
      image: "/placeholder.svg",
      portfolioImage: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Mike Chen",
      rating: 4.9,
      reviews: 324,
      description: "I will design your mobile app UI/UX",
      days: 4,
      price: 149,
      image: "/placeholder.svg",
      portfolioImage: "/placeholder.svg",
    },
  ])

  // State for active campaigns
  const [activeCampaigns, setActiveCampaigns] = useState([
    {
      id: 1,
      name: "Summer Collection Launch",
      creator: "John Smith",
      status: "Active",
      budget: "$2,500",
      spent: "$1,200",
      engagement: "12.5K",
    },
    {
      id: 2,
      name: "Product Review Series",
      creator: "Sarah Johnson",
      status: "Active",
      budget: "$1,800",
      spent: "$900",
      engagement: "8.3K",
    },
    {
      id: 3,
      name: "Brand Awareness Campaign",
      creator: "Mike Chen",
      status: "Pending",
      budget: "$3,000",
      spent: "$0",
      engagement: "0",
    },
  ])

  // State for dashboard analytics
  const [analytics, setAnalytics] = useState({
    activeCampaigns: 12,
    totalCreators: 48,
    budgetSpent: 24500,
    campaignGrowth: 8,
    creatorGrowth: 12,
    budgetChange: -3,
  })

  // State for active tab
  const [activeTab, setActiveTab] = useState("overview")

  /**
   * Handle search input change
   * @param {Event} e - Input change event
   */
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  /**
   * Handle expertise checkbox change
   * @param {string} type - Expertise type (design, marketing, content)
   */
  const handleExpertiseChange = (type) => {
    setExpertise({
      ...expertise,
      [type]: !expertise[type],
    })
  }

  /**
   * Send offer to creator
   * @param {number} creatorId - ID of the creator
   */
  const handleSendOffer = (creatorId) => {
    console.log(`Sending offer to creator ${creatorId}`)
    // In a real app, this would open a modal or navigate to an offer form
    alert(`Offer form for creator ${creatorId} would open here`)
  }

  /**
   * View campaign details
   * @param {number} campaignId - ID of the campaign
   */
  const handleViewCampaign = (campaignId) => {
    console.log(`Viewing campaign ${campaignId}`)
    // In a real app, this would navigate to campaign details
    alert(`Campaign details for campaign ${campaignId} would open here`)
  }

  /**
   * Filter creators based on search and filters
   * @returns {Array} Filtered creators
   */
  const getFilteredCreators = () => {
    return creators.filter((creator) => {
      // Filter by search query
      if (
        searchQuery &&
        !creator.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !creator.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Filter by price
      if (minBudget && creator.price < Number.parseInt(minBudget)) {
        return false
      }
      if (maxBudget && creator.price > Number.parseInt(maxBudget)) {
        return false
      }

      // Filter by delivery time
      if (deliveryTime !== "any") {
        const [min, max] = deliveryTime.split("-").map(Number)
        if (max && (creator.days < min || creator.days > max)) {
          return false
        } else if (!max && creator.days < min) {
          return false
        }
      }

      // Filter by expertise (if any selected)
      const anyExpertiseSelected = Object.values(expertise).some((value) => value)
      if (anyExpertiseSelected) {
        // This is a simplified example - in a real app, creators would have expertise fields
        // For now, we'll use some dummy logic based on description
        if (expertise.design && !creator.description.toLowerCase().includes("design")) {
          return false
        }
        if (expertise.marketing && !creator.description.toLowerCase().includes("market")) {
          return false
        }
        if (expertise.content && !creator.description.toLowerCase().includes("content")) {
          return false
        }
      }

      return true
    })
  }

  // Get filtered creators
  const filteredCreators = getFilteredCreators()

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center">
            <div className="text-indigo-600 font-bold text-2xl mr-8">LOGO</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 font-medium border-b-2 border-indigo-600 pb-4">
                Dashboard
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">
                Find Creators
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">
                Active Offers
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">
                Messages
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* Send Offer Button */}
            <button
              className="bg-black text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-800 transition-colors"
              onClick={() => alert("Global send offer button clicked")}
            >
              <Send className="h-4 w-4 mr-2" />
              Send Offer
            </button>

            {/* Notification Bell */}
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <button className="rounded-full">
              <img src={user?.avatar || "/placeholder.svg"} alt="Profile" className="rounded-full h-8 w-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Creator Filters</h2>

              {/* Budget Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Budget</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={minBudget}
                    onChange={(e) => setMinBudget(e.target.value)}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                  />
                </div>
              </div>

              {/* Delivery Time Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Delivery Time</h3>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                >
                  <option value="any">Any</option>
                  <option value="1-3">1-3 days</option>
                  <option value="4-7">4-7 days</option>
                  <option value="8-14">8-14 days</option>
                  <option value="15">15+ days</option>
                </select>
              </div>

              {/* Expertise Filter */}
              <div>
                <h3 className="font-medium mb-2">Expertise</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="design"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={expertise.design}
                      onChange={() => handleExpertiseChange("design")}
                    />
                    <label htmlFor="design" className="text-sm">
                      Design
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="marketing"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={expertise.marketing}
                      onChange={() => handleExpertiseChange("marketing")}
                    />
                    <label htmlFor="marketing" className="text-sm">
                      Marketing
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="content"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={expertise.content}
                      onChange={() => handleExpertiseChange("content")}
                    />
                    <label htmlFor="content" className="text-sm">
                      Content Creation
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3">
            {/* Search Bar */}
            <div className="mb-6 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search creators by skills, expertise..."
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* Creator Cards */}
            <div className="grid grid-cols-1 gap-6">
              {filteredCreators.length > 0 ? (
                filteredCreators.map((creator) => (
                  <div key={creator.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      {/* Portfolio Image */}
                      <div className="md:col-span-1">
                        <img
                          src={creator.portfolioImage || "/placeholder.svg"}
                          alt={`${creator.name}'s portfolio`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Creator Info */}
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start mb-4">
                          <img
                            src={creator.image || "/placeholder.svg"}
                            alt={creator.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <h3 className="font-medium">{creator.name}</h3>
                            <div className="flex items-center">
                              <span className="text-yellow-500">★</span>
                              <span className="ml-1">{creator.rating}</span>
                              <span className="text-gray-500 ml-1">({creator.reviews})</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-800 mb-4">{creator.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                            From {creator.days} days
                          </div>

                          <div className="flex items-center space-x-4">
                            <div>
                              <span className="text-gray-500 text-sm">Starting at</span>
                              <span className="font-medium ml-1">${creator.price}</span>
                            </div>
                            <button
                              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                              onClick={() => handleSendOffer(creator.id)}
                            >
                              Send Offer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No creators found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dashboard Analytics Section */}
        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "creators"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("creators")}
              >
                Creators
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "campaigns"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("campaigns")}
              >
                Campaigns
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "analytics"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("analytics")}
              >
                Analytics
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900">Active Campaigns</h3>
                  <p className="text-3xl font-bold mt-2">{analytics.activeCampaigns}</p>
                  <p className={`text-sm ${analytics.campaignGrowth >= 0 ? "text-green-600" : "text-red-600"} mt-1`}>
                    {analytics.campaignGrowth >= 0 ? "↑" : "↓"} {Math.abs(analytics.campaignGrowth)}% from last month
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900">Total Creators</h3>
                  <p className="text-3xl font-bold mt-2">{analytics.totalCreators}</p>
                  <p className={`text-sm ${analytics.creatorGrowth >= 0 ? "text-green-600" : "text-red-600"} mt-1`}>
                    {analytics.creatorGrowth >= 0 ? "↑" : "↓"} {Math.abs(analytics.creatorGrowth)}% from last month
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900">Budget Spent</h3>
                  <p className="text-3xl font-bold mt-2">${analytics.budgetSpent.toLocaleString()}</p>
                  <p className={`text-sm ${analytics.budgetChange >= 0 ? "text-green-600" : "text-red-600"} mt-1`}>
                    {analytics.budgetChange >= 0 ? "↑" : "↓"} {Math.abs(analytics.budgetChange)}% from last month
                  </p>
                </div>
              </div>

              {/* Active Campaigns Section */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Active Campaigns</h2>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
                </div>

                {/* Campaigns Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Campaign
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Creator
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Budget
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Spent
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Engagement
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {activeCampaigns.map((campaign) => (
                        <tr key={campaign.id}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{campaign.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{campaign.creator}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                campaign.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : campaign.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {campaign.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{campaign.budget}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{campaign.spent}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{campaign.engagement}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              className="text-indigo-600 hover:text-indigo-900 mr-3"
                              onClick={() => handleViewCampaign(campaign.id)}
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                              <MoreHorizontal className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === "creators" && (
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Your Creator Network</h2>
              <p>This tab would contain a detailed view of all creators you're working with.</p>
            </div>
          )}

          {activeTab === "campaigns" && (
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Campaign Management</h2>
              <p>This tab would contain detailed campaign management tools.</p>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Advanced Analytics</h2>
              <p>This tab would contain more detailed analytics and reporting tools.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Graphics & Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Writing & Translation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Video & Animation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Selling on Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Buying on Marketplace
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Press & News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Community Standards
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">© 2024 Creator Marketplace. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BrandDashboard

