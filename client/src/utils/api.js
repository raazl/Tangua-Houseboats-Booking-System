
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const createBooking = (bookingData) => api.post('/bookings', bookingData);

export default api;
