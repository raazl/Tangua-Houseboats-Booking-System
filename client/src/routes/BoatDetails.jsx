import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { boatPackages } from '../data/boatPackages';

/**
 * BoatDetails component displays the packages available for a specific boat.
 * It retrieves the boat ID from the URL parameters and fetches relevant package data.
 */
const BoatDetails = () => {
  const { boatId } = useParams();
  const packages = boatPackages[boatId] || [];
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <section className="py-12 bg-tangua-cloud-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Packages for {boatId.replace(/-/g, ' ').toUpperCase()}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.length > 0 ? (
            packages.map((pkg) => (
              <div key={pkg.id} className="bg-tangua-bamboo-beige p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-700 mb-4">{pkg.description}</p>
                <p className="text-xl font-bold text-tangua-green-light">Tk{pkg.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-2">No packages found for this boat.</p>
          )}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-4">Select Your Date</h3>
          <div className="bg-tangua-bamboo-beige p-6 rounded-lg shadow-lg text-center">
            <input 
              type="date" 
              className="w-full p-2 border rounded" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoatDetails;
