import React from "react";
// import { Modal } from "../../../containers/modal/modal";

import styles from "./encode-modal.module.scss";

interface EncodeModalProps {
  closeModal: () => void;
}
export const EncodeModal: React.FC<EncodeModalProps> = ({ closeModal }) => {
  return (
    // <Modal onDismiss={closeModal} className={styles["modal"]}>
    <EncodeModalContainer closeModal={closeModal} />
    // </Modal>
  );
};

export const EncodeModalContainer: React.FC<EncodeModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Encode</div>
      <p>Encode stuff</p>
      <div className="flex justify-content-end w-100 mt-3">
        <button onClick={closeModal} className="mr-3">
          Cancel
        </button>
      </div>
    </div>
  );
};
