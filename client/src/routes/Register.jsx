import { Link } from "react-router-dom";
import { useState } from "react";

/**
 * Register component provides a user registration form.
 * Users can create a new account by providing their full name, email, phone number, and password.
 * It also includes a link to the login page for existing users.
 */
const Register = () => {
    // State variables to store form input values
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Log registration data to console (for demonstration purposes)
        console.log("Registration Data:", { fullName, email, phoneNumber, password });
        // In a real application, this data would be sent to a backend API for user registration
        alert("Registration form submitted! Check console for data.");
    };

    return (
        // Main container for the registration form, centered on the screen
        <div className="flex items-center justify-center min-h-screen">
            {/* Registration form card */}
            <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            {/* Registration form title */}
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            {/* Registration form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Full Name input field */}
                <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                {/* Email input field */}
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                {/* Phone Number input field */}
                <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                {/* Password input field */}
                <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {/* Register button */}
                    <button type="submit" className="bg-[#3BAFDA] text-white py-2 px-4 rounded">Register</button>
            </form>
            {/* Link to the login page */}
            <p className="mt-4 text-center">
                Already have an account? <Link to="/login" className="text-tangua-lake-blue hover:underline">Sign In</Link>
            </p>
        </div>
        </div>
    );
};

export default Register;