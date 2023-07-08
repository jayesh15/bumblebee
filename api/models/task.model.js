import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
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
    description: {
      type: String,
      required: true,
    },
    
    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
