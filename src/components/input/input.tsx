import React from "react";
import classNames from "classnames";
import { v4 } from "uuid";

type IntrinsicInputProps = JSX.IntrinsicElements["input"];
interface InputProps extends IntrinsicInputProps {
  text?: string;
  helper?: string;
  suffix?: string;
  hasError?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  leftReverse?: boolean;
  rightReverse?: boolean;
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
      prefix,
      suffix,
      leftReverse,
      rightReverse,
      ...props
    },
    ref
  ) => {
    const id = props?.id || v4();

    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={id}
          className={classNames(
            "flex flex-col gap-1 text-md mb-0 text-on-surface",
            {
              "text-disabled": props.disabled
            },
            className
          )}
        >
          {text && <p>{text}</p>}
        </label>
        <div
          className={classNames(
            "flex items-center overflow-hidden bg-background text-on-background focus-within:outline-none rounded-md border px-3 py-[10px] text-sm shadow-xs focus-within:ring-4",
            {
              "border-outline caret-primary focus-within:border-primary focus-within:ring-on-primary":
                !hasError,
              "border-error bg-background caret-error focus:ring-on-error":
                hasError,
              "placeholder:text-disabled": props.disabled
            }
          )}
        >
          {leftIcon && (
            <div
              className={classNames("w-4 mr-3 order-2", {
                "order-1": !leftReverse,
                "ordr-2": leftReverse
              })}
            >
              {leftIcon}
            </div>
          )}
          {prefix && (
            <span
              className={classNames("mr-3", {
                "order-2": !leftReverse,
                "ordr-1": leftReverse
              })}
            >
              {prefix}
            </span>
          )}
          <input
            className="flex grow border-none outline-none bg-transparent p-0 order-3"
            ref={ref}
            id={id}
            {...props}
          />
          {suffix && (
            <span
              className={classNames("ml-3", {
                "order-4": !rightReverse,
                "order-5": rightReverse
              })}
            >
              {suffix}
            </span>
          )}
          {rightIcon && (
            <div
              className={classNames("w-4 ml-3", {
                "order-5": !rightReverse,
                "order-4": rightReverse
              })}
            >
              {rightIcon}
            </div>
          )}
        </div>
        {helper && (
          <p
            className={classNames("mb-0 mt-1 text-sm", {
              "text-surface-variant": !hasError && !props.disabled,
              "text-error": hasError
            })}
          >
            {helper}
          </p>
        )}
      </div>
    );
  }
);
