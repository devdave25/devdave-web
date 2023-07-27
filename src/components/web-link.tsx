import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";

export const WebLink: React.FC<{
  url: string;
  favicon?: string;
  local?: boolean;
  className?: string;
  onRemoveLink?: (url: string) => void;
}> = ({ url, favicon, local, className, onRemoveLink }) => {
  const { origin, host } = new URL(url);

  return (
    <Link
      href={url}
      className={classNames(
        "group relative flex h-auto w-full cursor-pointer flex-col items-center justify-center gap-2 rounded p-2 hover:bg-container",
        className
      )}
    >
      {local && (
        <button
          className="group/btn absolute right-0 top-0 hidden p-1 group-hover:flex"
          onClick={(e) => {
            e.preventDefault();
            onRemoveLink?.(url);
          }}
        >
          <TrashIcon className="h-4 w-4 group-hover/btn:opacity-50" />
        </button>
      )}
      <Image
        className="h-6 w-6 rounded-full group-hover:shadow-md"
        src={favicon ?? `${origin}/favicon.ico`}
        width={20}
        height={20}
        alt={"Icon"}
      />
      <p>{host?.replace("www.", "")}</p>
    </Link>
  );
};
