import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  internshipId: { type: mongoose.Schema.Types.ObjectId, ref: "Internship" },
  issuedDate: { type: Date, default: Date.now },
  certificateUrl: String
});

export default mongoose.model("Certificate", certificateSchema);
