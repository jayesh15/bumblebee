import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rollNo: {
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
      required: true,
    },
    contactNumber1: {
      type: String,
      required: true,
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
