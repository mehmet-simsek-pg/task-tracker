const express = require("express");
const router = express.Router();

const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");

router.route("/").post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
