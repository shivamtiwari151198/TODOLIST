const {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../Controllers/todo");
const express = require("express");

const router = express.Router();

router.post("/", createTodo);

router.get("/", getTodo);

router.put("/", updateTodo);

router.delete("/", deleteTodo);

module.exports = router;
