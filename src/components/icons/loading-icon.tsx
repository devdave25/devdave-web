import classNames from "classnames";
import React from "react";
import { v4 } from "uuid";

interface LoadingIconProps
  extends React.DetailedHTMLProps<
    React.SVGAttributes<SVGSVGElement>,
    SVGElement
  > {
  className?: string;
}

export const LoadingIcon = React.forwardRef<SVGSVGElement, LoadingIconProps>(
  ({ className, ...props }, ref) => {
    const id = props?.id || v4();

    return (
      <svg
        className={classNames(
          "animate-spin -ml-1 mr-3 h-5 w-5 text-on-surface",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        id={id}
        {...props}
        ref={ref}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  }
);
