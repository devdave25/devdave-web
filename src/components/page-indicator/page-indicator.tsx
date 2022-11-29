import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React from "react";
import { useKeyPress } from "../../hooks/use-key-press";

export const PageIndicator: React.FC<{
  initial?: number;
  total?: number;
  disableKeyPress?: boolean;
  disabled?: boolean;
  className?: string;
  backgroundClassName?: string;
  onChange?: (page: number) => void;
}> = ({
  initial = 1,
  total = 1,
  disableKeyPress,
  disabled,
  className,
  backgroundClassName = "bg-surface text-on-surface",
  onChange
}) => {
  const [page, setPage] = React.useState(initial);

  const leftPress = useKeyPress("ArrowLeft");
  const rightPress = useKeyPress("ArrowRight");

  React.useEffect(() => {
    if (!disableKeyPress && leftPress) {
      prev();
    }
  }, [leftPress]);

  React.useEffect(() => {
    if (!disableKeyPress && rightPress) {
      next();
    }
  }, [rightPress]);

  React.useEffect(() => {
    onChange && onChange(page);
  }, [page]);

  const prev = () => {
    if (!disabled && page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (!disabled && page < total) {
      setPage(page + 1);
    }
  };

  return (
    <div
      className={classNames(
        "flex flex-row items-center gap-1 p-2",
        backgroundClassName,
        className
      )}
    >
      {!disabled && (
        <ChevronLeftIcon
          className="h-[22px] w-[22px] cursor-pointer hover:opacity-80"
          onClick={prev}
        />
      )}
      <p>{page}</p>
      <div className="mx-2 h-4 w-[2px] bg-on-surface" />
      <p>{total}</p>
      {!disabled && (
        <ChevronRightIcon
          className="h-[22px] w-[22px] cursor-pointer hover:opacity-80"
          onClick={next}
        />
      )}
    </div>
  );
};
