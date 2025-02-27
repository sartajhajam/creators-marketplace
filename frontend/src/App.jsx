import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Hero Section */}
        {/* <Hero /> */}
        
        {/* Featured Creators Section */}
        {/* <FeaturedCreators /> */}
        
        {/* How It Works Section */}
        {/* <HowItWorks /> */}
        
        {/* Creative Categories Section */}
        {/* <Categories /> */}
        
        {/* Call to Action Section */}
        {/* <CallToAction /> */}
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;