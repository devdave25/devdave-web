import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./colour-generator-modal.module.scss";

interface ColourWheelModalProps {
  closeModal: () => void;
}
export const ColourGeneratorModal: React.FC<ColourWheelModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <ColourWheelModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ColourWheelModalContainer: React.FC<ColourWheelModalProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Colour Wheel</div>
      <p>Function here</p>
      <div className="flex justify-end mt-3">
        <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
      </div>
    </div>
  );
};
