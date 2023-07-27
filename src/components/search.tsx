import React from "react";
import classNames from "classnames";
import {
  ArrowRightCircleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { isUrl } from "@/utils/url";

interface SearchProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onAddLink?: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({
  placeholder,
  autoFocus,
  className,
  inputClassName,
  onChange,
  onSubmit,
  onAddLink,
}) => {
  const inputElement = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputElement.current && autoFocus) {
      inputElement.current.focus();
    }
  }, [autoFocus]);

  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    onChange?.(value);
  }, [onChange, value]);

  const isValidUrl = React.useMemo(() => isUrl(value), [value]);

  return (
    <div
      className={classNames(
        "flex appearance-none flex-row items-center gap-4 rounded-full bg-container px-4 py-2 shadow-md hover:shadow-lg",
        className
      )}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          onSubmit?.(value);
        }
      }}
    >
      <MagnifyingGlassIcon className="h-5 w-5" />
      <input
        ref={inputElement}
        type="text"
        className={classNames(
          "w-full border-none bg-transparent p-0 focus:ring-0",
          inputClassName
        )}
        autoFocus
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-row">
        <ArrowRightCircleIcon
          className={classNames("h-5 w-5", {
            "cursor-pointer": value.length,
          })}
          onClick={() => onSubmit?.(value)}
        />
        <PlusCircleIcon
          className={classNames(
            "h-5 cursor-pointer transition-all duration-300 ease-in-out",
            {
              "ml-2 w-5": isValidUrl,
              "w-0": !isValidUrl,
            }
          )}
          onClick={() => {
            onAddLink?.(value);
            setValue("");
          }}
        />
      </div>
    </div>
  );
};
