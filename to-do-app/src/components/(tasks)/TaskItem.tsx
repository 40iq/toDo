import { useRef, type FC } from "react";
import type { Task } from "../../models/Task";
import { useTasks } from "../../hooks/useTask";

type Props = {
  task: Task;
};

export const TaskItem: FC<Props> = ({ task }) => {
  const { toggleTask, deleteTask, updateTask } = useTasks();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || !inputRef.current) return;
    inputRef.current.blur();
  };

  const handleUpdateTask = async () => {
    const text = inputRef.current?.value.trim();
    if (!inputRef.current) return;
    if (!text || text === task.text) {
      inputRef.current.value = task.text;
      return;
    }
    updateTask(task.id, text);
  };

  return (
    <li className="flex justify-between p-2" key={task.id}>
      <input
        ref={inputRef}
        className={`${task.completed ? "line-through" : ""}`}
        type="text"
        defaultValue={task.text}
        onChange={() => {}}
        onKeyDown={handleKeyDown}
        onBlur={handleUpdateTask}
      />
      <button
        onClick={() => {
          toggleTask(task.id);
        }}
      >
        {task.completed ? "Unfinish" : "Finish"}
      </button>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        X
      </button>
    </li>
  );
};
