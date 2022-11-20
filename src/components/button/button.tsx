import classNames from "classnames";
import React from "react";

interface ButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  raised?: boolean;
  hideBackground?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  text,
  primary,
  secondary,
  tertiary,
  outline,
  raised,
  hideBackground,
  disabled,
  className,
  onClick
}) => {
  return (
    <button
      className={classNames(
        "flex items-center justify-center overflow-y-auto rounded py-1 px-2 hover:opacity-80 active:opacity-80",
        outline
          ? {
              ["border-2 border-outline"]: outline,
              ["text-primary"]: primary,
              ["text-secondary"]: secondary,
              ["text-tertiary"]: tertiary,
              ["border-disabled text-disabled"]: disabled
            }
          : hideBackground
          ? {
              ["text-primary"]: primary,
              ["text-secondary"]: secondary,
              ["text-tertiary"]: tertiary,
              ["text-disabled"]: disabled
            }
          : {
              ["bg-primary text-on-primary"]: primary,
              ["bg-secondary text-on-secondary"]: secondary,
              ["bg-tertiary text-on-tertiary"]: tertiary,
              ["bg-disabled text-disabled"]: disabled
            },
        {
          ["shadow-2 hover:shadow-3 active:shadow-3"]: raised
        },
        {
          ["text-on-surface"]: !primary && !secondary && !tertiary && !disabled
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="flex text-sm">{text}</p>
    </button>
  );
};
