import React from "react";
import classNames from "classnames";

interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
  return (
    <div className={classNames("cursor-pointer rounded-full px-2", {
      "bg-surface": active,
      "hover:bg-surface opacity-60": !active,
    })}
      onClick={onClick}>
      <h2>{label}</h2>
    </div>
  );
};

