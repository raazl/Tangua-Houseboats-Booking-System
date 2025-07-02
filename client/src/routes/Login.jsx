import { Link } from "react-router-dom";

/**
 * Login component provides a user authentication form.
 * Users can enter their email/phone and password to log in.
 * It also includes a link to the registration page.
 */
const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form className="space-y-4">
                <input type="text" placeholder="Email or Phone Number" className="w-full p-2 border rounded" />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
                <button type="submit" className="bg-[#89d9ff] text-white py-2 px-4 rounded">Login</button>
            </form>
            <p className="mt-4 text-center">
                Don't have an account? <Link to="/register" className="text-tangua-lake-blue hover:underline">Sign Up</Link>
            </p>
        </div>
        </div>
    );
};

export default Login;  