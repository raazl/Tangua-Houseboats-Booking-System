import { Link } from "react-router-dom";
import { useState } from "react";

/**
 * Navbar component provides navigation links and a mobile-responsive menu.
 */
const Navbar = () => {
    // State to manage the mobile menu's open/closed status
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Main navigation bar container, fixed at the top
        <nav className="bg-tangua-deep-green shadow p-3 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand logo/name, links to the home page */}
                <Link to="/" className="font-bold text-lg text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Tangua Houseboats</Link>
                {/* Desktop navigation links (hidden on mobile) */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Home</Link>
                    <Link to="/packages" className="text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Packages</Link>
                    <Link to="/blog" className="text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Blog</Link>
                    <Link to="/about" className="text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">About</Link>
                    <Link to="/login" className="text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Login</Link>
                </div>
                {/* Mobile menu button (hidden on desktop) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-tangua-bamboo-beige">
                        {/* SVG icon for menu toggle (hamburger/close icon) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile navigation links, conditionally rendered based on isOpen state */}
            {isOpen && (
                <div className="md:hidden mt-3">
                    <Link to="/" className="block py-2 text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Home</Link>
                    <Link to="/packages" className="block py-2 text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Packages</Link>
                    <Link to="/blog" className="block py-2 text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Blog</Link>
                    <Link to="/about" className="block py-2 text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">About</Link>
                    <Link to="/login" className="block py-2 text-base text-tangua-bamboo-beige hover:text-tangua-sunset-orange">Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;