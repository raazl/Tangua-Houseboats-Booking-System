import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div className="text-center mt-10">Please log in to view your dashboard.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
      <p className="mb-2">Email: {user.email}</p>
      
    </div>
  );
};

export default Dashboard;