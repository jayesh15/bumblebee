import Task from "../models/task.model.js";
import Student from "../models/student.model.js";
import User from "../models/user.model.js";
import Report from '../models/report.model.js'
import createError from "../utils/createError.js";

export const addReport = async (req, res, next) => {
  try {
    const { title,grade, description, assignedTo } = req.body;
    const createdBy = req.userId;

    const createdByUser = await User.findById(createdBy);
    if (createdByUser.role !== "teacher") {
        return next(createError(403, "Only teachers can assign tasks."));
    }
    const isStudent = await User.findById(assignedTo);
    if (!isStudent) {
      return next(createError(404, "Student not found"));
    }

    const newReport = new Report({
      title,
      grade,
      description,
      assignedTo,
      createdBy,
    });

    await newReport.save();

    res.status(201).send(isStudent);
  } catch (error) {
    next(error);
  }
};

export const getReports = async (req, res, next) => {
  try {
    const role = req.role;
    const userId = req.userId;
    let reports;

    if (role === "teacher") {
      reports = await Report.find();
    } else if (role === "student") {
      reports = await Report.find({ assignedTo: userId });
    }

    res.status(200).send(reports);
  } catch (error) {
    next(error);
  }
};

