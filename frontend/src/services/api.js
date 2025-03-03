import axios from 'axios';

/**
 * API Service
 * This service handles API requests to the backend.
 * It includes:
 * - Axios instance configuration
 * - Request/response interceptors
 * - Authentication header management
 * - Common API request methods
 */

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3005',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

/** Authentication API */
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (userData) => api.post('/auth/signup', userData),
  oauthLogin: (provider) => api.get(`/auth/${provider}`),
  verifyEmail: (token) => api.post('/auth/verify-email', { token }),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (data) => api.post('/auth/reset-password', data),
};

/** User API */
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (profileData) => api.put('/users/profile', profileData),
  getPortfolio: () => api.get('/users/portfolio'),
  updatePortfolio: (portfolioData) => api.put('/users/portfolio', portfolioData),
};

/** Dashboard API */
export const dashboardService = {
  getStats: () => api.get('/dashboard/stats'),
  getActivities: (limit = 5) => api.get(`/dashboard/activities?limit=${limit}`),
  getQuickStats: () => api.get('/dashboard/quick-stats'),
};

/** Orders API */
export const orderService = {
  getActiveOrders: () => api.get('/orders/active'),
  getOrderDetails: (orderId) => api.get(`/orders/${orderId}`),
  updateOrderStatus: (orderId, status) => api.put(`/orders/${orderId}/status`, { status }),
};

/** Gigs API */
export const gigService = {
  getUserGigs: () => api.get('/gigs/user'),
  getRecommendedGigs: (limit = 3) => api.get(`/gigs/recommended?limit=${limit}`),
  createGig: (gigData) => api.post('/gigs', gigData),
  updateGig: (gigId, gigData) => api.put(`/gigs/${gigId}`, gigData),
};

/** Messaging API */
export const messageService = {
  getConversations: () => api.get('/messages/conversations'),
  getMessages: (conversationId) => api.get(`/messages/conversations/${conversationId}`),
  sendMessage: (conversationId, content) => api.post(`/messages/conversations/${conversationId}`, { content }),
};

export default api;


