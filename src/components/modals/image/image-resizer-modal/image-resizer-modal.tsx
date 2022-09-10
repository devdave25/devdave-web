import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./image-resizer-modal.module.scss";

interface ImageResizerModalProps {
  closeModal: () => void;
}
export const ImageResizerModal: React.FC<ImageResizerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <ImageResizerModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ImageResizerModalContainer: React.FC<ImageResizerModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Image Resizer</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
