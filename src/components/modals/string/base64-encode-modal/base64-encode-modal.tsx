import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./base64-encode-modal.module.scss";

interface Base64EncodeModalProps {
  closeModal: () => void;
}
export const Base64EncodeModal: React.FC<Base64EncodeModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <Base64EncodeModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const Base64EncodeModalContainer: React.FC<Base64EncodeModalProps> = ({
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
