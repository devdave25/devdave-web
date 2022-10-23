import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./timestamp-modal.module.scss";

interface TimestampModalProps {
  closeModal: () => void;
}
export const TimestampModal: React.FC<TimestampModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <TimestampModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const TimestampModalContainer: React.FC<TimestampModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Timestamp</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
