import express from 'express';
import { createBooking, getUserBookings, getAllBookings, getUnavailableDates } from '../controllers/booking.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';


const router = express.Router();

// Create a new booking (requires authentication)
router.post('/bookings', authenticateToken, createBooking);

// Get user's bookings (requires authentication)
router.get('/bookings/user', authenticateToken, getUserBookings);

// Get all bookings (admin route)
router.get('/bookings/all', authenticateToken, getAllBookings);

// Get unavailable dates (no authentication required)
router.get('/bookings/unavailable-dates', getUnavailableDates);

export default router;