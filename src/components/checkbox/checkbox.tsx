import classNames from "classnames";
import React from "react";
import { v4 } from "uuid";

interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text?: string;
  hasError?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...props }, ref) => {
    const { className, text, hasError, disabled } = props;
    const id = props?.id || v4();

    return (
      <div
        className={classNames(
          "m-0 flex flex-row items-center gap-2 text-md text-on-surface",
          {
            "text-error": hasError,
            "text-disabled": disabled
          },
          className
        )}
      >
        <input
          type="checkbox"
          className={classNames("h-3 w-3 rounded-sm checked:accent-primary", {
            "bg-disabled": disabled
          })}
          ref={ref}
          {...props}
        />
        <label htmlFor={id}>
          {children}
          {text && <p>{text}</p>}
        </label>
      </div>
    );
  }
);
