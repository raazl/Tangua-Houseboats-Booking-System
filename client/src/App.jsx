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
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-tangua-cloud-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/packages/:boatId" element={<BoatDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App; 