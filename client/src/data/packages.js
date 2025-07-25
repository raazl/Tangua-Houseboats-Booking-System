/**
 * Defines a list of general packages available.
 * Each package object contains an ID, name, price, description, and an image URL.
 * @type {Array<Object>}
 */
export const packages = [
    {
        id: 1, // Unique identifier for the package
        name: "Romantic Getaway", // Name of the package
        price: 500, // Price of the package
        description: "A perfect trip for couples.", // Description of the package
        image: "/assets/packages/romantic.jpg", // Image URL for the package
    },
    {
        id: 2,
        name: "Family Fun",
        price: 800,
        description: "An adventure for the whole family.",
        image: "/assets/packages/family.jpg",
    },
    {
        id: 3,
        name: "Solo Traveler",
        price: 300,
        description: "Explore the serene waters on your own.",
        image: "/assets/packages/solo.jpg",
    },
];