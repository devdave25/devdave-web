import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./pdf-combiner-modal.module.scss";

interface PdfCombinerModalProps {
  closeModal: () => void;
}
export const PdfCombinerModal: React.FC<PdfCombinerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <PdfCombinerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const PdfCombinerModalContainer: React.FC<PdfCombinerModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>PDF Combiner</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
