const Todo = require("../Models/todo");

const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const result = await todo.save();
    res.send({
        status: "Success", 
        message: " create Successfully", 
        result, });
  } catch (error) {
    res.send({
    status: "error", 
    message: " createion failed", 
    error, });
  }
};

const getTodo = async (req, res) => {
    try {
        const todos=await Todo.find({});
        res.send({
            status: "Success", 
            message: " Get Successfully", 
            data:todos, });
      } catch (error) {
        res.send({
        status: "error", 
        message: " Get failed", 
        error, });
      }
};

const updateTodo = async (req, res) => {
    try {
        const id=req.body._id;

        const todo=await Todo.findById(id);

        todo.userName=req.body.userName;
        todo.mobile=req.body.mobile;

        await todo.save();
        res.send({
            status: "Success", 
            message: "Update Successfully", 
             });
      } catch (error) {
        res.send({
        status: "error", 
        message: "Update failed", 
        error, });
      }
};

const deleteTodo = async (req, res) => {
    try {
        const id=req.body._id;
        const todo = await Todo.findById(id);
        await todo.delete();
        res.send({
            status: "Success", 
            message: "Delete Successfully",
        });
      } catch (error) {
        res.send({
        status: "error", 
        message: "Delete failed", 
        error, });
      }
};
module.exports = { createTodo, getTodo, updateTodo, deleteTodo };
