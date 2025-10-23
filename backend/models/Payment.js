import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  internshipId: { type: mongoose.Schema.Types.ObjectId, ref: "Internship" },
  razorpayPaymentId: String,
  amount: Number,
  status: { type: String, enum: ["Success", "Failed"], default: "Success" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Payment", paymentSchema);
