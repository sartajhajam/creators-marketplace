import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

/**
 * Authentication Context
 * 
 * This context provides authentication state and methods throughout the application.
 * It includes:
 * - User state management
 * - Login/Signup functionality
 * - Token handling and storage
 * - Authentication status checks
 */

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // State for user and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing token on mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('auth_token');
      
      if (token) {
        try {
          // Verify and decode the token
          const decoded = jwtDecode(token);
          
          // Check if token is expired
          const currentTime = Date.now() / 1000;
          if (decoded.exp && decoded.exp < currentTime) {
            // Token expired, log out
            logout();
            return;
          }
          
          // Set user from token data
          setUser(decoded);
        } catch (error) {
          console.error('Invalid token:', error);
          logout();
        }
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  /**
   * Login function
   * 
   * Authenticates a user with email and password
   * Stores the JWT token and updates user state
   * 
   * @param {Object} credentials - User credentials (email, password)
   * @returns {Promise} - Authentication result
   */
  const login = async (credentials) => {
    try {
      // Example API call to backend
      const response = await fetch('http://localhost:3005/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Store token in localStorage
      localStorage.setItem('auth_token', data.token);
      
      // Decode and set user
      const decoded = jwtDecode(data.token);
      setUser(decoded);
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.message || 'An error occurred during login' 
      };
    }
  };

  /**
   * Signup function
   * 
   * Registers a new user with the provided information
   * 
   * @param {Object} userData - User registration data
   * @returns {Promise} - Registration result
   */
  const signup = async (userData) => {
    try {
      // Example API call to backend
      const response = await fetch('http://localhost:3005/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }
      
      // If signup automatically logs in the user
      if (data.token) {
        localStorage.setItem('auth_token', data.token);
        const decoded = jwtDecode(data.token);
        setUser(decoded);
      }
      
      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      return { 
        success: false, 
        error: error.message || 'An error occurred during signup' 
      };
    }
  };

  /**
   * OAuth login function
   * 
   * Handles authentication with OAuth providers (Google, Facebook)
   * 
   * @param {string} provider - OAuth provider name
   * @returns {Promise} - OAuth authentication result
   */
  const oauthLogin = async (provider) => {
    try {
      // In a real implementation, this would redirect to the OAuth provider
      // and handle the callback with a token exchange
      
      // For demonstration purposes, we'll simulate a successful OAuth login
      const response = await fetch(`http://localhost:3005/api/auth/${provider}`, {
        method: 'GET',
        credentials: 'include', // Important for OAuth flows
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `${provider} login failed`);
      }
      
      // Store token and set user
      localStorage.setItem('auth_token', data.token);
      const decoded = jwtDecode(data.token);
      setUser(decoded);
      
      return { success: true };
    } catch (error) {
      console.error(`${provider} login error:`, error);
      return { 
        success: false, 
        error: error.message || `An error occurred during ${provider} login` 
      };
    }
  };

  /**
   * Logout function
   * 
   * Removes the user's authentication token and clears user state
   */
  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  /**
   * Get authentication token
   * 
   * Retrieves the current JWT token for API requests
   * 
   * @returns {string|null} - JWT token or null if not authenticated
   */
  const getToken = () => {
    return localStorage.getItem('auth_token');
  };

  // Context value with auth state and functions
  const contextValue = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    signup,
    oauthLogin,
    logout,
    getToken
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};