import classNames from "classnames";
import React from "react";

interface ButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  className?: string;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  text,
  primary,
  secondary,
  tertiary,
  className,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "flex rounded p-2 overflow-y-auto",
        {
          ["bg-primary text-on-primary"]: primary,
          ["bg-secondary text-on-secondary"]: secondary,
          ["bg-tertiary text-on-tertiary"]: tertiary,
        },
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
