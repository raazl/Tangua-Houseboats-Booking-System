import { Link } from 'react-router-dom';
import { boats } from '../../data/boats';

/**
 * Boats component displays a list of available houseboats.
 * Each houseboat card includes an image, name, description, and a link to view its packages.
 */
const Boats = () => {
  return (
    //displaying the fleet of houseboats
    <section className="py-20 bg-tangua-cloud-white">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Fleet</h2>
        {/* Grid layout for boat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the boats array to display each boat */}
          {boats.map((boat) => (
            <div key={boat.id} className="bg-tangua-bamboo-beige rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Boat image */}
              <img src={boat.imageUrl} alt={boat.name} className="w-full h-64 object-cover" />
              {/* Boat details */}
              <div className="p-6">
                {/* Boat name */}
                <h3 className="text-2xl font-bold mb-2 text-tangua-charcoal-grey">{boat.name}</h3>
                {/* Boat description */}
                <p className="text-tangua-deep-green mb-4">{boat.description}</p>
                {/* Link to view packages for the specific boat */}
                <Link
                  to={`/packages/${boat.id}`}
                  className="inline-block bg-tangua-lake-blue hover:bg-tangua-sunset-orange text-white font-bold py-2 px-4 rounded"
                >
                  View Packages
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boats;
