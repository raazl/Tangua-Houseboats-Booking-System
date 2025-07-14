import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { boatPackages } from '../data/boatPackages';

/**
 * BoatDetails component displays the packages available for a specific boat,
 * allows users to select a package and a date, and book their trip.
 */
const BoatDetails = () => {
  const { boatId } = useParams();
  const packages = boatPackages[boatId] || [];

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(1);

  const handleBooking = () => {
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
    alert(`Booking successful!
Package: ${selectedPackage.name}
Date: ${selectedDate}
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Guests: ${guests}`);
  };

  return (
    <section className="py-20 bg-tangua-cloud-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Packages for {boatId.replace(/-/g, ' ').toUpperCase()}</h2>
        <p className="text-center text-gray-600 mb-8">First, choose your desired package.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.length > 0 ? (
            packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-tangua-bamboo-beige p-6 rounded-lg shadow-lg cursor-pointer transition-all ${selectedPackage?.id === pkg.id ? 'ring-2 ring-tangua-green-dark' : 'hover:shadow-xl'}`}
                onClick={() => setSelectedPackage(pkg)}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-700 mb-4">{pkg.description}</p>
                <p className="text-xl font-bold text-tangua-green-light">Tk{pkg.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-2">No packages found for this boat.</p>
          )}
        </div>

        {selectedPackage && (
          <div className="mt-12 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-center mb-4">Enter Your Details</h3>
            <div className="bg-tangua-bamboo-beige p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input type="text" id="fullName" className="w-full p-2 border rounded" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full p-2 border rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Select Date</label>
                  <input type="date" id="date" className="w-full p-2 border rounded" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                </div>
                <div className="mb-4">
                  <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">Number of Guests</label>
                  <input type="number" id="guests" min="1" className="w-full p-2 border rounded" value={guests} onChange={(e) => setGuests(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={handleBooking}
            className="bg-tangua-green-dark text-white font-bold py-3 px-8 rounded-lg hover:bg-tangua-green-light transition-colors disabled:bg-gray-400"
            disabled={!selectedPackage || !selectedDate || !fullName || !email || !phone}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoatDetails;
