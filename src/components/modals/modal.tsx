import classNames from "classnames";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from "./modal.module.scss";
import { useTheme } from "../../context/theme";

export interface ModalProps {
  onDismiss: () => void;
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
      className={classNames("flex align-middle", styles["modal"], {
        [styles["modal--no-bg"]]: hideBackground,
      })}
      onClick={() => !disableBackgroundDismiss && onDismiss && onDismiss()}
    >
      {!hideBackground && <div className={styles["background"]} />}
      <div
        className={classNames("bg-background text-on-background", { dark: theme === "dark" }, styles["content"], className)}
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
    </div>,
    el
  );
};
