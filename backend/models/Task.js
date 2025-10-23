import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  internshipId: { type: mongoose.Schema.Types.ObjectId, ref: "Internship" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  submissionLink: String,
  status: { type: String, enum: ["Pending", "Submitted", "Approved"], default: "Pending" },
  submittedAt: Date
});

export default mongoose.model("Task", taskSchema);
