import mongoose from "mongoose";

const { Schema } = mongoose;

const reportSchema = new Schema(
  {
    createdBy: {
      type: String,
      required: true,
    },
    
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    title: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      enum: ["A+", "A", "B+", "B", "C+", "C", "F"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Report", reportSchema);
