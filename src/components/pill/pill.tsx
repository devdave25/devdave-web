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
        "w-fit cursor-pointer rounded-xl border-2 border-outline p-2 hover:opacity-80",
        {
          "bg-primary text-on-primary": selected,
          "text-on-surface-variant": !selected
        }
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
