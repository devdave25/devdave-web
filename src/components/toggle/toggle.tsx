import classNames from "classnames";
import React from "react";
import { v4 } from "uuid";

import styles from "./toggle.module.scss";

interface ToggleProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  rightText?: string;
  leftText?: string;
  hasError?: boolean;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ rightText, leftText, hasError, children, ...props }, ref) => {
    const { checked, defaultChecked, className, disabled } = props;
    const id = props?.id || v4();

    const [toggled, setToggled] = React.useState(defaultChecked || checked);

    return (
      <label
        htmlFor={id}
        className={classNames(
          "m-0 flex flex-row items-center gap-2 text-md text-on-surface",
          {
            "text-error": hasError,
            "text-disabled": disabled
          },
          className
        )}
      >
        {leftText && <p>{leftText}</p>}
        <div className={"relative mt-1 flex cursor-pointer"}>
          <div
            className={classNames(styles.toggle, {
              ["bg-surface-variant"]: !(leftText && rightText),
              ["bg-primary"]: leftText && rightText,
              [styles.checked]: toggled,
              [styles.disabled]: disabled
            })}
          ></div>
          <input
            type="checkbox"
            className={"sr-only"}
            {...props}
            ref={ref}
            id={id}
            onChange={(e) => {
              setToggled(e.target.checked);
              props.onChange?.(e);
            }}
            checked={toggled}
          />
        </div>
        <div>
          {children}
          {rightText && <p>{rightText}</p>}
        </div>
      </label>
    );
  }
);
