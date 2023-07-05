import User from "../models/user.model.js";
import bcrypt from "bcrypt";
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

export const login = async (req, res, next) => {};

export const logout = async (req, res, next) => {};
