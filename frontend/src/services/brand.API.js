import api from './api';

/**
 * Brand API Service
 * Handles all API requests related to brand functionality
 */

// Get brand dashboard stats
const getBrandStats = () => api.get('/brand/stats');

// Get brand recent activities
const getBrandActivities = (limit = 5) => api.get(`/brand/activities?limit=${limit}`);

// Get brand quick stats
const getBrandQuickStats = () => api.get('/brand/quick-stats');

// Get active offers
const getActiveOffers = (status = 'all') => api.get(`/brand/offers?status=${status}`);

// Get offer details
const getOfferDetails = (offerId) => api.get(`/brand/offers/${offerId}`);

// Create a new offer
const createOffer = (offerData) => api.post('/brand/offers', offerData);

// Update an offer
const updateOffer = (offerId, offerData) => api.put(`/brand/offers/${offerId}`, offerData);

// Cancel an offer
const cancelOffer = (offerId) => api.put(`/brand/offers/${offerId}/cancel`);

// Get recommended creators
const getRecommendedCreators = (limit = 3) => api.get(`/brand/recommended-creators?limit=${limit}`);

// Search creators
const searchCreators = (params) => api.get('/brand/search-creators', { params });

// Get creator details
const getCreatorDetails = (creatorId) => api.get(`/brand/creators/${creatorId}`);

// Get brand conversations
const getBrandConversations = () => api.get('/brand/conversations');

// Get conversation messages
const getConversationMessages = (conversationId) => api.get(`/brand/conversations/${conversationId}/messages`);

// Send a message
const sendMessage = (conversationId, content) => api.post(`/brand/conversations/${conversationId}/messages`, { content });

// Start a new conversation
const startConversation = (creatorId, initialMessage) => api.post('/brand/conversations', { 
  creatorId, 
  initialMessage 
});

export const brandAPI = {
  getBrandStats,
  getBrandActivities,
  getBrandQuickStats,
  getActiveOffers,
  getOfferDetails,
  createOffer,
  updateOffer,
  cancelOffer,
  getRecommendedCreators,
  searchCreators,
  getCreatorDetails,
  getBrandConversations,
  getConversationMessages,
  sendMessage,
  startConversation
};

export default brandAPI;