import React from "react";
import PackageCard from "../common/PackageCard";
import { packages } from "../../data/packages";

/**
 * FeaturedPackages component displays a list of featured packages using the PackageCard component.
 */
const FeaturedPackages = () => (
    <section className="py-12 bg-tangua-cloud-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    </section>
);

export default FeaturedPackages;