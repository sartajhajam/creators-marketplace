import axios from 'axios';

/**
 * API Service
 * 
 * This service handles API requests to the backend.
 * It includes:
 * - Axios instance configuration
 * - Request/response interceptors
 * - Authentication header management
 * - Common API request methods
 */

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
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
    // Handle authentication errors
    if (error.response && error.response.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    
    // Handle other errors
    return Promise.reject(error);
  }
);

/**
 * Authentication API methods
 */
export const authAPI = {
  /**
   * Login with email and password
   * 
   * @param {Object} credentials - User credentials
   * @returns {Promise} - API response
   */
  login: (credentials) => api.post('/auth/login', credentials),
  
  /**
   * Register a new user
   * 
   * @param {Object} userData - User registration data
   * @returns {Promise} - API response
   */
  signup: (userData) => api.post('/auth/signup', userData),
  
  /**
   * Authenticate with OAuth provider
   * 
   * @param {string} provider - OAuth provider name
   * @returns {Promise} - API response
   */
  oauthLogin: (provider) => api.get(`/auth/${provider}`),
  
  /**
   * Verify email with token
   * 
   * @param {string} token - Verification token
   * @returns {Promise} - API response
   */
  verifyEmail: (token) => api.post('/auth/verify-email', { token }),
  
  /**
   * Request password reset
   * 
   * @param {string} email - User email
   * @returns {Promise} - API response
   */
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  
  /**
   * Reset password with token
   * 
   * @param {Object} data - Reset data (token, new password)
   * @returns {Promise} - API response
   */
  resetPassword: (data) => api.post('/auth/reset-password', data),
};

/**
 * User API methods
 */
export const userAPI = {
  /**
   * Get current user profile
   * 
   * @returns {Promise} - API response
   */
  getProfile: () => api.get('/users/profile'),
  
  /**
   * Update user profile
   * 
   * @param {Object} profileData - Updated profile data
   * @returns {Promise} - API response
   */
  updateProfile: (profileData) => api.put('/users/profile', profileData),
  
  /**
   * Get user portfolio
   * 
   * @returns {Promise} - API response
   */
  getPortfolio: () => api.get('/users/portfolio'),
  
  /**
   * Update user portfolio
   * 
   * @param {Object} portfolioData - Updated portfolio data
   * @returns {Promise} - API response
   */
  updatePortfolio: (portfolioData) => api.put('/users/portfolio', portfolioData),
};

/**
 * Creators API methods
 */
export const creatorsAPI = {
  /**
   * Get featured creators
   * 
   * @param {Object} params - Query parameters
   * @returns {Promise} - API response
   */
  getFeatured: (params) => api.get('/creators/featured', { params }),
  
  /**
   * Search creators
   * 
   * @param {Object} params - Search parameters
   * @returns {Promise} - API response
   */
  search: (params) => api.get('/creators/search', { params }),
  
  /**
   * Get creator by ID
   * 
   * @param {string} id - Creator ID
   * @returns {Promise} - API response
   */
  getById: (id) => api.get(`/creators/${id}`),
  
  /**
   * Get creator reviews
   * 
   * @param {string} id - Creator ID
   * @returns {Promise} - API response
   */
  getReviews: (id) => api.get(`/creators/${id}/reviews`),
};

export default api;