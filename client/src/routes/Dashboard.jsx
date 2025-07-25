/**
 * Dashboard component serves as a placeholder for the user dashboard.
 * It currently displays a message indicating where user-specific information will appear.
 */
const Dashboard = () => {
    return (
        // Main container for the dashboard content
        <div className="p-6 max-w-4xl mx-auto">
            {/* Dashboard title */}
            <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
            {/* Placeholder text indicating future content */}
            <p>Your bookings and profile details will appear here.</p>
        </div>
    );
};

export default Dashboard;  