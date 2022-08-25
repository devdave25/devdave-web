import classNames from "classnames";
import React from "react";

interface PillProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}
export const Pill: React.FC<PillProps> = ({ text, selected, onClick }) => {
  return (
    <div
      className={classNames(
        "w-fit p-2 rounded-full border-2 border-cyan-900 cursor-pointer",
        {
          "bg-cyan-300": selected,
        }
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
