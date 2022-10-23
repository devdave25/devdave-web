import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./jwt-modal.module.scss";

interface JwtModalProps {
  closeModal: () => void;
}
export const JwtModal: React.FC<JwtModalProps> = ({ closeModal }) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <JwtModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const JwtModalContainer: React.FC<JwtModalProps> = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Jwt</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
