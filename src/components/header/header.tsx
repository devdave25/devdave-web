import React from "react";
import { useTheme } from "../../context/theme";

export const Header: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex flex-row p-4">
      <h4
        className="flex text-primary text-5xl cursor-pointer hover:opacity-80"
        onClick={() => toggleTheme()}
      >
        DevDave
      </h4>
      <div className="grow cursor-default"></div>
    </div>
  );
};
