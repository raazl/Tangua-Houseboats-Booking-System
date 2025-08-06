
const Footer = () => {
    return (
        <footer className="bg-tangua-deep-green text-tangua-bamboo-beige py-6 mt-12">
            {/* Container for footer content, with responsive layout */}
            <div className="max-w-7xl mx-auto px-6 text-center md:flex md:justify-between md:items-center">
                {/* Copyright information */}
                <p className="text-sm">&copy; {new Date().getFullYear()} Tangua Houseboat Booking. All rights reserved.</p>
                {/* Navigation links */}
                <div className="space-x-4 mt-4 md:mt-0">
                    <a href="/" className="hover:text-tangua-sunset-orange">Home</a>
                    <a href="/packages" className="hover:text-tangua-sunset-orange">Packages</a>
                    <a href="/blog" className="hover:text-tangua-sunset-orange">Blog</a>
                    <a href="/about" className="hover:text-tangua-sunset-orange">About</a>
                    <a href="/contact" className="hover:text-tangua-sunset-orange">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  