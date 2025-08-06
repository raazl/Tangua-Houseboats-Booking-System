import FeaturedBlog from "../components/sections/FeaturedBlog";
import FeaturedPackages from "../components/sections/FeaturedPackages";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
  return (
    // Main container for the Home page
    <div>
      
      <HeroSection />
      
      <div className="my-8 border-b-2 border-gray-200"></div>
      
      <FeaturedPackages />
      {/* Separation line between sections */}
      <div className="my-8 border-b-2 border-gray-200"></div>
      
      <FeaturedBlog />
    </div>
  );
};

export default Home;