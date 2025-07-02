import { Link } from "react-router-dom";

/**
 * NotFound component displays a 404 error page for routes that do not exist.
 * It provides a link to navigate back to the home page.
 */
const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <Link to="/" className="text-tangua-lake-blue underline">Go back Home</Link>
        </div>
    );
};

export default NotFound;    