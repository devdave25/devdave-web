import classNames from "classnames";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={classNames("flex bg-primary text-on-primary-container rounded p-2 overflow-y-auto", className)} onClick={onClick}>
            {children}
        </button>
    );
};
