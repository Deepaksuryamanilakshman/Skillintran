import Internship from "../models/Users.js";

// Fetch all internships
export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: "Error fetching internships" });
  }
};

// Add new internship (admin use)
export const addInternship = async (req, res) => {
  try {
    const internship = new Internship(req.body);
    await internship.save();
    res.json({ message: "Internship added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add internship" });
  }
};