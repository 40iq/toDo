import type { FC } from "react";
import type { Task } from "../../models/Task";
import { useTasks } from "../../hooks/useTask";

type Props = {
  task: Task;
};

export const TaskItem: FC<Props> = ({ task }) => {
  const { toggleTask, deleteTask, updateTask } = useTasks();

  return (
    <li className="flex justify-between p-2" key={task.id}>
      <input
        className={`${task.completed ? "line-through" : ""}`}
        type="text"
        defaultValue={task.text}
        onChange={() => {}}
        onBlur={(e) => {
          const newText = e.target.value;
          if (newText !== task.text) updateTask(task.id, newText);
        }}
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
