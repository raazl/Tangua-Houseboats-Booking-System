import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

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
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-tangua-cloud-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/blog" element={<Blog />} />
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
  );
}

export default App; 