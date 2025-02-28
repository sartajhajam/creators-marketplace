/**
 * Authentication Utility Functions
 * 
 * This file contains helper functions for authentication-related operations.
 * It includes:
 * - Token management
 * - User data parsing
 * - Authentication status checks
 */

/**
 * Set authentication token in localStorage
 * 
 * @param {string} token - JWT token
 */
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('auth_token', token);
  } else {
    localStorage.removeItem('auth_token');
  }
};

/**
 * Get authentication token from localStorage
 * 
 * @returns {string|null} - JWT token or null if not found
 */
export const getAuthToken = () => {
  return localStorage.getItem('auth_token');
};

/**
 * Remove authentication token from localStorage
 */
export const removeAuthToken = () => {
  localStorage.removeItem('auth_token');
};

/**
 * Check if user is authenticated
 * 
 * @returns {boolean} - True if authenticated, false otherwise
 */
export const isAuthenticated = () => {
  return !!getAuthToken();
};

/**
 * Format error message from API response
 * 
 * @param {Object} error - Error object from API
 * @returns {string} - Formatted error message
 */
export const formatAuthError = (error) => {
  if (error.response && error.response.data) {
    // Handle structured error response
    const { data } = error.response;
    
    if (data.message) {
      return data.message;
    }
    
    if (data.errors && Array.isArray(data.errors)) {
      return data.errors.map(err => err.message).join(', ');
    }
  }
  
  // Default error message
  return error.message || 'An unexpected error occurred';
};

/**
 * Parse JWT token without library
 * 
 * @param {string} token - JWT token
 * @returns {Object|null} - Decoded token payload or null if invalid
 */
export const parseJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error parsing JWT:', error);
    return null;
  }
};

/**
 * Check if token is expired
 * 
 * @param {string} token - JWT token
 * @returns {boolean} - True if expired, false otherwise
 */
export const isTokenExpired = (token) => {
  const decoded = parseJwt(token);
  
  if (!decoded || !decoded.exp) {
    return true;
  }
  
  // Compare expiration time with current time
  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};