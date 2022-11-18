import DocumentArrowDownIcon from "@heroicons/react/24/solid/DocumentArrowDownIcon";
import classNames from "classnames";
import React from "react";

interface PasteIconProps {
  onClick: (text: string) => void;
  className?: string;
}
export const PasteIcon: React.FC<PasteIconProps> = ({ onClick, className }) => {
  const readClipboard = async () => await navigator.clipboard.readText();

  return (
    <DocumentArrowDownIcon
      className={classNames("w-4 cursor-pointer", className)}
      onClick={async () => {
        const text = await readClipboard();
        onClick(text);
      }}
    />
  );
};
