import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: false,
    },
    class: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: false,
    },
    motherName: {
      type: String,
      required: false,
    },
    fatherName: {
      type: String,
      required: false,
    },
    surname: {
      type: String,
      required: false,
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

export default mongoose.model('Student', studentSchema);
