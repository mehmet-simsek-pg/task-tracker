const task = require("../models/TaskModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-errors");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await task.find({});

  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const _task = await task.create(req.body);
  res.status(201).json({ _task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const _task = await task.findOne({ id: taskID });
  if (!_task) {
    return next(createCustomError(`No Task with id : ${id}`, 404));
  }

  res.status(200).json({ _task });
});
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const _task = await task.findOneAndDelete({ id: taskID });
  if (!_task) {
    return next(createCustomError(`No Task with id : ${taskID}`, 404));
  }
  res.status(200).json({ _task });
});
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const _task = await task.findOneAndUpdate({ id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!_task) {
    return next(createCustomError(`No Task with id : ${taskID}`, 404));
  }

  res.status(200).json({ _task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
