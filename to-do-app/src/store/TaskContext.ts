import { createContext } from "react";
import type { UpdateTask, DeleteTask, AddTask, ToggleTask } from "../models/Task";

export const TasksContext = createContext<{
  toggleTask: ToggleTask;
  updateTask: UpdateTask;
  deleteTask: DeleteTask;
  addTask: AddTask;
} | null>(null);
