import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./date-maths-modal.module.scss";

interface DateMathsModalProps {
  closeModal: () => void;
}
export const DateMathsModal: React.FC<DateMathsModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <DateMathsModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const DateMathsModalContainer: React.FC<DateMathsModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Date Maths</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
