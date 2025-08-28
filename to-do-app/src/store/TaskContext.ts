import { createContext } from "react";
import type { FinishTask, UnfinishTask, EditTask, DeleteTask, AddTask } from "../models/Task";

export const TasksContext = createContext<{
  finishTask: FinishTask;
  unfinishTask: UnfinishTask;
  editTask: EditTask;
  deleteTask: DeleteTask;
  addTask: AddTask;
} | null>(null);
