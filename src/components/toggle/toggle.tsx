import classNames from "classnames";
import React from "react";

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
  ({ children, ...props }, ref) => {
    const {
      checked,
      defaultChecked,
      className,
      leftText,
      rightText,
      hasError,
      disabled,
    } = props;

    const [toggled, setToggled] = React.useState(defaultChecked || checked);

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
        {leftText && <p>{leftText}</p>}
        <div className={"relative mt-1 flex cursor-pointer"}>
          <div
            className={classNames(styles.toggle, {
              [styles.checked]: toggled,
              [styles.disabled]: disabled,
            })}
          ></div>
          <input
            type="checkbox"
            className={"sr-only"}
            {...props}
            ref={ref}
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
