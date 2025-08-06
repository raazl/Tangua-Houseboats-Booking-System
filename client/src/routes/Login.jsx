import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(formData.email, formData.password);
            navigate("/dashboard");
        } catch (error) {
            setError(
                error?.response?.data?.message ||
                error?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
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
                    <button type="submit" className="bg-[#3BAFDA] text-white py-2 px-4 rounded">Login</button>
                    {error && (
                        <div className="text-red-500 text-sm mt-2">{error}</div>
                    )}
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? <Link to="/register" className="text-tangua-lake-blue hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;