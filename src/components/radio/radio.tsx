import classNames from "classnames";
import React from "react";
import { v4 } from "uuid";

interface RadioProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text?: string;
  hasError?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ children, ...props }, ref) => {
    const { className, text, hasError, disabled } = props;
    const id = props?.id || v4();

    return (
      <label
        htmlFor={id}
        className={classNames(
          "m-0 flex flex-row gap-2 items-center text-md text-on-surface",
          {
            "text-error": hasError,
            "text-disabled": disabled
          },
          className
        )}
      >
        <input
          type="radio"
          className={classNames("accent-primary h-4 w-4", {
            "bg-disable": disabled
          })}
          ref={ref}
          id={id}
          {...props}
        />
        <div>
          {children}
          {text && <p>{text}</p>}
        </div>
      </label>
    );
  }
);
