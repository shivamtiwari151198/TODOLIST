const express= require ("express");
const mongoose =require ("mongoose");
const todorouter=require("./Routers/todo");

const aap= express();
aap.use(express.json());

aap.use("/",todorouter);


const uri="mongodb+srv://shivam151198:shivam1998@cluster0.8dmbjpc.mongodb.net/order2023?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(uri,(err)=>{
  if (err){
    console.log(err);
  }
  aap.listen(3003,(err)=>{
    if (err){
      console.log(err);
    }
    console.log("Server Started");
  });
});

