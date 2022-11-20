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
        "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden align-middle",
        {
          static: hideBackground
        }
      )}
      onClick={() => !disableBackgroundDismiss && onDismiss && onDismiss()}
    >
      {!hideBackground && (
        <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm" />
      )}
      <div
        className={classNames(
          "max-w-screen z-50 flex max-h-screen min-w-[480px] flex-col overflow-auto bg-background py-4 px-6 text-on-background",
          { dark: theme === "dark" },
          {
            "h-screen w-screen": forceFullscreen || fullscreen,
            "rounded border-2 border-outline": !forceFullscreen && !fullscreen
          },
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {hasHeader && (
          <div className="pb-2">
            <div className="flex flex-row items-center">
              <div className="flex-grow">{title && <h4>{title}</h4>}</div>
              <div className="flex flex-row items-center gap-1">
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
                      "h-[22px] w-[22px] cursor-pointer hover:opacity-80",
                      iconClassName
                    )}
                    onClick={onDismiss}
                  />
                )}
              </div>
            </div>
            {title && <div className="rounded border-b-2 border-outline" />}
          </div>
        )}

        <div className="flex flex-grow">{children}</div>
      </div>
    </div>,
    el
  );
};
