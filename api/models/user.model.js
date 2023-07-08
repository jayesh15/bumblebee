import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["teacher", "student"],
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: function () {
        return this.role === 'student';
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
