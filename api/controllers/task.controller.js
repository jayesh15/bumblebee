import Task from "../models/task.model.js";
import Student from "../models/student.model.js";
import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const addTask = async (req, res, next) => {
  try {
    const { title, description, assignedTo, deadline } = req.body;
    const createdBy = req.userId;

    const createdByUser = await User.findById(createdBy);
    if (createdByUser.role !== "teacher") {
      return next(createError(403, "Only teachers can assign tasks."));
    }
    const isStudent = await User.findById(assignedTo);
    if (!isStudent && isStudent.role !== "student") {
      return next(createError(404, "Student not found"));
    }

    const newTask = new Task({
      title,
      description,
      assignedTo,
      deadline,
      createdBy,
    });

    await newTask.save();

    res.status(201).send("Task added successfully.");
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const role = req.role;
    const userId = req.userId;
    let tasks;

    if (role === "teacher") {
      tasks = await Task.find();
    } else if (role === "student") {
      tasks = await Task.find({ assignedTo: userId });
    }

    res.status(200).send(tasks);
  } catch (error) {
    next(error);
  }
};

export const doneTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return next(createError(404, "Task not found"));
    }
    task.isCompleted = true;
    task.isPending = false;
    await task.save();

    res.status(200).send("Task marked as completed");
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async(req, res, next)=>{
  try {
    const isteacher = await User.findById(req.userId)
    if(isteacher.role !== "teacher"){
      return next(createError(403,"Only Teacher can delete Tasks"))
    }
    const task = await Task.findById(req.params.taskId)
    if(!task){
      return next(createError(404,"Task not Found"))
    }
    await Task.deleteOne({ _id: req.params.taskId });
    res.status(200).send("Task has been Deleted");
    
  } catch (error) {
    next(error)
  }
}
