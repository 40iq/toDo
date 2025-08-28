import type { FC } from "react";
import type { Task } from "../../models/Task";
import { useTasks } from "../../hooks/useTask";

type Props = {
  task: Task;
};

export const TaskItem: FC<Props> = ({ task }) => {
  const { finishTask, unfinishTask, deleteTask, editTask } = useTasks();

  return (
    <li className="flex justify-between p-2" key={task.id}>
      <input
        className={`${task.finished ? "line-through" : ""}`}
        type="text"
        defaultValue={task.title}
        onChange={() => {}}
        onBlur={(e) => {
          const newText = e.target.value;
          if (newText !== task.title) editTask(task.id, newText);
        }}
      />
      <button
        onClick={() => {
          if (task.finished) unfinishTask(task.id);
          else finishTask(task.id);
        }}
      >
        {task.finished ? "Unfinish" : "Finish"}
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
