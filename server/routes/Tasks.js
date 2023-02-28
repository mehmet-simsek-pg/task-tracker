const express = require("express");
const router = express.Router();

const { getAllTasks } = require("../controllers/TaskController");

router.route("/").get(getAllTasks);

module.exports = router;
