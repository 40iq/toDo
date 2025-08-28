import { useContext } from "react";
import { TasksContext } from "../store/TaskContext";

export const useTasks = () => {
  const tasksContext = useContext(TasksContext);
  if (!tasksContext) throw new Error("TaksContext is not defined");
  return tasksContext;
};
