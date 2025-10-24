// routes/internship.js
import express from "express";
import Internship from "../models/Intership.js";

const router = express.Router();

// Create Internship
router.post("/create", async (req, res) => {
  try {
    const { title, description, duration, fee } = req.body;

    const internship = new Internship({
      title,
      description,
      duration,
      fee,
    });

    await internship.save();

    res.status(201).json({ message: "Internship created successfully", internship });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/retrive", async (req, res) => {
    try {
        const internships = await Internship.find();
        res.json(internships);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
