import Boat from '../models/Boat.model.js';

export const getBoats = async (req, res) => {
  try {
    const boats = await Boat.find();
    res.json(boats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBoat = async (req, res) => {
  try {
    const boat = await Boat.findById(req.params.id);
    res.json(boat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
