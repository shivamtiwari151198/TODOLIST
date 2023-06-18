const express= require ("express");
const mongoose =require ("mongoose");
const todorouter=require("./Routers/todo");
const cors=require("cors");

const app= express();
app.use(cors());
app.use(express.json());
// var cors = require('cors')


app.use("/",todorouter);


const uri="mongodb+srv://shivam151198:shivam1998@cluster0.8dmbjpc.mongodb.net/order2023?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(uri,(err)=>{
  if (err){
    console.log(err);
  }
  app.listen(3003,(err)=>{
    if (err){
      console.log(err);
    }
    console.log("Server Started");
  });
});

