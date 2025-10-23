import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  joinedInternships: [
    {
      internshipId: { type: mongoose.Schema.Types.ObjectId, ref: "Internship" },
      paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
      status: { type: String, default: "Enrolled" },
      joinedAt: { type: Date, default: Date.now }
    }
  ]
});

export default mongoose.model("User", userSchema);
