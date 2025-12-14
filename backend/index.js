import express from "express";
import { createTodo, updateTodo } from "./types.js";
import { Todo } from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// CREATE TODO
app.post("/todo", async (req, res) => {
  const createTodobody = req.body;
  const result = createTodo.safeParse(createTodobody);

  if (!result.success) {
    return res.status(401).json({
      message: "You sent invalid data",
    });
  }

  await Todo.create({
    title: createTodobody.title,
    description: createTodobody.description,
    completed: false,
  });

  res.json({
    message: "Todo created successfully",
  });
});

// GET TODOS
app.get("/todo", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    message: "Todo fetched successfully",
    data: todos,
  });
});

// UPDATE TODO
app.put("/completed-todo", async (req, res) => {
  const updateTodobody = req.body;
  const result = updateTodo.safeParse(updateTodobody);

  if (!result.success) {
    return res.status(401).json({
      message: "You sent invalid data",
    });
  }

  await Todo.updateOne(
    // here you have to give you updated "id": "FAHFIGH32YR8Y249Y39Y9",optional "completed": true
    { _id: req.body.id },
    { completed: true }
  );

  res.json({
    message: "Todo updated successfully",
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
