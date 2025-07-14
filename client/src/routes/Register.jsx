import { Link } from "react-router-dom";
import { useState } from "react";

/**
 * Register component provides a user registration form.
 * Users can create a new account by providing their full name, email, phone number, and password.
 * It also includes a link to the login page for existing users.
 */
const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration Data:", { fullName, email, phoneNumber, password });
        // Here you would typically send this data to your backend API
        alert("Registration form submitted! Check console for data.");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="bg-[#3BAFDA] text-white py-2 px-4 rounded">Register</button>
            </form>
            <p className="mt-4 text-center">
                Already have an account? <Link to="/login" className="text-tangua-lake-blue hover:underline">Sign In</Link>
            </p>
        </div>
        </div>
    );
};

export default Register;