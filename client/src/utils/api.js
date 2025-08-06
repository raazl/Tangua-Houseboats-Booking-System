
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const createBooking = (bookingData) => {
  console.log('Booking data being sent:', bookingData);
  return api.post('/bookings', bookingData);
};

export default api;
