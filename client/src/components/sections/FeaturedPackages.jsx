import React from "react";
import PackageCard from "../common/PackageCard";
import { boats } from "../../data/boats";

/**
 * FeaturedPackages component displays a list of featured packages using the PackageCard component.
 * It showcases a selection of boats as featured packages.
 */
const FeaturedPackages = () => (
    // Section for displaying featured packages
    <section className="py-12 bg-tangua-cloud-white">
        <div className="container mx-auto px-4">
            {/* Section title */}
            <h2 className="text-3xl font-bold text-center mb-8">From our Fleet</h2>
            {/* Grid layout for package cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {/* Map over the first 3 boats to display them as featured packages */}
                {boats.slice(0, 3).map((boat) => (
                    <PackageCard key={boat.id} pkg={boat} />
                ))}
            </div>
        </div>
    </section>
);

export default FeaturedPackages;