import type { FC } from "react";

type Props = {
  id?: number;
  text?: string;
};

export const Footer: FC<Props> = () => {
  return (
    <footer className="flex justify-between bg-red-600">
      <a href="https://github.com/40iq" target="_blank" rel="noopener noreferrer">
        My GitHub
      </a>
      <p>August 2025</p>
    </footer>
  );
};
