import Booking from "../models/Booking.model.js";

export const createBooking = async (req, res) => {
    const { packageId, boatName, packageName, checkInDate, numberOfGuests, totalPrice, specialRequests, name, email, phone } = req.body;

    console.log('Received booking request body:', req.body);
    console.log('req.user:', req.user);

    try {
        // Validate required fields
        if (!packageId || !boatName || !packageName || !checkInDate || !numberOfGuests || !totalPrice || !name || !email || !phone) {
            return res.status(400).json({
                message: "Missing required fields",
                required: ["packageId", "boatName", "packageName", "checkInDate", "numberOfGuests", "totalPrice", "name", "email", "phone"]
            });
        }

        // Validate dates
        const checkIn = new Date(checkInDate);

        if (checkIn < new Date()) {
            return res.status(400).json({ message: "Check-in date cannot be in the past" });
        }

        console.log("Creating booking for user:", req.user.userId);
        console.log("Booking data:", req.body);

        const booking = await Booking.create({
            user: req.user.userId,
            package: packageId,
            boatName,
            packageName,
            checkInDate: checkIn,
            numberOfGuests: parseInt(numberOfGuests),
            totalPrice: parseFloat(totalPrice),
            specialRequests: specialRequests || '',
            name,
            email,
            phone
        });

        console.log("Booking created successfully:", booking);

        res.status(201).json({
            message: "Booking successful!",
            booking: booking
        });
    } catch (err) {
        console.error("Booking creation error:", err);
        res.status(500).json({
            message: "Booking failed",
            error: err.message
        });
    }
};

export const getAllBookings = async (req, res) => {
    try {
       
        const bookings = await Booking.find().populate('user').populate('package');

        res.status(200).json({
            message: "All bookings retrieved successfully",
            bookings
        });
    } catch (err) {
        console.error("Error fetching all bookings:", err);
        res.status(500).json({
            message: "Failed to retrieve bookings",
            error: err.message
        });
    }
};

export const getUserBookings = async (req, res) => {
    try {
        const userId = req.user.userId;

        const bookings = await Booking.find({ user: userId }).populate('package');

        res.status(200).json({
            message: "User bookings retrieved successfully",
            bookings
        });
    } catch (err) {
        console.error("Error fetching user bookings:", err);
        res.status(500).json({
            message: "Failed to retrieve user bookings",
            error: err.message
        });
    }
};

export const getUnavailableDates = async (req, res) => {
    try {
        const bookings = await Booking.find({}, 'checkInDate'); // Only fetch checkInDate
        const unavailableDates = bookings.map(booking => booking.checkInDate.toISOString().split('T')[0]);
        res.status(200).json({ unavailableDates });
    } catch (err) {
        console.error("Error fetching unavailable dates:", err);
        res.status(500).json({ message: "Failed to retrieve unavailable dates", error: err.message });
    }
};
