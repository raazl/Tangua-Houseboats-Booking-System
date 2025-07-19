import FeaturedBlog from "../components/sections/FeaturedBlog";
import FeaturedPackages from "../components/sections/FeaturedPackages";
import HeroSection from "../components/sections/HeroSection";

/**
 * Home component serves as the landing page of the application.
 * It aggregates and displays the HeroSection, FeaturedPackages, and FeaturedBlog components.
 */
const Home = () => {
  return (
    // Main container for the Home page
    <div>
      {/* Hero Section: Displays a prominent hero area with a background image, title, and call-to-action */}
      <HeroSection />
      {/* Separation line between sections */}
      <div className="my-8 border-b-2 border-gray-200"></div>
      {/* Featured Packages Section: Showcases a selection of featured packages/boats */}
      <FeaturedPackages />
      {/* Separation line between sections */}
      <div className="my-8 border-b-2 border-gray-200"></div>
      {/* Featured Blog Section: Displays a selection of recent blog posts */}
      <FeaturedBlog />
    </div>
  );
};

export default Home;