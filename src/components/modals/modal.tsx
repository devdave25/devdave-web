import classNames from "classnames";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../context/theme";

export interface ModalProps {
  onDismiss: () => void;
  title?: string;
  hideBackground?: boolean;
  className?: string;
  hasCloseIcon?: boolean;
  closeIconClassName?: string;
  disableBackgroundDismiss?: boolean;
  children: React.ReactElement;
}
export const Modal: React.FC<ModalProps> = ({
  onDismiss,
  hideBackground,
  title,
  className,
  hasCloseIcon,
  closeIconClassName,
  disableBackgroundDismiss,
  children,
}) => {
  const { theme } = useTheme();
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
          static: hideBackground,
        }
      )}
      onClick={() => !disableBackgroundDismiss && onDismiss && onDismiss()}
    >
      {!hideBackground && (
        <div className="backdrop-blur-sm absolute top-0 left-0 right-0 bottom-0" />
      )}
      <div
        className={classNames(
          "bg-background text-on-background w-100 min-w-[480px] max-w-screen max-h-screen px-6 pb-4 border-2 border-outline rounded z-50 overflow-auto",
          { dark: theme === "dark" },
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-4 pb-2">
          <div className="flex flex-row items-center">
            <div className="flex-grow">{title && <h4>{title}</h4>}</div>
            {hasCloseIcon && (
              <XMarkIcon
                className={classNames(
                  "cursor-pointer h-[22px] w-[22px] hover:opacity-80",
                  closeIconClassName
                )}
                onClick={onDismiss}
              />
            )}
          </div>
          {title && <div className="border-b-2 border-outline rounded" />}
        </div>

        {children}
      </div>
    </div>,
    el
  );
};
