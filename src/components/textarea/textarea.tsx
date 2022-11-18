import React from "react";
import classNames from "classnames";
import { v4 } from "uuid";

type IntrinsicTextAreaProps = JSX.IntrinsicElements["textarea"];
interface TextAreaProps extends IntrinsicTextAreaProps {
  text?: string;
  hasError?: boolean;
  iconActions?: React.ReactNode[];
  textareaClassName?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, textareaClassName, text, hasError, iconActions, ...props },
    ref
  ) => {
    const id = props?.id || v4();

    return (
      <div className={classNames("flex flex-col gap-1", className)}>
        <div className="flex">
          {props.title && <label htmlFor={id}>{props.title}</label>}
          <div className="flex flex-grow justify-end gap-1">{iconActions}</div>
        </div>
        <textarea
          className={classNames(
            "w-full bg-background text-on-background focus:outline-none rounded-md border px-3 py-[10px] text-sm shadow-xs focus:ring-4",
            {
              "border-outline caret-primary focus:border-primary focus:ring-on-primary":
                !hasError,
              "border-error bg-background caret-error focus:ring-on-error":
                hasError,
              "placeholder:text-disabled": props.disabled
            },
            textareaClassName
          )}
          ref={ref}
          id={id}
          {...props}
        />
      </div>
    );
  }
);
