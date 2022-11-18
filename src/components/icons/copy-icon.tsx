import DocumentDuplicateIcon from "@heroicons/react/24/solid/DocumentDuplicateIcon";
import classNames from "classnames";
import React from "react";

interface CopyIconProps {
  value?: unknown;
  className?: string;
}
export const CopyIcon: React.FC<CopyIconProps> = ({ value, className }) => {
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  return (
    <DocumentDuplicateIcon
      className={classNames("w-4 cursor-pointer", className)}
      onClick={() => {
        if (value && typeof value === "string") {
          copyToClipboard(value);
        }
      }}
    />
  );
};
