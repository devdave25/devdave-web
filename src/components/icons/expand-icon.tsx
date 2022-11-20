import ArrowsPointingInIcon from "@heroicons/react/24/solid/ArrowsPointingInIcon";
import ArrowsPointingOutIcon from "@heroicons/react/24/solid/ArrowsPointingOutIcon";
import classNames from "classnames";
import React from "react";

interface ExpandIconProps {
  initialValue: boolean;
  className?: string;
  onChange: (value: boolean) => void;
}
export const ExpandIcon: React.FC<ExpandIconProps> = ({
  initialValue = false,
  onChange,
  className
}) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(initialValue);

  React.useEffect(() => {
    onChange(isExpanded);
  }, [isExpanded]);

  if (isExpanded) {
    return (
      <ArrowsPointingInIcon
        className={classNames("cursor-pointer hover:opacity-80", className)}
        onClick={() => setIsExpanded(false)}
      />
    );
  }

  return (
    <ArrowsPointingOutIcon
      className={classNames(
        "h-[22px] w-[22px] cursor-pointer hover:opacity-80",
        className
      )}
      onClick={() => setIsExpanded(true)}
    />
  );
};
