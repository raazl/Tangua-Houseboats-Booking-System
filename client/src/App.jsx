import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import common components for navigation and footer
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Import route components
import Home from "./routes/Home";
import Packages from "./routes/Packages";
import Blog from "./routes/Blog";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import BoatDetails from "./routes/BoatDetails";
import Dashboard from "./routes/Dashboard";
import NotFound from "./routes/NotFound";

/**
 * Main application component that sets up routing and global layout.
 */
function App() {
  return (
    // BrowserRouter enables client-side routing
    <BrowserRouter>
      {/* Main application container with minimum height and flex column for layout */}
      <div className="min-h-screen flex flex-col bg-tangua-cloud-white">
        {/* Navigation bar, visible on all pages */}
        <Navbar />
        {/* Main content area, grows to fill available space */}
        <main className="flex-grow">
          {/* Routes component defines application routes */}
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            {/* Packages page route */}
            <Route path="/packages" element={<Packages />} />
            {/* Blog page route (general) */}
            <Route path="/blog" element={<Blog />} />
            {/* Blog page route with dynamic postId parameter for specific blog posts */}
            <Route path="/blog/:postId" element={<Blog />} />
            {/* About page route */}
            <Route path="/about" element={<About />} />
            {/* Login page route */}
            <Route path="/login" element={<Login />} />
            {/* Register page route */}
            <Route path="/register" element={<Register />} />
            {/* Boat details page route with dynamic boatId parameter */}
            <Route path="/packages/:boatId" element={<BoatDetails />} />
            {/* Dashboard page route */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Catch-all route for 404 Not Found pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* Footer, visible on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 