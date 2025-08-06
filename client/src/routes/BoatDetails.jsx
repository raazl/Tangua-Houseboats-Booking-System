import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { boatPackages } from '../data/boatPackages';
import { createBooking } from '../utils/api';
import AuthContext from '../contexts/AuthContext';

/**
 * BoatDetails component displays the packages available for a specific boat,
 * allows users to select a package and a date, and book their trip.
 */
const BoatDetails = () => {
  // Get the boatId from the URL parameters
  const { boatId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // Retrieve packages for the specific boat, or an empty array if none found
  const packages = boatPackages[boatId] || [];

  // State variables for managing booking form data
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handler for the booking submission
  const handleBooking = async () => {
    if (!user) {
      setError('You must be logged in to book a package.');
      return;
    }

    // Basic validation for form fields
    if (!selectedPackage) {
      setError('Please select a package.');
      return;
    }
    if (!checkInDate) {
      setError('Please select a check-in date.');
      return;
    }
    if (!name || !email || !phone) {
        setError('Please fill out all fields.');
        return;
    }

    const bookingData = {
        packageId: selectedPackage.id,
        boatName: boatId.replace(/-/g, ' ').toUpperCase(),
        packageName: selectedPackage.name,
        checkInDate,
        numberOfGuests: guests,
        totalPrice: selectedPackage.price * guests,
        name,
        email,
        phone
    };

    try {
      console.log('Submitting booking with data:', bookingData);
      await createBooking(bookingData);
      setSuccess('Booking successful!');
      setError('');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    // Main section for boat details and booking
    <section className="py-20 bg-tangua-cloud-white">
      <div className="container mx-auto">
        {/* Title displaying the boat name */}
        <h2 className="text-3xl font-bold text-center mb-4">Packages for {boatId.replace(/-/g, ' ').toUpperCase()}</h2>
        {/* Instruction for the user */}
        <p className="text-center text-gray-600 mb-8">First, choose your desired package.</p>

        {/* Grid for displaying available packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.length > 0 ? (
            // Map through packages and render each as a clickable card
            packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-tangua-bamboo-beige p-6 rounded-lg shadow-lg cursor-pointer transition-all ${selectedPackage?.id === pkg.id ? 'ring-2 ring-tangua-green-dark' : 'hover:shadow-xl'}`}
                onClick={() => setSelectedPackage(pkg)} // Set selected package on click
              >
                {/* Package name */}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                {/* Package description */}
                <p className="text-gray-700 mb-4">{pkg.description}</p>
                {/* Package price */}
                <p className="text-xl font-bold text-tangua-green-light">Tk{pkg.price}</p>
              </div>
            ))
          ) : (
            // Message if no packages are found for the boat
            <p className="text-center col-span-2">No packages found for this boat.</p>
          )}
        </div>

        {/* Booking details form, shown only if a package is selected */}
        {selectedPackage && (
          <div className="mt-12 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-center mb-4">Enter Your Details</h3>
            <div className="bg-tangua-bamboo-beige p-6 rounded-lg shadow-lg">
              {/* Date and Guests input in a grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Select Date input */}
                <div className="mb-4">
                  <label htmlFor="checkInDate" className="block text-gray-700 font-bold mb-2">Check-in Date</label>
                  <input type="date" id="checkInDate" className="w-full p-2 border rounded" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                </div>
                {/* Name input */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                {/* Email input */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {/* Phone input */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full p-2 border rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                {/* Number of Guests input */}
                <div className="mb-4">
                  <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">Number of Guests</label>
                  <input type="number" id="guests" min="1" className="w-full p-2 border rounded" value={guests} onChange={(e) => setGuests(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        )}

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}

        {/* Book Now button */}
        <div className="text-center mt-12">
          <button
            onClick={handleBooking}
            className="bg-tangua-green-dark text-white font-bold py-3 px-8 rounded-lg hover:bg-tangua-green-light transition-colors disabled:bg-gray-400"
            disabled={!selectedPackage || !checkInDate || !name || !email || !phone} // Button disabled until all required fields are filled
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoatDetails;
