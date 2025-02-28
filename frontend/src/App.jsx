import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCreators from './components/FeaturedCreators';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';

/**
 * App Component
 * 
 * This is the main component that sets up the routing and layout structure.
 * It includes:
 * - Router setup for navigation
 * - AuthProvider for authentication state management
 * - Routes for different pages
 * - Main layout components
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          {/* Main container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navbar Component */}
            <Navbar />
            
            <Routes>
              {/* Home Route */}
              <Route path="/" element={
                <>
                  {/* Hero Section */}
                  <Hero />
                  
                  {/* Featured Creators Section */}
                  <FeaturedCreators />
                  
                  {/* How It Works Section */}
                  <HowItWorks />
                  
                  {/* Creative Categories Section */}
                  <Categories />
                  
                  {/* Call to Action Section */}
                  <CallToAction />
                </>
              } />
              
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            
            </Routes>
            
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
