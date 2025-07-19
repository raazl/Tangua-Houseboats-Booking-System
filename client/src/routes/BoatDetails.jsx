import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { boatPackages } from '../data/boatPackages';

/**
 * BoatDetails component displays the packages available for a specific boat,
 * allows users to select a package and a date, and book their trip.
 */
const BoatDetails = () => {
  // Get the boatId from the URL parameters
  const { boatId } = useParams();
  // Retrieve packages for the specific boat, or an empty array if none found
  const packages = boatPackages[boatId] || [];

  // State variables for managing booking form data
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(1);

  // Handler for the booking submission
  const handleBooking = () => {
    // Basic validation for form fields
    if (!selectedPackage) {
      alert('Please select a package.');
      return;
    }
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }
    if (!fullName || !email || !phone) {
      alert('Please fill out all booking details.');
      return;
    }
    // Display booking confirmation (in a real app, this would send data to a backend)
    alert(`Booking successful!\nPackage: ${selectedPackage.name}\nDate: ${selectedDate}\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nGuests: ${guests}`);
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
              {/* Full Name input */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input type="text" id="fullName" className="w-full p-2 border rounded" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              {/* Email input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              {/* Phone input */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full p-2 border rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              {/* Date and Guests input in a grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Select Date input */}
                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Select Date</label>
                  <input type="date" id="date" className="w-full p-2 border rounded" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
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

        {/* Book Now button */}
        <div className="text-center mt-12">
          <button
            onClick={handleBooking}
            className="bg-tangua-green-dark text-white font-bold py-3 px-8 rounded-lg hover:bg-tangua-green-light transition-colors disabled:bg-gray-400"
            disabled={!selectedPackage || !selectedDate || !fullName || !email || !phone} // Button disabled until all required fields are filled
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoatDetails;
