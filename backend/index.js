import express from "express";
import {createTodo,updateTodo} from "./types.js";
import {todo} from "./db.js";
import dotenv from "dotenv";
dotenv.config();



const app = express();
app.use(express.json());

app.post("/todo",async(req,res)=>{

    const createTodobody = req.body;
    const result = createTodo.safeParse(createTodobody);
    if(!result.success){
        res.status(401).json({
            message: "You sent invalid data",
        })
        return;
        
    }
    await todo.create ({
            title: createTodobody.title,
            description: createTodobody.description,
            completed: false,
        })
        res.json({
            message: "Todo created successfully", 
        })


})
app.get("/todo",async(req,res)=>{
    const todos = await todo.find({

    })
    res.json({
        message: "Todo fetched successfully",
        data: todos,
    })
     

})
app.put("/completed-todo",async(res,req)=>{

    const upadateTodobody = req.body;
    const result = updateTodo.safeParse(updateTodobody);
    if(!result.success){
        res.status(401).json({
            message: "You sent invalid data",
        })
        return; 
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        message:"Todo updated successfully",
    })

     
})

app.listen(3000);