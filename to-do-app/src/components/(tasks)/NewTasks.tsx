import { useRef, type FC } from "react";
import { useTasks } from "../../hooks/useTask";

export const NewTasks: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { addTask } = useTasks();

  const handleAddTask = () => {
    const text = inputRef.current?.value;
    if (!text || !inputRef.current) return;
    addTask(text);
    inputRef.current.value = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleAddTask();
  };

  return (
    <section className="bg-white min-w-[80vw] p-2">
      <h2>New Task</h2>
      <div className="flex justify-between p-2">
        <input type="text" placeholder="Add new task..." ref={inputRef} onKeyDown={handleKeyDown} />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </section>
  );
};
