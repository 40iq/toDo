import { useState, type FC } from "react";
import { NewTasks } from "../(tasks)/NewTasks";
import { CurrentTasks } from "../(tasks)/CurrentTasks";
import { FinishedTasks } from "../(tasks)/FinishedTasks";
import type { Task, Tasks } from "../../models/Task";
import { TasksContext } from "../../store/TaskContext";

export const Main: FC = () => {
  const task1 = { id: "0", title: "Code things", finished: false };
  const task2 = { id: "1", title: "Smoke", finished: false };
  const task3 = { id: "2", title: "Poop", finished: true };

  const [tasks, setTasks] = useState<Tasks>([task1, task2, task3]);

  const finishTask = (taskId: string) => {
    setTasks((tasks) => {
      return tasks.map((task) => (task.id === taskId ? { ...task, finished: true } : task));
    });
  };

  const unfinishTask = (taskId: string) => {
    setTasks((tasks) => {
      return tasks.map((task) => (task.id === taskId ? { ...task, finished: false } : task));
    });
  };

  const editTask = (taskId: string, newText: string) => {
    setTasks((tasks) => {
      return tasks.map((task) => (task.id === taskId ? { ...task, title: newText } : task));
    });
  };

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: text,
      finished: false,
    };

    setTasks((tasks) => {
      return [...tasks, newTask];
    });
  };

  const deleteTask = (taskId: string) => {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== taskId);
    });
  };

  const currentTasks = tasks.filter((task) => task.finished === false);
  const finishedTasks = tasks.filter((task) => task.finished === true);

  return (
    <main className="bg-cyan-600 flex flex-col gap-3 h-full items-center justify-center">
      <TasksContext.Provider value={{ addTask, finishTask, unfinishTask, editTask, deleteTask }}>
        <NewTasks />
        <CurrentTasks tasks={currentTasks} />
        <FinishedTasks tasks={finishedTasks} />
      </TasksContext.Provider>
    </main>
  );
};
