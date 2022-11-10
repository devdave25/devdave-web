import React from "react";
import classNames from "classnames";

type IntrinsicInputProps = JSX.IntrinsicElements["input"];
interface InputProps extends IntrinsicInputProps {
  text?: string;
  helper?: string;
  hasError?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      className,
      text,
      helper,
      hasError,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <label
        htmlFor={props.id}
        className={classNames(
          "flex flex-col gap-1 text-md mb-0 text-on-surface",
          {
            "text-disabled": props.disabled,
          },
          className
        )}
      >
        {text && <p>{text}</p>}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className={classNames("absolute w-4 left-3")}>{leftIcon}</div>
          )}
          <input
            type={type}
            className={classNames(
              "w-full bg-background text-on-background focus:outline-none rounded-md border px-3 py-[10px] text-sm shadow-xs focus:ring-4",
              {
                "border-outline caret-primary focus:border-primary focus:ring-on-primary":
                  !hasError,
                "border-error bg-background caret-error focus:ring-on-error":
                  hasError,
                "placeholder:text-disabled": props.disabled,
                "pl-9": leftIcon,
                "pr-9": rightIcon,
              },
              className
            )}
            ref={ref}
            id={props.id}
            {...props}
          />
          {rightIcon && <div className="absolute w-4 right-3">{rightIcon}</div>}
        </div>
        {helper && (
          <p
            className={classNames("mb-0 mt-1 text-sm", {
              "text-surface-variant": !hasError && !props.disabled,
              "text-error": hasError,
            })}
          >
            {helper}
          </p>
        )}
      </label>
    );
  }
);
