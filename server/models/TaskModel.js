const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  id: Number,
  text: String,
  day: Date,
  isComplete: Boolean,
});

module.exports = mongoose.model("task", TaskSchema);
