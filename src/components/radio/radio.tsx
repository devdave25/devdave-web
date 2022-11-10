import classNames from "classnames";
import React from "react";

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

    return (
      <label
        htmlFor={props.id}
        className={classNames(
          "m-0 flex flex-row gap-2 items-center text-md text-on-surface",
          {
            "text-error": hasError,
            "text-disabled": disabled,
          },
          className
        )}
      >
        <input
          type="radio"
          className={classNames("accent-primary h-4 w-4", {
            "bg-disable": disabled,
          })}
          ref={ref}
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
