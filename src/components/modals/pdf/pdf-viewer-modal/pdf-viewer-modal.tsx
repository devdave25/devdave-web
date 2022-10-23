import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./pdf-viewer-modal.module.scss";

interface PdfViewerModalProps {
  closeModal: () => void;
}
export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <PdfViewerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const PdfViewerModalContainer: React.FC<PdfViewerModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>PDF Viewer</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
