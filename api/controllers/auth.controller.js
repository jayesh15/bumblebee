import User from "../models/user.model.js";
import Student from "../models/student.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import createError from "../utils/createError.js";
export const register = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.MONGO);
    
    const { role, username, email, password, firstname, surname, mothername, fathername, rollno, classAssigned } = req.body
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = User({
      username:username,
      email: email,
      role: role,
      password: hash,
    });

    if (role === "student") {
      const student = new Student({
        studentId: newUser._id,
        firstName: firstname,
        surname: surname,
        motherName: mothername,
        fatherName: fathername,
        rollNo: rollno,
        class: classAssigned
      });

      try {
        await student.save();
      } catch (error) {
        throw new Error("Error creating Student User");
      }
    }

    await newUser.save();

    const successMessage = role === "student"
      ? "Student Account created Successfully"
      : "Teacher Account created Successfully";
    res.status(201).send(successMessage);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.MONGO);
    const { username, password, role } = req.body;

    const user = await User.findOne({ username });
    if (!user) return next(createError(404, "User not found"));

    if (!role) return next(createError(400, "Role not specified"));

    const isCorrect = bcrypt.compareSync(password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong credentials"));

    if (user.role !== role)
      return next(createError(400, "Invalid role for this user"));

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_KEY
    );

    const { password: _, ...info } = user._doc;
    res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};
