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
            "mb-0 flex flex-col gap-1 text-md text-on-surface",
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
            "shadow-xs flex items-center overflow-hidden rounded-md border bg-background px-3 py-[10px] text-sm text-on-background focus-within:outline-none focus-within:ring-4",
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
              className={classNames("order-2 mr-3 w-4", {
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
            className="order-3 flex grow border-none bg-transparent p-0 outline-none"
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
              className={classNames("ml-3 w-4", {
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
