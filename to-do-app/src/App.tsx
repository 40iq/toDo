import { type FC } from "react";
import { Header } from "./components/(layout)/Header.tsx";
import { Footer } from "./components/(layout)/Footer.tsx";
import { Main } from "./components/(layout)/Main.tsx";
import "./index.css";

export const App: FC = () => {
  return (
    <div className="flex flex-col justify-between h-dvh">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
