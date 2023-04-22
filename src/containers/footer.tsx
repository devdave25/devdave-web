import React from "react";
import classNames from "classnames";

interface FooterProps {
    className?: string;
}
export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={classNames("flex flex-col gap-4 items-end px-2", className)}>
            <span className="text-xs italic">
                Made by David
            </span>
        </div>
    );
};
