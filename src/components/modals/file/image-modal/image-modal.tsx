import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./image-modal.module.scss";

interface ImageModalProps {
  closeModal: () => void;
}
export const ImageModal: React.FC<ImageModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <ImageModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ImageModalContainer: React.FC<ImageModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Image</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
