import classNames from "classnames";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from "./modal.module.scss";

export interface ModalProps {
  show: boolean;
  onDismiss: () => void;
  hideBackground?: boolean;
  className?: string;
  hasCloseIcon?: boolean;
  closeIconClassName?: string;
  disableBackgroundDismiss?: boolean;
  children: React.ReactElement;
}
export const Modal: React.FC<ModalProps> = ({
  show,
  onDismiss,
  hideBackground,
  className,
  hasCloseIcon,
  closeIconClassName,
  disableBackgroundDismiss,
  children,
}) => {
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
    show ? (
      <div
        className={classNames("flex align-middle ", {
          [styles["modal--no-bg"]]: hideBackground,
        })}
        onClick={() => !disableBackgroundDismiss && onDismiss && onDismiss()}
      >
        {!hideBackground && <div className={styles["background"]} />}
        <div
          className={classNames(styles["content"], className)}
          onClick={(e) => e.stopPropagation()}
        >
          {hasCloseIcon && (
            <XMarkIcon
              className={classNames(styles["close"], closeIconClassName)}
              onClick={onDismiss}
            />
          )}
          {children}
        </div>
      </div>
    ) : null,
    el
  );
};
