import React from "react";
import { Button } from "../../../button/button";
import { Modal } from "../../modal";

import styles from "./colour-generator-modal.module.scss";

interface ColourGeneratorModalProps {
  closeModal: () => void;
}
export const ColourGeneratorModal: React.FC<ColourGeneratorModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal onDismiss={closeModal} className={styles["modal"]} hasCloseIcon>
      <ColourGeneratorModalContainer closeModal={closeModal} />
    </Modal>
  );
};

export const ColourGeneratorModalContainer: React.FC<ColourGeneratorModalProps> =
  ({ closeModal }) => {
    return (
      <div className={styles.container}>
        <div className={styles.header}>Colour Generator</div>
        <p>Function here</p>
        <div className="flex justify-end mt-3">
          <Button onClick={closeModal} className="mr-3" text={"Cancel"} />
        </div>
      </div>
    );
  };
