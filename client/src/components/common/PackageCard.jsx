/**
 * PackageCard component displays a single package with its details and a "Book Now" button.
 * @param {object} props - The component props.
 * @param {object} props.pkg - The package data containing id, name, price, description, and image.
 * @param {function} props.onBookNow - The function to call when the "Book Now" button is clicked.
 */
const PackageCard = ({ pkg, onBookNow }) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden bg-tangua-bamboo-beige">
            <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold">{pkg.name}</h2>
                <p className="text-sm text-gray-600">{pkg.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-tangua-green-dark font-semibold">৳ {pkg.price}</span>
                    <button
                        onClick={onBookNow}
                        className="bg-tangua-green-DEFAULT text-white px-4 py-2 rounded hover:bg-tangua-green-dark transition"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;  