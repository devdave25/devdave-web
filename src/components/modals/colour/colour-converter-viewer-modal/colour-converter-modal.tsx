import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./colour-converter-modal.module.scss";

interface ColourConverterModalProps {
  closeModal: () => void;
}
export const ColourConverterModal: React.FC<ColourConverterModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <ColourConverterModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ColourConverterModalContainer: React.FC<ColourConverterModalProps> =
  ({ closeModal }) => {
    return (
      <div className={styles.container}>
        <div className={styles.header}>Colour converter</div>
        <p>Function here</p>
        <div className="flex justify-end mt-3">
          <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
        </div>
      </div>
    );
  };
