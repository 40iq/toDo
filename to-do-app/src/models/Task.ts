export type Task = {
  id: string;
  title: string;
  finished: boolean;
};

export type Tasks = Task[];

export type AddTask = (text: string) => void;

export type DeleteTask = (id: string) => void;

export type EditTask = (id: string, text: string) => void;

export type FinishTask = (id: string) => void;

export type UnfinishTask = (id: string) => void;
