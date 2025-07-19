import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/HeroSection.png";

/**
 * HeroSection component displays a prominent hero area with a background image, title, and a call-to-action button.
 */
const HeroSection = () => {
  return (
    // Section for the hero area with background image and styling
    <section className="text-white bg-cover bg-center h-[80vh] flex items-center justify-center pt-12" style={{ backgroundImage: `url(${HeroImage})` }}>
      {/* Content container for text and button with a fade-up animation */}
      <div className="text-center bg-black/50 p-6 md:p-10 rounded-lg animate-fade-up">
        {/* Main title of the hero section */}
        <h1 className="text-4xl md:text-7xl font-bold">Tangua Houseboats</h1>
        {/* Subtitle or descriptive text */}
        <p className="mt-4 text-lg md:text-xl">Book your dream water getaway today!</p>
        {/* Call-to-action button linking to packages page */}
        <Link to="/packages" className="mt-8 inline-block bg-tangua-green-DEFAULT hover:bg-tangua-green-light text-white font-bold py-3 px-6 md:px-8 rounded-lg text-base md:text-lg">
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;