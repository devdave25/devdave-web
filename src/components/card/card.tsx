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
  onClick,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col w-60 h-32 p-4 bg-primary-container rounded border-2 border-outline snap-start text-ellipsis overflow-clip hover:opacity-80",
        {
          "cursor-pointer": clickable,
        }
      )}
      onClick={onClick}
    >
      <h4 className="text-2xl text-on-primary-container">{title}</h4>
      <span className="flex text-on-primary-container grow mt-2 overflow-y-auto">
        {subtitle}
      </span>
    </div>
  );
};
