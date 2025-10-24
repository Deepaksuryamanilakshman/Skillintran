import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.warn(`[REGISTER] Email already exists: ${email}`);
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    console.log(`[REGISTER] ✅ New user created: ${user.email}`);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
    
  } catch (error) {
    console.error("[REGISTER] ❌ Error registering user:", error);
    res.status(500).json({ message: "Failed to register user", error: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      console.warn(`[LOGIN] ❌ User not found: ${email}`);
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.warn(`[LOGIN] ⚠️ Invalid password attempt for: ${email}`);
      return res.status(401).json({ message: "Invalid password" });
    }

    console.log(`[LOGIN] ✅ User logged in: ${email}`);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("[LOGIN] ❌ Error logging in user:", error);
    res.status(500).json({ message: "Failed to login user", error: error.message });
  }
};

// Logout user
export const logoutUser = async (req, res) => {
  try {
    console.log(`[LOGOUT] ✅ User logged out`);
    res.json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("[LOGOUT] ❌ Error logging out user:", error);
    res.status(500).json({ message: "Failed to logout", error: error.message });
  }
};
