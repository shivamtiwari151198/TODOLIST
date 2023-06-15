const {createTodo,getTodo,updateTodo,deleteTodo}=require("../Controllers/todo");
const express =require ("express");


const router=express.Router();

//POST
router.post("/",createTodo);
  
  //GET
  router.get("/",getTodo);
  
  //PUT
  router.put("/",updateTodo);
  
  // DELETE
  router.delete("/",deleteTodo);

module.exports=router;
