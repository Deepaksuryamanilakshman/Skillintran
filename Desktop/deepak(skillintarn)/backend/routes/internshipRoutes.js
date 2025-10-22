import express from "express";
import { getAllInternships, addInternship } from "../controllers/internshipController.js";
const router = express.Router();

router.get("/", getAllInternships);
router.post("/", addInternship);

export default router;
