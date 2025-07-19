/**
 * Defines packages available for different boat types.
 * Each key is a boat ID, and its value is an array of package objects.
 * @type {Object.<string, Array<Object>>}
 */
export const boatPackages = {
  // Packages available for 'Rajar Tori Elite' boat
  'Rajar Tori Elite': [
    {
      id: 1,
      name: 'Luxury Weekend',
      price: 4000,
      description: '1 nights, 2 days of luxury.'
    },
    {
      id: 2,
      name: 'Pure Relaxation',
      price: 7000,
      description: '2 nights, 3 days of pure relaxation.'
    },
  ],
  // Packages available for 'Ponkhiraj' boat
  'Ponkhiraj': [
    {
      id: 3,
      name: 'Luxury Weekend',
      price: 3500,
      description: '1 nights, 2 days of luxury.'
    },
    {
      id: 4,
      name: 'Pure Relaxation',
      price: 6000,
      description: '2 nights, 3 days of pure relaxation.'
    },
  ],
  // Packages available for 'Meghmollar-Majestic Stay at Tangua' boat
  'Meghmollar-Majestic Stay at Tangua': [
    {
      id: 1,
      name: 'Luxury Weekend',
      price: 4000,
      description: '1 nights, 2 days of luxury.'
    },
    {
      id: 5,
      name: 'Pure Relaxation',
      price: 7000,
      description: '2 nights, 3 days of pure relaxation.'
    },
  ],
};