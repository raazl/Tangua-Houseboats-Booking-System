import Package from '../models/Package.model.js';

export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPackage = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    res.json(pkg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// controllers/package.controller.js
export const createPackage = async (req, res) => {
  try {
    // package creation logic here
    const packageData = req.body;
    // Save to database
    const newPackage = await Package.create(packageData);
    res.status(201).json({ success: true, data: newPackage });
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: error.message });
  }
};
