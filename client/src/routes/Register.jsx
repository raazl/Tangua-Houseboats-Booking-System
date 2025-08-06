import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const { register } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            await register(formData.name, formData.email, formData.password);
            setSuccess("Registration successful! Redirecting...");
            setTimeout(() => navigate("/"), 1500);
        } catch (error) {
            setError(
                error?.response?.data?.message ||
                error?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit" className="bg-[#3BAFDA] text-white py-2 px-4 rounded">Register</button>
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                    {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <Link to="/login" className="text-tangua-lake-blue hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;