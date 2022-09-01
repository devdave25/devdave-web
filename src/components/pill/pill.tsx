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
        "w-fit p-2 rounded-xl border-2 text-on-surface-variant border-outline cursor-pointer",
        {
          "bg-primary text-on-primary": selected,
        }
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
