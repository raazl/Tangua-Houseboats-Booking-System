import { Link } from "react-router-dom";

/**
 * Login component provides a user authentication form.
 * Users can enter their email/phone and password to log in.
 * It also includes a link to the registration page.
 */
const Login = () => {
    return (
        // Main container for the login form, centered on the screen
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            {/* Login form card */}
            <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
                {/* Login form title */}
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                {/* Login form */}
                <form className="space-y-4">
                    {/* Input field for email or phone number */}
                    <input type="text" placeholder="Email or Phone Number" className="w-full p-2 border rounded" />
                    {/* Input field for password */}
                    <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
                    {/* Login button */}
                    <button type="submit" className="bg-[#3BAFDA] text-white py-2 px-4 rounded">Login</button>
                </form>
                {/* Link to the registration page */}
                <p className="mt-4 text-center">
                    Don't have an account? <Link to="/register" className="text-tangua-lake-blue hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;  