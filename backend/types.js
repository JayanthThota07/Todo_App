import { z } from "zod";

const createTodo = z.object({
  title: z.string().min(3).max(80),
  description: z.string().min(3).max(100),
});

const updateTodo = z.object({
  id: z.string(),
});

export { createTodo, updateTodo };
