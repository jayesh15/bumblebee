import Task from '../models/task.model.js';
import User from '../models/user.model.js';
import createError from '../utils/createError.js';

export const addTask = async (req, res, next) => {
  try {
    const { title, description, assignedTo, deadline } = req.body;
    const createdBy = req.userId;

    const createdByUser = await User.findById(createdBy);
    if (createdByUser.role !== 'teacher') {
      return next(createError(403, 'Only teachers can assign tasks.'));
    }

    const newTask = new Task({
      title,
      description,
      assignedTo,
      deadline,
      createdBy,
    });

    await newTask.save();

    res.status(201).send('Task added successfully.');
  } catch (error) {
    next(error);
  }
};
