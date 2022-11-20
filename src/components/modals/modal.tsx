import classNames from "classnames";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../context/theme";
import { ExpandIcon } from "../icons/expand-icon";

export interface ModalProps {
  onDismiss: () => void;
  title?: string;
  hideBackground?: boolean;
  className?: string;
  iconClassName?: string;
  hasCloseIcon?: boolean;
  disableBackgroundDismiss?: boolean;
  allowFullscreen?: boolean;
  defaultFullscreen?: boolean;
  forceFullscreen?: boolean;
  children: React.ReactElement;
}
export const Modal: React.FC<ModalProps> = ({
  onDismiss,
  hideBackground,
  title,
  className,
  iconClassName,
  hasCloseIcon,
  disableBackgroundDismiss,
  allowFullscreen,
  defaultFullscreen,
  forceFullscreen,
  children
}) => {
  const { theme } = useTheme();
  const [fullscreen, setFullscreen] = React.useState(
    (allowFullscreen && defaultFullscreen) || false
  );
  const hasHeader = title || allowFullscreen || hasCloseIcon;
  const portalElement = document.querySelector("#portal");
  const el = document.createElement("div");

  useEffect(() => {
    if (!portalElement) {
      return;
    }

    portalElement.appendChild(el);

    return () => {
      portalElement.removeChild(el);
    };
  }, [portalElement, el]);

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

  if (!el) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={classNames(
        "flex align-middle justify-center items-center overflow-hidden fixed top-0 left-0 right-0 bottom-0",
        {
          static: hideBackground
        }
      )}
      onClick={() => !disableBackgroundDismiss && onDismiss && onDismiss()}
    >
      {!hideBackground && (
        <div className="backdrop-blur-sm absolute top-0 left-0 right-0 bottom-0" />
      )}
      <div
        className={classNames(
          "flex flex-col bg-background text-on-background min-w-[480px] max-w-screen max-h-screen py-4 px-6 z-50 overflow-auto",
          { dark: theme === "dark" },
          {
            "w-screen h-screen": forceFullscreen || fullscreen,
            "border-2 border-outline rounded": !forceFullscreen && !fullscreen
          },
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {hasHeader && (
          <div className="pb-2">
            <div className="flex flex-row items-center">
              <div className="flex-grow">{title && <h4>{title}</h4>}</div>
              <div className="flex flex-row gap-1 items-center">
                {allowFullscreen && (
                  <ExpandIcon
                    className={classNames("h-[19px] w-[19px]", iconClassName)}
                    initialValue={fullscreen}
                    onChange={(expanded) => setFullscreen(expanded)}
                  />
                )}
                {hasCloseIcon && (
                  <XMarkIcon
                    className={classNames(
                      "cursor-pointer h-[22px] w-[22px] hover:opacity-80",
                      iconClassName
                    )}
                    onClick={onDismiss}
                  />
                )}
              </div>
            </div>
            {title && <div className="border-b-2 border-outline rounded" />}
          </div>
        )}

        <div className="flex flex-grow">{children}</div>
      </div>
    </div>,
    el
  );
};
