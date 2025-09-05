import { useEffect, useState, type FC } from "react";
import { NewTasks } from "../(tasks)/NewTasks";
import { CurrentTasks } from "../(tasks)/CurrentTasks";
import { CompletedTasks } from "../(tasks)/CompletedTasks";
import type { Tasks } from "../../models/Task";
import { TasksContext } from "../../store/TaskContext";
import { todoApi } from "../../api/todoApi";

export const Main: FC = () => {
  // const task1 = { id: "0", text: "Code things", completed: false };
  // const task2 = { id: "1", text: "Smoke", completed: false };
  // const task3 = { id: "2", text: "Poop", completed: true };

  const [tasks, setTasks] = useState<Tasks>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await todoApi.getTasks();
      setTasks(tasksData);
      setError(null);
    } catch (err) {
      setError("Не удалось загрузить задачи");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (text: string) => {
    try {
      const newTask = await todoApi.createTask(text);
      setTasks((tasks) => {
        return [...tasks, newTask];
      });
    } catch (error) {
      setError("Не удалось создать задачу");
      console.error("Create error:", error);
    }
  };

  const toggleTask = async (id: number) => {
    try {
      const task = tasks.find((task) => task.id === id);
      if (!task) return;

      const updatedTask = await todoApi.updateTask(id, { text: task.text, completed: !task.completed });

      setTasks((prev) => {
        return prev.map((task) => (task.id === id ? updatedTask : task));
      });
    } catch (error) {
      setError("Не удалось обновить задачу");
      console.error("Update error:", error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await todoApi.deleteTask(id);
      setTasks((prev) => {
        return prev.filter((task) => task.id !== id);
      });
    } catch (error) {
      setError("Не удалось удалить задачу");
      console.error("Delete error:", error);
    }
  };

  const updateTask = async (id: number, text: string) => {
    try {
      await todoApi.updateTask(id, { text: text });
      setTasks((tasks) => {
        return tasks.map((task) => (task.id === id ? { ...task, text: text } : task));
      });
    } catch (error) {
      setError("Не удалось изменить задачу");
      console.error("Update error:", error);
    }
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  const currentTasks = tasks.filter((task) => task.completed === false);
  const finishedTasks = tasks.filter((task) => task.completed === true);

  return (
    <main className="bg-cyan-600 flex flex-col gap-3 h-full items-center justify-center">
      <TasksContext.Provider value={{ addTask, toggleTask, updateTask, deleteTask }}>
        <NewTasks />
        <CurrentTasks tasks={currentTasks} />
        <CompletedTasks tasks={finishedTasks} />
      </TasksContext.Provider>
    </main>
  );
};
