export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type Tasks = Task[];

export type AddTask = (text: string) => void;

export type DeleteTask = (id: number) => void;

export type UpdateTask = (id: number, text: string) => void;

export type ToggleTask = (id: number) => void;
