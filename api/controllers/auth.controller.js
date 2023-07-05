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
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not Found"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong Credentials"));

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
  } catch (error) {
    next(err);
  }
};

export const logout = async (req, res, next) => {};
