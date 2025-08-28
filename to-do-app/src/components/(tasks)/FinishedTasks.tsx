import { type FC } from "react";
import { TaskItem } from "./TaskItem";
import type { Tasks } from "../../models/Task";

type Props = {
  tasks: Tasks;
};

export const FinishedTasks: FC<Props> = ({ tasks }) => {
  return (
    <section className="bg-white min-w-[80vw] p-2">
      <h2>Finished Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task}></TaskItem>
        ))}
      </ul>
    </section>
  );
};
