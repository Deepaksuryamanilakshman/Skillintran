import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import UserauthRoutes from "./routes/userauthRoutes.js";
import internshipRoutes from "./routes/internshipRoutes.js";
import infointernship from "./routes/intershipinfo.js";
// import taskRoutes from "./routes/taskRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";
// import certificateRoutes from "./routes/certificateRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());



app.use("/api", infointernship);

// Routes
app.use("/api/auth", UserauthRoutes);
app.use("/api/internships", internshipRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/payments", paymentRoutes);
// app.use("/api/certificates", certificateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
