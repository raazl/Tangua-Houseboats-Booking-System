import { Link } from 'react-router-dom';

/**
 * PackageCard component displays a single package (or boat, as it's now used for boats) with its details and a link to view packages.
 * @param {object} props - The component props.
 * @param {object} props.pkg - The package/boat data containing id, name, description, and imageUrl.
 */
const PackageCard = ({ pkg }) => {
    return (
        // Main container for the package/boat card
        <div className="border rounded-lg shadow-md overflow-hidden bg-tangua-bamboo-beige">
            {/* Image of the package/boat */}
            <img src={pkg.imageUrl} alt={pkg.name} className="w-full h-60 object-cover" />
            {/* Content area of the card */}
            <div className="p-4">
                {/* Name of the package/boat */}
                <h2 className="text-lg font-bold">{pkg.name}</h2>
                {/* Description of the package/boat */}
                <p className="text-sm text-gray-600">{pkg.description}</p>
                {/* Container for the action button */}
                <div className="mt-6 flex justify-end items-center">
                    {/* Link to view packages for this boat */}
                    <Link
                        to={`/packages/${pkg.id}`}
                        className="inline-block bg-tangua-lake-blue hover:bg-tangua-sunset-orange text-white font-bold py-2 px-4 rounded"
                    >
                        View Packages
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;  