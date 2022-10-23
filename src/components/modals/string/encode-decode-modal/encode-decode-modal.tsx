import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./encode-decode-modal.module.scss";

interface EncodeDecodeModalProps {
  closeModal: () => void;
}
export const EncodeDecodeModal: React.FC<EncodeDecodeModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <EncodeDecodeModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const EncodeDecodeModalContainer: React.FC<EncodeDecodeModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Encode / Decode</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
