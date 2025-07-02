import Boats from '../components/sections/Boats';

/**
 * Packages component displays a list of all available boat packages.
 * It reuses the Boats component to show the fleet.
 */
const Packages = () => {
  return (
    <div>
      <Boats />
    </div>
  );
};

export default Packages;
