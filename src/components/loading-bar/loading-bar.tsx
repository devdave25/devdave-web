import React from "react";
import classNames from "classnames";

interface LoadingBarProps {
  loading?: boolean;
  progress?: number;
  indeterminate?: boolean;
  backgroundClassName?: string;
  barClassName?: string;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({
  loading,
  progress,
  indeterminate,
  backgroundClassName,
  barClassName
}) => {
  if (!loading) {
    return null;
  }

  return (
    <div
      className={classNames(
        "h-2 w-full rounded-full bg-tertiary",
        backgroundClassName
      )}
    >
      <div
        className={classNames(
          "h-full rounded-full bg-on-tertiary",
          barClassName
        )}
        style={{
          width: `${
            !progress || progress < 0 ? 0 : progress > 100 ? 100 : progress
          }%`
        }}
      />
    </div>
  );
};
