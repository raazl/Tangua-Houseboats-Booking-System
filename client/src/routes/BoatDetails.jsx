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

  const handleBooking = () => {
    if (!selectedPackage) {
      alert('Please select a package.');
      return;
    }
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }
    alert(`Booking successful!\nPackage: ${selectedPackage.name}\nDate: ${selectedDate}`);
  };

  return (
    <section className="py-12 bg-tangua-cloud-white">
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
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-4">Select Your Date</h3>
            <div className="bg-tangua-bamboo-beige p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
              <input 
                type="date" 
                className="w-full p-2 border rounded" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button 
            onClick={handleBooking}
            className="bg-tangua-green-dark text-white font-bold py-3 px-8 rounded-lg hover:bg-tangua-green-light transition-colors disabled:bg-gray-400"
            disabled={!selectedPackage || !selectedDate}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoatDetails;
