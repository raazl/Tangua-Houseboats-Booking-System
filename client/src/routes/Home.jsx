import FeaturedBlog from "../components/sections/FeaturedBlog";
import Boats from "../components/sections/Boats";
import HeroSection from "../components/sections/HeroSection";

/**
 * Home component serves as the landing page of the application.
 * It aggregates and displays the HeroSection, Boats, and FeaturedBlog components.
 */
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Boats />
      <div className="my-8 border-b-2 border-gray-200"></div> {/* Separation line */}
      <FeaturedBlog />
    </div>
  );
};

export default Home;