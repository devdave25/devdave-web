import classNames from "classnames";
import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  clickable?: boolean;
  onClick: () => void;
}
export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  clickable,
  onClick
}) => {
  return (
    <div
      className={classNames(
        "flex h-32 w-60 snap-start flex-col overflow-clip text-ellipsis rounded border-2 border-outline bg-primary-container p-4 hover:opacity-80",
        {
          "cursor-pointer": clickable
        }
      )}
      onClick={onClick}
    >
      <h4 className="text-2xl text-on-primary-container">{title}</h4>
      <span className="mt-2 flex grow overflow-y-auto text-on-primary-container">
        {subtitle}
      </span>
    </div>
  );
};
