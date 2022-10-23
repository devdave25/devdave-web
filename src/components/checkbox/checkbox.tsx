import classNames from "classnames";
import React from "react";

interface ButtonProps {
  checked?: boolean;
  text?: string;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  className?: string;
}
export const Checkbox: React.FC<ButtonProps> = ({
  checked,
  text,
  onChange,
  disabled,
  className,
}) => {
  return (
    <div
      onClick={() => onChange(false)}
      className={classNames({ disabled: "disabled" })}
    >
      {text}
    </div>
  );
};
