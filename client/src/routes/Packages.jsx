import Boats from '../components/sections/Boats';

/**
 * Packages component displays a list of all available boat packages.
 * It reuses the Boats component to show the fleet.
 */
const Packages = () => {
  return (
    // Main container for the Packages page
    <div>
      {/* Boats component: Displays the list of all available houseboats */}
      <Boats />
    </div>
  );
};

export default Packages;
