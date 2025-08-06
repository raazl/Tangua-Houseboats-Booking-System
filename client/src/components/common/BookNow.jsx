import { useState, useEffect } from "react";

const BookNow = ({ onClose, packageData }) => {
    // State to manage form data
    const [formData, setFormData] = useState({
        checkInDate: '',
        name: '',
        email: '',
        phone: '',
        numberOfGuests: 1,
        specialRequests: ''
    });

    // State to manage loading and submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [unavailableDates, setUnavailableDates] = useState([]);

    useEffect(() => {
        const fetchUnavailableDates = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/bookings/unavailable-dates');
                const data = await response.json();
                if (response.ok) {
                    setUnavailableDates(data.unavailableDates);
                } else {
                    console.error('Failed to fetch unavailable dates:', data.message);
                }
            } catch (error) {
                console.error('Network error fetching unavailable dates:', error);
            }
        };

        fetchUnavailableDates();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'checkInDate') {
            if (unavailableDates.includes(value)) {
                setMessage('This date is already booked. Please choose another.');
            } else {
                setMessage('');
            }
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            // Get the token from localStorage
            const token = localStorage.getItem('token') || sessionStorage.getItem('token');

            if (!token) {
                setMessage('Please log in to make a booking.');
                setIsSubmitting(false);
                return;
            }

            if (unavailableDates.includes(formData.checkInDate)) {
                setMessage('The selected check-in date is already booked. Please choose another.');
                setIsSubmitting(false);
                return;
            }

            // Prepare booking data to match backend controller
            const bookingData = {
                packageId: packageData?.id || packageData?._id,
                boatName: packageData?.boatName || packageData?.name || 'Houseboat',
                packageName: packageData?.name,
                checkInDate: formData.checkInDate,
                numberOfGuests: parseInt(formData.numberOfGuests),
                totalPrice: (packageData?.price || 0) * parseInt(formData.numberOfGuests),
                specialRequests: formData.specialRequests,
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            };

            console.log('Submitting booking:', bookingData);

            // Send booking data to backend
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(bookingData)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Booking confirmed successfully!');
                // Reset form
                setFormData({
                    checkInDate: '',
                    name: '',
                    email: '',
                    phone: '',
                    numberOfGuests: 1,
                    specialRequests: ''
                });
                // Close modal after 2 seconds
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                setMessage(result.message || 'Booking failed. Please try again.');
            }
        } catch (error) {
            console.error('Booking error:', error);
            setMessage('Network error. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
                <h2 className="text-xl font-bold mb-4">Book: {packageData?.name}</h2>

                {/* Display success/error message */}
                {message && (
                    <div className={`mb-4 p-2 rounded text-center ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {message}
                    </div>
                )}

                {/* Booking form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Input for check-in date */}
                    <input
                        type="date"
                        name="checkInDate"
                        className={`w-full p-2 border rounded ${unavailableDates.includes(formData.checkInDate) ? 'bg-red-100 border-red-500' : ''}`}
                        value={formData.checkInDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                    />

                    {/* Input for name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {/* Input for email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full p-2 border rounded"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    {/* Input for phone */}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full p-2 border rounded"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    {/* Input for number of guests */}
                    <input
                        type="number"
                        name="numberOfGuests"
                        placeholder="Number of Guests"
                        min="1"
                        max="20"
                        className="w-full p-2 border rounded"
                        value={formData.numberOfGuests}
                        onChange={handleChange}
                        required
                    />

                    {/* Text area for special requests */}
                    <textarea
                        name="specialRequests"
                        placeholder="Special Requests (Optional)"
                        rows="3"
                        className="w-full p-2 border rounded resize-none"
                        value={formData.specialRequests}
                        onChange={handleChange}
                    />

                    {/* Display package price */}
                    {packageData?.price && (
                        <div className="text-sm text-gray-600">
                            Price: ${packageData.price} total
                        </div>
                    )}

                    {/* Button to confirm the booking */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2 rounded text-white transition ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-tangua-green-DEFAULT hover:bg-tangua-green-dark'
                            }`}
                    >
                        {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                    </button>
                </form>

                {/* Button to close the modal */}
                <button
                    onClick={onClose}
                    className="mt-4 text-sm text-tangua-deep-green underline w-full text-center"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BookNow;