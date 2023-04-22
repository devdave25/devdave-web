import React, { useEffect } from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface ModalProps {
    onDismiss: () => void;
    className?: string;
    hideClose?: boolean;
    isCentered?: boolean;
    children?: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({
    onDismiss,
    className,
    hideClose,
    isCentered,
    children
}) => {
    const containerEl = document.getElementById("portal");

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onDismiss && onDismiss();
            }
        };

        document.querySelector("body")?.classList.add("overflow-hidden");
        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.querySelector("body")?.classList.remove("overflow-hidden");
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [onDismiss]);

    if (!containerEl) {
        return null;
    }

    return ReactDOM.createPortal(
        <div
            className={classNames("fixed pt-24 bottom-0 right-0 left-0 top-0 flex flex-col items-center overflow-auto", {
                ["text-center"]: isCentered,
            })}
            onClick={() => onDismiss()}
        >
            <div className={"absolute bottom-0 right-0 left-0 top-0 inline-block stroke-neutral-400 backdrop-blur-sm"} />
            <div
                className={classNames("relative z-50 flex flex-col border-solid bg-zinc-800 border rounded-xl p-6", className)}
                onClick={(e) => e.stopPropagation()}
            >
                {!hideClose && <XMarkIcon className="absolute top-2 right-2 w-4 cursor-pointer" onClick={onDismiss} />}
                {children}
            </div>
        </div >,
        containerEl
    );
}