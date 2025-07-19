/** 
 * BookNow component displays a modal for booking a package.
 * It includes a form for user details and a confirmation button.
 * @param {object} props - The component props.
 * @param {function} props.onClose - Function to call when the modal needs to be closed.
 * @param {object} props.packageData - Data of the package being booked, typically includes `name`.
 */
import { useState } from "react";

const BookNow = ({ onClose, packageData }) => {
    // State to manage the selected date for booking
    const [selectedDate, setSelectedDate] = useState('');
    return (
        // Overlay for the modal, covering the entire screen with a semi-transparent background
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            {/* Modal content container */}
            <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
                {/* Booking title, displaying the package name */}
                <h2 className="text-xl font-bold mb-4">Book: {packageData?.name}</h2>
                {/* Booking form */}
                <form className="space-y-3">
                    {/* Input for user's name */}
                    <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                    {/* Input for user's email */}
                    <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                    {/* Input for selecting the booking date */}
                    <input 
                        type="date" 
                        className="w-full p-2 border rounded" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    {/* Button to confirm the booking */}
                    <button type="submit" className="bg-tangua-green-DEFAULT text-white px-4 py-2 rounded hover:bg-tangua-green-dark transition">
                        Confirm Booking
                    </button>
                </form>
                {/* Button to close the modal */}
                <button onClick={onClose} className="mt-4 text-sm text-tangua-deep-green underline">Close</button>
            </div>
        </div>
    );
};

export default BookNow;      