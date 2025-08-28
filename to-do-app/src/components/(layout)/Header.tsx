import type { FC } from "react";

type Props = {
  id?: number;
  text?: string;
};

export const Header: FC<Props> = () => {
  return (
    <header className="bg-slate-200">
      <h1>ToDo list</h1>
    </header>
  );
};
