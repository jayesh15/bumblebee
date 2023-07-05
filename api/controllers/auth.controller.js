import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import createError from "../utils/createError.js";
export const register = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.MONGO);
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = User({
      ...req.body,
      password: hash,
    });
    await newUser.save();

    res.status(201).send("User has been Created");
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
    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};


export const logout = async (req, res) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true
      }).status(200).send("User has been logged out");
};
