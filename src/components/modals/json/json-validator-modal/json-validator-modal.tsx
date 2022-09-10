import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./json-validator-modal.module.scss";

interface JsonValidatorModalProps {
  closeModal: () => void;
}
export const JsonValidatorModal: React.FC<JsonValidatorModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <JsonValidatorModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const JsonValidatorModalContainer: React.FC<JsonValidatorModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Json Validator</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
