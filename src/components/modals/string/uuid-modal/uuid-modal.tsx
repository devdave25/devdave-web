import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./uuid-modal.module.scss";

interface UuidModalProps {
  closeModal: () => void;
}
export const UuidModal: React.FC<UuidModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <UuidModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const UuidModalContainer: React.FC<UuidModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>UUID</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
