import { Navbar } from "@/components";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Root: FC = () => {
  return (
    <main
      className="
        h-full
        bg-black
        text-white
      "
    >
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
