import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rollNo: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    contactNumber1: {
      type: String,
      required: false,
    },
    contactNumber2: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Student", studentSchema);
