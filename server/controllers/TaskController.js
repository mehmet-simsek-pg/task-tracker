const task = require("../models/TaskModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-errors");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await task.find({});

  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const tasks = await task.create(req.body);
  res.status(201).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No Task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No Task with id : ${taskID}`, 404));
  }
  res.status(200).json({ Task });
});
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: TaskID } = req.params;

  const Task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!Task) {
    return next(createCustomError(`No Task with id : ${TaskID}`, 404));
  }

  res.status(200).json({ Task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
