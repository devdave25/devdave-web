import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./json-viewer-modal.module.scss";

interface JsonViewerModalProps {
  closeModal: () => void;
}
export const JsonViewerModal: React.FC<JsonViewerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <JsonViewerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const JsonViewerModalContainer: React.FC<JsonViewerModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Json viewer</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
