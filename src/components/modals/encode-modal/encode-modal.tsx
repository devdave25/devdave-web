import React from "react";
import { Button } from "../../button/button";
import { Modal } from "../modal";

import styles from "./encode-modal.module.scss";

interface EncodeModalProps {
  closeModal: () => void;
}
export const EncodeModal: React.FC<EncodeModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <EncodeModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const EncodeModalContainer: React.FC<EncodeModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Base64 Encode</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" children={
          <>
            Cancel
          </>
        } />
      </div>
    </div>
  );
};
