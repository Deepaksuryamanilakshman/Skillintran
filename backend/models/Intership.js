import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  fee: Number,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Internship", internshipSchema);
